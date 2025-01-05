import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API call or state update)
    console.log("Form Submitted", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-extrabold text-center text-yellow-600 mb-6">
          Contact Us
        </h1>
        <p className="text-center text-lg text-gray-600 mb-6">
          Have any questions? We’d love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Location</h2>
          <p className="text-lg text-gray-600 mb-2">
            Find us at our headquarters:
          </p>
          <p className="text-lg text-gray-700 mb-2">
            FoodCart Ltd., 1234 Food Street, Gourmet City, FC 12345
          </p>
          <p className="text-lg text-gray-700 mb-4">Open Hours: Mon - Fri, 9 AM - 6 PM</p>
          <div className="w-full h-64 bg-gray-200 rounded-md">
            {/* Placeholder for Google Maps */}
            <iframe
              title="location-map"
              width="100%"
              height="100%"
              src="https://maps.google.com/maps?q=FoodCart%20Ltd.,%201234%20Food%20Street,%20Gourmet%20City,%20FC%2012345&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
