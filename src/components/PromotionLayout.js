import React from 'react';
import promotionData from '../utils/promotionData.json';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const PromotionLayout = () => {

    const responsive = {
        desktop:{
            breakpoint : {min: 1024, max: 3000},
            items : 5
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
    <div className='lg:mx-2 px-4 h-42'>
        <Carousel responsive={responsive}>
            {promotionData.map(item=><div className='p-2'>
                <img src={item?.image} alt={item?.name}/>
            </div>)}
        </Carousel>
    </div>
  )
}

export default PromotionLayout