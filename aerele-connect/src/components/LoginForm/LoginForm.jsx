import { useNavigate } from 'react-router-dom'

export const LoginForm = () => {
      const navigate = useNavigate()
      const handleLogin = (event) => {
        // event.preventDefault();
        navigate('/home')
      }
  return (
  <>
        <div className="modal-body pt-5 pb-5 ps-5 pe-5">
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input type="email" className="form-control rounded-5" id="email" placeholder="Enter email address" />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control rounded-5" id="password" placeholder="Password" />
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


