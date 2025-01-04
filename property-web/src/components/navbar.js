import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import urbanLogo from './urbanpropertys.png';


export default function Header() {
  return (
    <header className='nav'>
      <div className="nav-box">

        <Link to='/' className='link-list'>
        <h1 className='nav-logo'>
          <img src={urbanLogo} alt="Urban Properties Logo" className="nav-logo-image" />
          <span className='nav-logo-first'>Urban</span>
          <span className='nav-logo-second'>Propertys</span>
        </h1>
        </Link>

        <ul className="nav-list">
          <Link to='/' className='link-list'><li className="nav-list-item">Home</li></Link>
          <Link to='/buy' className='link-list'><li className="nav-list-item">Buy</li></Link>
          <Link to='/search' className='link-list'><li className="nav-list-item">Search</li></Link>
          <Link to='/contact' className='link-list'><li className="nav-list-item">Contact</li></Link>
        </ul>

      </div>
    </header>


  )
}
