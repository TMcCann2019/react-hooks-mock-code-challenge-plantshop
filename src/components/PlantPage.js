import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(plants => setPlants(plants));
  }, [])

  const handleAddPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  }

  const handleToggleSoldOut = (id, soldOut) => {
    setPlants(plants.map((plant) => (plant.id === id? {...plant, soldOut} : plant)))
  }
  
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search />
      <PlantList plants={plants} onToggleSoldOut={handleToggleSoldOut}/>
    </main>
  );
}

export default PlantPage;
