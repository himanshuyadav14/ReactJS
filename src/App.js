import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "/src/components/Header";
import Body from "/src/components/Body";
import Footer from "/src/components/Footer";
import About from "../src/components/About";
import Error from "../src/components/Error";
import Contact from "../src/components/Contact";
import RestaurantDetail from "../src/components/RestaurantDetail";
import Profile from "../src/components/ProfileClass";
import Shimmer from "./components/Shimmer"
// import InstaMart from "./components/InstaMart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const InstaMart = lazy(() => import("./components/InstaMart.js"));

// Layout Component
const AppLayout = () => {
  return (
    <>
      <Header />
      {/* This will render based on the path, Outlet acts as a placeholder for child routes */}
      <Outlet />
      <Footer />
    </>
  );
};

// Router Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Layout for the main app
    errorElement: <Error />, // Error page if route is not found
    children: [
      {
        path: "/",
        element: <Body />, // Body for the root path
      },
      {
        path: "/about",
        element: <About />, // About page
        children: [
          {
            path: "profile", // This corresponds to /about/profile
            element: <Profile name={"Himanshu"} xyz={"uii"} />, // Nested profile page
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />, // Contact page
      },
      {
        path: "/restaurant/:id", // Dynamic route for restaurant details
        element: <RestaurantDetail />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

// Attach the router to the root DOM element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
