import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TrandingProduct = () => {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('services.json')
    .then(res => res.json())
    .then(data => setProducts(data.slice(0,3)))
  }, [])

    return (
        <div className="h-full py-10 flex bg-gray-900 items-center justify-center">
  <div className="grid grid-cols-12 gap-2 gap-y-4 max-w-6xl mx-[50px] lg:mx-[100px]">
  {products.map(product =>
      <div key={product._id} className="col-span-12 sm:col-span-6 md:col-span-3 pb-6 lg:pb-6 hover:shadow-2xl">
      <card className="w-full flex flex-col">
        <div className="relative">
          <Link href="#">
            <img alt='' src={product?.url} className="w-96 mx-auto h-44" />
          </Link>
        </div>

        <div className="flex flex-row mt-2 gap-2">
          <div className="flex flex-col">
            <Link href="#">
              <p className="text-gray-100 text-2xl font-bold">{product?.title}</p>
            </Link>
            <p className="text-gray-300 text-2xl ">{product?.price} $</p>
            {/* product details */}
            <Link className="text-gray-400 text-lg mt-2 hover:text-gray-100" href="#"> {product?.about.length < 100 ? product.about :
              <>
                {(product.about).slice(0,100)}
              <Link to="/products/01" className="hover:text-blue-800">...see more</Link>
              </>
            } </Link>

            <p className="text-gray-400 text-xs mt-1">{product?.reviews.map(review => <>
            
              4.5({review.rating} rating) . {review.total_reviews} reviews 
            </>)}</p>
          </div>
        </div>
        <Link to="/services/01" className='text-white text-lg py-2 px-3 border hover:border-2 shadow-4xl border-indigo-500 hover:opacity-80 rounded-xl mr-auto mt-5'>view details</Link>
      </card>
    </div>)}
    <div className="col-span-12 sm:col-span-6 md:col-span-3 flex items-center justify-center">
      <Link to="/services" className='text-white text-3xl cursor-pointer hover:border-b hover:border-blue-400'>See all Course</Link>
    </div>

   
  </div>
</div>
    );
};

export default TrandingProduct;