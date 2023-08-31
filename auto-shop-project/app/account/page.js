"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Test() {
  const [user, setUser] = useState([]);
  const router = useRouter();
  useEffect(() => {
    fetch("http://127.0.0.1:5555/users/current", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const handleClick = () => {
    fetch("http://127.0.0.1:5555/logout", {
      method: "DELETE",
      credentials: "include",
    }).then((data) => setUser(data), router.push("/dashboard"));
  };

  console.log(user.appointments);

  return (
    <div>
      <h1>Welcome, {user.first_name}</h1>
      <button onClick={handleClick}>Logout</button>
      {user.appointments ? (
        user.appointments.map((appt) => {
          return <div key={appt.id}>{appt.id}</div>;
        })
      ) : (
        <div>Loading ... </div>
      )}
    </div>
  );
}

export default Test;
