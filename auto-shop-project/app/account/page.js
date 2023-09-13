"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
function Test() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [myCars, setMyCars] = useState([]);
  const router = useRouter();
  useEffect(() => {
    fetch("http://127.0.0.1:5555/users/current", {
      credentials: "include",
    })
      .then((response) => (response.ok ? response.json() : null))

      .then((data) => {
        setUser(data);
        setLoading(false);
        fetchCars(data.id);
        console.log(data.id);
      });
  }, [router]);
  const fetchCars = (id) => {
    fetch(`http://127.0.0.1:5555/carsbyuser/${id}`, { credentials: "include" })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        setMyCars(data);
        console.log(data);
      });
  };
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
              <h2 className="route-head">MY GARAGE</h2>
              <div id="user-cars" className="appointment-BoxContainer">
                {myCars ? (
                  myCars.map((car) => {
                    return (
                      <div key={car.plate_number} className="appointment-div">
                        {car.make} {car.model} 
                        {car.year} {car.plate_number}
                      </div>
                    );
                  })
                ) : (
                  <div>Loading ... </div>
                )}
              </div>
              <h2 className="route-head">MY APPOINTMENTS</h2>
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
