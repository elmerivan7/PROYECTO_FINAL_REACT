import "./Checkbox.scss";

import { useEffect, useState } from "react";

import PropTypes from "prop-types";

const Checkbox = (props) => {
  const [savedCheckbox] = useState(localStorage.getItem("checkbox"));
  const [isChecked, setIsChecked] = useState(savedCheckbox ? true : false);

  useEffect(() => {
    if (isChecked) {
      localStorage.setItem("checkbox", "Checked");
    } else {
      localStorage.setItem("checkbox", "");
    }
  }, [isChecked]);

  return (
    <div className="checkbox-container" data-testid="checkbox-component">
      <label className="labelTest">
        <input
          type="checkbox"
          checked={isChecked}
          className={isChecked ? "checked" : "?"}
          id="checkbox"
          onChange={() => setIsChecked((prev) => !prev)}
          value={isChecked}
          data-testid="checkbox"
        />
        <span data-testid="terms-checkbox" className="spanChk">
          {props.terms}
        </span>
      </label>
      <span
        id="span-checkbox"
        style={{ visibility: props.showError ? "visible" : "hidden" }}
      >
        {props.error}
      </span>
    </div>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  terms: PropTypes.string,
  error: PropTypes.string,
  showError: PropTypes.bool,
};

Checkbox.defaultProps = {
  terms: "I accept the terms and privacy",
  error: "Please confirm the terms",
  showError: false,
};
