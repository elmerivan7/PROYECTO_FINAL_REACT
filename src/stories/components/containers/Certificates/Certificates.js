import React, { useState, useEffect } from "react";
import "./Certificates.scss";

import Inputs from "../../Inputs/Inputs";
import Buttons from "../../Buttons/Buttons";
import whiteX from "../../../images/whitex.png";

const Certificates = (props) => {
  const [savedCertificates] = useState(localStorage.getItem("certificates"));
  const [savedTeamname] = useState(localStorage.getItem("teamname"));
  const [savedInstitution] = useState(localStorage.getItem("institution"));
  const [savedGraduation] = useState(localStorage.getItem("graduation"));
  const [showList, setShowList] = useState(false);
  const [certificateError, setCertificateError] = useState(
    "Invalid Certificate"
  );
  const [certificates, setCertificates] = useState(
    savedCertificates ? JSON.parse(savedCertificates) : []
  );
  const [certificatesForm, setCertificatesForm] = useState({
    certificate: "",
    teamname: savedTeamname ? savedTeamname : "",
    institution: savedInstitution ? savedGraduation : "",
    graduation: savedGraduation ? savedGraduation : "",
  });
  function handleChange(e) {
    let id = e.target.id;
    let value = e.target.value;
    if (id === "certificate") {
      if (
        // eslint-disable-next-line
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
          value
        )
      ) {
        setCertificatesForm({ ...certificatesForm, [id]: value });
      } else {
        setCertificatesForm({ ...certificatesForm, [id]: "" });
      }
    }
    if (id === "teamname") {
      if (
        // eslint-disable-next-line
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
          value
        )
      ) {
        setCertificatesForm({ ...certificatesForm, [id]: value });
      } else {
        setCertificatesForm({ ...certificatesForm, [id]: "" });
      }
    }
    if (id === "institution") {
      setCertificatesForm({ ...certificatesForm, [id]: value });
    }

    if (id === "graduation") {
      setCertificatesForm({ ...certificatesForm, [id]: value });
    }
  }
  function handleAddCertificate() {
    if (certificatesForm.certificate && certificates.length <= 4) {
      setCertificates([...certificates, certificatesForm.certificate]);
      document.getElementById("certificate-error").style.visibility = "hidden";
      document.getElementById("certificate").value = "";
      setCertificatesForm({ ...certificatesForm, certificate: "" });
    } else if (!certificatesForm.certificate) {
      document.getElementById("certificate-error").style.visibility = "visible";
      setCertificateError("Invalid certificate.");
    } else if (certificates.length === 5) {
      document.getElementById("certificate-error").style.visibility = "visible";
      setCertificateError(
        "Sorry, only 5 certificates are allowed. You can remove one certificate instead."
      );
    }
  }

  function handleRemoveFromCertificates(i) {
    setCertificates(certificates.filter((data, index) => index !== i));
  }

  function handleList() {
    setShowList(!showList);
  }

  useEffect(() => {
    document.title("Form - Certificates")
    for (const item in certificatesForm) {
      let storageValue = localStorage.getItem(item);
      if (storageValue) {
        document.getElementById(item).value = storageValue;
      }
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (certificatesForm.certificate) {
      localStorage.setItem("certificate", certificatesForm.certificate);
    } else {
      localStorage.setItem("certificate", "");
    }
    if (certificatesForm.teamname) {
      localStorage.setItem("teamname", certificatesForm.teamname);
    } else {
      localStorage.setItem("teamname", "");
    }
    if (certificatesForm.institution) {
      localStorage.setItem("institution", certificatesForm.institution);
    } else {
      localStorage.setItem("institution", "");
    }
    if (certificatesForm.graduation) {
      localStorage.setItem("graduation", certificatesForm.graduation);
    } else {
      localStorage.setItem("graduation", "");
    }
    if (certificates) {
      localStorage.setItem("certificates", JSON.stringify(certificates));
    }
  }, [certificates, certificatesForm]);

  return (
    <div className="certificates-container">
      <Inputs
        required={false}
        labelText="Certificates"
        placeholder=""
        id="certificate"
        type="text"
        onChange={handleChange}
      />
      <div className="certificates-buttons">
        <Buttons
          type={3}
          onClick={handleList}
          buttonText="Certificates"
          containerId="certificates-button-container"
          width={140}
          buttonVisibility={certificates.length ? "visible" : "hidden"}
        />
        {showList && certificates && (
          <div className="certificates-list">
            {certificates.map((item, i) => (
              <div key={`${item}${i}`} className="certificate">
                <p>{item}</p>
                <img
                  id="whiteX"
                  src={whiteX}
                  alt="white x icon"
                  draggable="false"
                  onClick={() => handleRemoveFromCertificates(i)}
                />
              </div>
            ))}
          </div>
        )}
        <Buttons
          type={1}
          buttonText="More"
          onClick={handleAddCertificate}
          containerId="more-button-container"
          width={90}
        />
      </div>
      <div className="error-container">
        <span id="certificate-error">{certificateError}</span>
      </div>
      <Inputs
        required={true}
        labelText="Team Name *"
        placeholder=""
        spanText="Please enter your Team Name"
        id="teamname"
        type="text"
        onChange={handleChange}
      />
      <Inputs
        required={true}
        labelText="Institution *"
        placeholder="Universidade Federal da Paraíba"
        spanText="Please enter your Institution"
        id="institution"
        type="text"
        onChange={handleChange}
      />
      <Inputs
        required={true}
        labelText="Graduation *"
        placeholder="Ciência da Computação"
        spanText="Please enter your Graduation"
        id="graduation"
        type="text"
        onChange={handleChange}
      />
      <Buttons
        onClick={props.handleClickCertificates}
        type={2}
        imgOneHeight={12}
        imgOneWidth={12}
        buttonText="Finish"
        containerId="finish-button-container"
      />
      <div className="error-finish-container">
        <span className="error-finish" id="error-finish">
          Ops you miss some field
        </span>
      </div>
    </div>
  );
};

export default Certificates;
