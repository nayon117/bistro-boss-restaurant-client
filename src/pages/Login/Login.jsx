import { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useAuth();
  const navigate = useNavigate()
  const location = useLocation()

  const from = location?.state?.from?.pathname || '/'

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log in successful",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from ,{replace:true})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // for captcha
  const handleValidate = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) === true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
       <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  onBlur={handleValidate}
                 
                  placeholder="type the text above"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center py-2 mb-3">
              New here?{" "}
              <Link className="text-blue-600" to="/register">
                signUp
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
