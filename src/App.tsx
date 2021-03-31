import React, {useState, useEffect} from 'react'
import {Component} from 'react';
import AssesmentCard from './components/AsessmentCard'
import {fetchQuestions} from './API'
import {QuestionState} from './API'
import {GlobalStyle} from './index'
import {Howl, Howler} from 'howler';

export type AnswerObj = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_NUM_QUESTIONS = 2;
let time = 60;
const timerElement = document.getElementById('Timer');
let minutes = 1;
let seconds = 60;
let adaptedList = ["Performance on this examination is as follows"];


const soundPatterned = new Howl({
  src:["https://cf-media.sndcdn.com/scMK645cJirm.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vc2NNSzY0NWNKaXJtLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2MTYwMDQyMTN9fX1dfQ__&Signature=L4FpY9my0rK0-vgcn2~oBXjJ9m-URLc-fbLnHQVlFkoBBQn8-kOn8ilpiFw4hjNnyT-FCjrxrTZ88tGRTwwlToYf65WrT8v5tZ58iwqRfc-dxuKRD0yXuQJVCCbK2NiK1Inb8CVtYwo46f97SdIlYL7HpJbV6ZIhwGi8hdQefV0r~ujpTaL3936x02-wuEx7ejkcT4dWw0R4UiiDsOFiHMJs-ziYsAg5~inIAxJ2Bx9EOULffsjWf3T7DmilokGFEC3PlDgwXLVl4KV6BgUr9slzSmhAPtHrd5Kd7jT7UGpCQ-FJSY9LejFuARYQWwu~rusMmRC6zC29fhTZii~Lfw__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ"]
});
const soundRandom = new Howl({
  src:["https://cf-media.sndcdn.com/EE4d2XqD9NZi.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vRUU0ZDJYcUQ5TlppLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2MTYwMDM4MjV9fX1dfQ__&Signature=OXTWidDpdH~pKfXxjh7j70RpK8ws67k3Rb2hX50miWU2hxrz2Z-tXFl~CLhOubFuuBxAzXnhYNXLpq91ziWASBdnQPx250XwzZ1WkIMQpk1d9j12nywYqz73K5tHPUQNr1xkTcYLfxa6I3jxKvLp3-RwuMSCj-eC5UCaI48PIXIpH1tY~hFRJTCYJEyJbEGQXCxPvkuK7mm98RsHndJM7LKqD4vkwkfzz~y63pM5FVeYs7dCGfFJWVR7WqVOmquE0TvD25ySGWCyls~njT9ZgXRIvCf1rdJI1y5OTFDn5LlIpUXLM1Z5oFytt~MBlPvLLJFUBYLWzL4GAhah6azitQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ"]
});

const App = () => {
  const [load, setLoad] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [num, setNum] = useState(0);
  const [userAns, setUserAns] = useState<AnswerObj[]>([]);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState(true);
  const [listOfQ, setListOfQ] = useState<string[]>();

  console.log(questions);

  const playPatternedSound = async() => {
    soundPatterned.play();
    startQuiz();
  }
  const playRandomSound = async() => {
    soundRandom.play();
    startQuiz();
  }
    
  const startQuiz = async () => {
    setLoad(true);
    setGameStatus(false);

    const newQuestions = await fetchQuestions(TOTAL_NUM_QUESTIONS);
    setInterval(workingTimer, 1000);
    setQuestions(newQuestions);
    setScore(0);
    setUserAns([]);
    setNum(0);
    setLoad(false);
  };

  const workingTimer = async () => {
    if(timerElement === null)
    {
      document.createElement('Timer');
    }else
    timerElement.innerHTML = `0: ${time}`;
    if(time>0)
    {
      time--;
      seconds--;
    }
  }

  const confirmAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameStatus){
      const answer = e.currentTarget.value;
      const correct = questions[num].correct_answer === answer;
      if(correct){
        setScore(previous => previous + 1);
      }
      const answerObj = {question: questions[num].question, answer, correct, correctAnswer: questions[num].correct_answer};
      setUserAns(previous => [...previous, answerObj])
      adaptedList.push(` Question ${num+1}: ${correct}, time used: ${60-time}`);
      setListOfQ(adaptedList);
      //setInterval(workingTimer, 1000);
    }
  };

  const goNext = () => {
    const nextQuestion = num + 1;
    if(nextQuestion === TOTAL_NUM_QUESTIONS)
    {
      setGameStatus(true);
    }
    else 
      time = 60;
      setNum(nextQuestion);
      setInterval(workingTimer, 2000);
  };

  return (
    <>
    <GlobalStyle />
    <div className='App'>
      <h1> Cognitive Assesment </h1>
      <p id="Timer">Timer: 00:{time}</p>
      {listOfQ != null && !gameStatus ? listOfQ.toString() :null}
      <p>
        {"\n"}
      </p>
      {gameStatus || userAns.length === TOTAL_NUM_QUESTIONS ? (
        <button className='Start No Distraction Assessment' onClick={startQuiz}>
        Start the Assessment: No distraction</button>)
      :null}
      {gameStatus || userAns.length === TOTAL_NUM_QUESTIONS ? (
        <button className='Start Patterned Distraction Assessment' onClick={playPatternedSound}>
        Start the Assessment: Patterned distraction</button>)
      :null}
      {gameStatus || userAns.length === TOTAL_NUM_QUESTIONS ? (
        <button className='Start Random Distraction Assessment' onClick={playRandomSound}>
        Start the Assessment: Random distraction</button>) 
      :null}
      {!gameStatus ? <p className='scorecard'>Score: {score}</p> :null}
      {load 
      && <p>Loading Assessment...
      </p> }
      {!gameStatus && !load && (<AssesmentCard 
        questionNum={num+1}
        totalNumQuestions={TOTAL_NUM_QUESTIONS}
        question={questions[num].question}
        answers={questions[num].answers}
        userAnswer={userAns ? userAns[num] : undefined}
        callback={confirmAnswer}/>)}
      {!load && !gameStatus && userAns.length === num + 1 && num+1 !== TOTAL_NUM_QUESTIONS &&
        <button className='nextQuestion' onClick={goNext}> Next </button>}
     </div>
     </>
  );
};

export default App;
