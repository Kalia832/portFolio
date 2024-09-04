const Nevbar = ({ setPage, currentPage }) => {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 ">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none "
          >
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="fs-4">Kalia Gouda</span>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item" onClick={() => setPage("Home")}>
              <a
                href="#"
                className={`nav-link ${currentPage == "Home" && `active`}`}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="nav-item" onClick={() => setPage("Education")}>
              <a
                href="#"
                className={`nav-link ${currentPage == "Education" && `active`}`}
              >
                Education
              </a>
            </li>
            <li className="nav-item" onClick={() => setPage("Projects")}>
              <a
                href="#"
                className={`nav-link ${currentPage == "Projects" && `active`}`}
              >
                Projects
              </a>
            </li>
            <li className="nav-item" onClick={() => setPage("Contact")}>
              <a
                href="#"
                className={`nav-link ${currentPage == "Contact" && `active`}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Nevbar;
