import React from 'react';
import './CourseCard.css';

const CourseCard = ({ image, title, nepaliTitle, views, onClick }) => {
  return (
    <>
    {/* <ul>
    <li>Beginner</li>
    <li>Intermediate</li>
    <li>Expert</li>
  
 
  </ul> */}
    <div className="course-card" onClick={onClick}>
     
      
      <img src={image} alt={title} className="course-image" />
      <div className="course-info">
        <h5>{title}</h5>
        <p>{nepaliTitle}</p>
        <p>{views} video</p>
      </div>
    </div>
    </>
  );
};

export default CourseCard;
