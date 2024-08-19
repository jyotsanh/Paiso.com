import React, { useState } from 'react';
import './Quiz.css'; // Import the CSS file

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    
    {
        questionText: 'नेपाल स्टक एक्सचेन्जलाई के भनिन्छ?',
        answerOptions: [
          { answerText: 'A. नेप्से', isCorrect: true },
          { answerText: 'B. एनएसई', isCorrect: false },
          { answerText: 'C. नेस्को', isCorrect: false },
          { answerText: 'D. नेक्सस', isCorrect: false },
        ],
      },
      {
        questionText: 'नेपालमा सेयर बजार कुन सालमा स्थापना भएको थियो?',
        answerOptions: [
          { answerText: 'A. २०४० साल', isCorrect: false },
          { answerText: 'B. २०५२ साल', isCorrect: false },
          { answerText: 'C. २०४९ साल', isCorrect: true },
          { answerText: 'D. २०५० साल', isCorrect: false },
        ],
      },
      {
        questionText: 'सेयर मार्केटमा लगानी गर्ने व्यक्ति के भनेर चिनिन्छन्?',
        answerOptions: [
          { answerText: 'A.उधमी', isCorrect: false },
          { answerText: 'B. सेयरधनी', isCorrect: true },
          { answerText: 'C. ग्राहक', isCorrect: false },
          { answerText: 'D. उपभोक्ता', isCorrect: false },
        ],
      },
      {
        questionText: 'कुन कम्पनीको सेयरलाई ब्लु चिप्स स्टक भनिन्छ?',
        answerOptions: [
          { answerText: 'A. कमजोर कम्पनी', isCorrect: false },
          { answerText: 'B. ठुलो कम्पनी', isCorrect: true },
          { answerText: 'C. साना कम्पनी', isCorrect: false },
          { answerText: 'D. सरकारी कम्पनी', isCorrect: false },
        ],
      },
      {
        questionText: 'नेपाल स्टक एक्सचेन्जमा कतिवटा कम्पनी सूचीकृत छन्?',
        answerOptions: [
          { answerText: 'A. २००', isCorrect: false },
          { answerText: 'B. १५०', isCorrect: false },
          { answerText: 'C. २३०', isCorrect: true },
          { answerText: 'D. २५०', isCorrect: false },
        ],
      },
      {
        questionText: 'IPO को पुरा रूप के हो?',
        answerOptions: [
          { answerText: 'A. Initial Public Offering', isCorrect: true },
          { answerText: 'B. Initial Private Offering', isCorrect: false },
          { answerText: 'C. International Public Offering', isCorrect: false },
          { answerText: 'D. International Private Offering', isCorrect: false },
        ],
      },
      {
        questionText: 'डिभिडेन्ड के हो?',
        answerOptions: [
          { answerText: 'A. नाफाको हिस्सा', isCorrect: true },
          { answerText: 'B. ऋणको हिस्सा', isCorrect: false },
          { answerText: 'C. बोनस सेयर', isCorrect: false },
          { answerText: 'D. सेयर खरिद', isCorrect: false },
        ],
      },
      {
        questionText: 'कुन स्टक एक्सचेन्ज नेपाल सरकारको स्वामित्वमा छ?',
        answerOptions: [
          { answerText: 'A. नेपाल स्टक एक्सचेन्ज', isCorrect: true },
          { answerText: 'B. बीएसई', isCorrect: false },
          { answerText: 'C. एनएसई', isCorrect: false },
          { answerText: 'D. सिंगापुर स्टक एक्सचेन्ज', isCorrect: false },
        ],
      },
      {
        questionText: 'धितोपत्र के हो?',
        answerOptions: [
          { answerText: 'A. सेयर र बन्डहरू', isCorrect: true },
          { answerText: 'B. माटो र पत्थर', isCorrect: false },
          { answerText: 'C. सुन र चाँदी', isCorrect: false },
          { answerText: 'D. नगद र चेक', isCorrect: false },
        ],
      },
      {
        questionText: 'नेपालमा म्युचुअल फन्ड कसले प्रबन्ध गर्छ?',
        answerOptions: [
          { answerText: 'A. सेवामूलक संस्था', isCorrect: false },
          { answerText: 'B. वाणिज्य बैंक', isCorrect: false },
          { answerText: 'C. बैंक तथा वित्तीय संस्था', isCorrect: true },
          { answerText: 'D. शेयर बजार', isCorrect: false },
        ],
      },
  
  
  ];

  const handleAnswerOptionClick = (isCorrect) => {
    setSelectedOption(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  return (
    <div className='quiz-container'>
      {showScore ? (
        <div className='score-section'>
          तपाईंले {questions.length} प्रश्न मध्य {score} सही उत्तर दिनुभएको छ।
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>प्रश्न {currentQuestion + 1}</span> / {questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                className={`answer-option ${
                  selectedOption === null
                    ? ''
                    : answerOption.isCorrect
                    ? 'correct'
                    : 'incorrect'
                }`}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
          <div className='navigation-buttons'>
            <button onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
              Previous
            </button>
            <button onClick={handleNextQuestion} disabled={selectedOption === null}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
