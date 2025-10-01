// 1.get the item from local storage ;
const getCardLocalStorage = () => {
  // we get a stringify value ; need to parse ;
  const stringifyCard = localStorage.getItem("Card");
  if (stringifyCard) {
    const storeCard = JSON.parse(stringifyCard);
    return storeCard;
  } else {
    // if there have no value in card then it will return a empty array ;
    return [];
  }
};

// 3.set the new value to local storage
// need to stringify before add the value  ;
const setItemLocalStorage = (Card) => {
  const stringifyCard = JSON.stringify(Card);
  localStorage.setItem("Card", stringifyCard);
};

// get the array and i just store the id of it ; 
const addItemCardLocalStorage = (id) => {
  const Card = getCardLocalStorage();
  Card.push(id);
  setItemLocalStorage(Card);
};

// handle remove form local storage ; 
const handleRemoveLocalStorage = id => {
  const StoreCard = getCardLocalStorage();
  const remainingCart = StoreCard.filter(cartID => cartID !== id);
  console.log(remainingCart);
  setItemLocalStorage(remainingCart);
}

export { getCardLocalStorage, addItemCardLocalStorage, handleRemoveLocalStorage};
