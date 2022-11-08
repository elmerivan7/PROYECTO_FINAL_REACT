import React, { useState } from "react";
import "./Home.scss";

import Success from "../../components/containers/Success/Success";
import Header from "../../components/Header/Header";
import MenuNav from "../../components/MenuNav/MenuNav";
import Basic from "../../components/containers/Basic/Basic";
import Social from "../../components/containers/Social/Social";
import Certificates from "../../components/containers/Certificates/Certificates";

const Home = () => {
  const tabs = ["Basic", "Social", "Certificates"];
  const [actualTab, setActualTab] = useState("Basic");
  const [abledTabs, setAbledTabs] = useState(["Basic"]);
  const [spanBirthday, setSpanBirthday] = useState();

  console.log(actualTab);

  function handleClick(e) {
    tabs.forEach((tab) => {
      const el = document.getElementById(tab);
      el.classList.remove("focus");
    });
    const el = document.getElementById(e.target.id);
    setActualTab(e.target.id);
    el.classList.add("focus");
  }

  function handleClickBasic() {
    const phoneStorage = localStorage.getItem("phone");
    const fullnameStorage = localStorage.getItem("fullname");
    const nicknameStorage = localStorage.getItem("nickname");
    const emailStorage = localStorage.getItem("email");
    const ageStorage = localStorage.getItem("age");
    const chkStorage = localStorage.getItem("checkbox");
    if (
      phoneStorage &&
      fullnameStorage &&
      nicknameStorage &&
      emailStorage &&
      ageStorage &&
      chkStorage
    ) {
      setAbledTabs([...abledTabs, "Social"]);
      setActualTab("Social");
    }

    if (!phoneStorage) {
      document.getElementById("span-phone").style.visibility = "visible";
    } else {
      document.getElementById("span-phone").style.visibility = "hidden";
    }

    if (!fullnameStorage) {
      document.getElementById("span-fullname").style.visibility = "visible";
    } else {
      document.getElementById("span-fullname").style.visibility = "hidden";
    }
    if (!nicknameStorage) {
      document.getElementById("span-nickname").style.visibility = "visible";
    } else {
      document.getElementById("span-nickname").style.visibility = "hidden";
    }
    if (!emailStorage) {
      document.getElementById("span-email").style.visibility = "visible";
    } else {
      document.getElementById("span-email").style.visibility = "hidden";
    }
    if (!ageStorage) {
      document.getElementById("span-birthday").style.visibility = "visible";
      setSpanBirthday("Please enter your Birthday");
    } else if (JSON.parse(ageStorage) < 18) {
      document.getElementById("span-birthday").style.visibility = "visible";
      setSpanBirthday("Invalid Age");
    } else {
      document.getElementById("span-birthday").style.visibility = "hidden";
    }
    if (!chkStorage) {
      document.getElementById("span-checkbox").style.visibility = "visible";
    } else {
      document.getElementById("span-checkbox").style.visibility = "hidden";
    }
  }

  function handleClickSocial() {
    const linkedinStorage = localStorage.getItem("linkedin");
    const githubStorage = localStorage.getItem("github");
    if (linkedinStorage && githubStorage) {
      setAbledTabs([...abledTabs, "Certificates"]);
      setActualTab("Certificates");
      setAbledTabs(["Basic"]);
    }
    if (!linkedinStorage) {
      document.getElementById("span-linkedin").style.visibility = "visible";
    } else {
      document.getElementById("span-linkedin").style.visibility = "hidden";
    }
    if (!githubStorage) {
      document.getElementById("span-github").style.visibility = "visible";
    } else {
      document.getElementById("span-github").style.visibility = "hidden";
    }
  }

  function handleClickCertificates() {
    const linkedinStorage = localStorage.getItem("linkedin");
    const githubStorage = localStorage.getItem("github");
    const teamnameStorage = localStorage.getItem("teamname");
    const institutionStorage = localStorage.getItem("institution");
    const graduationStorage = localStorage.getItem("graduation");
    const phoneStorage = localStorage.getItem("phone");
    const fullnameStorage = localStorage.getItem("fullname");
    const nicknameStorage = localStorage.getItem("nickname");
    const emailStorage = localStorage.getItem("email");
    const ageStorage = localStorage.getItem("age");
    const chkStorage = localStorage.getItem("checkbox");

    if (
      linkedinStorage &&
      githubStorage &&
      teamnameStorage &&
      institutionStorage &&
      graduationStorage &&
      phoneStorage &&
      fullnameStorage &&
      nicknameStorage &&
      emailStorage &&
      ageStorage &&
      chkStorage
    ) {
      setActualTab("Success");
    }
    if (!teamnameStorage) {
      document.getElementById("span-teamname").style.visibility = "visible";
    } else {
      document.getElementById("span-teamname").style.visibility = "hidden";
    }

    if (!institutionStorage) {
      document.getElementById("span-institution").style.visibility = "visible";
    } else {
      document.getElementById("span-institution").style.visibility = "hidden";
    }

    if (!graduationStorage) {
      document.getElementById("span-graduation").style.visibility = "visible";
    } else {
      document.getElementById("span-graduation").style.visibility = "hidden";
    }

    if (
      !linkedinStorage ||
      !githubStorage ||
      !teamnameStorage ||
      !institutionStorage ||
      !graduationStorage ||
      !phoneStorage ||
      !fullnameStorage ||
      !nicknameStorage ||
      !emailStorage ||
      !ageStorage ||
      !chkStorage
    ) {
      document.getElementById("error-finish").style.visibility = "visible";
    }
  }
  function handleClickSuccess() {
    localStorage.clear();
    setActualTab("Basic");
  }
  return (
    <div className="home">
      {actualTab === "Basic" && <Header />}
      {actualTab === "Social" && <Header title="Second Tab" />}
      {actualTab === "Certificates" && <Header title="Third Tab" />}
      {actualTab === "Success" && <Header title="Success Tab" />}

      <div
        className="card"
        style={{ height: actualTab === "Success" ? "100%" : "620px" }}
      >
        {actualTab !== "Success" && (
          <div>
            <p className="card-title">Team Sign Up</p>
            <MenuNav
              tabs={tabs}
              handleClick={handleClick}
              abledTabs={abledTabs}
              actualTab={actualTab}
            />
          </div>
        )}
        {actualTab === "Basic" && (
          <Basic
            handleClickBasic={handleClickBasic}
            spanBirthday={spanBirthday}
          />
        )}
        {actualTab === "Social" && (
          <Social handleClickSocial={handleClickSocial} />
        )}
        {actualTab === "Certificates" && (
          <Certificates handleClickCertificates={handleClickCertificates} />
        )}
        {actualTab === "Success" && <Success onClick={handleClickSuccess} />}
      </div>
    </div>
  );
};

export default Home;
