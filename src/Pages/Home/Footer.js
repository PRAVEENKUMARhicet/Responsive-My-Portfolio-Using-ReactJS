import { Link } from "react-scroll";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import logo from '../../assests/portfolio_logo.png';

function Footer() {
  const email = 'praveenkumar10022004@gmail.com';
  const ph_no = '+91 8903434660';

  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="logo--section">
          <img src={logo} alt="" className="logo" /><span style={{ color: "white", marginLeft: "3px" }}>PRAVEEN</span><span className="hero--section--title--color">KUMAR</span>
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyProject"
                className="text-md"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Resume"
                className="text-md"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://www.instagram.com/praveen710_/profilecard/?igsh=MW1wZjlsZG0yNmN1Yw=="
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="icons" />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/13Praveens1?t=oysHYHfFk64Boob2TjP1Tg&s=09"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FaXTwitter className="icons" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/praveenkumar102/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="icons" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact--details">
        <div className="mail text-lg">
          <MdAttachEmail className="icons" /> <a href="mailto:praveenkumar10022004@gmail.com" className="contact-link" target="_blank" rel="noreferrer">{email}</a>
        </div>
        <div className="ph_no text-lg">
          <MdPhoneIphone className="icons" /> <a href="tel:+91 8903434660" className="contact-link" target="_blank" rel="noreferrer">{ph_no}</a>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">&copy; 2024PRAVEENKUMAR</p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;