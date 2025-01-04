import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Categories from '../Data/Categories'
import './home.css'


const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true)
      return;
    } else {
      setError(false)
      fetchQuestions(category, difficulty)
      navigate("/quiz")
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <h2>Quiz Settings</h2>
        <div className="settings__select">
          {error && <p className="error">Please fill all the fields</p>}
          <div className="form-group">
            <label className="text">Enter Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="text">Select Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">--Select--</option>
              {Categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.category}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="text">Select Difficulty</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="">--Select--</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <button className="btn" onClick={handleSubmit}>
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
