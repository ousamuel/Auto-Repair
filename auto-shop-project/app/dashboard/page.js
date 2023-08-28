"use client"
import Image from 'next/image'

async function getUsers() {
  try {
    const res = await fetch('http://127.0.0.1:5555/users')
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
}
async function getCars() {
  try {
    const res = await fetch('http://127.0.0.1:5555/cars')
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }



}
export default async function Hello(){
  const users = await getUsers()
  const cars = await getCars()
  // console.log(users)
  
  const userList = users.map(user =>{
    return <div key={user.id}>{user.first_name} {user.last_name} </div>
  })
  const carList = cars.map(car =>{
    return <div key={car.id}>{car.make} {car.model}</div>
  })


  return (
    <div className="container">
      
      <section className="main-content">
        <img src="/images/car.jpg" alt="Descriptive text" className="background-image" />
        <div className="centered-text">WELCOME TO THE AUTO SHOP
        <br/> PRECISION CARE FOR YOUR VEHICLE</div>
      </section>
    </div>
  )
}