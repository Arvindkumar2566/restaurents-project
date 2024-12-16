import React, { useState } from 'react';
import './Activeproces.css';

const backgroundImage = '/assets/images/ActiveProcess_bg.svg'; 

export default function Activeproces() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="activeprocess-hero-section mt-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="activeprocess-overlay container">
        <div className="activeprocess-content">
          <h4 className="activeprocess-restaurantprocess-title">Restaurant Active Process</h4>
          <h1>
            <span>We</span> Document Every Food Bean Process until it is saved
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna.
          </p>
          <div className="activeprocess-buttons">
            <button
              className="activeprocess-read-more"
              onClick={() =>
                (window.location.href = 'https://example.com/read-more')
              }
            >
              Read More
            </button>
            <button className="activeprocess-play-video" onClick={handleModalOpen}>
              <span>▶</span> Play Video
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="activeprocess-modal">
          <div className="activeprocess-modal-content">
            <span className="activeprocess-close" onClick={handleModalClose}>
              &times;
            </span>
            <iframe
              width="560"
              height="315"
              src="/assets/videos/Untitled video - Made with Clipchamp (1).mp4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
