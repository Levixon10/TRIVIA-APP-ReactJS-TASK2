import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <button
        className="home-button"
        onClick={() => navigate("/")}
      >
        Go to homepage
      </button>
    </div>
  );
};

export default Result;
