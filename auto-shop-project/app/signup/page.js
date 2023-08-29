'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { useRouter } from "next/navigation";
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
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password:'',
      phoneNumber:''
  },
    onSubmit,
  })
  return (
    <>
      <form onSubmit={formik.handleSubmit} autoComplete='off'> 
        <label htmlFor='firstName'></label>
          <input value={formik.values.firstName}
          onChange={formik.handleChange}
          id='firstName' type='text' placeholder='First Name'/>
        <label htmlFor='lastName'></label>
          <input value={formik.values.lastName}
          onChange={formik.handleChange}
          id='lastName' type='text' placeholder='LastName'/>
        <label htmlFor='email'></label>
          <input value={formik.values.email}
          onChange={formik.handleChange}
          id='email' type='email' placeholder='Enter Your Email'/>
        <label htmlFor='password'></label>
          <input value={formik.values.password}
          onChange={formik.handleChange}
          id='password' type='password' placeholder='Enter Your Password'/>
        <label htmlFor='phoneNumber'></label>
          <input value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          id='phoneNumber' type='PhoneNumber' placeholder='Enter Your Phone Number'/>
          <button type='submit'>SignUp</button>
      </form>
    </>
  )
}
export default signup