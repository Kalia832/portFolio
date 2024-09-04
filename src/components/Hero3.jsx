const Hero3 = ({ obj }) => {
  return (
    <>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              {obj.ProjectName}
            </h1>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {obj.Skills.map((skill) => (
                <span className="badge text-bg-secondary m-1">{skill}</span>
              ))}
            </h6>
            <p className="lead">{obj.ProjectDescription}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                See More
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="bootstrap-docs.png"
              alt=""
              width="720"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero3;
