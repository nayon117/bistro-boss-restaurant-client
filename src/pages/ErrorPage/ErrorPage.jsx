import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="space-y-5 mx-auto">
            <h2 className=" font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-red-300 to-[#FF444A]  text-center">ooops !</h2>
            <h3 className=" text-center text-2xl font-bold  ">404-Page Not Found</h3>
            <p className="font-medium">The page you are looking for might be removed or temporarily unavailable</p>
           <Link to="/"><button className="btn mx-auto block mt-4 bg-[#FF444A] text-white font-bold">GO TO HOMEPAGE</button></Link>
           </div>
        </div>
    );
};

export default ErrorPage;