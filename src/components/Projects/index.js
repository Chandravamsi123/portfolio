import ProjectItem from "../ProjectItem";
import "./index.css";

const projectsList = [
  {
    name: "NxtTrendz",
    description:
      "Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc..",
    imgUrl:
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-project-2-img.png",
    projectLink: "http://nxttrends77.ccbp.tech/",
  },
  {
    name: "NxtTrendz",
    description:
      "Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc..",
    imgUrl:
      "https://res.cloudinary.com/dhz7loqpf/image/upload/v1721628468/Screenshot_88_narihn.png",
    projectLink: "https://stopwatch77.ccbp.tech",
  },
  {
    name: "NxtTrendz",
    description:
      "Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc..",
    imgUrl:
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-project-2-img.png",
    projectLink: "http://nxttrends77.ccbp.tech/",
  },
  {
    name: "NxtTrendz",
    description:
      "Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc..",
    imgUrl:
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-project-2-img.png",
    projectLink: "http://nxttrends77.ccbp.tech/",
  },
  {
    name: "NxtTrendz",
    description:
      "Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc..",
    imgUrl:
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-project-2-img.png",
    projectLink: "http://nxttrends77.ccbp.tech/",
  },
  {
    name: "NxtTrendz",
    description:
      "Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc..",
    imgUrl:
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-project-2-img.png",
    projectLink: "http://nxttrends77.ccbp.tech/",
  },
];

const Projects = () => (
  <div className="projects-container">
    <h1 className="projects-heading">Projects I have done</h1>
    <div className="projects-section">
      {projectsList.map((eachProject) => (
        <ProjectItem details={eachProject} />
      ))}
    </div>
  </div>
);

export default Projects;
