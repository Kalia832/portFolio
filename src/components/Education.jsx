import { useContext } from "react";
import { Candidate } from "../store/Candidates-stor";
import Hero2 from "./Hero2";
const Education = () => {
  const candidate = useContext(Candidate);
  const edu = candidate.Education;
  return (
    <>
      {edu.map((obj) => (
        <Hero2 edu={obj}></Hero2>
      ))}
    </>
  );
};

export default Education;
