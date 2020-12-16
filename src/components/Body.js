import React from "react";
import PropTypes from "prop-types";

const Body = ({ body }) => {
  return <div className="main_content">{body}</div>;
};

export default Body;

// Props
Body.propTypes = {
  body: PropTypes.object.isRequired,
};
