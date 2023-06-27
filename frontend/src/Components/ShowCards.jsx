import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
const ShowCards = () => {

  const [cards, setCards] = useState(null);

  console.log("cards", cards);

  const showData = async () => {
    try {
      const { data } = await axios.get('http://localhost:4000/api/v1/get-product');
      setCards(data.products);

    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    showData();
  }, []);

  const deleteCard = async (id) => {
    await axios.delete(`http://localhost:4000/api/v1/delete-product/${id}`)
    showData();
  }


  
  return (
    <>
      <div className="container">
        <div className="row">
          {/* Render cards based on the `cards` state */}
          {cards && cards.map((card) => (
            <div className="col-md-4 mt-5" key={card._id}>
              <div className="card">
                <img
                  src="https://reactnative.dev/img/logo-og.png"
                  className="card-img-top"
                  alt={`Card ${card.id}`}
                />
                <div className="card-body">
                  <h5 className="card-title">{card.name}</h5>
                  <p className="card-text">{card.price}</p>
                  <p className="card-text">{card.discription}</p>
                  <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button onClick={() => deleteCard(card._id)} type="button" class="btn btn-outline-danger">delete</button>
                    <Link to={`/update/` + card._id}>
                      <button type="button" class="btn btn-outline-primary">Edit</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowCards;
