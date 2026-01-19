import React, { use, useState } from "react";
import bgImg from "../assets/pattern.png";
import leaves from "../assets/leaves.png";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import Spinner from "../components/Spinner";


const Register = () => {
  const { createUser, setUser, signUpWithGoogle,updateUser,loading, setLoading } = use(AuthContext);

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);


  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    // console.log(name, email, photo, password);

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must include upper & lower case letters and be 6+ characters"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({displayName:name, photoURL:photo})
        .then(()=>{
          setUser({...user, displayName:name, photoURL:photo})
          toast.success('Registered successfully')
          navigate("/")
        })
        .catch((error)=>{
          setError(error.message)
          setUser(user)
          toast.error(error.message)         
          setLoading(false)
          
        })

     
      })
      .catch((error) => {
        setError(error.message);
      toast.success('error')


        setLoading(false)
      });
  };

  const handleSignUp = () => {
    signUpWithGoogle().then((result) => {
      // setUser(result.user);
      console.log(result);
      navigate("/");
    });
  };

  return (
    <div
      className=" col-span-2 flex flex-col justify-center items-center min-h-screen "
      style={{ backgroundImage: `url(${bgImg})` }}
    >

         <title>GreenNest -Register</title>


    {loading && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm z-50">
    <Spinner />
  </div>
)}



      <h2 className="text-5xl font-bold  text-secondary mt-11 ">
        Register now!
      </h2>

      <div className="bg-[#F7F7F7] w-full px-6 pt-9  pb-6 shadow-xl rounded-xl mx-auto  max-w-lg my-12">
        <div className="flex justify-center items-center pb-5 pt-2">
          <img src={leaves} className="w-10 pb-2" alt="" />
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <label htmlFor="name" className="block mb-1.5 ml-1 text-primary ">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            id="name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          <label htmlFor="email" className="block mb-1.5 ml-1 text-primary ">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            id="email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          <label htmlFor="photo" className="block mb-1.5 ml-1 text-primary ">
            Photo-URL
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo-URL"
            id="photo"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          <label htmlFor="password" className="block mb-1.5 ml-1 text-primary ">
            Password
          </label>


<div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Password"
    id="password"
    required
    className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10"
  />
  <span
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
  >
    {showPassword ?<Eye size={20} /> :<EyeOff size={20} /> }
  </span>
</div>




          {error && <span className="text-red-600 font-semibold">{error}</span>}

          <button
            type="submit"
            className="w-full mt-1.5 bg-[#81BA00] text-white py-3 rounded-lg hover:bg-[#6ca100] transition cursor-pointer font-semibold"
          >
            Register
          </button>

          <p>
            Already have an account ?
            <Link to={"/login"} className="text-blue-500 underline">
              {" "}
              Login{" "}
            </Link>{" "}
          </p>
        </form>

        <div className="mt-6">
          <button
            onClick={handleSignUp}
            className="btn w-full py-6 rounded-xl text-lg  bg-white text-black border-[#e5e5e5]"
          >
            <svg
              className="w-6 h-6"
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default Register;
