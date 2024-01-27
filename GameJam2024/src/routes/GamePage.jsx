import { useEffect, useState } from "react";
import Mic from "../component/Mic";
import { Link, useNavigate } from "react-router-dom";
import NButton from "../component/NButton";
import { Meter } from "grommet";


const GamePage = () => {
  const [score, setScore] = useState(0);
  const [life, setLife] = useState(5);
  const [seconds,setSeconds]=useState(300)
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

  useEffect(()=>{
    setTimeout(() => {
        console.log(seconds)
        let t = seconds -1
        setSeconds(t)
    }, 1000);
  },[seconds])

  
  const decreaseLife = () => {
    setLife(life - 1);
  };

  return (
    <div className="homepage-wrapper">
      <h1>
        Read the words out loud. Repeat them over and over again once you are
        done.
      </h1>
      <div style={{display:'flex',flex:'row',width:'100%',justifyContent:"space-evenly"}}>
      <h4 style={{ marginTop:'35px'}}>Life:{life}</h4>
      <h4 style={{ marginTop:'35px'}}>Score:{score}</h4>
      <div>
        <h4 style={{display:'inline-block'}}>Time left:</h4>
      <Meter style={{display:'inline-block', marginTop:'35px', marginLeft:'5px'}}
  values={[{
    value: (seconds/500)*100,
    label: 'sixty',
  }]}
  aria-label="meter"
/></div>
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
      {life <= 0 && <NButton onClick={() => nav(0)} label={'Play Again'}></NButton>}
      {life <= 0 && <NButton onClick={() => nav('/user')} label={'Go Home'}></NButton>}
    </div>
  );
};

export default GamePage;
