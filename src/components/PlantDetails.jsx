import React, { useEffect, useState,  } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useParams } from "react-router";
import bgImg from "../assets/pattern.png"
import leaves from "../assets/leaves.png"
import Spinner from "./Spinner";


const PlantDetails = () => {
  const { id } = useParams(); 
  const [plant, setPlant] = useState(null);

  const [name, setName] = useState('')
  const [email, setEmail] =useState('')
  const [loading, setLoading] =useState(true)



  useEffect(() => {
    setLoading(true)
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.plantId === parseInt(id));
        setPlant(found);
      })
      .finally(()=>setLoading(false))
      
  }, [id]);


  const handleNameOnChange = (e)=>{
    setName(e.target.value)

  }

  const handleEmailOnChange =(e)=>{
      setEmail(e.target.value)
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Consultation booked successfully!");
    setEmail('')
    setName('')



  };

  if (loading) return <div
   className=" mt-27">
    <Spinner></Spinner>
    </div>
  return (
    <div
      className="w-full py-12 px-2 sm:px-4 lg:px-12"
      style={{ backgroundImage: `url(${bgImg})` }}
    >

          <title>{plant?.plantName}</title>



      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 px-4">
        <div className="bg-[#F7F7F7] shadow-lg rounded-lg p-6 lg:col-span-3">
          <img
            src={plant?.image}
            alt={plant?.plantName}
            className="w-full shadow rounded-md h-80 object-cover mb-6"
          />
          <h1 className="text-3xl font-bold text-secondary mb-4">
            {plant?.plantName}
          </h1>
          <div className="flex justify-between text-lg font-semibold mb-4 flex-wrap gap-2">
            <p>💲 Price: ${plant?.price}</p>
            <p>⭐ Rating: {plant?.rating}</p>
            <p>📦 Stock: {plant?.availableStock}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary underline mb-2.5">
              Description
            </h2>
            <p className="text-gray-700 mb-4 text-justify">
              {plant?.description}
            </p>
          </div>
        </div>



        <div className=" col-span-2 flex justify-center items-center ">

        <div className="bg-[#F7F7F7] w-full px-2 pt-6 pb-7 shadow-md rounded-xl mx-auto lg:-translate-y-22">

        <div className="flex justify-center items-center pb-5 pt-2">
            <img src={leaves} className="w-10 pb-2" alt="" />
        </div>

          <h2 className="text-2xl font-bold text-primary mb-4">
            Book a Consultation
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">



            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={handleNameOnChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={handleEmailOnChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            <button
              type="submit"
              className="w-full bg-[#81BA00] text-white py-3 rounded-lg font-medium hover:bg-[#6ca100] transition cursor-pointer"
            >
              Book Now
            </button>
          </form>

    </div>

        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
