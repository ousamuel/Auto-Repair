'use client'
export default function Market(){
  const image_srcs = [
    '/images/accord.jpg',
    '/images/carshop.jpg',
    '/images/subie.jpg',
    '/images/bmw6.jpeg',
  ]
  function handleClick(e){
    console.log(e.target)
    //messing around with giving images a click function
  }
  const image_divs = image_srcs.map(image=>{
    return (
      <div className='image-div' style={{maxHeight:'none'}}>
        <img key={image} style={{maxHeight:"20vw", width:"100%",}} alt='car review image' src={image} onClick={handleClick}></img>
        <h1>MAKE MODEL YEAR</h1>
        <h1>MILEAGE</h1>
        <h1>CONDITION</h1>
        <h1>PRICE</h1>
      </div>

    )
  })
  return (
    <div className="container">
      <h1 className='route-head'>MARKET</h1>
      <p className='subtext'>QUALITY USED CARS <br/> CONTACT US AT DARRENSAUTODETAIL@GMAIL.COM WITH ANY QUESTIONS OR OFFERS</p>
      <div className='image-flex'>
      {image_divs}
      </div>
    </div>
  )
}