import React from 'react'

import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/"><h3>weCareSmart</h3></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {/* <span><i className="fa-solid fa-house"></i></span> */}
                <NavLink className="mx-3 nav-link active" aria-current="page" to="/"><span><i className="fa-solid fa-house mx-2"></i>Home</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="mx-3 nav-link" to="/about"><span><i className="fa-solid fa-users mx-2"></i>About</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="mx-3 nav-link" to='/contact'><span><i className="fa-solid fa-phone mx-2"></i>Contact</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="mx-3 nav-link" to='products'><span><i className="fa-solid fa-cart-shopping mx-2"></i>Shopping</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="mx-3 nav-link" to='/login'><span><i className="fa-solid fa-arrow-right-to-bracket mx-2"></i>Login</span></NavLink>
              </li>
              <li className="nav-item">
                {/* <NavLink className="mx-3 nav-link" to='/profile'>Profile</NavLink> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}
