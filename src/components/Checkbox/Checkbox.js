import "./Checkbox.scss";

import { useEffect, useState } from "react";

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
          I accept the terms and privacy
        </span>
      </label>
      <span id="span-checkbox">Please confirm the terms</span>
    </div>
  );
};

export default Checkbox;
