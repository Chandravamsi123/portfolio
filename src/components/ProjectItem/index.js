import "./index.css";

const ProjectItem = (props) => {
  const { details } = props;
  const { name, description, imgUrl, projectLink } = details;
  return (
    <div className="project-item-container">
      <img src={imgUrl} alt="project img" className="project-img" />
      <div>
        <h3 className="project-heading">{name}</h3>
        <p className="project-description">{description}</p>
        <a target="_blank" href={projectLink} className="project-link">
          Click Here
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
