import React, { useState } from "react";

const Section = ({ title, description, isVisible, onToggle }) => {
  return (
    <div className="border-black p-4 m-2 border">
      <h3>{title}</h3>
      <button
        className="cursor-pointer underline"
        onClick={onToggle}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h4>{description}</h4>}
    </div>
  );
};

const InstaMart = () => {
  const [activeSection, setActiveSection] = useState("About");

  const sections = [
    {
      id: "About",
      title: "About Instamart",
      description: "This is Description",
    },
    {
      id: "Team",
      title: "Team InstaMart",
      description: "50+ members",
    },
    {
      id: "Careers",
      title: "Careers",
      description: "Software engineer opening",
    },
  ];

  return (
    <div className="p-6 bg-gray-50">
      {/* Title */}
      <h1 className="text-4xl font-semibold text-center mb-6 text-blue-600">
        GroceryHub
      </h1>
      <h2 className="text-xl text-center mb-12 text-gray-700">
        Order your daily essentials from hundreds of categories
      </h2>

      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {["Fruits", "Vegetables", "Snacks & Beverages", "Dairy Products"].map(
          (category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <h3 className="text-lg font-medium text-gray-800">{category}</h3>
              <img
                src="https://via.placeholder.com/150"
                alt={category}
                className="w-full h-40 object-cover rounded-md mt-4"
              />
            </div>
          )
        )}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700 transition duration-300">
          Start Shopping
        </button>
      </div>

      {/* Dynamic Sections */}
      <div>
        {sections.map((section) => (
          <Section
            key={section.id}
            title={section.title}
            description={section.description}
            isVisible={activeSection === section.id}
            onToggle={() =>
              setActiveSection(activeSection === section.id ? "" : section.id)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default InstaMart;
