import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { name, recipe, price, image,_id } = item || {}
  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const axiosSecure = useAxiosSecure()

  const handleAddToCart = food => {
    console.log(food, user.email);
    if (user && user.email) {
      // send to database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your successfully`,
              showConfirmButton: false,
              timer: 1500
            });
          }
      })
    }
    else {
      Swal.fire({
        title: "You are not logged in?",
        text: "Please log in to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log In!"
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to login page
          navigate('/login',{state:{from:location}})
        }
      });
    }
  }

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Food"
        />
      </figure>
      <p className="absolute right-0 mt-4 mr-4 px-4 bg-slate-900 text-white">${ price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{ name}</h2>
        <p>{recipe} </p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-4 mx-auto  block">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default FoodCard;
