import { Link } from "react-router-dom";
import useAuth from "../useAuth/useAuth";
import { useState } from "react";
const Header = () => {
  const { logout, user } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false)
  console.log(user);
  const handleSignOut = () => {
    setShowDropdown(false)
    logout().then().catch();
  };
  return (
    <div>
      <div className="navbar bg-[#1A1D1F]">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-black lg:text-white gap-5 shadow bg-base-100 rounded-box w-52"
            >
              <Link className="hover:bg-[#71B100] p-5" to="/">
                Home
              </Link>
              <Link className="hover:bg-[#71B100] p-5" to="/aboutUs">
              About Us
            </Link>
            <Link className="hover:bg-[#71B100] p-5" to="/contact">
              Contact
            </Link>
              <Link className="hover:bg-[#71B100] p-5" to="/register">
                Register
              </Link>
              <Link className="hover:bg-[#71B100] p-5" to="/login">
                Login
              </Link>
            </ul>
          </div>
          <img src="https://i.ibb.co/qd1mwsm/Logo.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white gap-5">
            <Link className="hover:bg-[#71B100] p-5" to="/">
              Home
            </Link>
            <Link className="hover:bg-[#71B100] p-5" to="/aboutUs">
              About Us
            </Link>
            <Link className="hover:bg-[#71B100] p-5" to="/contact">
              Contact
            </Link>
            <Link className="hover:bg-[#71B100] p-5" to="/register">
              Register
            </Link>
            <Link className="hover:bg-[#71B100] p-5" to="/login">
              Login
            </Link>
          </ul>
        </div>
        {user ? (
          <div className="navbar-end relative">
            <img
              className="w-10 h-10 rounded-full"
              src={user.photoURL}
              alt=""
              onClick={() => setShowDropdown(!showDropdown)}
            />
            <div className={showDropdown ? "userDropDown showDropdown space-y-2" : "userDropDown"} >
                <h1 className="text-xl font-medium">Name:{user.displayName}</h1>
                <h1 className="font-medium">{user.email}</h1>
                <button
                onClick={handleSignOut}
                className="p-1 rounded  bg-[#71B100] text-white border-none">Logout</button>
            </div>
          </div>
        ) : (
          <div className="navbar-end">
            <Link to="/login">
              <button
                onClick={logout}
                className="btn bg-[#71B100] text-white border-none"
              >
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
