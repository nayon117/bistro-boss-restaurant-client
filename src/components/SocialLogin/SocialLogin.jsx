import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        const userInfo = {
          name: res.user?.displayName,
          email:res.user?.email
        }
        axiosPublic.post('/users', userInfo)
          .then(res => {
            console.log(res.data);
            navigate('/')
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mx-auto mb-3 py-2">
      <div>
        <button onClick={handleGoogleLogin} className="btn btn-neutral">
          <FaGoogle></FaGoogle>
          Log in with Google
        </button>
      </div>
    </div>
  );
};
export default SocialLogin;
