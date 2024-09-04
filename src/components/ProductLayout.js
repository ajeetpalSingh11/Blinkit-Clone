import React from 'react'
import productsData from '../utils/productsData.json';
import ProductList from './ProductList';

const ProductLayout = () => {
    
  return (
    <div className='p-4'>{productsData.map((item,index)=>
        <ProductList key={index} listDetails={item}/>
    )}</div>
  )
}

export default ProductLayout