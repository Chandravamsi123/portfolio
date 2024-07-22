import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FaSquareWhatsapp } from "react-icons/fa6";

import "./index.css";

const Home = () => (
  <>
    <div className="home-main-container">
      <div className="home-container">
        <div className="home-content">
          <img
            src="https://res.cloudinary.com/dhz7loqpf/image/upload/v1720417127/1_8_sheoef.jpg"
            alt="dresses to be noticed"
            className="home-mobile-img"
          />
          <h1 className="home-heading">Hey, I'M Chandra Vamsi</h1>
          <p className="home-description">Full Stack Developer</p>
          <div>
            <div className="icons-container">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/chandra-vamsi-vanapalli"
              >
                <FaLinkedin className="contact-icon" size={25} />
              </a>
              <a target="_blank" href="">
                <FaXTwitter className="contact-icon" size={25} />
              </a>
              <a target="_blank" href="https://wa.link/37xwus">
                <FaSquareWhatsapp className="contact-icon" size={25} />
              </a>
            </div>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dhz7loqpf/image/upload/v1720417127/1_8_sheoef.jpg"
          alt="dresses to be noticed"
          className="home-desktop-img"
        />
      </div>
    </div>
  </>
);

export default Home;
