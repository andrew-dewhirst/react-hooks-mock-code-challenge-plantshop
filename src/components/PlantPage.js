import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
      .then((r) => r.json())
      .then((plantData) => {
        setPlants(plantData)
        });
  },[]);

  function addNewPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  const plantsToDisplay = plants.filter((plant) => plant.name.toUpperCase().includes(searchTerm.toUpperCase()));

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
      <PlantList plants={plantsToDisplay}/>
    </main>
  );
}

export default PlantPage;
