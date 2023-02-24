import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="flex items-center top-0">
	<section className=' py-32 w-full mx-auto lg:mx-[100px]'>
		<div className="container mx-auto text-left text-white">
			<div className="flex items-center">
				<div className="lg:w-1/2 mx-[50px] lg:mx-0">
					<h1 className="text-5xl font-medium mb-6">Welcome to My Book Shop</h1>
					<p className="text-xl mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
						euismod odio, gravida pellentesque urna varius vitae.</p>
					<Link href="#" className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600">Learn more</Link>
				</div>
				
				</div>
			</div>
	</section>
</div>
    );
};

export default Banner;