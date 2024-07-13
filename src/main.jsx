import './main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CloseSesion } from './hooks/closeSesion';
import Register from './pages/register/register';
import Login from './pages/login/login';
import Home from './pages/home/home';
import Class from './pages/class/class';
import ProtectedRoute from './hooks/protectedRoute';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <ProtectedRoute element={<Home />} />
  },
  {
    path: '/class/:uniqueID',
    element: <ProtectedRoute element={<Class />} />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CloseSesion/> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
