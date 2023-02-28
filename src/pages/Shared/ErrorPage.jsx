import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return (
        <div class="w-full h-screen flex flex-col items-center justify-center">
    

    <div class="flex flex-col items-center justify-center">
        <p class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gray-600 mt-8">500</p>
        <p class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2">Server Error</p>
        <p class="md:text-lg xl:text-xl text-gray-500 mt-4">Whoops, something went wrong on our servers.</p>
    </div>
    <div class="shadow inline-flex mt-5">
                    <Link to="/" class="inline-flex items-center justify-center bg-white hover:bg-indigo-200 px-4 py-3 border border-transparent rounded-md text-indigo-500 font-medium">return home</Link>
                </div>
</div>
    );
};

export default ErrorPage;