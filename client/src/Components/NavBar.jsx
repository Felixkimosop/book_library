import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <p className="navbar-brand">Felumamu Library</p>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/home" className="nav-link " aria-current="page">
                List Of Books
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link ">
                Login
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/user" className="nav-link ">
                My Profile
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/register" className="nav-link" aria-expanded="false">
                Register
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/admin" className="nav-link" aria-expanded="false">
                Admin Panel
              </Link>
            </li>
          </ul>
        </div>
        <form className="d-flex ml-auto">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
