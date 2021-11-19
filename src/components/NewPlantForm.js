import React, {useState} from "react";

function NewPlantForm({ addNewPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function updatePlantName(event) {
    setName(event.target.value)
  };
  
  function updatePlantImage(event) {
    setImage(event.target.value)
  };

  function updatePlantPrice(event) {
    setPrice(event.target.value)
  };
  
  function handleSubmit(event) {
    event.preventDefault();
    const plantData = {
      name: name,
      image: image,
      price: parseFloat(price),
    };
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    })
      .then((r) => r.json())
      .then((newPlant) => addNewPlant(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={updatePlantName} type="text" name="name" placeholder="Plant name" />
        <input onChange={updatePlantImage} type="text" name="image" placeholder="Image URL" />
        <input onChange={updatePlantPrice} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
