import React from "react";
import "./landingpage.css";
import Wave from "react-wavify";

const landingpage = () => {
  return (
    <div>
      <div className="landingpage">
        <div className="navbar">
          <h1>NextZenSoft</h1>
        </div>
        <div className="hero-section">
          <div className="hero-text">
            <h1>NextGen Soft - Your trusted Software Development Partner</h1>
            <p className="hero-text-p">
              We're here to accompany you all along the road from an MVP to
              asuccssfull product stage or wherever your business goals and
              ambtions will take you.
            </p>
          </div>
          <div className="wave">
            <Wave
              className="anim-wave"
              fill="#EE7E24"
              fill-opacity=".7"
              paused={false}
              style={{ display: "flex" }}
              options={{
                height: 30,
                amplitude: 50,
                speed: 0.2,
                points: 3,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default landingpage;

/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L48,138.7C96,117,192,75,288,74.7C384,75,480,117,576,122.7C672,128,768,96,864,96C960,96,1056,128,1152,122.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */
