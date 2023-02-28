import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {

	// https://i.ibb.co/k64RPxb/pexels-tima-miroshnichenko-5213056.jpg
// https://i.ibb.co/x3f6SyJ/pexels-tima-miroshnichenko-5702311.jpg
// https://i.ibb.co/Y0fPtn6/mohammad-rahmani-1b-NQVGzuy0-U-unsplash.jpg
// https://i.ibb.co/Fhv6tpS/alexandru-acea-WBYxm-W4yuw-unsplash.jpg
    return (
        <div className="flex items-center top-0">
	<section className=' py-32 w-full mx-auto lg:mx-[100px]'>
		<div className="container mx-auto text-left text-white">
			<div className="flex items-center">
				<div className="lg:w-2/3 mx-[50px] lg:mx-0 opacity-90">
					<h1 className="text-[44px] font-medium mb-6 ">Welcome to <span className='text-green-500'>TheTechHub</span></h1>
					<p className="text-xl mb-12 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
						euismod odio, gravida pellentesque urna varius vitae.</p>
					<Link href="#" className="bg-green-500 text-white py-4 px-12 rounded-full hover:bg-green-600 cursor-pointer">Learn more</Link>
				</div>
				
				</div>
			</div>
	</section>
</div>
    );
};

export default Banner;