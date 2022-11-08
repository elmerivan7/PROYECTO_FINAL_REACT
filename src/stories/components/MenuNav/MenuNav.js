import React, { useState } from "react";
import "./MenuNav.scss";

import PropTypes from "prop-types";

const MenuNav = (props) => {
  const tabs = ["Basic", "Social", "Certificates"];
  const [actualTab, setActualTab] = useState("Basic");
  const abledTabs = ["Basic"];

  function handleClick(e) {
    tabs.forEach((tab) => {
      const el = document.getElementById(tab);
      el.classList.remove("focus");
    });
    const el = document.getElementById(e.target.id);
    setActualTab(e.target.id);
    el.classList.add("focus");
  }
  return (
    <div className="nav-container">
      {tabs.map((item, i) => (
        <div className="button-container" key={item}>
          <button
            className={item + (actualTab === item ? " focus" : "")}
            onClick={handleClick}
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
