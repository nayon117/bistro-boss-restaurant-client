import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoute from './Route/Route'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16'>
    <RouterProvider router={myCreatedRoute} ></RouterProvider>
 </div>
  </React.StrictMode>,
)
