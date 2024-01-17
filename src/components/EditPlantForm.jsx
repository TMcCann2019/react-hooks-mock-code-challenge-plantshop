import React, {useState} from 'react'

export default function EditPlantForm({id, price, onEditPlant}) {
    const [inputPrice, setInputPrice] = useState(price)

    const handleSubmit = (e) => {
        e.preventDefault()
        const config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({price: inputPrice})
        }
        fetch(`http://localhost:6001/plants/${id}`, config)
            .then(resp => resp.json())
            .then(onEditPlant)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={inputPrice}
                onChange={e => setInputPrice(parseFloat(e.target.value))}
                type="number"
                step="0.01"
            />
            <button type="submit">Update Price</button>
        </form>
    )
}
