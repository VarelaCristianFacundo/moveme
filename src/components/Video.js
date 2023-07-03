import React from "react";
import { Link } from "react-router-dom";
import "./Video.css";
import gymVideo from "../assets/video.mp4";

function Video(props) {
  return (
    <div className="hero">
      <div className="image-container">
        <img
          src="https://lirp.cdn-website.com/md/pexels/dms3rep/multi/opt/pexels-photo-7031706-1920w.jpeg"
          className="background-image"
          id="video"
        ></img>
      </div>
      {/* <video autoPlay loop muted id="video">
        <source src={gymVideo} type="video/mp4" />
      </video> */}
      <div className="content">
        <h1>Por una vida mejor...</h1>
        <p>entrenamientos personalizados</p>

        <div>
          <Link to="/training" className="btn">
            Entrenamientos
          </Link>
          <Link to="/contact" className="btn btn-light">
            Consultas
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Video;
