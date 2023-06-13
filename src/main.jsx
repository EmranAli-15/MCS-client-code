import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Prime from './layout/Prime.jsx';
import Home from './pages/home/Home.jsx';
import AddTask from './pages/addTask/AddTask.jsx';
import SeeMore from './pages/home/allTasks/seeMore/SeeMore';

import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()


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
      },
      {
        path: "/seeMore/:id",
        element: <SeeMore></SeeMore>,
        loader: ({ params }) => fetch(`http://localhost:5000/singleTasks/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto'>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  </React.StrictMode>,
)
