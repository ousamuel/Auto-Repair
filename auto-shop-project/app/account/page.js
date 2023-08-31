"use client";
import React, { useState, useEffect , useMemo} from 'react';
import { useRouter } from "next/navigation";

function Test() {
    const [user, setUser] = useState([]);
useEffect(() => {
    fetch('http://127.0.0.1:5555/users/current', {
        credentials: 'include'
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        return null
      };
    })
    .then(data => {setUser(data);
    console.log(data)})
}, []);

    const handleClick = () => {
        fetch('http://127.0.0.1:5555/logout',{
            method: "DELETE",
            credentials: 'include'
        })
        .then ((data) => setUser(data));
    }
    return (
    <div>
        {user ?
        <div className='appointment-BoxContainer'>
            <div>
                <h2>Appointment</h2>
                {user.appointments ? user.appointments.map((appt) => {  
                return <div key={appt.id}>
                <div>Date:{appt.date}</div>
                <div>Time:{appt.time}</div>
                Type of Service: {appt.type_of_service}</div>
                }): <h1>LOADING...</h1>}
                <a id="appt-button" onClick={handleClick} href='/login'>Logout</a>
            </div>
        </div>
        : <><div></div></>}
    </div> 
    );
}

export default Test;