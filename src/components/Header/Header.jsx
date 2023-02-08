import React from 'react';
import "./Header.scss";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/header-logo.svg';
import cartIcon from '../../images/cart.svg';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineLogout } from 'react-icons/hi';
import { useSelector } from 'react-redux';

export default function Header() {
  const { cart } = useSelector(state => state);

  return (
    <header className='header'>
      <div className="container">
        <div className='header-wrapper'>
          <div className="header-logo">
            <Link to="/"><img src={logo} alt="" /></Link>
          </div>
          <div className="header-navLinks">
            <NavLink style={({ isActive }) => isActive ? { "fontWeight": "700" } : null} className="header-navLinks-item" to="/">Home</NavLink>
            <NavLink style={({ isActive }) => isActive ? { "fontWeight": "700" } : null} className="header-navLinks-item" to="/shop">Shop</NavLink>
            <NavLink style={({ isActive }) => isActive ? { "fontWeight": "700" } : null} className="header-navLinks-item" to="/plantcare">Plant Care</NavLink>
            <NavLink style={({ isActive }) => isActive ? { "fontWeight": "700" } : null} className="header-navLinks-item" to="/blogs">Blogs</NavLink>
          </div>
          <div className="header-actions">
            <div className="header-actions-search">
              <FiSearch className="header-actions-search-icon" />
            </div>
            <div className="header-actions-cart">
              <img src={cartIcon} alt="" />
              {
                cart.data.length ?
                  <div><span>{cart.data.length}</span></div>
                  : null
              }
            </div>
            <div className="header-actions-login">
              <HiOutlineLogout className="header-actions-login-icon" />
              <span>Login</span>
            </div>
          </div>
        </div>
        <div className="header-bottom-border"></div>
      </div>
    </header>
  )
}
