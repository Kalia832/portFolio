import { useContext } from "react";
import { Candidate } from "../store/Candidates-stor";
import Hero from "./Hero";
const Home = () => {
  const candiate = useContext(Candidate);

  return (
    <>
      <Hero title={candiate.MessageTitle} desc={candiate.MessageDesc}></Hero>
    </>
  );
};

export default Home;
