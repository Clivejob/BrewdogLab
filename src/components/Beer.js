import React from "react";

const Beer = ({beer, onBeerSelect}) => {
  

  const handleClick = function() {
    onBeerSelect(beer)
  }

  return (
    <>
    <li onClick={handleClick}>{beer.name}</li>
    </>
  )
}
 
export default Beer;