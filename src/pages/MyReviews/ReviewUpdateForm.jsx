import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const ReviewUpdateForm = () => {
    const review = useLoaderData();

    const handleSubmit = e => {
        e.preventDefault()
        const comment = e.target.comments.value;
        console.log(comment)

        const user = {
            comment,
        }

        fetch(`https://the-tech-hub-server.vercel.app/update/reviews/${review._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('review updated successfully')
                }
                console.log(data)
            })

        e.target.reset()
    }
    return (
        <div>
            <div className='w-1/2 mx-auto my-10'>
                <h1>name: {review.name}</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="comments" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">comments updated...</label>
                        <input type="text" defaultValue={review.comment} name="comments" id="comments" placeholder="" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mt-6">
                        <button
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            updated
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ReviewUpdateForm;