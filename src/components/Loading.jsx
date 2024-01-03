import PropTypes from "prop-types";
import { AiOutlineLoading } from "react-icons/ai";
const Loading = ({ isDark }) => {
  return (
    <>
      <div
        className={`w-full h-[70vh] mt-2 py-28 text-3xl flex gap-3 items-center justify-center ${
          isDark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <AiOutlineLoading className="animate-spin" />
        Loading...
      </div>
    </>
  );
};

Loading.propTypes = {
  isDark: PropTypes.bool,
};

export default Loading;
