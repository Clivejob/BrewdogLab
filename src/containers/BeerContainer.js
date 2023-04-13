import React from "react";
import BeerList from "../components/BeerList";
import { useState, useEffect } from "react";

const BeerContainer = () => {
  const [beerList, setBeerList] = useState([]);

  useEffect(() => {
    loadBeers()
  }, [])


  const loadBeers = function(){
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(beerList => {
        setBeerList(beerList)})
}

  return (
    <div>
    <h2>BeerContainer</h2>
    <BeerList beers={beerList}/>
    </div>
  )
} 

export default BeerContainer