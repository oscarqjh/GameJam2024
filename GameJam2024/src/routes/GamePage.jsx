import { useState } from "react";
import Mic from "../component/Mic";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";
import apiService from "../api/apiService";

const GamePage = () => {
  const { user } = useAuth();
  const [score, setScore] = useState(0);
  const [life, setLife] = useState(5);
  const words = ["hehe", "haha", "aha"];
  const nav = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const generateSentence = () => {
    let s = [];
    for (let n = 0; n < 5; n++) {
      s.push(words[Math.floor(Math.random() * 3)]);
    }
    return s.join();
  };
  const [sentence, setSentence] = useState(() => {
    console.log("getting");

    return generateSentence();
  });

  const decreaseLife = () => {
    setLife(life - 1);
  };

  //submit score button
  const handleSubmitScore = async () => {
    const newScore = {
      username: user.name,
      score: score,
    };
    setSubmitted(true);
    const response = await apiService.addScore(newScore);
    console.log(response);
  };

  return (
    <div className="homepage-wrapper">
      <h1>
        Read the words out loud. Repeat them over and over again once you are
        done.
      </h1>
      <h2>Life:{life}</h2>
      <h2>Score:{score}</h2>
      <h1>{sentence}</h1>
      {life > 0 ? (
        <Mic
          words={sentence}
          setScore={setScore}
          score={score}
          decreaseLife={decreaseLife}
          life={life}
          setSentence={() => setSentence(generateSentence())}
        />
      ) : (
        <h1>Game Over!</h1>
      )}
      {life <= 0 && (
        <button disabled={submitted} onClick={handleSubmitScore}>
          {submitted ? "Submitted" : "Submit High Score"}
        </button>
      )}
      {life <= 0 && <button onClick={() => nav(0)}>Play Again</button>}
      {life <= 0 && (
        <button>
          <Link to={"/user"}>Go Home</Link>
        </button>
      )}
      {life <= 0 && (
        <button>
          <Link to={"/user/leaderboard"}>Go to Leaderboard</Link>
        </button>
      )}
    </div>
  );
};

export default GamePage;
