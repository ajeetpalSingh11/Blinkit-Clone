import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../store/cartSlice";
import Overlay from "./Overlay";
import CartCard from "./CartCard";
import { TIMER } from "../utils/constants";
import CategoryLayout from "./CategoryLayout";

const CartLayout = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);

  const dispatch = useDispatch();

  function handleCloseCart() {
    dispatch(toggleCart(false));
  }

  return (
    <div>
      <Overlay />
      <div className="absolute top-0 right-0 bg-white flex flex-col p-4 h-lvh w-1/3 z-[1000] bg-gray-200 overflow-auto overscroll-none">
        <div className="flex justify-between shadow-lg p-4 text-xl font-semibold bg-white my-4 rounded-lg">
          <div>My Cart</div>
          <div onClick={handleCloseCart} className="cursor-pointer">
            X
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col gap-5 rounded-lg">
          <div className="flex gap-4">
            <div>
              <img src={TIMER} className="w-12" alt="timer" />
            </div>
            <div>
              <p className="font-semibold text-lg">Delivery in 8 minutes</p>
              <p>{`Shipment of ${Object.values(cartItems).reduce(
                (acc, curr) => {
                  acc = acc + curr.quantity;
                  return acc;
                },
                0
              )} items`}</p>
            </div>
          </div>
          {Object.values(cartItems).map((item) => (
            <CartCard item={item} />
          ))}
        </div>
        <div className="bg-white p-4 my-4 rounded-lg">
          <div className="text-lg font-semibold mb-2">Bill Details</div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <span>Items total</span>
              <span>
                {`₹${Object.values(cartItems).reduce((acc, curr) => {
                  acc = acc + curr.quantity * curr.price;
                  return acc;
                }, 0)}`}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charge</span>
              <span>FREE</span>
            </div>
            <div className="flex justify-between">
              <span>Handling Charge</span>
              <span>{`₹2`}</span>
            </div>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-lg font-semibold mb-2">Grand Total</span>
            <span>{`₹${
              Object.values(cartItems).reduce((acc, curr) => {
                acc = acc + curr.quantity * curr.price;
                return acc;
              }, 0) + 2
            }`}</span>
          </div>
        </div>
        <div className="bg-white p-4">
          <div className="bg-green-600 text-white p-2 px-4 flex justify-between items-center rounded-lg">
            <div className="flex flex-col">
              <p className="font-semibold">{`₹${
                Object.values(cartItems).reduce((acc, curr) => {
                  acc = acc + curr.quantity * curr.price;
                  return acc;
                }, 0) + 2
              }`}</p>
              <p>Total</p>
            </div>
            <div className="text-lg font-semibold">Proceed to pay</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartLayout;
