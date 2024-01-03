import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";

const Search = ({ isDark, word, setWord, submitForm, disabled }) => {
  return (
    <>
      <form
        className={`flex gap-2 ${
          isDark ? "bg-[#262525]" : "bg-[#e5e5e5]"
        } w-full rounded-xl py-2 px-4 mt-10 items-center`}
        onSubmit={submitForm}
      >
        <input
          type="text"
          placeholder="Enter search word"
          className={`w-full h-[40px] focus:outline-none text-xl bg-transparent ${
            isDark
              ? "text-white placeholder:text-white"
              : "text-black placeholder:text-black"
          }`}
          value={word}
          onChange={(e) => setWord(e.target.value)}
          disabled={disabled}
        />
        <button>
          <FaSearch className="text-3xl text-purple-600 cursor-pointer" />
        </button>
      </form>
    </>
  );
};

Search.propTypes = {
  isDark: PropTypes.bool,
  word: PropTypes.string,
  setWord: PropTypes.func,
  submitForm: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Search;
