import React from 'react';
import './home.css';
import chatbotIcon from '../../assets/chatbot.png'
import { useState } from 'react';
import axios from 'axios';
import bbc from '../../assets/stock.png';
import cbc from '../../assets/course1.jpg';
import ddc from '../../assets/course2.jpg';
import eec from '../../assets/course3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper-bundle.min.css';  
import images from '../../assets/stook.jpg';

function Testimonials() {
  return (
    <section className="home-testimonials">
      <h2>Testimonials</h2>
      <Swiper>
        <SwiperSlide>
          <div className="home-testimonial-item">
            <p>"Paiso's demo trading let me practice without risk. It built my confidence and sharpened my strategies before I went live."</p>
            <span>Ram Ram Ram</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-testimonial-item">
            <p>"The virtual trading environment is perfect for learning. It helped me understand the market and test ideas stress-free."</p>
            <span>Ram Ram Ram</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

const home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [botmsg, setBotmsg] = useState('कासारि सहयोग गरम !');
  const [token, setToken] = useState(localStorage.getItem('access_token'));

  const handleChatIconClick = () => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      setBotmsg("Ek Palta Sign In Gardinu Hos !");
    } else {
      setIsChatOpen(!isChatOpen);
      setBotmsg(null);
    }
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() === '') return;

    const newMessages = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages);

    try {
      const tokennn = localStorage.getItem('access_token');
      const response = await axios.post(
        'http://127.0.0.1:8000/api/bot/',
        { message: userInput },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${tokennn}`,
          },
        }
      );

      if (response.data.status === 'success') {
        const botMessage = response.data.data.response;
        setMessages([...newMessages, { sender: 'bot', text: botMessage }]);
      } else {
        setMessages([...newMessages, { sender: 'bot', text: 'Sorry, something went wrong.' }]);
      }
    } catch (error) {
      console.error('Error communicating with server:', error.response.data);
      setMessages([...newMessages, { sender: 'bot', text: 'Please Sign-In' }]);
    }

    setUserInput('');
  };

  return (
    <div className="home-container">
      <section className="home-hero"></section>
      <div className="chatbot-icon" onClick={handleChatIconClick}>
        <img src={chatbotIcon} alt="Chatbot" />
        {botmsg && (
          <div className="chatbot-message">{botmsg}</div>
        )}
      </div>

      {isChatOpen && (
        <div className="chat-msg-box">
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender === 'user' ? 'user-msg' : 'bot-msg'}>
                <strong>{msg.sender === 'user' ? 'User: ' : 'Bot: '}</strong>{msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}

      <section className="home-about-us">
        <div className="home-about-image">
          <img src={images} alt="About Us" />
        </div>
        <div className="home-about-content">
          <h2 >About Us</h2>
          <p>
            At Paiso, we are dedicated to empowering everyone with the tools and knowledge to reach their financial aspirations...
          </p>
          <a href="/about" style={{color:"white", textDecoration: 'none'}}><button className="home-learn-more">Learn More</button></a>
        </div>
      </section>

      <section className="home-demo-trade">
        <div className="home-demo-content">
          <h2>Demo Trade</h2>
          <p>
            At Paiso, we offer a powerful demo trading feature that allows you to practice and hone your trading skills using virtual money...
          </p>
          <a href="/demoTrade" style={{color:"white", textDecoration: 'none'}} ><button className="home-learn-more">Learn More</button></a>
        </div>
        <div className="home-demo-image">
          <img src={bbc} alt="Demo Trade" />
        </div>
      </section>

      <section className="home-courses">
        <h2>Our Courses</h2>
        <div className="home-course-grid">
          <div className="home-course-item">
            <img src={cbc} alt="Course 1" />
            <p>What is SIP?</p>
          </div>
          <div className="home-course-item">
            <img src={ddc} alt="Course 2" />
            <p>Investing in Mutual Funds</p>
          </div>
          <div className="home-course-item">
            <img src={eec} alt="Course 3" />
            <p>Nepal Stock Market</p>
          </div>
        </div>
        <a href="/courses" style={{color:"white", textDecoration: 'none'}}><button className="home-learn-more">Learn More</button></a>
      </section>

      <Testimonials />
    </div>
  );
};

export default home;
