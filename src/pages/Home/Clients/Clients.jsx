import React from 'react';

const Clients = () => {
    return (
        <div className="pb-16 bg-[#fff]" style={{fontFamily: 'Lato, sans-serif'}}>
                <div className="container mx-auto pt-10">
                    <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-10 ">
                        <h1 tabindex="0" className="focus:outline-none xl:text-5xl md:text-3xl text-xl text-center text-gray-900 font-extrabold pt-4">We Give Awesome Service,
See Happy Customers.</h1>
                        
                    </div>
                    <div className="xl:py-10 lg:pb-10 md:py-10 sm:py-16 px-15 flex flex-wrap">
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                            <img tabindex="0" className="focus:outline-none" src="https://cdn.tuk.dev/assets/adidas-dark.png" alt="Adidas"  />
                        </div>
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
                            <img tabindex="0" className="focus:outline-none" src="https://cdn.tuk.dev/assets/channel-dark.png" alt="Chanel" />
                        </div>
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
                            <img tabindex="0" className="focus:outline-none" src="https://cdn.tuk.dev/assets/nike-dark.png" alt="Nike" />
                        </div>
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
                            <img tabindex="0" className="focus:outline-none" src="https://cdn.tuk.dev/assets/toyota-dark.png" alt="Toyota" />
                        </div>
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                            <img tabindex="0" className="focus:outline-none" src="https://cdn.tuk.dev/assets/gs1-dark.png" alt="GS1" />
                        </div>
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                            <img tabindex="0" className="focus:outline-none" src="https://cdn.tuk.dev/assets/berry-dark.png" alt="BlackBerry" />
                        </div>
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                            <img tabindex="0" className="focus:outline-none" src="https://cdn.tuk.dev/assets/min-dark.png" alt="Mini" />
                        </div>
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                            <img tabindex="0" className="focus:outline-none" src="https://cdn.tuk.dev/assets/honda-dark.png" alt="Honda"  />
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Clients;