import React from 'react';

const MyReviews = () => {
    return (
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
    );
};

export default MyReviews;