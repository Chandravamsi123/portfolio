import ProjectItem from "../ProjectItem";
import "./index.css";

const projectsList = [
  {
    name: "NxtTrendz",
    description:
      "Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc.. [USERNAME:rahul, PASSWORD:rahul@2021]",
    imgUrl:
      "https://res.cloudinary.com/dhz7loqpf/image/upload/v1721813856/Screenshot_92_ef14z8.png",
    projectLink: "http://nxttrendz77.ccbp.tech/",
  },
  {
    name: "IPL Dashboard",
    description:
      "Created an IPL Dashboard based on 2020 data, displaying scorecards for each team against their opponents. This project provides comprehensive insights into team performances, enhancing the understanding of match outcomes and team strategies.",
    imgUrl:
      "https://res.cloudinary.com/dhz7loqpf/image/upload/v1721833976/Screenshot_99_dtmaac.png",
    projectLink: "https://ipldashboard77.ccbp.tech",
  },
  {
    name: "Chatbot",
    description:
      "Designed an AI generated Chatbot using open AI, designed to answer all your questions seamlessly. Leveraging advanced AI technology. Utilized technologies including Google Colab, LangChain, Gradio, Hugging Face, and OpenAI to develop this advanced chatbot.",
    imgUrl:
      "https://res.cloudinary.com/dhz7loqpf/image/upload/v1721833648/Screenshot_98_aznmao.png",
    projectLink: "https://chatbot77.ccbp.tech/",
  },
  {
    name: "Movies App",
    description:
      "Built a dynamic, feature-rich OTT platform for movie enthusiasts. Utilized React Router for seamless navigation, React Slick for horizontal scrolling, and Figma for UI design.",
    imgUrl:
      "https://res.cloudinary.com/dhz7loqpf/image/upload/v1721813828/Screenshot_93_zcac61.png",
    projectLink: "https://moviesproject.ccbp.tech/",
  },
  {
    name: "Stop Watch",
    description:
      "Created a responsive stopwatch web app using React.js, showcasing precise time tracking and intuitive controls for enhanced user experience. Demonstrates proficiency in React.js, state management, and frontend design",
    imgUrl:
      "https://res.cloudinary.com/dhz7loqpf/image/upload/v1721628468/Screenshot_88_narihn.png",
    projectLink: "https://stopwatch77.ccbp.tech",
  },
  {
    name: "Todos App",
    description:
      "Developed a robust TODOs web app with React.js, featuring task creation, deletion functionalities. Utilized responsive CSS for seamless usability across devices. Demonstrates proficiency in React.js, state handling, and frontend development.",
    imgUrl:
      "https://res.cloudinary.com/dhz7loqpf/image/upload/v1721813881/Screenshot_94_kkdyd7.png",
    projectLink: "https://tasksproject.ccbp.tech/",
  },
];

const Projects = () => (
  <div className="projects-container">
    <h1 className="projects-heading">My recent works</h1>
    <div className="projects-section">
      {projectsList.map((eachProject) => (
        <ProjectItem details={eachProject} />
      ))}
    </div>
  </div>
);

export default Projects;
