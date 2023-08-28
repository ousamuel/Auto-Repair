'use client'
import { useState, useEffect } from "react";
export default function Gallery(){
  const image_srcs = [
    '/images/accord.jpg',
    '/images/accord1.jpg',
    '/images/accord2.jpg',
    '/images/accord3.jpg',
    '/images/subie.jpg',
    '/images/subie1.jpg',
    '/images/subie2.jpg',
    '/images/subie3.jpg',
  ]
  const [user, setUser] = useState('');

  useEffect(() => {
      fetch('http://127.0.0.1:5555/users/current', {
          credentials: 'include'
      })
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);
  function handleClick(e){
    console.log(e.target)
    //messing around with giving images a click function
  }
  const image_divs = image_srcs.map(image=>{
    return <img key={image} className='image-div' alt='car review image' src={image} onClick={handleClick}></img>
  })
  return (
    <div className="container">
      <h1 className='route-head'>GALLERY</h1>
      <p className='subtext'>IMAGES FROM SATISFIED CUSTOMERS</p>
      <div className='image-flex'>
      {image_divs}
      </div>
    </div>
  )
}