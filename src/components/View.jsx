import { FaPlayCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import usePhonetics from "./usePhonetics";
import Definition from "./Definition";

const View = ({ isDark, data, font }) => {
  var phonetics = usePhonetics(data[0].phonetics);
  // var meanings = data[0].meanings;
  var audio = new Audio(phonetics.audio);
  return (
    <>
      <div className="w-full">
        <div className="w-full flex items-center justify-between mt-10">
          <div>
            <h1
              className={`text-4xl font-${font} ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              {data[0].word}
            </h1>
            <h1 className="text-purple-600 text-xl mt-2">{phonetics.text}</h1>
          </div>
          {phonetics.audio ? (
            <FaPlayCircle
              className="text-purple-600 text-5xl cursor-pointer"
              onClick={() => audio.play()}
            />
          ) : (
            ""
          )}
        </div>
        {data.map((item, i) => (
          <div key={i}>
            {item.meanings.map((each, index) => (
              <>
                <div
                  className={`w-full mt-14 font-${font} ${
                    isDark ? "text-white" : "text-black"
                  }`}
                  key={index}
                >
                  <div className="w-full flex gap-5 items-center justify-between">
                    <h1 className="text-xl font-bold uppercase">{each.partOfSpeech}</h1>
                    <hr className="w-full h-[2px] bg-gray-200 border-0 dark:bg-gray-700" />
                  </div>
                  <Definition
                    definitions={each.definitions}
                    synonyms={each.synonyms}
                    antonyms={each.antonyms}
                    isDark={isDark}
                  />
                </div>
              </>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

View.propTypes = {
  isDark: PropTypes.bool,
  data: PropTypes.array,
  font: PropTypes.string,
};

export default View;
