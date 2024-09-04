import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/cartSlice";

const CartCard = ({ item }) => {
    const cartItems = useSelector((store) => store.cart.cartItems);

  const dispatch = useDispatch();

  function handleRemoveItem(product){
    dispatch(removeItem(product));
  }

  function handleAddItem(product){
    dispatch(addItem(product));
  }

  return (
    <div className="p-2 flex items-center gap-4">
      <div>
        <img className="w-28" src={item.image} alt={item.name} />
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold">{`${item.name.slice(0,30)}...`}</div>
        <div>{item.unit}</div>
        <div>{`₹${item.price}`}</div>
      </div>
      <div className='bg-green-600 text-white p-2 px-4 rounded-lg'>
            <span className="pr-2 cursor-pointer text-lg" onClick={()=>handleRemoveItem(item)}>-</span>
            <span className="px-2 cursor-pointer text-lg">{cartItems[item.id]["quantity"]}</span>
            <span className="pl-2 cursor-pointer text-lg" onClick={()=>handleAddItem(item)}>+</span>
        </div>
    </div>
  );
};

export default CartCard;
