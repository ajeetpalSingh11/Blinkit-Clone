import React from 'react'
import categoryData from "../utils/categoryData.json";

const CategoryLayout = () => {

  return (
    <div className='flex flex-wrap px-4 mt-2'>{categoryData.map((item,index)=>(
      <div key={index}>
        <img src={item.image}  className='w-28 lg:42' alt='category-img'/>
    </div>))}</div>
  )
}

export default CategoryLayout