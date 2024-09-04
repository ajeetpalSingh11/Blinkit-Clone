import React from 'react'
import { HERO_IMG_1, HERO_IMG_2 } from '../utils/constants'

const HeroLayout = () => {
  return (
    <div className='p-4'>
        <div className='hidden lg:block'><img src={HERO_IMG_1} alt='hero-img'/></div>
        <div className='block lg:hidden'><img src={HERO_IMG_2} alt='hero-img'/></div>
    </div>
  )
}

export default HeroLayout