import React, {useState} from "react";

function NewPlantForm({onAddPlant}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = e => {
    e.preventDefault()
    const newPlant ={
      name,
      image,
      price
    }
    fetch ("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    onAddPlant(newPlant)
    setName("")
    setImage("")
    setPrice(0)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          placeholder="Plant name" 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="text" 
          value={image} 
          placeholder="Image URL" 
          onChange={(e) => setImage(e.target.value)}
        />
        <input 
          type="number" 
          value={price} 
          step="0.01" 
          placeholder="Price" 
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
