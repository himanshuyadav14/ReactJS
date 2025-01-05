import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!!</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Something went wrong!</h2>
        <div className="bg-red-50 text-red-700 border-l-4 border-red-500 p-4 mb-6 rounded-md">
          <h3 className="text-lg">{err.status + " : " + err.statusText}</h3>
        </div>
        <p className="text-gray-600">
          Please try refreshing the page or contact support if the issue persists.
        </p>
      </div>
    </div>
  );
};

export default Error;
