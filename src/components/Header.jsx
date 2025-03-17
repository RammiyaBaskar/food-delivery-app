import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "orange" }}>
      <div className="container">
        <a className="navbar-brand text-white" href="/">My Website</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;