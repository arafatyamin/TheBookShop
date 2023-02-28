import React from 'react';

const About = () => {
  return (
    <div className="py-16 bg-white text-gray-900">
      <div className="container m-auto px-6 text-gray-900 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="about_image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl font-bold md:text-4xl text-gray-900">How shops work:</h2>
            <p className="mt-6 text-gray-900 text-justify">

              Sellers who previously had an Instagram profile shop and/or Facebook Page shop will be prompted to convert to Shops. Before setting up your shop, you will see an email or notification that you can now use Shops. Businesses with a linked Facebook Page shop and Instagram profile may be eligible to have a shared storefront across both Instagram and Facebook.
              New sellers can create a shop in Commerce Manager. If you've never set up an Instagram profile shop and/or Facebook Page shop, you can create a shop in Commerce Manager.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;