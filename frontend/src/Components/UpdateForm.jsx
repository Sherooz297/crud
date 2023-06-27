import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

    const UpdateForm = () => {

        //getting the single user data using API and display there data on the form

    const nav = useNavigate() 
    const parms = useParams()
    const id = parms.id

    const [name, setName] = useState("")
    const [discription, setDiscription] = useState("")
    const [price, setPrice] = useState("")
    
    const showData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:4000/api/v1/single-product/${id}`);
            setName(data.products.name)
            setDiscription(data.products.discription)
            setPrice(data.products.price)

        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        showData();
    }, []);

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const carData = {
            name,
            discription,
            price
        }

//here We update the the product using api update-product

        let {data}= await axios.put(`http://localhost:4000/api/v1/update-product/${id}`,carData)
        if (data) {
            nav("/")
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">name</label>
                    <input onChange={e => setName(e.target.value)} value={name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">discription</label>
                    <input onChange={e => setDiscription(e.target.value)} value={discription} type="text" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">price</label>
                    <input onChange={e => setPrice(e.target.value)} value={price} type="text" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default UpdateForm