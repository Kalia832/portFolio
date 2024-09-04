import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { useContext } from "react";
import { Candidate } from "../store/Candidates-stor";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const candidate = useContext(Candidate);
  const contact = candidate.Contact;
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="35">
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">
              © 2024 Kalia Gouda, Dev
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary" href={contact.Email}>
                <svg className="bi" width="35" height="35">
                  {/* <use xlinkHref="#twitter"></use> */}
                  <IoIosMail />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href={contact.Linkedin}>
                <svg className="bi" width="35" height="35">
                  {/* <use xlinkHref="#instagram"></use> */}
                  <FaLinkedin></FaLinkedin>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href={contact.Github}>
                <svg className="bi" width="35" height="35">
                  {/* <use xlinkHref="#facebook"></use> */}
                  <FaSquareGithub />
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
