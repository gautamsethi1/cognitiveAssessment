import React, {useState, useEffect} from 'react'
import {Component} from 'react';
import AssesmentCard from './components/AsessmentCard'
import {fetchQuestions} from './API'
import {QuestionState} from './API'
import {GlobalStyle} from './index'
import {Howl, Howler} from 'howler';
import { start } from 'repl';

export type AnswerObj = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_NUM_QUESTIONS = 20;
let time = 60;
const timerElement = document.getElementById('Timer');
let minutes = 1;
let seconds = 60;
let adaptedList = ["Performance on this examination is as follows"];


/*const  = new Howl({
  src:["https://soundbible.com/mp3/45min_april_rainstorm-mike-koenig.mp3"]
});
const soundRandom = new Howl({
  src:["https://soundbible.com/mp3/45min_april_rainstorm-mike-koenig.mp3"]
});*/

let soundPatterned = new Audio("https://cf-media.sndcdn.com/scMK645cJirm.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vc2NNSzY0NWNKaXJtLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2MTc1MzQ3MTZ9fX1dfQ__&Signature=T1Z8-P1YMhNecx6naHqNh~Ka9YqDGrkRib0QutBfEnSmSlEr4j8huilNCNlGGNdPilhEmSETy7DL2oIini0UT0n7P3MakgEsa7INs4Vnx6k-hYObHZYau6DKV0-4EJZWOZ80tt2Cw5utUWPKXpyPgkrbZfmM2qvwRRPSWE9ZAPc5KW3unysUDoGDwoPNlsNmxJVDTkc-jC2qbGScmTrK1e84S6nNlho9b3Mr5pWa6KG6Xio-eknMCb-OCWxpmF1BczXdAW2pXJO7kAJ43X5YfaAALisQfngaxr60OyMzJvVNRcqgOh-4ibRmdxQ6wc8S3dcytcy1Gc~Q7YImRJxKlA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ");
let soundRandom = new Audio("https://cf-media.sndcdn.com/EE4d2XqD9NZi.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vRUU0ZDJYcUQ5TlppLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2MTc1MzQ3NjB9fX1dfQ__&Signature=crucSiN~~DCbe10JGhxVsLvShFOziURpKBp4gjoMqtcI7ezaCFHjgmidtOWi0neZbpBY6YXjLsanKeqsxJZQe-UjNYtPtjaGYuZYblqJVIZH51anKh5zTdakxPRaADutvKZleXkNJ7-Ab8gcL6dOmitt7BzcbNxwPloTh7qY1~pzmfpjNjPkAU6dHxAc7Mf~r9WEkbSv6S7eihlnKMMYy8nxMa57AYQngzTSTsVJNQ9PNoP7z6Fkh4S-J70iesSKer2hlgjx92oyK7EcnYRNNfNhrqwaUtgF9Hm6kKaZRVCfofnAP5sGlDGuBh8Rzt~8dwuSYtTz~KhbNSDoQl7Zmg__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ");

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
    soundRandom.pause()
    adaptedList.concat("Test Type 2");
    soundPatterned.play()
    startQuiz();
  }
  const playRandomSound = async() => {
    soundPatterned.pause()
    adaptedList.concat("Test Type 3");
    soundRandom.play()
    startQuiz();
  }

  const playNoSound = async() => {
    soundPatterned.pause()
    soundRandom.pause()
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
    else {
      soundRandom.pause()
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
        <button className='Start No Distraction Assessment' onClick={playNoSound}>
        Start the Assessment: Test Type 1</button>)
      :null}
      {gameStatus || userAns.length === TOTAL_NUM_QUESTIONS ? (
        <button className='Start Patterned Distraction Assessment' onClick={playPatternedSound}>
        Start the Assessment: Test Type 2</button>)
      :null}
      {gameStatus || userAns.length === TOTAL_NUM_QUESTIONS ? (
        <button className='Start Random Distraction Assessment' onClick={playRandomSound}>
        Start the Assessment: Test Type 3</button>) 
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
