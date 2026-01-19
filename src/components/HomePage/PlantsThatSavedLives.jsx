import React from "react";
import leave from "../../assets/leaves.png"

const PlantsThatSavedLives = () => {
  const plants = [
    {
      id: 1,
      name: "Echinacea",
      image:
        "https://i.ibb.co.com/9kN7sGrc/Echinacea.jpg",
      description:
        "Boosts the immune system and helps reduce symptoms of colds and infections. Used for centuries in traditional medicine.",
      wiki: "https://en.wikipedia.org/wiki/Echinacea",
    },
    {
      id: 2,
      name: "Turmeric",
      image:
        "https://i.ibb.co.com/LXTCNPLC/Turmeric.webp",
      description:
        "Contains curcumin, a powerful anti-inflammatory and antioxidant. Widely used in healing, digestion, and pain relief.",
      wiki: "https://en.wikipedia.org/wiki/Turmeric",
    },
    {
      id: 3,
      name: "Willow Bark",
      image:
        "https://i.ibb.co.com/LHfkHzc/Willow-Bark.jpg",
      description:
        "Natural source of salicin, the compound behind aspirin. Traditionally used to relieve pain, inflammation, and fever.",
      wiki: "https://en.wikipedia.org/wiki/Willow",
    },
  ];

  return (
    <div className="py-1 px-6">
      
      <div className="text-center mb-12 flex flex-col items-center">
        <img src={leave} className="w-9" alt="" />
        <h2 className="text-4xl my-1 font-bold text-primary">
          Plants That Saved Lives
        </h2>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
          Discover some of the most important plants in human history — natural
          healers that shaped medicine and continue to improve our health today.
        </p>
      </div>

      
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {plants.map((plant) => (
          <div
            key={plant.id}
            className="bg-[#F7F7F7] rounded-xl shadow-md overflow-hidden  hover:shadow-lg hover:scale-102 transition duration-300 flex flex-col"
          >
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-secondary mb-2">
                {plant.name}
              </h3>
              <p className="text-primary text-sm mb-4">{plant.description}</p>
              <a
                href={plant.wiki}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#81BA00] text-white px-4 py-2 rounded-lg  hover:bg-[#6ca100] transition mt-auto text-center font-semibold"
              >
                Explore More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantsThatSavedLives;
