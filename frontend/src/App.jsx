import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home/home'
import SIPCalculator from './pages/SIPCalculator/SIPCalculator';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/login/login';
import Register from './pages/Register/Register';
import Navbar from '../src/components/navbar/navbar'
import CourseList from './pages/courses/CourseList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './pages/Quiz/Quiz';
import DemoTrade from './pages/Demo Trade/DemoTrade';
import About from './pages/About/About';
import Footer from '../src/components/footer/footer'
import CourseVideo from './pages/courses/CourseVideo';
function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
 
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/sip' element={<SIPCalculator />} />
    <Route path='/quiz' element={<Quiz/>} />
    <Route path='/courses' element={<CourseList />} />
    <Route path="/course/:id" element={<CourseVideo />} /> 
    <Route path='/demoTrade' element={<DemoTrade/>} /> 
    <Route path='/about' element={<About/>} /> 
    
   </Routes>
   <Footer />
   </BrowserRouter>
  );
}

const styles = {
  title: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '24px',
  },
};

export default App;
