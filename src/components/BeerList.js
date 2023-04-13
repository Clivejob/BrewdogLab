import React from "react";
import Beer from "./Beer";

const BeerList = ({beers, onBeerSelect}) => {

  const beerItems = beers.map((beer, index) => {
    return <Beer beer={beer} key={index} onBeerSelect={onBeerSelect}/>})

 

  return (
    <div>
    <h3>BeerList</h3>
    <ul>
    {beerItems}
    </ul>
    </div>
  )
}

export default BeerList