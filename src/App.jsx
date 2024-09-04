import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Nevbar from "./components/Nevbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import CandidateContextProvider from "./store/Candidates-stor";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  return (
    <>
      <CandidateContextProvider>
        <Nevbar setPage={setCurrentPage} currentPage={currentPage}></Nevbar>
        {currentPage == "Home" && <Home></Home>}
        {currentPage == "Education" && <Education></Education>}
        {currentPage == "Projects" && <Projects></Projects>}
        {currentPage == "Contact" && <Contact></Contact>}
        <Footer></Footer>
      </CandidateContextProvider>
    </>
  );
};

export default App;
