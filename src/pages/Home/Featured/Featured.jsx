import SectionTitle from "../../../components/SectionTile/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
          <SectionTitle heading='From Our Menu' subheading='Check it Out'></SectionTitle>
          <div className="md:flex justify-center items-center pb-20 py-12 px-36 gap-6 bg-slate-500 bg-opacity-40">
          <div>
              <img src={featuredImg} alt="" />
          </div>
          <div className="space-y-2">
              <p>March 20, 2023</p>
              <h2>WHERE CAN I GET SOME?</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
              <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
          </div>
          </div>
    </div>
  );
};
export default Featured;