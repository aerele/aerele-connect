import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginForm = ({handleLogin}) => {
      const [username, setUsername] = useState('')
      const [password, setPassword] = useState('')
      const navigate = useNavigate()
      const handleSubmit = (event) => {
      console.log(event, username, password);
        event.preventDefault();
        handleLogin(event,username, password)
        // navigate('/home')
      }
  return (
  <>
        <div className="modal-body pt-5 pb-5 ps-5 pe-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="name" className="form-control rounded-5" id="name" placeholder="Username/Email" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control rounded-5" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="text-center gap-2 d-grid mt-5">

            <button type="submit" className="btn btn-outline-dark ps-5 pe-5 rounded-5 fw-semibold">
              Log in
            </button>
            <button type="button" className="btn btn-dark ps-5 pe-5 rounded-5 fw-semibold">
              forgot password ?
            </button>
            </div>
          </form>
        </div>
</>
  );
}


