import React from 'react';
import Footer from '../../Shared/Footer';
import Navbar from '../../Shared/Navbar';
import Banner from '../Banner/Banner';
import Clients from '../Clients/Clients';
import TrandingProduct from '../TrandingProduct/TrandingProduct';

const Home = () => {
    return (
        <div className=''>
            <div>
            <div className="lg:bg-cover lg:bg-center lg:w-full relative" style={{backgroundImage:"url('https://i.ibb.co/k64RPxb/pexels-tima-miroshnichenko-5213056.jpg')"}}>
                <div className='bg-[#042D93] opacity-50 top-0 left-0 w-full h-full absolute'></div>
            <div className="fixed bg-transparent right-0 left-0 top-0 z-50">
                <Navbar></Navbar>
            </div>
           <Banner></Banner>
            </div>
            </div>
            <TrandingProduct></TrandingProduct>
            <Clients></Clients>
            <Footer></Footer>
        </div>
    );
};

export default Home;