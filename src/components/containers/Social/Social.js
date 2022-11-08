import React, { useState, useEffect } from "react";
import "./Social.scss";

import Inputs from "../../Inputs/Inputs";
import Buttons from "../../Buttons/Buttons";

const Social = (props) => {
  const [savedGithub] = useState(localStorage.getItem("github"));
  const [savedLinkedin] = useState(localStorage.getItem("linkedin"));
  const [socialForm, setSocialForm] = useState({
    linkedin: savedLinkedin ? savedLinkedin : "empty",
    github: savedGithub ? savedGithub : "",
  });

  function handleChange(e) {
    let id = e.target.id;
    let value = e.target.value;
    if (id === "linkedin") {
      if (
        // eslint-disable-next-line
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
          value
        )
      ) {
        setSocialForm({ ...socialForm, [id]: value });
      } else if (!value) {
        setSocialForm({ ...socialForm, [id]: "empty" });
      } else {
        setSocialForm({ ...socialForm, [id]: "" });
      }
    }
    if (id === "github") {
      if (
        // eslint-disable-next-line
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
          value
        )
      ) {
        setSocialForm({ ...socialForm, [id]: value });
      } else {
        setSocialForm({ ...socialForm, [id]: "" });
      }
    }
  }

  useEffect(() => {
    document.title = "Form - Social";
    for (const item in socialForm) {
      let storageValue = localStorage.getItem(item);
      if (storageValue !== "empty") {
        document.getElementById(item).value = storageValue;
      }
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (socialForm.linkedin) {
      localStorage.setItem("linkedin", socialForm.linkedin);
    } else {
      localStorage.setItem("linkedin", "");
    }
    if (socialForm.github) {
      localStorage.setItem("github", socialForm.github);
    } else {
      localStorage.setItem("github", "");
    }
  }, [socialForm]);
  return (
    <div className="social-container" data-testid="social-component">
      <Inputs
        labelText="Linkedin"
        placeholder=""
        required={true}
        spanText="Invalid URL"
        onChange={handleChange}
        id="linkedin"
        type="text"
      />
      <Inputs
        labelText="Github *"
        placeholder=""
        required={true}
        spanText="Please enter your GitHub Link"
        onChange={handleChange}
        id="github"
        type="text"
      />
      <Buttons
        type={0}
        buttonText="Next"
        id="social-button"
        containerId="container-social-button"
        onClick={props.handleClickSocial}
      />
    </div>
  );
};

export default Social;
