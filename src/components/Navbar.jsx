import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav id='navbar'>
        <h2>
            <Link to="/">
            <img width="80" height="80" src="https://img.icons8.com/dotty/80/baby-yoda--v2.png" alt="baby-yoda--v2"/> Star Wars Universe
            </Link>
        </h2>
    </nav>
  )
}

export default Navbar