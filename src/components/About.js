import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-4xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-yellow-500 mb-6">About Us</h1>
        <p className="text-xl text-gray-700 mb-6">
          Welcome to <span className="font-semibold text-yellow-600">FoodCart</span>, your go-to platform for ordering food from nearby restaurants!
        </p>
        <p className="text-lg text-gray-600 mb-8">
          We partner with local restaurants to bring you the most delicious meals, delivered right to your doorstep. 
          From fast food to gourmet meals, FoodCart has it all!
        </p>
        <div className="bg-yellow-100 p-6 rounded-lg mb-8">
          <p className="text-lg text-gray-600">
            Our mission is to provide fast, reliable, and quality food delivery from your favorite local eateries, 
            so you can enjoy a hassle-free dining experience, wherever you are!
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">How It Works:</h3>
          <ul className="list-disc text-left text-gray-700 ml-6">
            <li>Browse the menu from nearby restaurants.</li>
            <li>Add your favorite items to your cart.</li>
            <li>Checkout securely and track your order.</li>
            <li>Enjoy fast delivery to your door!</li>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default About;
