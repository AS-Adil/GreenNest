import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import bgImg from "../assets/pattern.png";

import toast from "react-hot-toast";

const MyProfile = () => {
  const { user, setUser, updateUser } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value

    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile updated successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4"
    style={{ backgroundImage: `url(${bgImg})` }}
    >

         <title>GreenNest -Profile</title>
    


      <div className="bg-[#F7F7F7] shadow-lg rounded-lg p-8 max-w-md w-full ">
        <div className="flex flex-col items-center mb-6">
          <img
            src={user?.photoURL}
            alt=""
            className="w-24 h-24 rounded-full object-cover mb-4 "
          />
          <h2 className="text-2xl font-bold text-primary">
            {user?.displayName}
          </h2>
    <p className="text-primary font-semibold">{user?.email}</p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"

              name="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL
            </label>
            <input
              type="url"

            name="photo"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#81BA00] text-white py-3 rounded-lg font-semibold hover:bg-[#6ca100] transition"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
