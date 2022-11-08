import React from "react";
import "./Header.scss";

import Titles from "../Titles/Titles";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <header data-testid="header-component">
      <p className="description" data-testid="description">{props.description}</p>
      <Titles title={props.title} />
    </header>
  );
};

export default Header;

Header.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

Header.defaultProps = {
  description: "Forms",
  title: "First Tab",
};
