import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyProject from "../Myproject";
import MySkill from "../MySkill";
// import MySkills from "../MySkills";
import Resume from "../Resume";

function Components() {
    return (
        <>
            <HeroSection />
            <AboutMe/>
            {/* <MySkills/> */}
            <MySkill/>
            <MyProject/>
            <Resume/>
            <ContactMe/>
            <Footer/>
        </>
    );
}
export default Components;