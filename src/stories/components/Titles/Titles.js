import React from "react";
import "./Titles.scss";

import PropTypes from "prop-types";

const Titles = (props) => {
  return <h1 data-testid="titles-component">{props.title}</h1>;
};

export default Titles;

Titles.propTypes = {
  title: PropTypes.string,
};

Titles.defaultProps = {
  title: "Default Title",
};
