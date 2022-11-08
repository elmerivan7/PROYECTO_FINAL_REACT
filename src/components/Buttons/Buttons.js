import React, { useState, useEffect } from "react";

import "./Buttons.scss";

import Check from "../../images/check.png";
import Next from "../../images/next.png";
import Plus from "../../images/plus.png";
import Vector from "../../images/vector.png";

import PropTypes from "prop-types";

const Buttons = (props) => {
  const [imgOne, setImgOne] = useState();
  const [imgOneAlt, setImgOneAlt] = useState();
  const [imgTwo, setImgTwo] = useState();
  const [imgTwoAlt, setImgTwoAlt] = useState();

  useEffect(() => {
    if (props.type === 0) {
      setImgTwo(Next);
      setImgTwoAlt("Next icon");
    } else if (props.type === 1) {
      setImgOne(Plus);
      setImgOneAlt("Plus icon");
      setImgTwo(Next);
      setImgTwoAlt("Next icon");
    } else if (props.type === 2) {
      setImgOne(Check);
      setImgOneAlt("Check icon");
    } else if (props.type === 3) {
      setImgTwo(Vector);
      setImgTwoAlt("Vector icon");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="buttons-container"
      data-testid="buttons-component"
      id={props.containerId}
      style={{ visibility: props.buttonVisibility }}
    >
      <button
        style={{ width: props.width + "px" }}
        onClick={props.onClick}
        id={props.id}
        type={props.type}
      >
        {imgOne && (
          <img
            style={{
              width: props.imgOneWidth + "px",
              height: props.imgOneHeight + "px",
            }}
            src={imgOne}
            alt={imgOneAlt}
            data-testid="imgOne"
          />
        )}
        {props.buttonText}
        {imgTwo && (
          <img
            src={imgTwo}
            alt={imgTwoAlt}
            style={{
              width: props.imgTwoWidth + "px",
              height: props.imgTwoHeight + "px",
            }}
            data-testid="imgTwo"
          />
        )}
      </button>
    </div>
  );
};

export default Buttons;

Buttons.propTypes = {
  onClick: PropTypes.func,
  buttonText: PropTypes.string,
  width: PropTypes.number,
  imgOneWidth: PropTypes.number,
  imgTwoWidth: PropTypes.number,
  imgOneHeight: PropTypes.number,
  imgTwoHeight: PropTypes.number,
  buttonVisibility: PropTypes.string,
};

Buttons.defaultProps = {
  onClick: undefined,
  buttonText: "Button",
  width: 80,
  imgOneWidth: 8,
  imgTwoWidth: 8,
  imgOneHeight: 8,
  imgTwoHeight: 8,
  buttonVisibility: "visible",
};
