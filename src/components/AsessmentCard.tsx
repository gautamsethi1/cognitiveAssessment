import React from 'react';
import {AnswerObj} from '../App'
import {Wrapper, ButtonWrapper} from './AssessmentCard.styles';
 
type Pro = { 
    answers: string[];
    question: string;
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObj | undefined;
    questionNum: number;
    totalNumQuestions: number;
}

const AssessmentCard: React.FC<Pro> = ({question, answers, callback, userAnswer, questionNum, totalNumQuestions}) => (
<Wrapper>
    <p className="num">
        Question: {questionNum}/{totalNumQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question}} />
    <div>
        {answers.map((answer) => (
            <ButtonWrapper key={answer} correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer}> 
                <button disabled={!!userAnswer} value = {answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html: answer}} />
                </button>
            </ButtonWrapper>
        ))}
    </div>
</Wrapper>
);

export default AssessmentCard;