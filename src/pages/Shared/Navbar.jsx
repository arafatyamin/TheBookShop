import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

    const [taggle, setTaggle] = useState(false);

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
          <Link
            to="/signIn"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 font-semibold text-white text-xl items-center justify-center hover:border-t-2 hover:border-white"
          >
            <span>sign In</span>
          </Link>
          <Link
            to="/signIn"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 font-semibold text-white text-xl items-center justify-center hover:border-t-2 hover:border-white"
          >
            <span>sign Out</span>
          </Link>
          
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
        class={`${taggle?"block":"hidden"} top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        id="navigation"
      >
        {navLinks}
      </div>
    </nav>
    );
};

export default Navbar;