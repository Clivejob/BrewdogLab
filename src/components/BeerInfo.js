import React from "react";

const BeerInfo = ({beer}) => {
  return ( 
    <div>
      <p>{beer.name}</p>
      <p>{beer.description}</p>
      <p>{beer.abv}</p>
    </div>
   );
}
 
export default BeerInfo;