import { useFrappeCreateDoc } from "frappe-react-sdk";
import { useState } from "react";

export const SignUpForm = ({handleSubmitClick}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pswd, setPswd] = useState('')
    const [curPswd, setcurPswd] = useState('')
    //Creating a doc using useFrappeCreateDoc hook
    const handleSubmit = (event) => {
        handleSubmitClick(event, name, email, pswd, curPswd)
    }

    return (
    <>
        <div className="modal-body pt-5 pb-5 ps-5 pe-5">
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
              <input type="text" className="form-control name rounded-5" id="name" placeholder="Enter Full Name" onChange={(event) => {setName(event.target.value)}} />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control email rounded-5" id="email" placeholder="Enter email address" onChange={(event) => {setEmail(event.target.value)}} />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control pswd rounded-5" id="password" placeholder="Password" onChange={(event) => {setPswd(event.target.value)}}/>
            </div>
            <div className="mb-3">
              <input type="password" className="form-control re-pswd rounded-5" id="re-password" placeholder="Re-enter Password" onChange={(event) => {setcurPswd(event.target.value)}} />
            </div>
            <div className="text-center gap-2 d-grid mt-5">
            <button type="submit" className="btn btn-outline-dark ps-5 pe-5 rounded-5 fw-semibold">
              Sign Up
            </button>
            </div>
          </form>
        </div>

    </>
    )


}