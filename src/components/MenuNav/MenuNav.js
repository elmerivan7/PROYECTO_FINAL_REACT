import React from "react";
import "./MenuNav.scss";

import PropTypes from "prop-types";

const MenuNav = (props) => {
  return (
    <div className="nav-container">
      {props.tabs.map((item, i) => (
        <div className="button-container" key={item}>
          <button
            className={item + (props.actualTab === item ? " focus" : "")}
            onClick={props.handleClick}
            disabled={!props.abledTabs.includes(item)}
            id={item}
            data-testid="button-tab"
          >
            {item}
          </button>
          <span className="focus-border"></span>
        </div>
      ))}
    </div>
  );
};

export default MenuNav;

MenuNav.propTypes = {
  handleClick: PropTypes.func,
};

MenuNav.defaultProps = {
  handleClick: undefined,
};
