import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-8 px-2 sm:px-4 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        <div className="flex flex-col items-start">
           <div className='flex  gap-1'>
              <div>
              
              </div>
               <Link to={"/"} className='bg-[#81BA00] px-5 py-3 mb-5 hover:scale-104 transition  rounded-full text-xl font-bold'>GreenNest</Link>
           </div>
          <p>
           GreenNest is an elegant single-page web app for plant lovers to explore care guides, buy plants, and book expert consultations — helping users create a greener, healthier home year-round.
          </p>
        </div>

        <div className="text-left">
          <h4 className=" text-lg font-semibold mb-4">About GreenNest</h4>
          <ul className="space-y-2">
            <li><a href="" className="text-white hover:underline">Our Story</a></li>
            <li><a href="" className="text-white hover:underline">Sustainability</a></li>
            <li><a href="" className="text-white hover:underline">Care Tips</a></li>
            <li><a href="" className="text-white hover:underline">Join Our Community</a></li>
          </ul>
        </div>

        <div className="text-left">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="" className="text-white hover:underline">About</a></li>
            <li><a href="" className="text-white hover:underline">Contact</a></li>
            <li><a href="" className="text-white hover:underline"> Privacy Policy</a></li>
            <li><a href="" className="text-white hover:underline">Support</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">

            <a href="" className="text-white hover:text-pink-500">
              <FaInstagram size={24} />
            </a>

            <a href="" className="text-white hover:text-blue-600">
              <FaFacebookF size={24} />
            </a>

            <a href="" className="text-white hover:text-red-500">
              <FaPinterestP size={24} />
            </a>

            <a href="" className="text-white hover:text-blue-400">
              <FaTwitter size={24} />
            </a>


            <a href="" className="text-white hover:text-red-600">
              <FaYoutube size={24} />
            </a>






          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm sm:text-base">
        © 2025 GreenNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
