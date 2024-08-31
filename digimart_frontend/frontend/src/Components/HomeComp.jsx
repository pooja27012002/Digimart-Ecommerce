import React, { useEffect } from 'react'
import BannerComp from './BannerComp'
import FavProductsComp from './FavProductsComp'
import { PromoBanner } from './PromoBanner'



export default function HomeComp() {
  useEffect(() => {

  }, [location]);

  return (
    <div className=''>
      <BannerComp></BannerComp>
      {/* <div className='h-screen'></div>
      <div className='h-screen bg-red-500'></div> */}
      <FavProductsComp></FavProductsComp>
      <PromoBanner></PromoBanner>
      {/* <CategoryBanner></CategoryBanner> */}
    </div>

  )
}
