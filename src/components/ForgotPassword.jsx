import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import toast from "react-hot-toast";
import bgImg from "../assets/pattern.png";
import leaves from "../assets/leaves.png";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent. Check your Gmail inbox.");
        setEmail("");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h2 className="text-4xl font-bold text-secondary mb-6">Reset Password</h2>

      <div className="bg-[#F7F7F7] w-full px-6 pt-9 pb-6 shadow-xl rounded-xl mx-auto max-w-lg">
        <div className="flex justify-center items-center pb-5 pt-2">
          <img src={leaves} className="w-10 pb-2" alt="" />
        </div>

        <form onSubmit={handleReset} className="space-y-4">
          <label htmlFor="email" className="block mb-1.5 ml-1 text-primary">
            Enter your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          <button
            type="submit"
            className="w-full mt-1.5 bg-[#81BA00] text-white py-3 rounded-lg font-semibold hover:bg-[#6ca100] transition cursor-pointer"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
