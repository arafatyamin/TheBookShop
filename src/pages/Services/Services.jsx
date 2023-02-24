import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="h-full flex lg:h-screen bg-gray-900 items-center justify-center mx-[50px]">
  <div className="grid grid-cols-12 gap-x-4 gap-y-4 max-w-6xl">
    
    <div className="col-span-12 sm:col-span-6 md:col-span-3 pb-6 lg:pb-6 hover:shadow-2xl">
      <card className="w-full flex flex-col">
        <div className="relative">

          <Link href="#">
            <img alt='' src="https://picsum.photos/seed/59/300/200" className="w-96 mx-auto h-auto" />
          </Link>
        </div>

        <div className="flex flex-row mt-2 gap-2">
          <div className="flex flex-col">
            <Link href="#">
              <p className="text-gray-100 text-2xl font-bold">Physic and Physics</p>
            </Link>
            <p className="text-gray-300 text-2xl ">240tk</p>
            <Link className="text-gray-400 text-lg mt-2 hover:text-gray-100" href="#"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eum..... see more </Link>
            <p className="text-gray-400 text-xs mt-1">4.5(100 raging) . 100 reviews</p>
          </div>
        </div>
        <Link to="/services/01" className='text-white text-lg py-2 px-3 border hover:border-2 shadow-4xl border-indigo-500 hover:opacity-80 rounded-xl mr-auto mt-5'>view details</Link>
      </card>
    </div>
    <div className="col-span-12 sm:col-span-6 md:col-span-3 pb-6 lg:pb-6 hover:shadow-2xl">
      <card className="w-full flex flex-col">
        <div className="relative">

          <Link href="#">
            <img alt='' src="https://picsum.photos/seed/59/300/200" className="w-96 h-auto" />
          </Link>

        </div>

        <div className="flex flex-row mt-2 gap-2">
          <div className="flex flex-col">
            <Link href="#">
              <p className="text-gray-100 text-2xl font-bold">Physic and Physics</p>
            </Link>
            <p className="text-gray-300 text-2xl ">240tk</p>
            <Link className="text-gray-400 text-lg mt-2 hover:text-gray-100" href="#"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eum..... see more </Link>
            <p className="text-gray-400 text-xs mt-1">4.5(100 raging) . 100 reviews</p>
          </div>

        </div>
        <Link to="/services/01" className='text-white text-lg py-2 px-3 border hover:border-2 shadow-4xl border-indigo-500 hover:opacity-80 rounded-xl mr-auto mt-5'>view details</Link>
      </card>
    </div>
    <div className="col-span-12 sm:col-span-6 md:col-span-3 pb-6 lg:pb-6 hover:shadow-2xl">
      <card className="w-full flex flex-col">
        <div className="relative">

          <Link href="#">
            <img alt='' src="https://picsum.photos/seed/59/300/200" className="w-96 h-auto" />
          </Link>

          
        </div>

        <div className="flex flex-row mt-2 gap-2">
          <div className="flex flex-col">
            <Link href="#">
              <p className="text-gray-100 text-2xl font-bold">Physic and Physics</p>
            </Link>
            <p className="text-gray-300 text-2xl ">240tk</p>
            <Link className="text-gray-400 text-lg mt-2 hover:text-gray-100" href="#"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eum..... see more </Link>
            <p className="text-gray-400 text-xs mt-1">4.5(100 raging) . 100 reviews</p>
          </div>

        </div>
        <Link to="/services/01" className='text-white text-lg py-2 px-3 border hover:border-2 shadow-4xl border-indigo-500 hover:opacity-80 rounded-xl mr-auto mt-5'>view details</Link>
      </card>
    </div>
    <div className="col-span-12 sm:col-span-6 md:col-span-3 pb-6 lg:pb-6 hover:shadow-2xl">
      <card className="w-full flex flex-col">
        <div className="relative">

          <Link href="#">
            <img alt='' src="https://picsum.photos/seed/59/300/200" className="w-96 h-auto" />
          </Link>

          
        </div>

        <div className="flex flex-row mt-2 gap-2">
          <div className="flex flex-col">
            <Link href="#">
              <p className="text-gray-100 text-2xl font-bold">Physic and Physics</p>
            </Link>
            <p className="text-gray-300 text-2xl ">240tk</p>
            <Link className="text-gray-400 text-lg mt-2 hover:text-gray-100" href="#"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eum..... see more </Link>
            <p className="text-gray-400 text-xs mt-1">4.5(100 raging) . 100 reviews</p>
          </div>
        </div>
        <Link to="/services/01" className='text-white text-lg py-2 px-3 border hover:border-2 shadow-4xl border-indigo-500 hover:opacity-80 rounded-xl mr-auto mt-5'>view details</Link>
      </card>
    </div>
   
  </div>
</div>
    );
};

export default Services;