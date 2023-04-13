import React from "react";

const BeerInfo = ({beer, handleFavourite}) => {
  return ( 
    <div>
      <p>Name: {beer.name}</p>
      <p>Description: {beer.description}</p>
      <p>ABV: {beer.abv}%</p>
      <button onClick={handleFavourite}>FAVE ME DADDY</button>
    </div>
   );
}
 
export default BeerInfo;