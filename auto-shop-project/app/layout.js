'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: "Darren's Auto Detail - Quality Auto-Service in Queens",
//   description: 'Precision Care for Your Vehicle',
// }


export default function RootLayout({ children }) {

  const [user, setUser] = useState('');

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
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);
  
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&display=swap"/>
      </head>
      <body className={inter.className}>
      <header className="header">
        <div className="logo">DARREN'S AUTO DETAIL</div>
        <nav className="navigation">
          <a href="/dashboard">HOME</a>
          <a href="/gallery">GALLERY</a>
          <a href="/services">SERVICES</a>
          <a href="/appointment">APPOINTMENT</a>
          <a href="/contact">CONTACT US</a>
          {user ? <a href='/test'>ACCOUNT</a> : <a href='/login'>ACCOUNT</a>}
        </nav>
      </header>
 sam
      <div style={{paddingTop: "70px"}}>
        {children}
      </div>
        </body>
      
=======
        {children}</body>main
    </html>
  )
}
