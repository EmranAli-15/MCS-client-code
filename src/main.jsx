import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Prime from './layout/Prime.jsx';
import Home from './pages/home/Home.jsx';
import AddTask from './pages/addTask/AddTask.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Prime></Prime>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addTask",
        element: <AddTask></AddTask>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
