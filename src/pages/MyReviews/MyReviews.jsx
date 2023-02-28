import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const MyReviews = () => {
  const {user} = useContext(AuthContext);
  const [reviews, setReviews]=useState([]);
  useEffect(() =>{
    fetch(`http://localhost:5000/user/reviews/${user?.email}`)
  .then(res => res.json())
  .then(data => setReviews(data))
  },[user?.email])
  console.log(reviews)
  return (
    <div id="task-comments" className="py-4 mx-auto px-[100px] bg-gray-200">
        {
          reviews.map(review =>
            <div className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4 mx-[100px]">
          <div className="flex flex-row justify-center mr-2">
            <img alt="avatar" width="48" height="48" className="rounded-full w-10 h-10 mr-4 shadow-lg mb-4" src={review.photo} />
            <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">@{review.name}</h3>
          </div>
          <h4 style={{ width: "90%" }} className="text-gray-600 text-xl font-bold text-center md:text-left ">{review.serviceName} </h4>
          <p style={{ width: "90%" }} className="text-gray-600 text-lg text-center md:text-left ">{review.comment} </p>
          <p style={{ width: "90%" }} className="text-gray-600 text-lg text-center md:text-left ">{review.time.slice(11,18)} </p>

        </div>)
        }
      </div>
  );
};

export default MyReviews;