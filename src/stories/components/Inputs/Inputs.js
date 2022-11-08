import React from "react";
import "./Inputs.scss";

import PropTypes from "prop-types";

const Inputs = (props) => {
  return (
    <div
      className="input-container"
      style={{ width: props.widthContainer + "%" }}
      data-testid="inputs-component"
    >
      <div className="label-span-container">
        <label htmlFor={props.id} data-testid="label-input">
          {props.labelText}
        </label>
        {props.required && (
          <span
            style={{ visibility: props.showSpan ? "visible" : "hidden" }}
            data-testid="error-input"
            id={"span-" + props.id}
          >
            {props.spanText}
          </span>
        )}
      </div>
      <input
        placeholder={props.placeholder}
        type={props.type}
        id={props.id}
        required={props.required}
        style={{ width: props.widthInput + "%" }}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        data-testid="input"
      />
    </div>
  );
};

export default Inputs;

Inputs.propTypes = {
  labelText: PropTypes.string,
  spanText: PropTypes.string,
  placeholder: PropTypes.string,
  widthInput: PropTypes.number,
  widthContainer: PropTypes.number,
  showSpan: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

Inputs.defaultProps = {
  labelText: "default label",
  spanText: "default span",
  placeholder: "placeholder",
  widthInput: 100,
  widthContainer: 100,
  showSpan: false,
  required: true,
  onChange: undefined,
};
