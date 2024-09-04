import { useContext } from "react";
import { Candidate } from "../store/Candidates-stor";
import Hero3 from "./Hero3";
const Projects = () => {
  const candidate = useContext(Candidate);
  const projects = candidate.Projects;
  return (
    <>
      {projects.map((project) => (
        <Hero3 obj={project}></Hero3>
      ))}
    </>
  );
};

export default Projects;
