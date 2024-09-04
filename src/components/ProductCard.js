import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/cartSlice";

const ProductCard = ({ product }) => {
  const cartItems = useSelector((store) => store.cart.cartItems);

  const dispatch = useDispatch();

  function handleRemoveItem(product){
    dispatch(removeItem(product));
  }

  function handleAddItem(product){
    dispatch(addItem(product));
  }

  return (
    <div className="flex flex-col p-4 shadow-lg m-2  mx-3 rounded-lg">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div className="font-semibold text-lg h-24">{`${product.name.slice(
        0,
        30
      )}...`}</div>
      <div>{product.unit}</div>
      <div className="flex justify-between pt-2 pb-1 items-center">
        <div className="font-semibold">{`₹${product.price}`}</div>
        {!cartItems[product.id] ? 
        <div className="border-2 border-green-600 text-green-600 py-2 px-5 rounded-lg cursor-pointer"
        onClick={()=>handleAddItem(product)}
        >
          Add
        </div> : 
        <div className='bg-green-600 text-white p-2 px-4 rounded-lg'>
            <span className="pr-2 cursor-pointer text-lg" onClick={()=>handleRemoveItem(product)}>-</span>
            <span className="px-2 cursor-pointer text-lg">{cartItems[product.id]["quantity"]}</span>
            <span className="pl-2 cursor-pointer text-lg" onClick={()=>handleAddItem(product)}>+</span>
        </div>
        }
      </div>
    </div>
  );
};

export default ProductCard;
