import React, { use, useState } from "react";
import Bottle from "../bottle/bottle";
import "./bottles.css";

const Bottles = ({ bottlePromise }) => {
  const bottlesData = use(bottlePromise);
  const [Card, setCard] = useState([]);
  const handleAddToCard = (bottle) => {
    const newBottles = [...Card, bottle];
    setCard(newBottles);
  };

  return (
    <div>
      <h4>MY bottles.. </h4>
      <h5>total bottle : {Card.length}</h5>
      <div className="bottles-container">
        {bottlesData.map((bottle) => (
          <Bottle
            bottle={bottle}
            key={bottle.id}
            handleAddToCard={handleAddToCard}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
