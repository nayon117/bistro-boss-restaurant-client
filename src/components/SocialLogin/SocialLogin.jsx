import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
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
           Google
        </button>
      </div>
    </div>
  );
};
export default SocialLogin;
