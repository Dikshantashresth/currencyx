import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home'
import About from './components/About'
import Navbar from './components/Navbar'
import './App.css'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/currencyx',
      element: <><Navbar/><Home /></>,
    },
    {
      path: '/about',
      element: <><Navbar/><About /></>,
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
