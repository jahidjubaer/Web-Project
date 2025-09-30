import React from "react";
import "./bottle.css";

const Bottle = ({ bottle, handleAddToCard }) => {
  const { name, stock, price, img, shipping } = bottle;
  
  

  return (
    <div className="card">
      <div className="card-img-container">
        <img src={img} alt="" />
      </div>
      <h2>{name}</h2>
      <h3>Price : ${price}</h3>
      <p>Remaining : {stock}</p>
      <p>Sold : {shipping}</p>
      <button
        onClick={() => {
          handleAddToCard(bottle);
        }}
      >
        Add to card
      </button>
    </div>
  );
};

export default Bottle;
