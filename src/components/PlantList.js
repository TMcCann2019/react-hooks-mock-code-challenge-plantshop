import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onToggleSoldOut}) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard 
          key={plant.id} 
          name={plant.name} 
          price={plant.price} 
          image={plant.image} 
          onToggleSoldOut={onToggleSoldOut}
        />
      ))}
    </ul>
  );
}

export default PlantList;
