import logo from "../../assets/aerele_logo.jpeg";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useEffect, useState } from "react";
import './LoginPage.css'
import { SignUpForm } from "../../components/SignUpForm/SignUpForm";
import { useFrappeAuth, useFrappeCreateDoc } from "frappe-react-sdk";
import { Box, LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const LoginPage = () => {
  const navigate = useNavigate()
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false)
  const [loginError, setLoginError] = useState('')
  const { createDoc:createUser,loading:isUserLoading, error:errorCreatingUser, isCompleted:isUserCreated } = useFrappeCreateDoc()
  const {
      currentUser,
      isValidating,
      isLoading,
      login,
      logout,
      error,
      updateCurrentUser,
      getUserCookie,
    } = useFrappeAuth();

  useEffect(() => {
    if (isUserCreated) {
      setIsPageLoading(false);
      navigate('/home');
    }
  }, [isUserCreated, navigate]);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  const handleCloseSignUpForm = () => {
    setShowSignUpForm(false);
  };

  const handleLogin = (event,username, password) => {
  console.log(username, password);
    // event.preventDefault()
    // setIsPageLoading(true)
    setShowLoginForm(false)
    login({
      username:username,
      password:password
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      setLoginError(err)
      alert(err)
    }).finally(
      console.log("error",error)
    )

}
useEffect(() => {
  console.log(error);
},[error])

  const handleSignUp = (event,name, email, pswd, curPswd) => {
      event.preventDefault()
      setIsPageLoading(true)
      setShowSignUpForm(false)
      if (pswd != curPswd){
        setIsPageLoading(false)
        alert("Password not matched")
        return
      } else {
        createUser("User",{
          "email":email,
          "first_name":name,
          "role_profile_name":"User",
          "new_password":pswd
        }).then((doc) => {
          console.log("User Created Successfully",doc)
        }).catch((e) => {
          console.log("Error",e);
        })
      }
  }
  return (
    <>
    {isPageLoading ? (
      <LinearIndeterminate/>) : (
      <section className="login-main vw-100 vh-100 d-flex flex-column flex-md-row flex-sm-row bg-black">
        <div className="login-box-1 container col-lg-6 col-md-6 col-sm-12 bg-white text-center d-flex flex-column justify-content-center align-items-center">
          <div className="logo fs-1">
            <img
              src={logo}
              alt="Logo"
              className="logo float-sm-start mt-sm-2"
              style={{ width: "12rem", height: "12rem" }}
            ></img>
          </div>
          <div className="logo-content mt-5 d-flex gap-2 flex-lg-column flex-md-row flex-sm-row">
            <div>
              <h2 className="fw-bold fs-1">Aerele</h2>
            </div>
          <div>
            <h2>
              <b className="fs-1">+</b>
            </h2>
          </div>
          <div>
            <h2 className="fw-bold fs-1">Connect</h2>
          </div>
          </div>
        </div>
        <div className="login-box-2 vh-100 container p-3 col-lg-6 col-md-6 col-sm-12 bg-dark text-light d-flex flex-column justify-content-center align-items-center">
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
              <button className="btn btn-primary rounded-5" type="button" onClick={handleSignUpClick}>
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
      )}
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
              <LoginForm handleLogin = {handleLogin}/>
            </div>
          </div>
        </div>
      )}
      {showSignUpForm && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold fs-3">Sign Up</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseSignUpForm}
                ></button>
              </div>
              <SignUpForm handleSubmitClick={handleSignUp} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

function LinearIndeterminate() {
  return (
    <Box sx={{ width: '100vw'}}>
      <LinearProgress color="primary" />
    </Box>
  );
}