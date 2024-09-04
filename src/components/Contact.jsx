import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { useContext } from "react";
import { Candidate } from "../store/Candidates-stor";
import { IoIosMail } from "react-icons/io";
import { CgNotes } from "react-icons/cg";

const Contact = () => {
  const candidate = useContext(Candidate);
  const contact = candidate.Contact;

  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5align-items-center rounded-3  shadow-lg">
          <div className="col-lg-6">
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <a href="#" className="nav-link" aria-current="page">
                  <svg className="bi pe-none me-2" width="16" height="16">
                    <CgNotes />
                  </svg>
                  Checkout My Resume
                </a>
              </li>
              <li>
                <a href={contact.Email} className="nav-link ">
                  <svg className="bi pe-none me-2" width="16" height="16">
                    {/* <use xlink:href="#speedometer2"></use> */}
                    <IoIosMail />
                  </svg>
                  kalia.gouda.mca.2023@nist.edu
                </a>
              </li>
              <li>
                <a href={contact.Linkedin} className="nav-link ">
                  <svg className="bi pe-none me-2" width="16" height="16">
                    {/* <use xlink:href="#table"></use> */}
                    <FaLinkedin />
                  </svg>
                  Linkedin
                </a>
              </li>
              <li>
                <a href={contact.Github} className="nav-link ">
                  <svg className="bi pe-none me-2" width="16" height="16">
                    {/* <use xlink:href="#grid"></use> */}
                    <FaSquareGithub />
                  </svg>
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="bootstrap-themes.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
