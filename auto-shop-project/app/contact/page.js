'use client'
import React from "react";
import { useState, useEffect } from 'react'



export default function Contact(){

  const [user, setUser] = useState('');

  useEffect(() => {
      fetch('http://127.0.0.1:5555/users/current', {
          credentials: 'include'
      })
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return(
    <div></div>
  )
}