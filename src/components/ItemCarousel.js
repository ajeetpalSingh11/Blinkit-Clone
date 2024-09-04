import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';


const ItemCarousel = ({products}) => {
    const responsive = {
        desktop:{
            breakpoint : {min: 1024, max: 3000},
            items : 6
        },
        tablet:{
            breakpoint : {min: 464, max: 1024},
            items : 3
        },
        mobile:{
            breakpoint : {min: 0, max: 464},
            items : 2
        },
    }

  return (
    <div>
        <Carousel responsive={responsive}>
            {products.map(item => <ProductCard product={item}/>)}
        </Carousel>
    </div>
  )
}

export default ItemCarousel