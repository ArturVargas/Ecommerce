
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
           <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/hats" className="nav-link">Hats</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;