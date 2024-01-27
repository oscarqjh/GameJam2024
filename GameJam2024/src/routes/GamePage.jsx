import { useEffect, useState } from "react";
import Mic from "../component/Mic";
import { Link, useNavigate } from "react-router-dom";

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [life, setLife] = useState(5);
  const words = ["hehe", "haha", "aha"];
  const nav = useNavigate();
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
      {life <= 0 && <button onClick={() => nav(0)}>Play Again</button>}
      {life <= 0 && <Link to={"/user"}>Go Home</Link>}
    </div>
  );
};

export default GamePage;
