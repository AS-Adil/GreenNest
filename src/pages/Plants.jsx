import React, { useEffect, useState } from "react";
import PlantCard from "../components/PlantCrd";
import bgImg from '../assets/pattern.png'
import Spinner from "../components/Spinner";

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .finally(()=>setLoading(false))
      
  }, []);

  return (
    <div className="px-2 sm:px-4 lg:px-12 py-12 "
     style={{ backgroundImage: `url(${bgImg})` }}
    >
          <title>GreenNest -Plants</title>

      <h1 className="text-4xl font-bold text-center text-primary mb-10">
        Our Plant Collection
      </h1>

    <div>
    {
      loading ? 
      <div className="w-full h-screen mt-25">
        <Spinner ></Spinner>
      </div>
      :

      <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {plants.map((plant) => <PlantCard key={plant.plantId} plant={plant}></PlantCard>)}
      </div>

    }
    </div>





    </div>
  );
};

export default Plants;
