"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function Contact() {
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5555/users/current", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <div className="container">
      <div id='contact-header' style={{height:"220px"}}>
      <h1 className="route-head">CONTACT US</h1>
      <h1 className='subtext'>
        QUESTIONS? (pricing, services, etc.)
        <br />
        FEEL FREE TO CONTACT US AT
        <span style={{ textDecoration: "underline", fontWeight: "20", fontSize:"20px" }}>
          {" "}
          DARRENSAUTODETAIL@GMAIL.COM{" "}
        </span>
      </h1>

      </div>
      <div className="service-block" style={{height:"calc(100vh - 290px)"}}>
        <div className='service-text'>1
        <img/>
        </div>
        <div className='service-text' >1</div>
      </div>
    </div>
  );
}
