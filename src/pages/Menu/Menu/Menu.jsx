import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTile/SectionTitle";

const Menu = () => {
  const [menu] = useMenu()
  const desserts = menu.filter(item => item.category === 'dessert')
  const soups = menu.filter(item => item.category === 'soup')
  const salads = menu.filter(item => item.category === 'salad')
  const pizzas = menu.filter(item => item.category === 'pizza')
  const offered = menu.filter(item => item.category === 'offered')
  
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover
        img={menuImg}
        title='our menu'
        subtitle='Would you like to try a dish?'
      ></Cover>
      <SectionTitle subheading='Dont miss' heading='Todays Offer'></SectionTitle>
      {/* offered menu items  */}
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert menu items */}
      <MenuCategory items={desserts} title='Desserts' coverImg={dessertImg}></MenuCategory>

      {/* pizza menu items  */}


    </div>
  );
};
export default Menu;
