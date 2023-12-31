import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Prime from './layout/Prime.jsx';
import Home from './pages/home/Home.jsx';
import AddTask from './pages/addTask/AddTask.jsx';
import SeeMore from './pages/seeMore/SeeMore';
import ErrorPage from './pages/shared/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Prime></Prime>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addTask",
        element: <AddTask></AddTask>
      },
      {
        path: "/seeMore/:id",
        element: <SeeMore></SeeMore>,
        loader: ({ params }) => fetch(`https://server-side-two-ashy.vercel.app/singleTasks/${params.id}`)
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
