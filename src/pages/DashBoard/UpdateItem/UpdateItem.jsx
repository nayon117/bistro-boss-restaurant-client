import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTile/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateItem = () => {
  const {name,recipe,price,category,_id} = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  
  
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // send the menu item data to server with image
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount>0) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} updated Successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };

  return (
    <div>
      <SectionTitle
        heading="update Item "
        subheading="Refresh info"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6 ">
            <label className="label">
              <span className="label-text">Recipie Name*</span>
            </label>
            <input defaultValue={name}
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipie Name "
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex items-center gap-6">
            {/* category */}
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full  "
              >
                <option disabled value="default">
                  select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input defaultValue={price}
                {...register("price", { required: true })}
                type="number"
                placeholder="price"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* recipie details  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipie Details</span>
            </label>
            <textarea defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Details"
            ></textarea>
          </div>
          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button type="submit" className="btn bg-orange-400">
            Update Menu Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};
export default UpdateItem;
