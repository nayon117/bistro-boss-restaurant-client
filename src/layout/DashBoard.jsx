import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const DashBoard = () => {
    const [cart] =  useCart()
  return (
    <div className="flex gap-10">
      <div className="w-64 bg-orange-400 min-h-screen">
              <ul className="menu p-4">
              <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
               User Home
            </NavLink>
          </li>
              <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
               Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd></FaAd>
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
             <FaList></FaList>
              My Bookings
            </NavLink>
          </li>
                  <div className="divider"></div>
                  <li>
            <NavLink to="/">
              <FaHome></FaHome>
               Home
            </NavLink>
          </li>
                  <li>
            <NavLink to="/order/salad">
                <FaSearch></FaSearch>
               Menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default DashBoard;
