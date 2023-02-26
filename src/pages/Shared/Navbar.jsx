import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    const [taggle, setTaggle] = useState(false);
    const [dropdownProfile,setDropdownProfile] = useState(false)

    // const signOut = () =>{
    //   logOut()
    //   .then(() =>{}).catch(err =>console.error(err))
    // }

    const navLinks = <>
        <div
          class={` lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto`}
        >
          <Link
            to="/"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 font-semibold  text-xl items-center justify-center hover:border-t-2 text-white hover:border-white"
          >
            <span>Home</span>
          </Link>
          <Link
            to="/services"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2  text-white font-semibold text-xl items-center justify-center hover:border-t-2 hover:border-white"
          >
            <span>Products</span>
          </Link>
          <Link
            to="/about"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 font-semibold text-white text-xl items-center justify-center hover:border-t-2 hover:border-white"
          >
            <span>About us</span>
          </Link>
          <Link
            to="/blog"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 font-semibold text-white text-xl items-center justify-center hover:border-t-2 hover:border-white"
          >
            <span>Blog</span>
          </Link>

          {/* login user see this option */}
          {
            user?.uid? <>
              <Link
            to="/myReviews"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 font-semibold text-white text-xl items-center justify-center hover:border-t-2 hover:border-white"
          >
            <span>My Reviews</span>
          </Link>
          <Link
            to="/addService"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 font-semibold text-white text-xl items-center justify-center hover:border-t-2 hover:border-white"
          >
            <span>Add Service</span>
          </Link>
          <img onClick={()=> setDropdownProfile(!dropdownProfile)} src={user?.photoURL} className='w-10 h-10 rounded-full cursor-pointer opacity-100' alt="" />
            </> : <Link
            to="/signIn"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 font-semibold text-white text-xl items-center justify-center hover:border-t-2 hover:border-white"
          >
            <span>sign In</span>
          </Link>
          }
        </div>
    </>

    return (
        <nav class="flex items-center bg-transparent flex-wrap py-3 mx-[50px] lg:mx-[80px]">
      <Link to="/" class="py-2 inline-flex items-center">
        <span class="text-xl text-white  font-extrabold uppercase tracking-wide"
          >TheBookShop</span>
      </Link>
      <button onClick={() => setTaggle(!taggle)} class="text-white inline-flex p-3 hover:border-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="#navigation">
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6 text-white">
            {
                taggle?<path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>:<path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            }
          </svg>
        </button>
      <div
        class={`${taggle?"block":"hidden"} top-navbar w-full text-start pl-6 lg:inline-flex lg:flex-grow lg:w-auto bg-gray-900 opacity-70 lg:bg-transparent  rounded-b-lg left-0 top-20  text-white shadow-2xl lg:shadow-none`}
        id="navigation"
      >
        {navLinks}
      </div>
      
      {/* user profile */}
      
      <div class={`${dropdownProfile ? "block":"hidden"} font-sans mt-20 ml-auto w-32 flex flex-row justify-end items-end`}>
  <div class="card  bg-white  shadow-xl hover:shadow">
     <img class="mx-auto rounded-full -mt-20 border-8 border-white" src={user?.photoURL} alt="" />
     <div class="text-center mt-2 text-3xl font-medium">{user?.displayName}</div>
     <div class="text-center mt-2 font-light text-sm">{user.email}</div>
     <Link
            onClick={()=>logOut()}
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 font-semibold text-black text-xl items-center justify-center border-2 border-gray-900"
          >
            <span>sign Out</span>
          </Link>
</div>
</div>
    </nav>
    );
};

export default Navbar;