import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ mode, toggleMode }) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} mb-2`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">TextUtils</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ '--bs-scroll-height': '100px' }}
            >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
            </ul>
            <div className="form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onChange={toggleMode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                <span className={`fw-bold text-${mode === 'dark' ?  'light' : 'dark'}`}>Dark Mode</span>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
