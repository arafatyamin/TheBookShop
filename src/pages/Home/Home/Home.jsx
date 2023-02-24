import React from 'react';
import Footer from '../../Shared/Footer';
import Navbar from '../../Shared/Navbar';
import Banner from '../Banner/Banner';
import TrandingProduct from '../TrandingProduct/TrandingProduct';

const Home = () => {
    return (
        <div className=''>
            <div>
            <div className="lg:bg-cover lg:bg-center lg:w-full relative" style={{backgroundImage:"url('https://i.ibb.co/5h8qC0N/banner3.jpg')"}}>
                <div className='bg-black opacity-10 top-0 left-0 w-full h-full absolute'></div>
            <div className="fixed right-0 left-0 top-0 z-50">
                <Navbar></Navbar>
            </div>
           <Banner></Banner>
            </div>
            </div>
            <TrandingProduct></TrandingProduct>
            <Footer></Footer>
        </div>
    );
};

export default Home;