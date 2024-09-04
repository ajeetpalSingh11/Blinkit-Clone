import React from 'react'
import ItemCarousel from './ItemCarousel'

const ProductList = ({listDetails}) => {

  return (
    <div className='mb-8'>
    <div className='flex justify-between items-center'>
        <div className='text-2xl font-semibold pl-4'>{listDetails.title}</div>
        <div className='text-green-600 text-xl mr-4 cursor-pointer'>see All</div>
    </div>
    <ItemCarousel products={listDetails.products}/>
    </div>
  )
}

export default ProductList