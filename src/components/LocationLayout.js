import React, { useState } from 'react'
import Overlay from './Overlay'
import { useDispatch } from 'react-redux';
import { toggleLocation } from '../store/cartSlice';
import { setAddress } from '../store/locationSlice';

const LocationLayout = () => {

    const [value, setValue] = useState("");

    const dispatch = useDispatch();

    function handleCloseLocation(){
        dispatch(toggleLocation(false));
    }

    function handleDetectLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }

      function showPosition(position) {
        console.log(position.coords.latitude,position.coords.longitude)
      }

      dispatch(toggleLocation(false));
    }

    function handleInputChange(e){
        setValue(e.target.value);
    }

    function handleKeyUp(e){
        if(e.key === "Enter"){
            dispatch(toggleLocation(false));
            dispatch(setAddress(value));
        }
    }


  return (
    <div>
        <Overlay/>
        <div className='absolute top-12 left-20 bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col z-[1000]'>
            <div className='flex justify-between items-center px-1 py-1 my-2'>
                <p className='font-semibold'>Change Location</p>
                <p className='cursor-pointer' onClick={handleCloseLocation}>X</p>
            </div>
            <div className='flex justify-between items-center gap-3'>
                <div className='bg-green-500 text-white p-2 rounded-lg cursor-pointer' onClick={handleDetectLocation}>Detect Location</div>
                <div className='border-1 border-gray-300 rounded-xl p-2'>OR</div>
                <input type='text' onChange={handleInputChange} onKeyUp={handleKeyUp} placeholder='Enter Location' className='p-2 rounded-md'/>
            </div>
        </div>
    </div>
  )
}

export default LocationLayout