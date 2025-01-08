import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {clearCart} from "../utils/cartSlice"

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log("Items in cart", cart);
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleAddressChange = (e) => {
    console.log("Selected Address:", e.target.value);
  };

  const handlePaymentChange = (e) => {
    console.log("Selected Payment Method:", e.target.value);
  };

  const handleClearCart = ()=>{
    dispatch(clearCart());
  }

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h1>
        <button
          className="w-[200px] bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
          onClick={handleClearCart} 
        >
          Clear Cart
        </button>
      </div>

      <div className="bg-white p-4 shadow-md rounded-lg">
        {cart.length > 0 ? (
          <div>
            <div className="divide-y divide-gray-200">
              {cart.map((item) => (
                <div
                  className="flex items-center justify-between py-4"
                  key={item.id}
                >
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-600">
                      Price: ₹{item.price}
                    </p>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className="text-lg font-bold text-gray-800">
                    ₹{item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Total: ₹{totalAmount}
              </h2>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}
      </div>

      {cart.length > 0 && (
        <>
          <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Select Address
            </h2>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              onChange={handleAddressChange}
            >
              <option value="home">Home</option>
              <option value="office">Office</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Select Payment Method
            </h2>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              onChange={handlePaymentChange}
            >
              <option value="credit_card">Credit Card</option>
              <option value="debit_card">Debit Card</option>
              <option value="upi">UPI</option>
              <option value="cash">Cash on Delivery</option>
            </select>
          </div>

          <button
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
            onClick={() => console.log("Proceeding to payment...")}
          >
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
