import React from "react";

const Beer = ({beer}) => {
  console.log(beer) 
  return ( 
    <div>
    <li>
    {beer.name}  
    </li>
    </div>
   );
}
 
export default Beer;