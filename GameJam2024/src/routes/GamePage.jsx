import { useEffect, useState } from "react";
import Mic from "../component/Mic";
import { Link, useNavigate } from "react-router-dom";
import NButton from "../component/NButton";
import { Meter } from "grommet";

import { useAuth } from "../hooks/AuthProvider";
import apiService from "../api/apiService";

const GamePage = () => {
  const { user } = useAuth();
  const [score, setScore] = useState(0);
  const [life, setLife] = useState(5);
  const [seconds, setSeconds] = useState(300);
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

  useEffect(() => {
    setTimeout(() => {
      console.log(seconds);
      let t = seconds - 1;
      setSeconds(t);
      if (seconds <= 0) {
        setLife(0);
      }
    }, 1000);
  }, [seconds]);

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
      <div
        style={{
          display: "flex",
          flex: "row",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <h4 style={{ marginTop: "35px" }}>Life:{life}</h4>
        <h4 style={{ marginTop: "35px" }}>Score:{score}</h4>
        <div>
          <h4 style={{ display: "inline-block" }}>Time left:</h4>
          <Meter
            style={{
              display: "inline-block",
              marginTop: "35px",
              marginLeft: "5px",
            }}
            values={[
              {
                value: (seconds / 300) * 100,
                label: "sixty",
              },
            ]}
            aria-label="meter"
          />
        </div>
      </div>

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
        <NButton
          label={submitted ? "Submitted" : "Submit High Score"}
          disabled={submitted}
          onClick={handleSubmitScore}
        ></NButton>
      )}
      {life <= 0 && (
        <NButton label={"Play Again"} onClick={() => nav(0)}></NButton>
      )}
      {life <= 0 && (
        <NButton label={"Go Home"}>
          <Link to={"/user"}></Link>
        </NButton>
      )}
      {life <= 0 && (
        <NButton label={"Go to Leaderboard"}>
          <Link to={"/user/leaderboard"}></Link>
        </NButton>
      )}
    </div>
  );
};

export default GamePage;
