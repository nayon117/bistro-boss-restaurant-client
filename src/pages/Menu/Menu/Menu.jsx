import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title='our menu'
        subtitle='Would you like to try a dish?'
      ></Cover>
      <MenuCategory></MenuCategory>
    </div>
  );
};
export default Menu;
