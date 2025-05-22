import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
            <ul>
            <li>
                <Link className='pages' to="/">Home</Link>
            </li>
            <li>
                <Link className='pages' to="/about">About</Link>
            </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
