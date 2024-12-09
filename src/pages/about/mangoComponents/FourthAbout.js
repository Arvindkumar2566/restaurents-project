import React from 'react';
import './FourthAbout.css';

const teamMembers = [
  {
    name: 'Mark Henry',
    role: 'Owner',
    image: '/assets/images/PersonCard.png',
  },
  {
    name: 'Lucky Helen',
    role: 'Chef',
    image: '/assets/images/PersonCard.png',
  },
  {
    name: 'Moon Henry',
    role: 'Founder',
    image: '/assets/images/PersonCard.png',
  },
  {
    name: 'Tom Morrow',
    role: 'Specialist',
    image: '/assets/images/PersonCard.png',
  },
];

const socialIcons = [
  { name: 'Twitter', icon: '/assets/images/twitter.svg', url: 'https://twitter.com/' },
  { name: 'Facebook', icon: '/assets/images/icon8_fb.png', url: 'https://facebook.com/' },
  { name: 'Pinterest', icon: '/assets/images/icons8-printrest.png', url: 'https://pinterest.com/' },
  { name: 'YouTube', icon: '/assets/images/youtube.svg', url: 'https://youtube.com/' },
];

const TeamMembers = () => {
  return (
    <div className="team-section ">
      <div className="container text-center baba">
        <h2 className="team-title pt-5 ">Team Member</h2>
        <p className="team-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Various sed pharetra dictum neque massa congue.
        </p>

        <div className="row g-4 mt-2 mx-5 px-5">
          {teamMembers.map((member, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <div className="team-card position-relative">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="team-overlay d-flex flex-column justify-content-center align-items-center">
                  {socialIcons.map((icon, idx) => (
                    <a href={icon.url} key={idx} className="social-icon" title={icon.name} target="_blank" rel="noopener noreferrer">
                      <img src={icon.icon} alt={icon.name} />
                    </a>
                  ))}
                </div>
                <div className="team-info text-center">
                  <h5>{member.name}</h5>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
