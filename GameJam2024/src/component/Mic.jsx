import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Mic = ({words, setScore, score, decreaseLife, setSentence}) => {

  const [no,setNo] = useState(0)
  
const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  useEffect(()=>{
    SpeechRecognition.startListening({continuous:true})
    
    
  },[words])

  useEffect(()=>{
    setNo(no+1)
    if(transcript.length>words.length){
      SpeechRecognition.stopListening()
      let win = true
      for(let n=0;n<transcript.split(" ").length;n++){
        try{
        if(!words.split(",")[n].includes(transcript.split(" ")[n])){
          win = false
        }
      }catch(e){
        resetTranscript()
      }
      }

      if(win){
        setScore(score+1)
      }else{
        decreaseLife()
      }
      
      setSentence()
      resetTranscript()
      setTimeout(() => {
        SpeechRecognition.startListening({continuous:true})
      }, 1000);
    }
  },[transcript])


  return (
    <>Listening</>
  );
};

  export default Mic;