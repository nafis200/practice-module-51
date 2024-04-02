import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './components/Roots';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Authprovider from './components/providers/Authprovider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children:[
       {
         path: '/',
         element:<Home></Home>,
       },
       {
         path:'/login',
         element:<Login></Login>,
       },
       {
         path:'/register',
         element:<Register></Register>
       }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
   <RouterProvider router={router} />
   </Authprovider>
  </React.StrictMode>,
)
