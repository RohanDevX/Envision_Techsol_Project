import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import AboutUs from './pages/AboutUs';
import Blog from './pages/BlogPage';
import Contact from './pages/Contact';
import Payment from './pages/Payment';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
  path: "/about",
  element: <AboutUs />
},
{
  path: "/blog",
  element: <Blog/>
},
{
  path: "/contact",
  element: <Contact/>
},
{
  path: "/payment",
  element: <Payment/>
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
);

