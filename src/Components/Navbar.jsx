const Navbar = () => {
  return (
    <div className="bg-white flex justify-between shadow-md  p-4">
      <h3 className="font-bold text-xl md:pl-12  ">Where is the World?</h3>
      <div>
        {/* <FontAwesomeIcon icon="fa-light fa-moon" /> */}
        <button className=" text-sm md:font-bold md:text-l pt-1 md:pr-12 ">
          {" "}
          Dark Mode
        </button>
      </div>
    </div>
  );
};

export default Navbar;



