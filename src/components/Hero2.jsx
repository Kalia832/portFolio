import "bootstrap/dist/css/bootstrap.min.css";
const Hero2 = ({ edu }) => {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 rounded-3 border shadow-lg">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              {edu.InstituteName}
            </h1>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {edu.YearFrom} - {edu.YearTo}
            </h6>
            <p className="lead">{edu.Description}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                See More
              </button>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            {/* <img
              src="bootstrap-themes.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero2;
