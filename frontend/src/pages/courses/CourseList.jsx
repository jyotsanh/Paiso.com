import React from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from './CourseCard';
import './CourseList.css';
import aa from '../../assets/course1.jpg';
import bb from '../../assets/course2.jpg';
import cc from '../../assets/course3.jpg';
import sipVideo from '../../video/sib.mp4'; // Import your video

const courses = [
  {
    id: 1,
    image: aa,
    title: 'What is SIP?',
    nepaliTitle: 'SIP के हो?',
    views: '10',
    video: sipVideo, // Add the video path here
  },
  {
    id: 2,
    image: bb,
    title: 'Investing in Mutual Funds',
    nepaliTitle: 'Mutual Fund मा लगानी गर्ने तरिका के हो?',
    views: '10',
  },
  {
    id: 3,
    image: cc,
    title: 'Nepal Stock Market',
    nepaliTitle: 'नेपालको शेयर बजार',
    views: '10',
  },
];

const CourseList = () => {
  const navigate = useNavigate();

  const handleCourseClick = (course) => {
    navigate(`/course/${course.id}`, { state: { course } });
  };

  return (
    <div className="course-container">
      <div className="level-selector">
        <ul className="level-list">
        <li>Course Level:</li>
          <li style={{ fontWeight: 'bold' }}>Beginner</li>
          <li>Intermediate</li>
          <li>Expert</li>
        </ul>
      </div>

      <div className="course-list">
        <h3>Most Viewed Courses</h3>
        <div className="course-row">
          {courses.map(course => (
            <CourseCard
              key={course.id}
              image={course.image}
              title={course.title}
              nepaliTitle={course.nepaliTitle}
              views={course.views}
              onClick={() => handleCourseClick(course)} // Navigate to video page
            />
          ))}
        </div>

        <h3>Most Popular Courses</h3>
        <div className="course-row">
          {courses.slice().reverse().map(course => (
            <CourseCard
              key={course.id}
              image={course.image}
              title={course.title}
              nepaliTitle={course.nepaliTitle}
              views={course.views}
              onClick={() => handleCourseClick(course)} // Navigate to video page
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
