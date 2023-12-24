import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
  <div className="container">
    <Link className="navbar-brand" to="/">Furni<span>.</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarsFurni">
      <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li><NavLink className="nav-link" to="/shop">Shop</NavLink></li>
        <li><NavLink className="nav-link" to="/about">About us</NavLink></li>
        <li><NavLink className="nav-link" to="/services">Services</NavLink></li>
        <li><NavLink className="nav-link" to="/blog">Blog</NavLink></li>
        <li><NavLink className="nav-link" to="/contact">Contact us</NavLink></li>
      </ul>
      <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
        <li><a className="nav-link" href="#"><img src="assets/images/user.svg" /></a></li>
        <li><a className="nav-link" href="cart.html"><img src="assets/images/cart.svg" /></a></li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header