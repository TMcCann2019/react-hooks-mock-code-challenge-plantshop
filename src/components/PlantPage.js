import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase()))
  
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search filteredPlants={filteredPlants} onSearchChange={handleSearchChange}/>
      <PlantList plants={filteredPlants} onToggleSoldOut={handleToggleSoldOut} />
    </main>
  );
}

export default PlantPage;
