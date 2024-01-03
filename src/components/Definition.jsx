import PropTypes from "prop-types";

const Definition = ({ definitions, isDark, synonyms, antonyms }) => {
  return (
    <>
      <div className="w-full">
        <p className={`text-xl underline italic`}>Meaning</p>
        <ul className="w-full list-disc mt-2">
          {definitions.map((def, index) => (
            <li className="text-xl" key={index}>
              {def.definition}
            </li>
          ))}
        </ul>

        {synonyms.length > 0 ? (
          <p
            className={`text-md italic mt-2 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Synonyms: {synonyms.join(", ")}
          </p>
        ) : (
          ""
        )}
        {antonyms.length > 0 ? (
          <p
            className={`text-md italic ${isDark ? "text-white" : "text-black"}`}
          >
            Antonyms: {antonyms.join(", ")}
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

Definition.propTypes = {
  definitions: PropTypes.array,
  synonyms: PropTypes.array,
  antonyms: PropTypes.array,
  isDark: PropTypes.bool,
};

export default Definition;
