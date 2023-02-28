import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const ServiceDetails = () => {
  const {user} = useContext(AuthContext)
  const product = useLoaderData()
  const [comments, setComments]=useState([]);


  const {title, price, about, reviews, url:servicePhoto, author, _id,time } = product;

  const name = user?.displayName;
  const email = user?.email;
  const photo = user?.photoURL;
  const handleSubmit = e => {
    e.preventDefault()
    const comment = e.target.comments.value;
    console.log(comment)

    const user = {
      comment,
      serviceId: _id,
      serviceName: title,
      name ,
      email,
      photo ,
      time: new Date(),
  }
  
  fetch('http://localhost:5000/review', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data =>{ 
      console.log(data)
  })
  }

  useEffect(() =>{
    fetch(`http://localhost:5000/reviews/${_id}`)
  .then(res => res.json())
  .then(data => setComments(data))
  },[_id])
  

  return (
    <div className="pb-10">
      <div className="mb-4 md:mb-0 w-full mx-auto relative" style={{height: '24em'}}>
        <div className="absolute left-0 bottom-0 right-0 w-full h-full z-10"
          style={{backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))"}}></div>
        <img src={servicePhoto} className="absolute left-0 top-0 w-full h-full z-0 object-cover" alt='' />
        <div className="p-4  absolute bottom-0 left-0 z-20">
          {/* author information */}
          <div className="flex mt-3">
            <img src={author?.photo}
              className="h-10 w-10 rounded-full mr-2 object-cover" alt='' />
            <div className='cursor-pointer'>
              <p className="font-semibold text-gray-200 text-sm"> {author?.name} </p>
              <p className="font-semibold text-gray-200 text-xs"> {time?.slice(0,10)} </p>
            </div>
          </div>
        </div>
      </div>
        <div className="flex">
      <div className="px-4 lg:px-0 mt-6 text-gray-900 text-lg leading-relaxed  w-2/3  ml-[100px]">
        <h2 className="text-4xl font-semibold my-4 ">{title}</h2>
        <div className=''>
        <p className="pb-6 text-justify">{about}</p>
        </div>
          
        </div>
        {/* side card */}
        <div className="w-1/3  py-6 flex justify-center items-center text-black">
    <div className="relative pl-1 flex justify-center rounded-xl cursor-pointer">
        <div className="w-full px-16 border py-8  rounded-xl shadow-2xl z-10">

            <div className="px-2 py-1">
              <h1 className="text-4xl py-2">{price} $</h1>
                <div className="text-sm md:text-base font-bold pr-2">Available</div>
                    <div className=" py-2">
                            <div className="flex  items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 md:h-5 md:w-5 text-yellow-500" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <p className="text-gray-600 font-bold text-xs md:text-sm ml-1">
                                    4.96({reviews.rating} rating) 
                                </p>
                            </div>
                            <p className="text-gray-500 font-normal pl-5">({reviews.total_reviews} reviews)</p>
                    </div>
                <div className='flex gap-2'>
                <Link className="inset-x-0 bottom-0 flex justify-center hover:opacity-80 text-sm md:text-base border hover:border-2 border-green-500 rounded-xl w-1/2 md:w-1/2 p-1 text-gray-900 hover:scale-105 duration-500 transform transition" href="#">Order</Link>
                <Link className="inset-x-0 bottom-0 flex justify-center text-sm md:text-base hover:opacity-80 border hover:border-2 border-blue-500 rounded-xl w-1/2 md:w-1/2 p-1 text-gray-900 hover:scale-105 duration-500 transform transition" href="#">card</Link>
                </div>
            </div>
        </div>
    </div> 
</div>
      </div>
      <div className='border-t-2 mx-[100px]'>
        <h1 className="text-2xl text-white">Reviews</h1>
        {/* review generate section */}
        
        {
          user?.uid ? <div className='pb-5'>
          <div className="flex items-center">
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
      </path>
    </svg>
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
      </path>
    </svg>
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
      </path>
    </svg>
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
      </path>
    </svg>
    <svg className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
      </path>
    </svg>
  </div>  
  <form onSubmit={handleSubmit}>
                          <div>
                              <label htmlFor="comments" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">comments</label>
                              <input type="text" name="comments" id="comments" placeholder="comments here...." className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                          </div>
                          <div className="mt-6">
                              <button
                                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                  Sign in
                              </button>
                          </div>

                      </form>
        </div> : <p>see review section first <Link to='/signIn' className='text-blue-800 hover:border-b-2 hover:border-blue-800'>login</Link></p>
        }
        {/* review posted section */}
        <div>
          {
            comments?.map(comment=><div id="task-comments" className="pt-4">
            <div className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
              <div className="flex flex-row justify-center mr-2">
                <img alt="avatar" width="48" height="48" className="rounded-full w-10 h-10 mr-4 shadow-lg mb-4" src={comment?.photo} />
                <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">@{comment?.name}</h3>
              </div>
            
            
                <p style={{width: "90%"}} className="text-gray-600 text-lg text-center md:text-left ">{comment?.comment} </p>
            
            </div>
                  </div>)
          }
        
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;