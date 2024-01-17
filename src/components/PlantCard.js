import React, {useState} from "react";

function PlantCard({id, name, price, image, onToggleSoldOut}) { 
  const [soldOut, setSoldOut] = useState(false);

  const handleToggleSoldOut = () => {
    setSoldOut(!soldOut)
    onToggleSoldOut(id, !soldOut)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={handleToggleSoldOut}>{soldOut ? 'In Stock' : 'Sold Out'}</button>
    </li>
  );
}

export default PlantCard;
