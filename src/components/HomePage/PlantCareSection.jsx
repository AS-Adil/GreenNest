import React, { useEffect, useState } from 'react';


const PlantCareSection = () => {

     
const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("/careTips.json")
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);


    return (
 <section className={`w-full my-12 md:px-6 px-2 sm:px-4 lg:px-12 pt-8 pb-15 `}
 >
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Plant Care Tips
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg hover:scale-102 transition duration-300"
          >
            <div className="text-4xl mb-3">{tip.icon}</div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              {tip.title}
            </h3>
            <p className="text-gray-700">{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
    );
};

export default PlantCareSection;