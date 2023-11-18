import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTile/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic()
  const onSubmit =async (data) => {
    console.log(data)
    const imageFile = {image:data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type':'multipart/form-data'
      }
    })
    console.log(res.data);
  };
  return (
    <div>
      <div>
        <SectionTitle
          heading="add an item"
          subheading="what's new"
        ></SectionTitle>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6 ">
            <label className="label">
              <span className="label-text">Recipie Name*</span>
            </label>
            <input
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
                defaultValue="default"
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
              <input
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
            <textarea
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
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddItems;
