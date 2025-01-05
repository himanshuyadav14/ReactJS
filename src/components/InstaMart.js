import React from "react";

const InstaMart = () => {
  return (
    <div className="p-6 bg-gray-50">
      {/* Title */}
      <h1 className="text-4xl font-semibold text-center mb-6 text-blue-600">GroceryHub</h1>
      <h2 className="text-xl text-center mb-12 text-gray-700">Order your daily essentials from hundreds of categories</h2>
      
      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-lg font-medium text-gray-800">Fresh Fruits</h3>
          <img
            src="https://via.placeholder.com/150"
            alt="Fruits"
            className="w-full h-40 object-cover rounded-md mt-4"
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-lg font-medium text-gray-800">Vegetables</h3>
          <img
            src="https://via.placeholder.com/150"
            alt="Vegetables"
            className="w-full h-40 object-cover rounded-md mt-4"
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-lg font-medium text-gray-800">Snacks & Beverages</h3>
          <img
            src="https://via.placeholder.com/150"
            alt="Snacks"
            className="w-full h-40 object-cover rounded-md mt-4"
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-lg font-medium text-gray-800">Dairy Products</h3>
          <img
            src="https://via.placeholder.com/150"
            alt="Dairy"
            className="w-full h-40 object-cover rounded-md mt-4"
          />
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700 transition duration-300">
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default InstaMart;
