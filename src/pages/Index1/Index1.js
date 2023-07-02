import React, { Component } from "react";
import { Link } from "react-scroll";

import Navbar from "../../components/Navbar/Navbar";

import Section from "./section";
import Service from "../../components/Service/service";
import WebsiteDesc from "../../components/WebsiteDesc/WebsiteDesc";
import Team from "../../components/Team/Team";
import Process from "../../components/Process/Process";
import Testimonials from "../../components/Testimonials/Testimonials";
import GetStart from "../../components/GetStart/GetStart";
import Contact from "../../components/Contact/Contact";
import Social from "../../components/Social/Social";
import Footer from "../../components/Footer/footer";
import NavButtons from "../../components/Navbar/NavButtons";
import AboutUs from "../../components/AboutUs/AboutUs";

class Index1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 2, idnm: "services", navheading: "Services" },
        { id: 3, idnm: "team", navheading: "Team" },
        { id: 4, idnm: "contact", navheading: "Contact" }
      ],
      navClass: ""
    };
  }

  setTheme = color => {
    document.getElementById("colorTheme").href =
      "assets/css/colors/" + color + ".css";
  };

  render() {
    return (
      <React.Fragment>
        {/* Importing Navbar */}
        <Navbar />
        {/* <NavbarPage
          navItems={this.state.navItems}
          navClass={this.state.navClass}
        /> */}
        {/* section */}
        <Section onload={this.setTheme("orange")} />
        {/* services */}
        <Service sectionClass="pt-5" />
        {/* website description */}
        <WebsiteDesc />
        {/* team */}
        <Team />
        {/* process */}
        <Process />
        {/* testimonial */}
        <Testimonials />
        {/* get started */}
        <GetStart />
        {/* contact */}
        <Contact />
        <AboutUs />
        {/* social */}
        <Social />
        {/* footer */}
        <Footer />
        <NavButtons />
      </React.Fragment>
    );
  }
}

export default Index1;
