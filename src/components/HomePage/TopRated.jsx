import React, { useEffect, useState } from "react";
import PlantCard from "../../components/PlantCrd";
import leaves from "../../assets/leaves.png";
import Spinner from "../Spinner";

const TopRated = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("/plants.json")
      .then((res) => res.json())
      .then((res) => setPlants(res))
      .finally(() => setLoading(false));
  }, []);

  // console.log(plants);
  const topRated = [...plants].sort((a, b) => b.rating - a.rating).slice(0, 3);
  // console.log(topRated);
  return (
    <div className="w-full px-2 sm:px-4 lg:px-12">
      <div className="flex items-center justify-center flex-col pt-8 pb-14 gap-0.5">
        <img src={leaves} className="w-9" alt="" />
        <h1 className="text-4xl text-[#222222] font-semibold text-center">
          Top Rated Indoor Beauties
        </h1>
      </div>


    {
        loading ? <Spinner></Spinner>
        :
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topRated.map((plant) => (
          <PlantCard key={plant.plantId} plant={plant} />
        ))}
      </div>

    }





    </div>
  );
};

export default TopRated;
