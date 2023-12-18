
import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from './2.jpg'

export default function NavBar() {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <img src={logoImage} alt="Logo" style={{ width: '50px', height: 'auto' }} />
    <a className="navbar-brand" href="#">Event Log System</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <Link className="btn btn-outline-light" to="/AddEvent">Create Event</Link>
    
  </div>
</nav>
    </div>
  )
}
