import React from "react";

function HomePage() {
  return (
    <div className="home-page">
      <video autoPlay loop muted className="background-video">
        <source src="/globe.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>foods of the world.</h1>
      </div>
    </div>
  );
}

export default HomePage;
