import logo from "../../assets/aerele_logo.jpeg";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useState } from "react";
export const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };
  return (
    <>
      <section className="login-main vw-100 vh-100 d-flex flex-column flex-md-row flex-sm-row bg-black">
        <div className="login-box-1 container col-lg-6 col-md-6 col-sm-12 bg-white text-center d-flex flex-column justify-content-center align-items-center">
          <div className="logo fs-1">
            <img
              src={logo}
              alt="Logo"
              className=""
              style={{ width: "15rem", height: "15rem" }}
            ></img>
          </div>
          <div className="logo-content mt-5 d-flex gap-2 flex-lg-columnflex-md-row flex-sm-row">
            <h2 className="fw-bold fs-1">Aerele</h2>
            <h2>
              <b className="fs-1">+</b>
            </h2>
            <h2 className="fw-bold fs-1">Connect</h2>
          </div>
        </div>
        <div className="login-box-2 container p-3 col-lg-6 col-md-6 col-sm-12 bg-dark text-light d-flex flex-column justify-content-center align-items-center">
          <div className="d-grid text-center">
            <h1 className="fw-bold fs-1 mb-5 p-2 text-md-center text-sm-center text-center">
              Atlast You've Reached Here!
            </h1>
            <h3>
              <b>
                Join.<span className="text-primary">Share</span>.Explore
              </b>
            </h3>
            <div className="d-grid gap-2 text-align-sm-center mt-3">
              <button
                className="btn btn-light rounded-5"
                type="button"
              >
                Sign up with google
              </button>
              <p className="m-auto fw-light">or</p>
              <button className="btn btn-primary rounded-5" type="button">
                Create
              </button>
              <p className="fw-light mt-5 mb-0 text-primary">
                Already an In-house user?
              </p>
              <button
                type="button"
                className="btn btn-outline-light rounded-5 fw-semibold"
                onClick={handleLoginClick}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </section>
      {showLoginForm && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold fs-3">Log in</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseLoginForm}
                ></button>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
