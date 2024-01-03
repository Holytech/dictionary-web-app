import PropTypes from "prop-types";
const ErrorPage = ({ err }) => {
  return (
    <div className="w-full h-[70vh] text-4xl text-red-600 mt-10 flex md:flex-row flex-col items-center justify-center gap-5">
      <img
        src="/no_definition.png"
        alt="no-definition"
        className="h-[200px] w-auto"
      />
      {err}
    </div>
  );
};
ErrorPage.propTypes = {
  err: PropTypes.string,
};

export default ErrorPage;
