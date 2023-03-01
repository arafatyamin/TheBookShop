import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';
// import moment from 'moment';
import moment from 'moment-timezone';

const AllRviews = () => {
    const { user } = useContext(AuthContext);

    // fetching data with user email
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: () => fetch(`https://the-tech-hub-server.vercel.app/reviews/`)
            .then(res => res.json())
    })

    // delete review
    const handleDeleteReview = id => {
        const proceed = window.confirm('Are you sure, You want to delete this review')
        if (proceed) {
            fetch(`https://the-tech-hub-server.vercel.app/delete/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('successfully deleted this review');
                })
        }

    }


    return (
        <div id="task-comments" className="py-4 mx-auto px-[100px] bg-gray-200">
            {
                reviews.map(review =>
                    <div className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4 mx-[100px]">
                        <div className="flex flex-row justify-center mr-2">
                            <img alt="avatar" width="48" height="48" className="rounded-full w-10 h-10 mr-4 shadow-lg mb-4" src={review?.photo} />
                            <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">@{review?.name}</h3>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-3 w-full'>
                            <div className='col-span-2'>
                                <h4 style={{ width: "90%" }} className="text-gray-600 text-xl font-bold text-center md:text-left ">{review?.serviceName} </h4>
                                <p style={{ width: "90%" }} className="text-gray-600 text-lg text-center md:text-left ">{review?.comment} </p>
                                <p style={{ width: "90%" }} className="text-gray-600 text-sm md:text-left ">{review?.time} </p>
                            </div>
                            <div className='gap-4 flex flex-col'>
                                <button onClick={() => handleDeleteReview(review?._id)} type='button' className="bg-red-500 text-white px-3 py-2 rounded-md uppercase">delete</button>
                                <Link to={`/updated/review/${review?._id}`} className="bg-green-500 hover:bg-green-600 text-center text-white px-3 py-2 rounded-md uppercase">update</Link>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default AllRviews;