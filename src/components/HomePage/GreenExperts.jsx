import React, { useEffect, useState } from "react";

const GreenExperts = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch("/experts.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);

  return (
    <div className="my-4 px-2 sm:px-4 lg:px-12 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Meet Our Green Experts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="bg-[#F7F7F7] shadow-md 
            
            rounded-lg p-6 text-center hover:shadow-lg hover:scale-102  duration-300 transition"
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-primary">
              {expert.name}
            </h3>
            <p className="text-gray-700">{expert.specialization}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GreenExperts;
