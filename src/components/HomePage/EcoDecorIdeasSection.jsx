import React, { useEffect, useState } from 'react';

import leaves from '../../assets/leaves.png'


const EcoDecorIdeasSection = () => {


      const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetch("/decorIdeas.json")
      .then((res) => res.json())
      .then((data) => setIdeas(data));
  }, []);


    return (
    <div className="w-full my-12 md:px-6 px-2 sm:px-4 lg:px-12 pt-7 "
    >

        <div className='flex flex-col items-center'>
            <img src={leaves} className='w-9' alt="" />
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Eco Decor Ideas
      </h2>
            </div>    

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ideas.map((idea) => (
          <div
            key={idea.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-102 transition duration-300 "
          >
            <img
              src={idea.image}
              alt={idea.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-secondary mb-2">
                {idea.title}
              </h3>
              <p className="text-gray-700">{idea.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default EcoDecorIdeasSection;