import React, { useEffect, useState } from "react";
import "./Birthday.scss";

import PropTypes from "prop-types";

const Birthday = (props) => {
  const [savedAge] = useState(localStorage.getItem("age"));
  const [savedDay] = useState(localStorage.getItem("day"));
  const [savedMonth] = useState(localStorage.getItem("month"));
  const [savedYear] = useState(localStorage.getItem("year"));

  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );
  const yearNow = new Date().getFullYear();
  const [years] = useState(range(1910, yearNow, 1));

  const [age, setAge] = useState(savedAge ? savedAge : "");
  const Days = Array.from({ length: 31 }, (v, k) => k + 1);
  const Months = Array.from({ length: 12 }, (v, k) => k + 1);

  const [birth, setBirth] = useState({
    day: savedDay ? savedDay : "",
    month: savedMonth ? savedMonth : "",
    year: savedYear ? savedYear : "",
  });

  function padStart(date) {
    return String(date).padStart(2, "0");
  }
  function handleChange(e) {
    setBirth({ ...birth, [e.target.id]: e.target.value });
  }

  useEffect(() => {
    if (birth.day && birth.month && birth.year) {
      let date = new Date();
      let actualDay = date.getDate();
      let actualMonth = 1 + date.getMonth();
      let actualYear = date.getUTCFullYear();
      let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (birth.day > actualDay) {
        actualDay = actualDay + month[actualMonth - 1];
        actualMonth = actualMonth - 1;
      }
      if (birth.month > actualMonth) {
        actualMonth = actualMonth + 12;
        actualYear = actualYear - 1;
      }
      if (actualYear > birth.year) {
        setAge(actualYear - birth.year);
      } else if (actualYear < birth.year) {
        setAge("");
      }
    } else {
      localStorage.setItem("age", "");
    }
  }, [birth]);

  useEffect(() => {
    localStorage.setItem("age", age);
    localStorage.setItem("day", birth.day);
    localStorage.setItem("month", birth.month);
    localStorage.setItem("year", birth.year);
  }, [age, birth]);
  return (
    <div className="birthday-container" data-testid="birthday-component">
      <div className="span-label">
        <label htmlFor="birthday">Birthday *</label>
        <span id="span-birthday">{props.spanBirthday}</span>
      </div>
      <div className="selects-container" data-testid="days-select">
        <div className="select">
          <label htmlFor="days">Day</label>
          <select
            defaultValue={birth.day ? birth.day : "Default"}
            name="day"
            id="day"
            onChange={handleChange}
          >
            <option disabled value="Default">
              Day
            </option>
            {Days.map((item, i) => (
              <option key={i} value={item} data-testid="days-options">
                {padStart(item)}
              </option>
            ))}
          </select>
        </div>
        <div className="select">
          <label htmlFor="months">Month</label>
          <select
            name="month"
            id="month"
            onChange={handleChange}
            defaultValue={birth.month ? birth.month : "Default"}
            data-testid="months-select"
          >
            <option disabled value="Default">
              Month
            </option>
            {Months.map((item, i) => (
              <option key={i} value={item} data-testid="months-options">
                {padStart(item)}
              </option>
            ))}
          </select>
        </div>
        <div className="select">
          <label htmlFor="years">Year</label>
          <select
            data-testid="years-select"
            name="year"
            id="year"
            onChange={handleChange}
            defaultValue={birth.year ? birth.year : "Default"}
          >
            <option disabled value="Default">
              Year
            </option>
            {years.map((item, i) => (
              <option key={i} value={item} data-testid="years-options">
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="select" data-testid="age-display">
          <label htmlFor="age">Age</label>
          <input type="text" disabled value={age} />
        </div>
      </div>
    </div>
  );
};

export default Birthday;

Birthday.propTypes = {
  spanBirthday: PropTypes.string,
};

Birthday.defaultProps = {
  spanBirthday: "Please enter your Birthday",
};
