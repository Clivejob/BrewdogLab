import React from "react";

const Dave = (selectedFavourite) => {
    console.log(selectedFavourite)
    const favList = selectedFavourite.map((beer) => {
        console.log(beer)
        return <>beer.name</>
    })

  return ( 
    <>
    <h1>DAVE</h1>
    <h2>{favList}</h2>
    </>
   );
}
 
export default Dave;