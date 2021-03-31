import {randomizeArray} from './utils';

export type QuestionInfo = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = QuestionInfo & {answers: string[]};

export const fetchQuestions = async(num: number) => {
    const endpoint = 'https://opentdb.com/api.php?amount=25&category=18&difficulty=medium&type=multiple';
    const data = await(await fetch(endpoint)).json();
    console.log(data);
    return data.results.map((question:QuestionInfo) => ({...question, answers: randomizeArray([...question.incorrect_answers, question.correct_answer,]),}));
};

