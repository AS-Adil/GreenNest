import React from 'react';
import { Link } from 'react-router';

const PlantCard = ({ plant }) => {
  const { plantId, plantName, image, price, rating } = plant;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:scale-102 transition duration-300">
      <img
        src={image} 
        alt={plantName}
        className="w-full h-75 object-cover"
      />
      <div className="p-4">

        <h3 className="text-xl font-semibold text-[#6CA100] mb-2">{plantName}</h3>

        <div className='flex justify-between font-semibold'>
            <p className="text-gray-700 mb-1"> Price: ${price}</p>
        <p className="text-yellow-600 mb-3">⭐ Rating: {rating}</p>
        </div>


<div className="mt-4 pb-1.5">
  <Link to={`/plantDetails/${plantId}`}>
    <button className="w-full bg-[#81BA00] text-white py-3 rounded-lg font-medium cursor-pointer hover:bg-[#6ca100] transition duration-300">
      View Details
    </button>
  </Link>
</div>







      </div>
    </div>
  );
};

export default PlantCard;
