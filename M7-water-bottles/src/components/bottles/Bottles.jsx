import React, { use, useEffect, useState } from "react";
import Bottle from "../bottle/bottle";
import "./bottles.css";
import {
  addItemCardLocalStorage,
  getCardLocalStorage,
  handleRemoveLocalStorage,
} from "../utilities/local-storage";
import Cart from "../card/Card";

const Bottles = ({ bottlePromise }) => {
  const bottlesData = use(bottlePromise);
  const [Card, setCard] = useState([]);

  // use effect ;
  useEffect(() => {
    // get the id of card ;
    const cardsID = getCardLocalStorage();

    // console.log(bottlesData);
    // define a empty array if we find ay of object by id , then we push into find card ;
    const findCard = [];
    for (const id of cardsID) {
      const cardBottle = bottlesData.find((bottle) => bottle.id === id);
      if (cardBottle) {
        findCard.push(cardBottle);
      }
    }
    // console.log(findCard);

    // send to the card it will not lose ; when we refresh or do other thing ;
    setCard(findCard);
  }, [bottlesData]);

  // handle the add to card
  const handleAddToCard = (bottle) => {
    const newBottles = [...Card, bottle];
    setCard(newBottles);

    // set the id of each bottle in local storage
    addItemCardLocalStorage(bottle.id);
  };

  // handle remove btn

  const handleRemoveCart = (id) => {
    // new array store the array without where i clicked ;
    const newArray = Card.filter((cardValue) => cardValue.id !== id);
    // console.log(newArray);

    setCard(newArray);
    handleRemoveLocalStorage(id);
  };

  return (
    <div>
      <h4>MY bottles.. </h4>
      <h5>total bottle : {Card.length}</h5>
      <Cart Card={Card} handleRemoveCart={handleRemoveCart}></Cart>
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
