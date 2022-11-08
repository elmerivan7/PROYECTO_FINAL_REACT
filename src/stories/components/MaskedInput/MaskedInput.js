import React from "react";
import InputMask from "react-input-mask";
import "./MaskedInput.scss";

import PropTypes from "prop-types";

const MaskedInput = (props) => {
  return (
    <div className="phone-container" data-testid="maskedInput-component">
      <div>
        <label data-testid="label-maskedInput" htmlFor="phone">
          Phone
        </label>
        <span id="span-phone" data-testid="error-maskedinput">
          Invalid Number
        </span>
      </div>
      <InputMask
        mask="(99) 99999-9999"
        value={props.value}
        id="phone"
        placeholder="(83) 00000-0000"
        onChange={props.onChange}
        data-testid="inputMask-component"
      />
    </div>
  );
};

export default MaskedInput;

MaskedInput.propTypes = {
  onChange: PropTypes.func,
};

MaskedInput.defaultProps = {
  onChange: undefined,
};
