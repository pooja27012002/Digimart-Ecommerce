import React from 'react'
import { Link } from 'react-router-dom'
import product11 from "../productimgs/product22.png"
import g1 from "../assets/GalleryImg/g1.jpg"
import g2 from "../assets/GalleryImg/g2.jpg"
import g3 from "../assets/GalleryImg/g3.jpg"
import g8 from "../assets/GalleryImg/g8.jpg"
import g9 from "../assets/GalleryImg/g9.jpg"
import g6 from "../assets/GalleryImg/g6.jpg"
export const PromoBanner = () => {
  return (

<>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap ">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4"><Link to="/shop" className='block'>
               <button className=' text-white bg-yellow-600 px-5 py-2  rounded hover:bg-black transition-all duration-300'>Explore Products</button>
                    </Link></h1><br />
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Step into a world of exclusive brands and high-quality digital products. Our gallery features a carefully selected range of innovative items designed to enhance your lifestyle. Discover, shop, and transform your digital presence with our premium offerings.</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block transition-transform duration-300 ease-in-out transform hover:scale-50" src={g1}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block transition-transform duration-300 ease-in-out transform hover:scale-50" src={g2}/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block transition-transform duration-300 ease-in-out transform hover:scale-50" src={g3}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block transition-transform duration-300 ease-in-out transform hover:scale-50" src={g8}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block transition-transform duration-300 ease-in-out transform hover:scale-50" src={g9}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block transition-transform duration-300 ease-in-out transform hover:scale-50" src={g6}/>
        </div>
      </div>
    </div>
  </div>
</section>
    </>

    // <div className='mt-16 py-12 bg-teal-200 px-4 lg:px-24'>
    //     <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
    //         <div className='md:w-1/2'>
    //             <h3 className='text-3xl font-bold mb-6 leading-snug' ></h3>
    //             <Link to="/shop" className='block'>
    //             <button className='font-semibold text-white bg-blue-700 px-5 py-2  rounded hover:bg-black transition-all duration-300'>Explore Products</button>
                
    //             </Link>
    //         </div>
    //         <div>
    //             <img src={product11} alt='' className='w-60'/>
    //         </div>
    //     </div>
    // </div>
  )
}
