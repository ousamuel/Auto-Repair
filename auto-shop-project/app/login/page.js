"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, SetUser] = useState(null);
  const router = useRouter();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (email.length === 0) {
      return "Email has been left blank";
    } else if (password.length === 0) {
      return "password has left blank";
    } else {
      fetch("http://127.0.0.1:5555/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          SetUser(json);
          router.push("/test");
        });
    }
  };
  return (
    <div className='submit-container'>
      <h1>login</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
        <div>
          <a className='links' href="/signup">Sign up</a> if no account
        </div>
      </form>
    </div>
  );
}
