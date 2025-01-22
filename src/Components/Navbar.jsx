import { useContext } from "react";
import { ThemeContext } from "../Provider/themeContext";
import { IoMoonOutline } from "react-icons/io5";

const Navbar = () => {
  const { isDarkMode, toggle } = useContext(ThemeContext);
  return (
    <div
      className={`${
        isDarkMode ? "bg-[#2B3743] text-white" : "bg-white"
      }  flex justify-between shadow-md  p-4`}
    >
      <h3 className="font-bold text-xl md:pl-12  ">Where is the World?</h3>
      <div>
        <button
          onClick={toggle}
          className=" text-sm flex md:font-bold md:text-l pt-1 md:pr-12 "
        >
          {" "}
          <IoMoonOutline className=" size-4 mr-1 md:mr-3" />
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
