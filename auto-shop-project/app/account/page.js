"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

function Test() {
    const [user, setUser] = useState('');
const router = useRouter()
    useEffect(() => {
        fetch('http://127.0.0.1:5555/users/current', {
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => setUser(data))
        .catch(error => console.error('Error fetching user data:', error));
    }, []);

    const handleClick = () => {
        fetch('http://127.0.0.1:5555/logout',{
            method: "DELETE",
            credentials: 'include'
        })
        .then ((data) => setUser(data),
        router.push('/dashboard'));
    }
    return (
        <div>
            <h1>Welcome, {user.first_name}</h1>
            <button onClick={handleClick}>Logout</button>
        </div>
    );
}

export default Test;