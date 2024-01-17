import React, {useState} from "react";
import EditPlantForm from "./EditPlantForm";

function PlantCard({id, name, price, image, onToggleSoldOut, onEditPlant}) { 
  const [soldOut, setSoldOut] = useState(false);
  const [isShowEdit, setIsShowEdit] = useState(false);

  const handleToggleSoldOut = () => {
    setSoldOut(!soldOut)
    onToggleSoldOut(id, !soldOut)
  }

  const toggleShowEdit = () => {
    setIsShowEdit(!isShowEdit)
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button className="primary" onClick={handleToggleSoldOut}>{soldOut ? 'In Stock' : 'Sold Out'}</button>
      <button onClick={toggleShowEdit}>{isShowEdit ? 'Close' : 'Edit'}</button>
      {isShowEdit && <EditPlantForm id={id} price={price} onEditPlant={onEditPlant} onFormSubmit={toggleShowEdit}/>}
    </li>
  );
}

export default PlantCard;
