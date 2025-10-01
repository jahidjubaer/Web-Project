import React from "react";
import "./cart.css";

const Cart = ({ Card,handleRemoveCart }) => {
  return (
    <div className="cart-img-container">
      {Card.map((imgData) => (
        <div key={imgData.id}>
          <img className="cart-img" src={imgData.img} alt="" />
          <button onClick={() => handleRemoveCart(imgData.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
