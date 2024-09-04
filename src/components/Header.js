import React, { useEffect } from "react";
import { ADDRESS, LOGO, USER_ICON } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart, toggleLocation } from "../store/cartSlice";

const Header = () => {
    const cartItems = useSelector((store) => store.cart.cartItems);
    const address = useSelector((store) => store.location.address);

    console.log(window.navigator.geolocation);

    // useEffect(()=>{
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(showPosition);
    //       }

    //       function showPosition(position) {
    //         console.log(position.coords.latitude,position.coords.longitude)
    //       }
    // },[])

    const dispatch = useDispatch();

    function handleOpenCart(){
        if(Object.keys(cartItems).length>0){
            dispatch(toggleCart(true));
        }
    }

    function handleOpenLocation(){
        dispatch(toggleLocation(true));
    }

  return (
    <>
      <div className="flex justify-between py-3 px-4 shadow-lg items-center">
        <div className="hidden lg:block mr-4">{LOGO}</div>
        <div>
          <p className="text-lg font-semibold">Delivery in 8 minutes</p>
          <div className="flex justify-between gap-1">
          <p>{address.length >0 ? address : ADDRESS}</p>
          <p onClick={handleOpenLocation} className="cursor-pointer">🔽</p>
          </div>

        </div>
        <div className="hidden lg:flex lg:items-center lg:w-1/2">
          <input
            className="w-full p-2 border-2 border-gray-300 rounded-lg"
            type="text"
            placeholder="Search for produtcs"
          />
          <span className="text-gray-200 px-4 text-gray-500">LOGIN</span>
        </div>
        <div className="lg:hidden">{USER_ICON}</div>
        <div className="hidden lg:block bg-green-700 text-white p-2 px-4 cursor-pointer rounded-lg" onClick={handleOpenCart}>
          My Cart
        </div>
      </div>
      <div className="m-2 mx-4 lg:hidden">
        <input
          className="w-full p-2 border-2 border-gray-300 rounded-lg"
          type="text"
          placeholder="Search for produtcs"
        />
      </div>
    </>
  );
};

export default Header;
