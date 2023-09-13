'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { useRouter } from "next/navigation";
import * as yup from 'yup'
export const signup = () => {
  const router = useRouter();
  const [user, SetUser] = useState('');
  const onSubmit = () => {
    fetch("http://127.0.0.1:5555/signup", {
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
        phone_number: formik.values.phoneNumber
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        SetUser(json);
        router.push("/login");
  })};
  const basicSchema = yup.object().shape({
    firstName: yup.string().required('Please provide the first name').min(3,'3 characters minimum'),
    lastName: yup.string().required('Please provide the last name').min(1,'1 character minimum'),
    email: yup.string().required('Please provide the email').min(3,'3 characters minimum'),
    password: yup.string().required('Please provide the password').min(3,'3 characters minimum'),
    phoneNumber: yup.string().required('Please Provide Phone Number').min(10,"Must be 10 digits").max(10, "This is over 10 digits")
  })
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password:'',
      phoneNumber:''
  },
    validationSchema: basicSchema,
    onSubmit,
  })
  return (
    <div>
      <div className="acc-container">
        <img
          className="background-image"
          src="/images/carshop.jpg"
          style={{ opacity: "95%" }}
          alt="Background"
        />
        <div className="centered-text" style={{ top: "50%" }}>
          <form className="login-box" onSubmit={formik.handleSubmit}>
            <h2>DARREN'S AUTO DETAIL</h2>
            <img
              src="/images/Daco_721500.png"
              style={{ marginTop: "15px", height: "70px", width: "220px" }}
              alt="Logo"
            />
            <div
            className="signup-wrap"
            
          >
            <img
              style={{
                height: "18px",
                width: "25px",
                filter: "invert(1)",
                marginTop: "13px",
                marginLeft: "12px",
              }}
              src="/images/email.png"
            />
            <input
              className = 'login-input'
              id="firstName"
              type="text"
              placeholder="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            </div>
            {<p>{formik.errors.firstName}</p>}
            <div
            className="signup-wrap"
            
          >
            <img
              style={{
                height: "18px",
                width: "25px",
                filter: "invert(1)",
                marginTop: "13px",
                marginLeft: "12px",
              }}
              src="/images/email.png"
            />
            <input
              className="login-input"
              id="lastName"
              type="text"
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
            </div>
            {<p>{formik.errors.lastName}</p>}
            <div
            className="signup-wrap"
          >
            <img
              style={{
                height: "18px",
                width: "25px",
                filter: "invert(1)",
                marginTop: "13px",
                marginLeft: "12px",
              }}
              src="/images/email.png"
            />
            <input
              className='login-input'
              id="email"
              type="email"
              placeholder="Enter Your Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            </div>
            {<p>{formik.errors.email}</p>}
            <div
            className="signup-wrap"
          >
            <img
              style={{
                height: "18px",
                width: "25px",
                filter: "invert(1)",
                marginTop: "13px",
                marginLeft: "12px",
              }}
              src="/images/email.png"
            />
            <input
              className='login-input'
              id="password"
              type="password"
              placeholder="Enter Your Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            </div>
            {<p>{formik.errors.password}</p>}
            <div
            className="signup-wrap"
            
          >
            <img
              style={{
                height: "18px",
                width: "25px",
                filter: "invert(1)",
                marginTop: "13px",
                marginLeft: "12px",
              }}
              src="/images/email.png"
            />
            <input
              className='login-input'
              id="phoneNumber"
              type="PhoneNumber"
              placeholder="Enter Your Phone Number"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
            />
            </div>
            <p>{formik.errors.phoneNumber}</p>
            <button id="appt-button" type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
  }  
export default signup
