import React from "react";

const Header = () => {
  return (
    <div className="container-fluid">
      <header>
        <a href="#" className="nodeflux">
          nodeflux
        </a>
        <ul>
          <li>About Us</li>
          <li className="dropdown-toggle" data-toggle="dropdown">
            Product
          </li>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Nodeflux Grid
            </a>
            <a className="dropdown-item" href="#">
              Nodeflux Cloud
            </a>
          </div>
          <li
            className="dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
          >
            Newsroom
          </li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
