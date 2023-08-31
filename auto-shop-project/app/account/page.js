"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import dynamic from 'next/dynamic'
function Test() {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
const router = useRouter()
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
    setLoading(false)
    console.log(data)})
}, [router]);

    const handleClick = () => {
        fetch('http://127.0.0.1:5555/logout',{
            method: "DELETE",
            credentials: 'include'
        })
        .then ((data) => setUser(data));
    }
    
    return (
<div>
    {loading ? <>LOADING!!!!!!</> :
    <div>{user ? 
        <div className='appointment-BoxContainer'>
            <div>
                <h2>{user.first_name}'s Appointments</h2>
                {user.appointments ? user.appointments.map((appt) => {
                return <div key={appt.id}>
                <div>Date:{appt.date}</div>
                <div>Time:{appt.time}</div>
                Type of Service: {appt.type_of_service}</div>
                }): <div>Loading ... </div>}
                <a href='/accountsettings'>Account Settings</a>
                <a onClick={handleClick} href='/login'>Logout</a>
            </div>
        </div>: <>
        <a href='/login'>{router.push('/login')}</a></>}
    </div>}
</div>
    );
}

export default Test;