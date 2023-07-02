import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { NavbarBrand } from "reactstrap";
import { Container } from "reactstrap";
import logo from "./logo192.png";
import logoblank from "./logotypblank.png";
import mailicon from "./mail-icon.png";
import homeicon from "./home-icon.png";

import "./Navbar.css";

const NavButtons = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  window.addEventListener("scroll", function(event) {
    var scroll = this.scrollY;

    function setActive(i) {
      document.ready.getElementById(i).addClass("active");
    }
  });

  return (
    <React.Fragment>
      <div className="nav-button-container">
        <div className="nav-button">
          <Link
            to="home-scroll"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <img className="icon1" src={homeicon} />
          </Link>
        </div>
        <div className="nav-button">
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
            <img className="icon1" src={mailicon} />
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavButtons;
