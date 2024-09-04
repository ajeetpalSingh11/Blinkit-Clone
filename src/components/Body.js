import React from 'react'
import HeroLayout from './HeroLayout'
import PromotionLayout from './PromotionLayout'
import CategoryLayout from './CategoryLayout'
import ProductLayout from './ProductLayout'

const Body = () => {
  return (
    <div>
        <HeroLayout/>
        <PromotionLayout/>
        <CategoryLayout/>
        <ProductLayout/>
    </div>
  )
}

export default Body