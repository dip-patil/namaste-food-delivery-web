import './About.css'
import userPic from "../assets/user.jpg";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <div className="rowAbout">
      <div className="container-about">
        <div className="info-container-about">
          <div className="first-name-container">
            <p className="name">
              Dipkumar
            </p>
            <div className="midle-sir-name-container">
              <p className="midleName">
                vilas
              </p>
              <p className="sirName">
                patil:)
              </p>
            </div>
          </div>
          <p className="discription-about">
            I'm a frontend developer who builds large scable appilations from
            scratch.
            <br /> This application is made by me from scratch using ReactJs.
          </p>

          <div className="platforms">
            <a
              href="https://www.linkedin.com/in/dipkumar-patil-896445242"
             
            >
              <BsLinkedin className="linkdin" />
            </a>
            <a
              href="https://github.com/dip-patil"
              
            >
              <BsGithub className="github" />
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/dipkumar_patil/practice"
            
            >
              <SiGeeksforgeeks className="gfg" />
            </a>
            <a
              href="https://leetcode.com/dipkumar_patil/"
              
            >
              <SiLeetcode className="leetcode" />
            </a>
          </div>
        </div>
        <div className="profile-Photo-container">
          <img
            src={userPic}
            className="profileStyle"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
