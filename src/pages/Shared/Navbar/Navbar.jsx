import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../context/AuthProvider';
import ToggleProfile from './ToggleProfile';

const Navbar = () => {
  const { user,  } = useContext(AuthContext)
  const [taggle, setTaggle] = useState(false);
  const [dropdownProfile, setDropdownProfile] = useState(false)

  // const signOut = () =>{
  //   logOut()
  //   .then(() =>{}).catch(err =>console.error(err))
  // }


  const navLinks = <>
    <div
      onClick={() => setTaggle(false)}
      className={` lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto opacity-90`}
    >
      <Link
        to="/"
        className="lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center font-bold text-black hover:text-green-500"
      >
        <span>Home</span>
      </Link>
      <Link
        to="/services"
        className="lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold text-black hover:text-green-500  items-center justify-center"
      >
        <span>Services</span>
      </Link>
      <Link
        to="/about"
        className="lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center font-bold text-black hover:text-green-500"
      >
        <span>About us</span>
      </Link>
      <Link
        to="/blog"
        className="lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center font-bold text-black hover:text-green-500"
      >
        <span>Blog</span>
      </Link>
      {
        user?.uid ? <>
          <Link
            to="/myReviews"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center  font-bold text-black hover:text-green-500"
          >
            <span>My Reviews</span>
          </Link>
          <Link
            to="/addService"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center font-bold text-black hover:text-green-500"
          >
            <span>Add Service</span>
          </Link>
        </> : ""
      }
    </div>
  </>

  return (
    <div className=' border-b bg-[#fff]'>
      <nav className="flex items-center flex-wrap py-3 mx-[50px] lg:mx-[80px] ">
        <Link to="/" className="py-2 inline-flex items-center">
          <span className="text-xl text-blue-500  font-bold uppercase tracking-wide"
          >The<span className='font-normal text-lg'>TechHub</span></span>
        </Link>
        <button onClick={() => setTaggle(!taggle)} className="text-black inline-flex p-3 hover:border-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
          data-target="#navigation">
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6 text-white">
            {
              taggle ? <path x-show="open" fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path> : <path x-show="!open" fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
            }
          </svg>
        </button>
        <div
          className={`${taggle ? "block" : "hidden"} top-navbar w-full text-start pl-6 lg:inline-flex lg:flex-grow lg:w-auto bg-gray-900 opacity-70 lg:bg-transparent  rounded-b-lg left-0 top-20  text-white shadow-2xl lg:shadow-none`}
          id="navigation"
        >
          {navLinks}
        </div>
        {/* login user see this option */}
        {
          user?.uid ? <>
            <img onClick={() => setDropdownProfile(!dropdownProfile)} src={user?.photoURL} className='w-10 h-10 rounded-full cursor-pointer opacity-100' alt="" />
          </> : <Link
            to="/signIn"
            className="lg:inline-flex lg:w-auto w-full px-3 py-1 font-semibold text-white text-xl items-center justify-center  bg-green-500 rounded-md hover:bg-green-600"
          >
            <span>sign In</span>
          </Link>
        }

        {/* user profile */}

        <div onClick={() => setTaggle(true)} className='right-0 top-[70px] absolute shadow-2xl'>
          {
            dropdownProfile ? <ToggleProfile></ToggleProfile> : ''
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

