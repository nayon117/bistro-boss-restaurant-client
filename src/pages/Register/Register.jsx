import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
  };

  //   const handleRegister = (e) => {
  //       e.preventDefault();
  //       const form = e.target;
  //       const name = form.name.value;
  //       const email = form.email.value;
  //       const password = form.password.value;
  //       console.log(name,email,password);

  //       createUser(email, password)
  //           .then(res => {
  //           console.log(res.user);
  //           })
  //           .catch(err => {
  //           console.log(err);
  //       })

  //   };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name",{ required: true })}
                placeholder="Your Name "
                className="input input-bordered"
                 
              />
               {errors.name && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email",{ required: true })}
                placeholder="email"
                className="input input-bordered"
                
              />
                {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  minLength: 6,
                  required: true,
                  pattern:/(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
                })}
                placeholder="password"
                className="input input-bordered"
              
              />
               {errors.password?.type==='required' && <span className="text-red-500">This field is required</span>}
               {errors.password ?.type=== 'minLength' && <span className="text-red-500">password must be at least 6 character long</span>}
               {errors.password ?.type=== 'pattern' && <span className="text-red-500">password must be at least one uppercase one symbol </span>}
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center py-2 mb-3">
            Already have an account ?{" "}
            <Link className="text-blue-600" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
