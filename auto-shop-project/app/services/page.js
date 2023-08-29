export default function Services() {
  return (
    <div
      style={{
        fontFamily: "'Oswald', sans-serif",
        scrollSnapType: "y proximity",
        overflowY: "scroll",
      }}
    >
      <div className="service-block">
        <div className="service-text">
          <h1 className="service-header">OIL CHANGE</h1>
          <div className="service-body-text">
            Regular oil changes are commonly recommended every 4000-6000 miles. 
          </div>
          <div> NEW FILTER</div>
          <div> NEW OIL</div>
          <div> blahbalsdasodnaasdpdjasjdakjdasjdoajdsa</div>
        </div>
        <div className="service-image-div">
          <img src="/images/oilchange.jpg" className="service-image" />
        </div>
      </div>
      {/*  */}
      <div className="service-block">
        <div className="service-image-div">
          <img src="/images/brakes.jpg" className="service-image" />
        </div>
        <div className="service-text">
          <h1 className="service-header">BRAKE REPLACEMENT</h1>
          <div className="service-body-text">
            Ensuring that your brakes are in top condition is not just essential
            for the longevity of your car, but also for the safety of you and
            your passengers.
          </div>
          <h2>SIGNS YOU NEED NEW BRAKES/BRAKE PADS </h2>
          <ol>
            <li>• soft/spongy braking</li>
            <li>• squeaking/grinding noise</li>
            <li>• increased stopping distance</li>
          </ol>
        </div>
      </div>
      {/*  */}
      <div className="service-block">
        <div className="service-text">
          <h1 className="service-header">EXTERIOR</h1>
          <div>
            blah blah blahblah blah blahblah blah blahblah blah blahblah blah
            blahblah blah blah
          </div>
          <div> CLEAN</div>
          <div> blahbalsdasodnaasdpdjasjdakjdasjdoajdsa</div>
        </div>
        <div className="service-image-div">
          <img src="/images/exterior.jpg" className="service-image" />
        </div>
      </div>
      {/*  */}
      <div className="service-block">
        <div className="service-image-div">
          <img src="/images/exterior.jpg" className="service-image" />
        </div>
        <div className="service-text">
          <h1 className="service-header">INTERIOR</h1>
          <div>
            blah blah blahblah blah blahblah blah blahblah blah blahblah blah
            blahblah blah blah
          </div>
          <div> CLEAN</div>
          <div> blahbalsdasodnaasdpdjasjdakjdasjdoajdsa</div>
        </div>
      </div>
      {/*  */}
      <div className="service-block"> services1 </div>
      <div className="service-block"> services1 </div>
    </div>
  );
}
