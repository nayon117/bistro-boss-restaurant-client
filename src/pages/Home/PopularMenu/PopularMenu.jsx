import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTile/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="my-12">
      <SectionTitle
        subheading="Check it Out"
        heading="From Our Menu"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menu?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 mt-4 mx-auto  block">View Full Menu</button>
    </section>
  );
};
export default PopularMenu;
