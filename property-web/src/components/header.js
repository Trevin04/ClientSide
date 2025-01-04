import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import urbanLogo from './urbanpropertys.png';


export default function Header() {
  return (
    <header className='header'>
      <div className="header-box">

        <Link to='/home' className='link-list'>
        <h1 className='header-logo'>
          <img src={urbanLogo} alt="Urban Properties Logo" className="header-logo-image" />
          <span className='header-logo-first'>Urban</span>
          <span className='header-logo-second'>Propertys</span>
        </h1>
        </Link>

        <ul className="header-list">
          <Link to='/home' className='link-list'><li className="header-list-item">Home</li></Link>
          <Link to='/buy' className='link-list'><li className="header-list-item">Buy</li></Link>
          <Link to='/search' className='link-list'><li className="header-list-item">Search</li></Link>
          <Link to='/contact' className='link-list'><li className="header-list-item">Contact</li></Link>
        </ul>

      </div>
    </header>


  )
}
