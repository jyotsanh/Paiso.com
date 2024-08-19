import React from 'react';
import { useLocation } from 'react-router-dom';

const CourseVideo = () => {
  const location = useLocation();
  const { course } = location.state;

  return (
    <div className="video-page">
      <h2>{course.title}</h2>
      <video controls>
        <source src={course.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{course.nepaliTitle}</p>
    </div>
  );
};

export default CourseVideo;
