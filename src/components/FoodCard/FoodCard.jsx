const FoodCard = ({ item }) => {
    const {name,recipe,price,image} = item || {}
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
          <button className="btn btn-outline border-0 border-b-4 mt-4 mx-auto  block">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default FoodCard;
