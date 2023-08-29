"use client";
import React, { useState, useEffect } from 'react';

function Test() {
    const [user, setUser] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:5555/users/current', {
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => setUser(data))
        .catch(error => console.error('Error fetching user data:', error));
    }, []);
    return (
        <div>
            <h1>Welcome, {user.first_name}</h1>
        </div>
    );
}

export default Test;