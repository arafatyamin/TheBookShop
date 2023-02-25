import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const ServiceDetails = () => {
  const {user} = useContext(AuthContext)
  return (
    <div class="pb-10">
      <div class="mb-4 md:mb-0 w-full mx-auto relative" style={{height: '24em'}}>
        <div class="absolute left-0 bottom-0 right-0 w-full h-full z-10"
          style={{backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))"}}></div>
        <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" class="absolute left-0 top-0 w-full h-full z-0 object-cover" alt='' />
        <div class="p-4  absolute bottom-0 left-0 z-20">
          <div class="flex mt-3">
            <img src="https://randomuser.me/api/portraits/men/97.jpg"
              class="h-10 w-10 rounded-full mr-2 object-cover" alt='' />
            <div className='cursor-pointer'>
              <p class="font-semibold text-gray-200 text-sm"> Mike Sullivan </p>
              <p class="font-semibold text-gray-400 text-xs"> 14 Aug </p>
            </div>
          </div>
        </div>
      </div>
        <div className="flex">
      <div class="px-4 lg:px-0 mt-6 text-white text-lg leading-relaxed  w-2/3  ml-[100px]">
        <h2 class="text-4xl font-semibold my-4 ">Uneasy barton seeing remark happen his has</h2>
        <div className=''>
        <p class="pb-6 text-justify">Guest it he tears aware as. Make my no cold of need. He been past in by my hard. Warmly thrown
          oh he common
          future. Otherwise concealed favourite frankness on be at dashwoods defective at. Sympathize interested
          simplicity at do projecting increasing terminated. As edward settle limits at in.</p>
        </div>
          
        </div>
        {/* side card */}
        <div class="w-1/3  py-6 flex justify-center items-center text-white">
    <div class="relative pl-1 flex justify-center rounded-xl cursor-pointer">
        
        
      
        <div class="w-full px-16  border border-gray-800 py-8  rounded-xl shadow-2xl z-10">

            <div class="px-2 py-1">
              <h1 className="text-4xl py-2">220 $</h1>
                <div class="text-sm md:text-base font-bold pr-2">Shop Name</div>

                    
                    <div class="flex py-2 justify-between item-center">
                            <div class="flex  items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 md:h-5 md:w-5 text-yellow-500" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <p class="text-gray-600 font-bold text-xs md:text-sm ml-1">
                                    4.96
                                    <span class="text-gray-500 font-normal">(76 rewiews)</span>
                                </p>
                            </div>
                    </div>
                <div className='flex gap-2'>
                <Link class="inset-x-0 bottom-0 flex justify-center hover:opacity-80 text-sm md:text-base border hover:border-2 border-blue-500 rounded-xl w-1/2 md:w-1/2 p-1 text-gray-100 hover:scale-105 duration-500 transform transition" href="#">Order</Link>
                <Link class="inset-x-0 bottom-0 flex justify-center text-sm md:text-base hover:opacity-80 border hover:border-2 border-blue-500 rounded-xl w-1/2 md:w-1/2 p-1 text-gray-100 hover:scale-105 duration-500 transform transition" href="#">card</Link>
                </div>
            </div>
        </div>
    </div> 
</div>
      </div>
      <div className='border-t-2  text-white mx-[100px]'>
        <h1 className="text-2xl">Reviews</h1>
        {/* review generate section */}
        {
          user?.uid ? <div className='pb-5'>
          <form action="/" accept-charset="UTF-8" method="post">
          <div class="flex items-center">
      <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
        </path>
      </svg>
      <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
        </path>
      </svg>
      <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
        </path>
      </svg>
      <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
        </path>
      </svg>
      <svg class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
        </path>
      </svg>
    </div>    
    <textarea className="w-full shadow-inner h-20 mb-4 rounded-lg focus:shadow-outline text-2xl" placeholder="review here..." cols="6" rows="6" id="comment_content" spellcheck="false"></textarea>
    <button class="font-bold py-2 px-4 w-full bg-purple-400 text-lg text-white shadow-md rounded-lg ">review </button>
  </form>
          </div>: <p>see review section first <Link to='/signIn' className='text-blue-800 hover:border-b-2 hover:border-blue-800'>login</Link></p>
        }
        {/* review posted section */}
        <div>
        <div id="task-comments" class="pt-4">
<div class="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
  <div class="flex flex-row justify-center mr-2">
    <img alt="avatar" width="48" height="48" class="rounded-full w-10 h-10 mr-4 shadow-lg mb-4" src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png" />
    <h3 class="text-purple-600 font-semibold text-lg text-center md:text-left ">@Shanel</h3>
  </div>


    <p style={{width: "90%"}} class="text-gray-600 text-lg text-center md:text-left ">Hi good morning will it be the entire house. </p>

</div>
<div class="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
  <div class="flex flex-row justify-center mr-2">
    <img alt="avatar" width="48" height="48" class="rounded-full w-10 h-10 mr-4 shadow-lg mb-4" src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png" />
    <h3 class="text-purple-600 font-semibold text-lg text-center md:text-left ">@Tim Motti</h3>
  </div>


    <p style={{width: "90%"}} class="text-gray-600 text-lg text-center md:text-left "><span class="text-purple-600 font-semibold">@Shanel</span> Hello. Yes, the entire exterior, including the walls. </p>

</div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;