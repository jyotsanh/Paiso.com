import React from 'react';
import './About.css'; // Make sure to create this CSS file
import image from '../../assets/stook.jpg';
import Jyotsan from '../../assets/jyotsan.jfif'; // Correct import
import Lakpa from '../../assets/lakpa.jfif'; 
import Mandip from '../../assets/mandip.jfif'; 
import Sakshyam from '../../assets/sakshyam.jfif';
import Nikesh from '../../assets/nikesh.jfif'; 

// Data for the team members
const teamMembers = [
  { name: 'Jyotsan Hamal', position: 'AI Engineer', image: Jyotsan, github: 'https://github.com/jyotsanh' },
  { name: 'Nikesh Shrestha', position: 'Backend Engineer', image: Nikesh, github: 'https://github.com/Nik-doid' },
  { name: 'Mandip Chaudhary', position: 'Frontend Engineer', image: Mandip, github: 'https://github.com/Mandip69' },
  { name: 'Sakshyam Sapkota', position: 'Designer', image: Sakshyam, github: 'https://github.com/sakshyam-sapkota' },
  { name: 'Lhakpa Tsheri Sherpa', position: 'Designer', image: Lakpa, github: 'https://github.com/lhakpa09' }
];

const AboutUs = () => {
  return (
    <div className='about'>
      <div className="about-us-container">
        {/* Left side: Image */}
        <div className="image-container">
          <img src={image} alt="Paiso.com" className="about-us-image" />
        </div>

        {/* Right side: Content */}
        <div className="text-container">
          <h1>About Us</h1>
          <p>
            At Paiso.com, we are dedicated to empowering everyone with the tools and knowledge to reach their financial aspirations.
          </p>
          <p>
            Our belief is that with the right resources, anyone can make smart investment choices and achieve their financial goals. That's why we've created tools like Paiso.com Insights, Smart Invest, and Financial Mastery Courses to simplify stock analysis and financial planning.
          </p>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="our-team-container">
        <h2>Our Team</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.image} alt={member.name} className="team-member-image" />
              <div className="team-member-info">
                <h3>
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    {member.name}
                  </a>
                </h3>
                <p>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
