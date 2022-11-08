import React, { useState, useEffect } from "react";
import "./Success.scss";

import Buttons from "../../Buttons/Buttons";

const Success = (props) => {
  const [fullname] = useState(localStorage.getItem("fullname"));
  const [nickname] = useState(localStorage.getItem("nickname"));
  const [email] = useState(localStorage.getItem("email"));
  const [phone] = useState(localStorage.getItem("phone"));
  const [birthday] = useState(localStorage.getItem("birthday"));
  const [age] = useState(localStorage.getItem("age"));
  const [linkedin] = useState(localStorage.getItem("linkedin"));
  const [github] = useState(localStorage.getItem("fullname"));
  const [certificates] = useState(
    JSON.parse(localStorage.getItem("certificates"))
  );
  const [teamname] = useState(localStorage.getItem("teamname"));
  const [institution] = useState(localStorage.getItem("institution"));
  const [graduation] = useState(localStorage.getItem("graduation"));

  useEffect(() => {
    document.title = "Success!";
  }, []);

  return (
    <div className="success-container" data-testid="success-component">
      <p>Your data has been sent successfully</p>
      <p>Full Name: {fullname}</p>
      {nickname && <p>Nickname: {nickname}</p>}
      <p>Email: {email}</p>
      {phone && <p>Phone: {phone}</p>}
      <p>Birthday: {birthday}</p>
      <p>Age: {age}</p>
      <p>Linkedin: {linkedin}</p>
      <p>Github: {github}</p>

      {certificates && (
        <div className="certificates-container">
          <p id="certificates-title">Certificates: </p>
          <div className="certificates-list">
            {certificates.map((item, i) => (
              <p key={i}> {item}</p>
            ))}
          </div>
        </div>
      )}
      <p>Team Name: {teamname}</p>
      <p>Graduation: {graduation}</p>
      <p>Institution: {institution}</p>

      <Buttons
        type={2}
        buttonText="Return"
        imgOneHeight={10}
        imgOneWidth={10}
        containerId="container-success-button"
        onClick={props.onClick}
      />
    </div>
  );
};

export default Success;
