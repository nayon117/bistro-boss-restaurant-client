const SectionTitle = ({subheading,heading}) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-10">
          <h4 className="text-yellow-500 mb-2">---{subheading }---</h4>
          <h3 className="text-4xl border-gray-600 uppercase py-4 border-y-2">{heading }</h3>
    </div>
  );
};
export default SectionTitle;