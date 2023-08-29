"use client";
import { useFormik } from "formik";

export default function Appointment() {
  let today = new Date();
  let timeAhead = new Date(today);
  timeAhead.setMonth(today.getMonth() + 2);
  today = today.toISOString().slice(0, 10);
  timeAhead = timeAhead.toISOString().slice(0, 10);

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
      plateNumber:"",
      date: today,
      time: "08:00",
      service: [],
      notes: "",
    },
    onSubmit: (values) => {
      alert(
        "Appointment successfully scheduled \n Contact us via email at ___ with any questions."
      );
    },
  });
  console.log(formik);
  return (
    <div
      style={{
        height: "100vw",
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
      <form id="form-box" onSubmit={formik.handleSubmit}>
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
              value={formik.values.firstName}
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
              value={formik.values.lastName}
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
              value={formik.values.email}
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
              value={formik.values.phoneNumber}
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
          <div className="submit-box">
            <label htmlFor="time">Select a time:</label>
            <select
              id="time"
              name="time"
              onChange={formik.handleChange}
              value={formik.values.time}
            >
              <option value="08:00">08:00 AM</option>
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="13:00">01:00 PM</option>
              <option value="14:00">02:00 PM</option>
              <option value="15:00">03:00 PM</option>
            </select>
          </div>
        </div>
        <h1 className="contact-subheader">TYPE OF SERVICE</h1>
        <div className="submit-container">
          <div className="submit-box">
            <ul style={{ border: "solid", fontSize: "22px" }}>
              <li>
                <input
                  type="checkbox"
                  id="option1"
                  name="service"
                  value="Oil Change"
                  checked={formik.values.service.includes("Oil Change")}
                  onChange={formik.handleChange}
                />
                <label className="service-li" htmlFor="option1">
                  Oil Change
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="option2"
                  name="service"
                  value="Brake Repair"
                  checked={formik.values.service.includes("Brake Repair")}
                  onChange={formik.handleChange}
                />
                <label className="service-li" htmlFor="option2">
                  Brake Repair
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="option3"
                  name="service"
                  value="Detailing"
                  checked={formik.values.service.includes("Detailing")}
                  onChange={formik.handleChange}
                />
                <label className="service-li" htmlFor="option3">
                  Detailing
                </label>
              </li>
            </ul>
          </div>
        </div>
        <h1 className="contact-subheader">Notes</h1>
        <div className="submit-container">
          <div className="submit-box">
            <textarea
              name='notes'
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
