import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
function Projects() {
  return (
    <>
      <div className="projectmaindiv">
        <div className="ProjectWrapper" id="projects">
          <div className="Container">
            <div className="SectionTitle">
              <div
                style={{
                  fontSize: "30px",
                  fontFamily: "'Trebuchet MS', sans-serif",
                  color: "red"
                }}
              >
               📎 Projects..
              </div>
              <hr
                style={{
                  marginLeft: "5px",
                  width: "155px",
                  background: "#0bdc70",
                  
                }}
              />
            </div>

            <ProjectCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
