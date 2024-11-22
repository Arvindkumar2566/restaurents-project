import React from 'react';
import './Activeproces.css'
// import backgroundImage from './assets/bacground-image.svg';

const backgroundImage = '/assets/images/bacground-image.svg'; // Replace with the actual path to your image

export default function Activeproces() {
  const handleReadMore = () => {
    window.location.href = 'https://example.com/read-more'; // Replace with your "Read More" link
  };

  const handlePlayVideo = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // Replace with your video link
  };

  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Ensure `backgroundImage` is defined
    >
      <div className="overlay container">
        <div className="content">
          <h4>Restaurant Active Process</h4>
          <h1>
            <span>We</span> Document Every Food Bean Process until it is saved
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna.
          </p>
          <div className="buttons">
            <button className="read-more" onClick={handleReadMore}>
              Read More
            </button>
            <button className="play-video" onClick={handlePlayVideo}>
              <span>▶</span> Play Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
