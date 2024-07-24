import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { SiSqlite } from "react-icons/si";
import "./index.css";
const About = () => (
  <div className="about-container">
    <div className="details-container">
      <div className="details-mobile-container">
        <img
          src="https://res.cloudinary.com/dhz7loqpf/image/upload/v1718683709/1_5_zekjkm.jpg"
          alt="img"
          className="about-img"
        />
        <h1 className="about-heading">About Me</h1>
        <p className="about-description">
          My name is Chandra Vamsi,and I am B.Tech Graduate in Sri Vasavi
          Engineering College,Tadepalligudem and learning Full stack Development
          through NXT Wave CCBP 4.O Academy.People find me to be an
          upbeat,self-motivated team player with excellent communication skills.
        </p>
      </div>

      <img
        src="https://res.cloudinary.com/dhz7loqpf/image/upload/v1718683709/1_5_zekjkm.jpg"
        alt="img"
        className="about-img-desktop"
      />
    </div>
    <div className="skills-container">
      <div>
        <h1 className="skills-heading">Skills</h1>
        <div className="skills">
          <div className="skill">
            <FaPython size={80} />
          </div>
          <div className="skill">
            <SiSqlite size={80} />
          </div>
          <div className="skill">
            <RiReactjsFill size={80} />
          </div>
          <div className="skill">
            <SiExpress size={80} />
          </div>
          <div className="skill">
            <TbBrandJavascript size={80} />
          </div>
          <div className="skill">
            <DiNodejs size={80} />
          </div>
          <div className="skill">
            <FaHtml5 size={80} />
          </div>
          <div className="skill">
            <FaCss3Alt size={80} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default About;
