import { Link } from "react-scroll";
import heroImg from '../../assests/hero.png';

function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">
                        Hey, I'm <div className="hero--section--title--color" style={{ marginLeft: "10px" }}>PRAVEEN</div>KUMAR
                    </p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">
                        I'm a passionate Full-Stack Developer with a strong foundation in building dynamic web applications. Currently seeking a full-time role where I can contribute to innovative solutions and continue growing as a developer.
                    </p>
                </div>
                <Link activeClass="navBar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="Contact" className="btn hero--section--btn hero--btn">Get In Touch</Link>
            </div>
            <div className="hero--section--img">
                <img src={heroImg} alt="" style={{ width: "500px", height: "500px" }} />
            </div>
        </section>
    )
}
export default HeroSection;