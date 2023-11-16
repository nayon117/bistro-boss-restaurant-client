import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
  const axiosPublic = useAxiosPublic()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const { createUser,handleUpdateProfile } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        handleUpdateProfile(data.name, data.photoURL)
        .then(() => {
          console.log('profile updated');
          // create user entry into database
          const userInfo = {
            name: data.name,
            email:data.email
          }
          axiosPublic.post('/users', userInfo)
            .then(res => {
              if (res.data.insertedId) {
                console.log('user added to database');
                reset()
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "sign up successfull",
                  showConfirmButton: false,
                  timer: 1500
                });
      
                navigate('/')
            }
          })
          
        })
          .catch((error) => {
          console.log(error);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | sign up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up Now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
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
                  {...register("name", { required: true })}
                  placeholder="Your Name "
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photoURL</span>
                </label>
                <input
                  type="text"
                
                  {...register("photoURL", { required: true })}
                  placeholder="photoURL "
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
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
                    pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-500">This field is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    password must be at least 6 character long
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500">
                    password must be at least one uppercase one special character and one numeric{" "}
                  </span>
                )}
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
    </>
  );
};
export default Register;
