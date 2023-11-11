import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, coverImg, title }) => {
  return (
    <div className="pt-12">
      {title && (
        <Cover
          img={coverImg}
           title={title}
        ></Cover>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};
export default MenuCategory;
