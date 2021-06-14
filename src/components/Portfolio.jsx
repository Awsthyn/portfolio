import React from "react";
import Detalles from "./Detalles";
import { javascriptProjects, pythonProjects } from "./data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle  } from "@fortawesome/free-solid-svg-icons";
import { faGithub} from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="d-flex flex-row align-items-center justify-content-between shadow mb-3"
      style={{ backgroundColor: "white", height: "50px", width: "95vw" }}
    >
      <h5 className="mt-1 pl-4" style={{ width: "60vw" }}>
        {project.title}
      </h5>
      <div>
        <span
          data-toggle="modal"
          data-target={"#Modal" + project.id}
          className="mr-2 btn btn-info"
        >
          <FontAwesomeIcon icon={faInfoCircle} size="lg" />
        </span>
        {project.repo ? (
          <span
            className=" mr-2 btn btn-dark"
            onClick={() => window.open(project.repo)}
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </span>
        ) : null}
      </div>
      <Detalles data={project} />
    </div>
  );
};

export default function Portfolio() {
  return (
    <div className="p-4">
      <h3 className="text-center mb-4">Scientific Computing Projects</h3>
      {pythonProjects.map((project, i) => (
        <ProjectCard key={`py-project-${i}`} {...{ project }} />
      ))}
      <h3 className="text-center mt-4 mb-4">Web Development Projects</h3>
      {javascriptProjects.map((project, i) => (
        <ProjectCard key={`js-project-${i}`} {...{ project }} />
      ))}
    </div>
  );
}
