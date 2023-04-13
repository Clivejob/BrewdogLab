import React from "react";
import Beer from "./Beer";

const BeerList = ({beers}) => {

  const beerItems = beers.map((beer, index) => {
    return <Beer beer={beer} key={index} />})

 

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