
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Darren's Auto Detail - Quality Auto-Service in Queens",
  description: 'Precision Care for Your Vehicle',
}

export default function RootLayout({ children }) {
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
          <a href="/login">ACCOUNT</a>
        </nav>
      </header>
        {children}</body>
      
    </html>
  )
}
