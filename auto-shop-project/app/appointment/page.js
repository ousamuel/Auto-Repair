"use client";
import { useFormik } from "formik";
import { Router } from "next/dist/client/router";
import React, { useState, useEffect } from "react";
//11am - 7 pm

export default function Appointment() {
  let timeList = ["11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"];
  let exteriorList = [
    "Tire & Rim Cleaning",
    "Body Polishing",
    "Exterior Hand Wash",
    "Engine Bay Cleaning",
    "Hydrophobic Glass Coating",
  ];
  let interiorList = ["Glass Cleaning", "Trash/Vacuum/Carpet"];
  let today = new Date();
  let timeAhead = new Date(today);
  timeAhead.setMonth(today.getMonth() + 2);
  today = today.toISOString().slice(0, 10);
  timeAhead = timeAhead.toISOString().slice(0, 10);
  const [user, setUser] = useState("");
  const [appts, setAppts] = useState([]);
  useEffect(() => {
    const fetchUser = fetch("http://127.0.0.1:5555/users/current", {
      credentials: "include",
    })
      .then((response) => (response.ok ? response.json() : null))
      .catch((error) => console.error("Error fetching user data:", error));

    const fetchAppts = fetch("http://127.0.0.1:5555/appointments")
      .then((response) => (response.ok ? response.json() : null))
      .catch((error) =>
        console.error("Error fetching appointment data:", error)
      );

    Promise.all([fetchUser, fetchAppts]).then(([userData, apptData]) => {
      setUser(userData);
      setAppts(apptData);
    });
  }, []);
  const onSubmit = () => {
    fetch("http://127.0.0.1:5555/LoggedInAppointments", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        first_name: formik.values.firstName,
        last_name: formik.values.lastName,
        email: formik.values.email,
        password: formik.values.password,
        phone_number: formik.values.phoneNumber,
        make: formik.values.make,
        model: formik.values.model,
        year: formik.values.year,
        engine: formik.values.engine,
        plate_number: formik.values.plateNumber,
        date: formik.values.date,
        time: formik.values.time,
        // It's creating an array so, we use a .join to seperate each one to a string! That's what a .join does look at db
        type_of_service: formik.values.service.join(", "),
      }),
    }).then((response) => response.json());
    return alert("Appointment Made!");
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      make: "",
      model: "",
      year: "",
      engine: "",
      plateNumber: "",
      date: today,
      time: "11:00 AM",
      service: "",
      notes: "",
    },
    onSubmit,
  });
  let takenTimes = [];
  if (appts)
    appts
      .filter((appt) => appt.date === formik.values.date)
      .forEach((appt) => takenTimes.push(appt.time));
  console.log(takenTimes);
  console.log(takenTimes.includes("12:00"));

  return (
    <div
      id="big"
      style={{
        minHeight: "90vw",
        paddingBottom: "60px",
        fontFamily: "'Oswald', sans-serif",
        backgroundImage: 'url("/images/tires.jpg")',
        // backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <h1 className="route-head">SCHEDULE AN APPOINTMENT</h1>
      <form className="form-box" onSubmit={formik.handleSubmit}>
        <h1 className="contact-subheader">CONTACT INFORMATION</h1>
        <div className="submit-container">
          <div className="submit-box">
            First Name
            <input
              className="input-box"
              name="firstName"
              type="text"
              placeholder="e.g. Elvis"
              onChange={formik.handleChange}
              value={user ? user.first_name : formik.values.firstName}
            />
          </div>
          <div className="submit-box">
            Last Name
            <input
              className="input-box"
              name="lastName"
              type="text"
              placeholder="e.g. Presley"
              onChange={formik.handleChange}
              value={user ? user.last_name : formik.values.lastName}
            />
          </div>
          <div className="submit-box">
            Email
            <input
              className="input-box"
              name="email"
              type="text"
              placeholder="e.g. elvispresley88@gmail.com"
              onChange={formik.handleChange}
              value={user ? user.email : formik.values.email}
            />
          </div>
          <div className="submit-box">
            Phone Number
            <input
              className="input-box"
              name="phoneNumber"
              type="text"
              placeholder="(optional) e.g. 123-456-7890"
              onChange={formik.handleChange}
              value={user ? user.phone_number : formik.values.phoneNumber}
            />
          </div>
        </div>
        <h1 className="contact-subheader">VEHICLE INFORMATION</h1>
        <div className="submit-container">
          <div className="submit-box">
            Make
            <input
              className="input-box"
              name="make"
              value={formik.values.make}
              onChange={formik.handleChange}
              type="text"
              placeholder="e.g. Honda"
            />
          </div>
          <div className="submit-box">
            Model
            <input
              className="input-box"
              name="model"
              value={formik.values.model}
              onChange={formik.handleChange}
              type="text"
              placeholder="e.g. Accord"
            />
          </div>
          <div className="submit-box">
            Year
            <input
              name="year"
              className="input-box"
              type="text"
              placeholder="e.g. 2022"
              value={formik.values.year}
              onChange={formik.handleChange}
            />
          </div>
          <div className="submit-box">
            Engine
            <input
              name="engine"
              className="input-box"
              type="text"
              placeholder="(optional) e.g. flat-four boxer"
              value={formik.values.engine}
              onChange={formik.handleChange}
            />
          </div>
          <div className="submit-box">
            Plate Number
            <input
              name="plateNumber"
              className="input-box"
              type="text"
              placeholder="e.g. ABC1234"
              value={formik.values.plateNumber}
              onChange={formik.handleChange}
            />
          </div>
          <div className="submit-box">
            Date
            <input
              name="date"
              className="input-box"
              onChange={formik.handleChange}
              value={formik.values.date}
              type="date"
              min={today}
              max={timeAhead}
            />
          </div>
          {/* <div className="submit-box">
            <label htmlFor="time">Select a time:</label>
            <select
              id="time"
              name="time"
              onChange={formik.handleChange}
              value={formik.values.time}
            >
              {takenTimes.includes("08:00") ? (
                <option
                  value="08:00"
                  disabled
                  style={{ textDecoration: "line-through" }}
                >
                  08:00 AM
                </option>
              ) : (
                <option value="08:00">08:00 AM</option>
              )}
              {takenTimes.includes("09:00") ? (
                <option
                  value="09:00"
                  disabled
                  style={{ textDecoration: "line-through" }}
                >
                  09:00 PM
                </option>
              ) : (
                <option value="09:00">09:00 AM</option>
              )}
              {takenTimes.includes("10:00") ? (
                <option
                  value="10:00"
                  disabled
                  style={{ textDecoration: "line-through" }}
                >
                  10:00 PM
                </option>
              ) : (
                <option value="10:00">10:00 AM</option>
              )}
              {takenTimes.includes("11:00") ? (
                <option
                  value="11:00"
                  disabled
                  style={{ textDecoration: "line-through" }}
                >
                  11:00 PM
                </option>
              ) : (
                <option value="11:00">11:00 AM</option>
              )}
              {takenTimes.includes("12:00") ? (
                <option
                  value="12:00"
                  disabled
                  style={{ textDecoration: "line-through" }}
                >
                  12:00 PM
                </option>
              ) : (
                <option value="12:00">12:00 PM</option>
              )}
              {takenTimes.includes("13:00") ? (
                <option
                  value="13:00"
                  disabled
                  style={{ textDecoration: "line-through" }}
                >
                  01:00 PM
                </option>
              ) : (
                <option value="13:00">01:00 PM</option>
              )}
              {takenTimes.includes("14:00") ? (
                <option
                  value="14:00"
                  disabled
                  style={{ textDecoration: "line-through" }}
                >
                  02:00 PM
                </option>
              ) : (
                <option value="14:00">02:00 PM</option>
              )}
              {takenTimes.includes("15:00") ? (
                <option
                  value="15:00"
                  disabled
                  style={{ textDecoration: "line-through" }}
                >
                  03:00 PM
                </option>
              ) : (
                <option value="15:00">03:00 PM</option>
              )}
              {takenTimes.includes("16:00") ? (
                <option
                  value="16:00"
                  disabled
                  style={{ textDecoration: "line-through" }}
                >
                  04:00 PM
                </option>
              ) : (
                <option value="16:00">04:00 PM</option>
              )}
            </select>
          </div> */}
          <div className="submit-box">
            <label htmlFor="time">Select a time:</label>
            <select
              id="time"
              name="time"
              onChange={formik.handleChange}
              value={formik.values.time}
            >
              {timeList.map((time) => {
                const isTaken = takenTimes.includes(time);
                return (
                  <option
                    key={time}
                    value={time}
                    disabled={isTaken}
                    style={isTaken ? { textDecoration: "line-through" } : {}}
                  >
                    {time}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <h1 className="contact-subheader">EXTERIOR OPTIONS</h1>
        <div className="submit-container">
          <div className="submit-box">
            <ul
              style={{
                fontSize: "22px",
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {exteriorList.map((item) => {
                return (
                  <li className="service-list-appt">
                    <input
                      type="checkbox"
                      id={item}
                      name="service"
                      value={item}
                      checked={formik.values.service.includes(item)}
                      onChange={formik.handleChange}
                    />
                    <label className="service-li" htmlFor={item}>
                      {item}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <h1 className="contact-subheader">INTERIOR OPTIONS</h1>
        <div className="submit-container">
          <div className="submit-box">
            <ul
              style={{
                fontSize: "22px",
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {interiorList.map((item) => {
                return (
                  <li className="service-list-appt">
                    <input
                      type="checkbox"
                      id={item}
                      name="service"
                      value={item}
                      checked={formik.values.service.includes(item)}
                      onChange={formik.handleChange}
                    />
                    <label className="service-li" htmlFor={item}>
                      {item}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <h1 className="contact-subheader">Notes</h1>
        <div className="submit-container">
          <div className="submit-box">
            <textarea
              name="notes"
              id="message-box"
              type="text"
              value={formik.values.notes}
              onChange={formik.handleChange}
              placeholder="Let us know if you have any questions or concerns!"
            />
          </div>
        </div>
        <button id="appt-button" type="submit">
          MAKE APPOINTMENT
        </button>
      </form>
    </div>
  );
}
