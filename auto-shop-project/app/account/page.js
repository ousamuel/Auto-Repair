"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
function Test() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    fetch("http://127.0.0.1:5555/users/current", {
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return null;
        }
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
        console.log(data);
      });
  }, [router]);

  const handleClick = () => {
    fetch("http://127.0.0.1:5555/logout", {
      method: "DELETE",
      credentials: "include",
    }).then((data) => setUser(data));
  };
  return (
    <div className="container">
      {loading ? (
        <>LOADING!!!!!!</>
      ) : (
        <div style={{ width: "100%" }}>
          {user ? (
            <div>
              <h2 className='route-head'>{user.first_name}'s Appointments</h2>
              <div className="appointment-BoxContainer">
                {user.appointments ? (
                  user.appointments.map((appt) => {
                    return (
                      <div key={appt.id} className="appointment-div">
                        DATE: {appt.date}
                        <br />
                        TIME: {appt.time}
                        <br />
                        CAR : {appt.car.make} {appt.car.model} {appt.car.year}
                        <br />
                        LICENSE: {appt.car.plate_number}
                        <br />
                        Type of Service: {appt.type_of_service}
                        </div>
                    );
                  })
                ) : (
                  <div>Loading ... </div>
                )}

                <a href="/accountsettings">Account Settings</a>
                <a onClick={handleClick} href="/login">
                  Logout
                </a>
              </div>
            </div>
          ) : (
            <>
              <a href="/login">{router.push("/login")}</a>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Test;
