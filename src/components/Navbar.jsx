import { GiBookshelf } from "react-icons/gi";
import { FaToggleOn, FaToggleOff, FaRegMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import PropTypes from "prop-types";

const Navbar = ({ isDark, setIsDark, font, setFont }) => {
  return (
    <div className="w-full flex justify-between items-center my-6">
      <GiBookshelf className=" text-7xl text-gray-400" />
      <div className="flex gap-5 items-center">
        <select
          className={`border-r-2 px-10 appearance-none outline-none bg-transparent ${
            isDark ? "text-white" : "text-black"
          } font-${font}`}
          onChange={(e) => setFont(e.target.value)}
        >
          <option
            value="serif"
            className={`${
              isDark ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            Serif
          </option>
          <option
            value="sans"
            className={`${
              isDark ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            Sans
          </option>
          <option
            value="mono"
            className={`${
              isDark ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            Mono
          </option>
        </select>
        <div className="flex gap-5 items-center">
          {isDark ? (
            <>
              <FaToggleOn
                className="text-4xl cursor-pointer text-purple-600"
                onClick={() => {
                  setIsDark(!isDark);
                }}
              />
            </>
          ) : (
            <>
              <FaToggleOff
                className="text-4xl cursor-pointer"
                onClick={() => {
                  setIsDark(!isDark);
                }}
              />
            </>
          )}
          {isDark ? (
            <>
              <BsFillSunFill className="text-3xl text-gray-200" />
            </>
          ) : (
            <>
              <FaRegMoon className="text-3xl" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  isDark: PropTypes.bool,
  setIsDark: PropTypes.func,
  font: PropTypes.string,
  setFont: PropTypes.func,
};

export default Navbar;
