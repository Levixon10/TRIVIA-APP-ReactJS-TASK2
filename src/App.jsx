import React from 'react'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Quiz from './Pages/Quiz'
import Result from './Pages/Result'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'

const App = () => {
  const [name,setName]=useState("")
  const [questions, setQuestions]=useState()
  const [score, setScore]=useState(0)
  
  const fetchQuestions = async (category = "", difficulty = "") => {
    const url = `https://opentdb.com/api.php?amount=10${
      category ? `&category=${category}` : ""
    }${difficulty ? `&difficulty=${difficulty}` : ""}&type=multiple`;
  
    try {
      const response = await fetch(url); 
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json(); 
      setQuestions(data.results);
    } catch (error) {
      console.error("Error fetching questions:", error); 
    }
  };
  
  return (
    <Router>
      <div className="app" style={{ backgroundImage: 'url("/bgd.png")' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>} />
          <Route path="/Quiz" element={<Quiz name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions}  />} />
          <Route path="/Result" element={<Result name={name} score={score} />} />
        </Routes>

      </div>
      <Footer />
    </Router>
  )
}

export default App
