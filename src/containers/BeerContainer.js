import React from "react";
import BeerList from "../components/BeerList";
import BeerInfo from "../components/BeerInfo";
import Dave from "../components/Dave";
import { useState, useEffect } from "react";

const BeerContainer = () => {
  const [beerList, setBeerList] = useState([]);
  const [selectedBeer, setSelectedBeer] = useState('');
  const [selectedFavourite, setSelectedFavourite] = useState([]);
  // state for favourite beer

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

const handleFavourite = function(beer) {
  // [...selectedFavourite, ]
  const selectedFavouriteCopy = [...selectedFavourite]
  selectedFavouriteCopy.push(beer)
  setSelectedFavourite(selectedFavouriteCopy)
}

  // function to handle select favourite

  return (
    <div>
    <h2>BeerContainer</h2>
    <BeerList beers={beerList} onBeerSelect={onBeerSelect}/>
    {selectedBeer ? <BeerInfo beer={selectedBeer} handleFavourite={handleFavourite}/> : null}
    <Dave selectedFavourite={selectedFavourite} />
    </div>
  )
} 

export default BeerContainer