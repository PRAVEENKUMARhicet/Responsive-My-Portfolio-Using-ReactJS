import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from '../../assests/portfolio_logo.png';
import resume from '../../assests/praveen-resume.pdf';
function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const toggleNav = () => {
        setNavActive(!navActive)
    }

    const closeMenu = () => {
        setNavActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);
    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div className="logo--section">
                <Link to="heroSection" spy={true} smooth={true} offset={-70} duration={500} className="link--home">
                    <img src={logo} alt="logo" className="logo" /><span style={{ color: "white", marginLeft: "3px" }}>PRAVEEN</span><span className="hero--section--title--color">KUMAR</span>
                </Link>
            </div>
            <button className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </button>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu} activeClass="navBar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="heroSection" className="navbar--content">Home</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navBar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="AboutMe" className="navbar--content">About Me</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navBar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="mySkills" className="navbar--content">Skills</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navBar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="MyProject" className="navbar--content">Projects</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navBar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="Contact" className="navbar--content">Contact Me</Link>
                    </li>
                </ul>
            </div>
            <a href={resume} download='resume' rel="noreferrer" className="btn btn-outline-primary">My Resume</a>
        </nav>
    )
}

export default Navbar;