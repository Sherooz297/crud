import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  // hooks that manage the data in the form
  const [name, setName] = useState("")
  const [discription, setDiscription] = useState("")
  const [price, setPrice] = useState("")

  const nav = useNavigate()           //this is a router hook that navigate the page form t home

  const handleSubmit = async (e) => {
    e.preventDefault()
    const carData = {
      name,
      discription,
      price
    }

    // here we add the data in our api using post API

    let { data } = await axios.post(`http://localhost:4000/api/v1/create-product`, carData)
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

export default Form