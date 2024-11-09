import React from "react";
import ReactDOM from "react-dom/client";
import Header from "/src/components/Header";
import Body from "/src/components/Body";
import Footer from "/src/components/Footer";
import About from "../src/components/About";
import Error from "../src/components/Error";
import Contact from "../src/components/Contact";
import RestaurantDetail from "../src/components/RestaurantDetail";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* <About /> //If path is /about
      <Body /> //If path is /
      <Contact /> //If path is /about */}
      {/* Outlet */}
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")); //index.html se attach krdo

root.render(<RouterProvider router={appRouter} />); //app router ko attach krdo routerprovider ki help se
