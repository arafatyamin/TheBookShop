import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { createUser, loading, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const url = event.target.image.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, url, email, password)

        // update imagebb

        createUser(email, password)
            .then(result => {
                updateUserProfile(name, url)
            })
            .catch(error => {
                console.log(error)

            });

        const user = {
            name: name,
            email: email,
            image: url,
        }

        fetch('https://the-tech-hub-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/', { replace: true })
            })

    }
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="flex justify-center h-screen">
                <div className="hidden w-full bg-cover lg:block lg:w-1/2" style={{ backgroundImage: "url(https://i.ibb.co/1RZPttf/banner4.jpg)" }}>
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <p className="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                        </div>
                    </div>
                </div>

                <div className="flex bg-transparent items-center w-full lg:max-w-md px-6 mx-auto lg:w-1/2">
                    <div className="flex-1">
                        <div className="text-center">
                            <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                        </div>

                        <div className="mt-8">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label for="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Name</label>
                                    <input type="text" name="name" id="name" placeholder="sakib al hasan" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />
                                </div>
                                <label for="image" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Choose profile photo</label>
                                <input type="text" name="image" id="image" placeholder="profile url" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />
                                <div>
                                    <label for="email" className="block mb-2 pt-6 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                    <input type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />
                                </div>

                                <div className="mt-6">
                                    <div className="flex justify-between mb-2">
                                        <label for="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                        <Link href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</Link>
                                    </div>

                                    <input type="password" name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />
                                </div>

                                <div className="mt-6">
                                    <button
                                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Sign in
                                    </button>
                                </div>

                            </form>

                            <p className="mt-6 text-sm text-center text-gray-400">have an account yet? <Link to="/signIn" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign In</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;