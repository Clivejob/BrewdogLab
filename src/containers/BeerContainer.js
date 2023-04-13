import React from "react";
import BeerList from "../components/BeerList";
import BeerInfo from "../components/BeerInfo";
import { useState, useEffect } from "react";

const BeerContainer = () => {
  const [beerList, setBeerList] = useState([]);
  const [selectedBeer, setSelectedBeer] = useState('');

  useEffect(() => {
    loadBeers()
  }, [])


  const loadBeers = function(){
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(beerList => {
        setBeerList(beerList)})
}

  const onBeerSelect = function(beer) {
    setSelectedBeer(beer)

  } 

  return (
    <div>
    <h2>BeerContainer</h2>
    <BeerList beers={beerList} onBeerSelect={onBeerSelect}/>
    <BeerInfo beer={selectedBeer}/>
    </div>
  )
} 

export default BeerContainer