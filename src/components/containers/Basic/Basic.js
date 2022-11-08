import React, { useState, useEffect } from "react";
import "./Basic.scss";
import Birthday from "../../Birthday/Birthday";

import Inputs from "../../Inputs/Inputs";
import MaskedInput from "../../MaskedInput/MaskedInput";
import Checkbox from "../../Checkbox/Checkbox";
import Buttons from "../../Buttons/Buttons";

const Basic = (props) => {
  const [savedFullname] = useState(localStorage.getItem("fullname"));
  const [savedNickname] = useState(localStorage.getItem("nickname"));
  const [savedEmail] = useState(localStorage.getItem("email"));
  const [savedPhone] = useState(localStorage.getItem("phone"));
  const [basicForm, setBasicForm] = useState({
    fullname: savedFullname ? savedFullname : "",
    nickname: savedNickname ? savedNickname : "empty",
    email: savedEmail ? savedEmail : "",
    phone: savedPhone ? savedPhone : "empty",
  });

  function handleChange(e) {
    let id = e.target.id;
    let value = e.target.value;
    if (id === "fullname") {
      if (
        /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(
          value
        )
      ) {
        setBasicForm({ ...basicForm, [id]: value });
      } else {
        setBasicForm({ ...basicForm, [id]: "" });
      }
    }
    if (id === "phone") {
      const phoneValue = value.replace(/[^0-9]/g, "");
      if (/^[0-9]{11}$/.test(phoneValue)) {
        setBasicForm({ ...basicForm, [id]: phoneValue });
      } else if (!phoneValue) {
        setBasicForm({ ...basicForm, [id]: "empty" });
      } else {
        setBasicForm({ ...basicForm, [id]: "" });
      }
    }
    if (id === "nickname") {
      if (/^.\S+$/.test(value)) {
        setBasicForm({ ...basicForm, [id]: value });
      } else if (!value) {
        setBasicForm({ ...basicForm, [id]: "empty" });
      } else {
        setBasicForm({ ...basicForm, [id]: "" });
      }
    }
    if (id === "email") {
      if (/^[^@ \n\r\t]+@[^@ \n\r\t]+\.[^@ \n\r\t]+$/.test(value)) {
        setBasicForm({ ...basicForm, [id]: value });
      } else {
        setBasicForm({ ...basicForm, [id]: "" });
      }
    }
  }

  useEffect(() => {
    document.title = "Form - Basic";
    for (const item in basicForm) {
      let storageValue = localStorage.getItem(item);
      if (storageValue !== "empty") {
        document.getElementById(item).value = storageValue;
      }
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (basicForm.fullname) {
      localStorage.setItem("fullname", basicForm.fullname);
    } else {
      localStorage.setItem("fullname", "");
    }

    if (basicForm.nickname) {
      localStorage.setItem("nickname", basicForm.nickname);
    } else {
      localStorage.setItem("nickname", "");
    }
    if (basicForm.email) {
      localStorage.setItem("email", basicForm.email);
    } else {
      localStorage.setItem("email", "");
    }
    if (basicForm.phone) {
      localStorage.setItem("phone", basicForm.phone);
    } else {
      localStorage.setItem("phone", "");
    }
  }, [basicForm]);
  return (
    <div className="basic-container">
      <Inputs
        required={true}
        labelText="Full Name *"
        placeholder="Foo Bar"
        spanText="Please enter your Name"
        id="fullname"
        type="text"
        onChange={handleChange}
      />
      <Inputs
        required={true}
        labelText="Nickname"
        placeholder="Juanito"
        id="nickname"
        type="text"
        onChange={handleChange}
        spanText="Invalid Nickname"
      />
      <div className="email-phone-container">
        <Inputs
          widthContainer={60}
          required={true}
          labelText="Email *"
          placeholder="foo@bar.com"
          id="email"
          type="email"
          onChange={handleChange}
          spanText="Please enter your Email"
        />
        <MaskedInput onChange={handleChange} />
      </div>
      <Birthday spanBirthday={props.spanBirthday} />
      <Checkbox />
      <Buttons
        type={0}
        id="basic-button"
        buttonText="Next"
        onClick={props.handleClickBasic}
        containerId="container-basic-button"
      />
    </div>
  );
};

export default Basic;
