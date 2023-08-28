// 'use client'
import React, { useState } from 'react'
export const login = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

  if (email.length === 0){
    alert("Email has been left blank");
  }
  else if(password.length === 0){
    alert("password has left blank")
  }
  else{
    axios.post('/login')
  }

  return (
  <>
    <h1>login</h1>
      <form>
        <label>Email:
          <input type="text" />
        </label>
        <label>Password:
          <input type = 'text'/>
        </label>
      </form>
  </>
  )
}
export default login