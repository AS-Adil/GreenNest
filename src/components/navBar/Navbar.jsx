import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const { user, setUser, logOut } = useContext(AuthContext);
  // console.log(user?.photoURL);

  const links = (
    <>
      <NavLink className="px-3 py-1.5" to={"/"}>
        Home 
      </NavLink>
      <NavLink className="px-3 py-1.5" to={"/plants"}>
        Plants
      </NavLink>
      <NavLink className="px-3 py-1.5" to={"/my-profile"}>
        My Profile
      </NavLink>
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 w-full z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {links}
          </ul>
        </div>
        <Link
          to={"/"}
          className="bg-[#81BA00] px-5 py-3  hover:scale-103 text-white transition  rounded-full text-xl font-bold"
        >
          GreenNest
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3 text-lg">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="m-1">
              <img
                className="rounded-full w-10 h-10"
                src={user?.photoURL}
                alt=""
              />
            </div>

            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-[#F7F7F7] rounded-box z-1 w-52 p-2 shadow-sm "
            >
              <h1 className="text-lg text-primary font-semibold text-center my-2">
                {user?.displayName}
              </h1>
              <button
                onClick={handleLogout}
                className="bg-secondary mb-2 px-3 py-2.5 rounded-md cursor-pointer text-primary font-semibold w-full 
           hover:scale-102 transition duration-150
           "
              >
                Logout
              </button>
            </ul>
          </div>
        ) : (
          <div>
            <div className=" hidden sm:block ">
              <Link
                to={"/login"}
                className="bg-secondary mx-2 px-4 py-2 rounded-md cursor-pointer text-primary font-semibold "
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className=" bg-secondary mx-2 px-3 py-2 rounded-md cursor-pointer text-primary font-semibold "
              >
                Register
              </Link>
            </div>

            {/* ============= */}
            <div className="flex items-center sm:hidden gap-0 ">
              <div>
                <Link
                  to={"/login"}
                  className="bg-secondary  px-4 py-3 rounded-l-2xl cursor-pointer text-lg text-primary font-semibold mr-0.5"
                >
                  Login
                </Link>
              </div>

              <div className="dropdown dropdown-end sm:hidden">
             <div
                  tabIndex={0}
                  role="button"
              className="bg-secondary py-3 px-1 rounded-r-2xl flex items-center justify-center"
                >
                  <ChevronDown className="w-6 h-6" />
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <Link
                    to={"/register"}
                    className=" bg-secondary mx-2 px-3 py-2 rounded-md cursor-pointer text-primary font-semibold "
                  >
                    Register
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
