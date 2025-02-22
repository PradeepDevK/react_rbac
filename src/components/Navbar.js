import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({currentUser}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <Link to="/" className="navbar-brand">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to="/admin" className="nav-link active" aria-current="page">Admin</Link>
            </li>
            <li className="nav-item">
            <Link to="/user" className="nav-link active" aria-current="page">User</Link>
            </li>
            {
                currentUser === 'admin' ?
                <li className="nav-item">
                <Link to="/dashboard" className="nav-link active" aria-current="page">Dashboard</Link>
                </li>
                : <></>
            }
        </ul>
        {currentUser}
        </div>
    </div>
    </nav>
  )
}
