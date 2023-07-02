import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { NavbarBrand } from "reactstrap";
import { Container } from "reactstrap";
import logo from "./logo192.png";
import logoblank from "./logotypblank.png";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  window.addEventListener("scroll", function(event) {
    var scroll = this.scrollY;

    function setActive(i) {
      document.ready.getElementById(i).addClass("active");
    }

    if (scroll > 1) {
      this.document.getElementById("header").style.background = "none";
      this.document.getElementById("header").classList.add("scrolled");
      this.document.getElementById("header").style.backdropFilter = "blur(5px)";
      this.document.getElementById("logo").style.color = "black";
      this.document.getElementById("logo1").style.filter = "invert(1)";
      console.log("x: " + window.innerWidth + "      y: " + window.innerHeight);
    } else {
      this.document.getElementById("header").style.background =
        "rgba(44, 44, 46, 0.9)";
      this.document.getElementById("logo").style.color = "white";
      this.document.getElementById("logo1").style.filter = "invert(0)";
      this.document.getElementById("header").classList.remove("scrolled");
      console.log("x: " + window.innerWidth + "      y: " + window.innerHeight);
    }
  });

  return (
    <React.Fragment>
      <div className="header navbar" id="header">
        <nav className="navbar-custom navbar-expand-lg fixed-top sticky sticky-dark">
          <Container>
            <div className="container1">
              <img id="logo1" className="logo1" src={logoblank} />
            </div>
            <div className="container1">
              <a href="/" className="logo">
                <NavbarBrand id="logo" className="logo text-uppercase" href="/">
                  ProEffekt AB
                </NavbarBrand>
              </a>
            </div>
            <div className="container1" />

            <div className="container1">
              <ul
                className={click ? "nav-menu active" : "nav-menu"}
                id="nav-menu"
              >
                <li className="nav-item" id="nav-item">
                  <Link
                    to="home-scroll"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item" id="nav-item">
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={500}
                    onClick={closeMenu}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item" id="nav-item">
                  <Link
                    to="team"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={500}
                    onClick={closeMenu}
                  >
                    Crew
                  </Link>
                </li>
                <li className="nav-item" id="nav-item">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={500}
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </Container>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
