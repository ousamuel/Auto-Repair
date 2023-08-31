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
            (varies among cars)
          </div>
          <div>
            {" "}
            NEW FILTER
            <br />
            NEW OIL SPECIFIC TO YOUR CAR
          </div>
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
            <h2>SIGNS YOU NEED NEW BRAKES/BRAKE PADS </h2>
            <ol>
              <li>• soft/spongy braking</li>
              <li>• squeaking/grinding noise</li>
              <li>• increased stopping distance</li>
            </ol>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="service-block">
        <div className="service-text">
          <h1 className="service-header">EXTERIOR SERVICES</h1>
          <ol style={{ fontSize: "24px", fontWeight: "600" }}>
            <li>• Glass Cleaning</li>
            <li>• Body Cleaning</li>
            <li>• Body Polishing</li>
            <li>• Tire & Rim Cleaning</li>
          </ol>
          <div className="service-body-text">
            Your vehicle is constantly exposed to the environment, making it
            susceptible to dirt, debris, brake dust, and road grime. We provide
            thorough glass cleaning for optimal visibility, meticulous body
            cleaning and polishing to protect and enhance your vehicle's finish,
            and tire + rim cleaning to combat the relentless buildup from daily
            driving.
          </div>
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
          <h1 className="service-header">INTERIOR SERVICES</h1>
          <ol style={{ fontSize: "24px", fontWeight: "600" }}>
            <li>• Engine Bay Cleaning</li>
            <li>• Surface Polishing</li>
            <li>• Glass Cleaning</li>
            <li>• Carpet Cleaning</li>
            <li>• Waste Removal and Vaccuum</li>
          </ol>
          <div className="service-body-text">
            Everyday use can lead to the buildup of dirt and pollutants inside
            both the passenger cabin and engine bay. We offer engine bay
            cleaning to ensure optimal performance, surface polishing to restore
            the shine of interior finishes, meticulous glass cleaning for clear
            inside views, carpet cleaning to remove deep-seated dirt, and waste
            removal combined with thorough vacuuming to ensure a clean,
            refreshed space.
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
