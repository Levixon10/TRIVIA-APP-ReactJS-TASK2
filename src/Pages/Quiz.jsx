import React, { useEffect, useState } from 'react'
import './Quiz.css'
import Question from '../components/Question'


const Quiz = (props) => {
    const {name, score, setScore, questions, setQuestions} =props
    const [options,setOptions]=useState([])
    const [currQues,setCurrQues]=useState(0)
    useEffect(() => {
        setOptions(
          questions &&
            handleShuffle([
              questions[currQues]?.correct_answer,
              ...questions[currQues]?.incorrect_answers,
            ])
        );
      }, [currQues, questions]);
    
      console.log(questions);
    
      const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
      };
    console.log(options)
    return (
        <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>

      {questions && (
        <>
          <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>Score : {score}</span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      )}
    </div>
  );
}

export default Quiz