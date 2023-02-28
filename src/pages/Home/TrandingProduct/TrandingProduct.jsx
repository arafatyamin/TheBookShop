import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TrandingProduct = () => {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setProducts(data.slice(0,3)))
  }, [])
  console.log(products)
    return (
        <div className='bg-[#fff] h-full pt-10 border-b'>
                    <h1 className='w-full text-center text-2xl font-bold text-black text-s'>Trending Courses</h1>
          <div className=" py-10  ">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mx-[50px] lg:mx-[100px]">
  {products.map(product =>
      <div key={product._id} className="pb-6 lg:pb-6 shadow-2xl">
      <card className="w-full flex flex-col">
        <div className="relative">
          <Link href="#" className='w-full'>
            <img alt='' src={product?.url} className="w-full  h-44 rounded-t-2xl" />
          </Link>
        </div>

        <div className="flex flex-row mt-2 gap-2 px-4">
          <div className="flex flex-col">
            <Link href="#">
              <p className="text-gray-900 text-2xl font-bold">{product?.title}</p>
            </Link>
            <p className="text-gray-800 font-bold text-2xl ">{product?.price} $</p>
            {/* product details */}
            <Link className="text-gray-700 text-lg mt-2 " href="#"> {product?.about.length < 100 ? product.about :
              <>
                {(product.about).slice(0,100)}
              <Link to="/products/01" className="hover:text-blue-800">...see more</Link>
              </>
            } </Link>

            <p className="text-gray-900 text-xs mt-1">
            
              4.5({product.reviews?.rating} rating) . {product.reviews.total_reviews} reviews 
            </p>
          </div>
        </div>
        <div className='pt-5 mx-auto'>
        <Link to={`/services/${product._id}`} className='text-green-500 text-lg  px-3 border hover:border-2 shadow-4xl border-green-500 hover:opacity-80 rounded-xl mr-auto mt-5'>view details</Link>
        </div>
      </card>
    </div>)}
  </div>
    <div className="col-span-12 pt-5 sm:col-span-6 md:col-span-3 flex items-center justify-center">
      <Link to="/services" className='text-gray-900 text-3xl cursor-pointer hover:border-b hover:text-blue-600 hover:border-blue-500'>See all Services</Link>
    </div>
</div>
        </div>
    );
};

export default TrandingProduct;