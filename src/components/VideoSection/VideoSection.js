import React from 'react';
import './VideoSection.css';
import BgVideo from '../assets/BgVideo.mp4'; // Adjust path if needed

function VideoSection() {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-text">
        Discover, Connect, Explore...
      </div>
    </div>
  );
}

export default VideoSection;
