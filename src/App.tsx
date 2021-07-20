import { FC, MouseEvent, useState } from 'react';
import { fetchQuizQuestions } from "./API"
// Components
import QuestionCard from "./components/QuestionCard";
// Types
import { Difficulty, QuestionState } from "./API";
// Styles
import { GlobalStyle, Wrapper } from "./App.styles";


const TOTAL_QUESTIONS = 10;

export interface AnswerObject {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const App: FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // Users answer
      const answer = e.currentTarget.value;

      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;

      // Add score if answer is correct 
      if (correct) setScore(prev => prev + 1);

      // Save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer, 
        correct,
        correctAnswer: questions[number].correct_answer,
      }

      setUserAnswer((prev) => [...prev, answerObject]);
    }
  }

  const nextQuestion = () => {
    // Move on to the next question, if not the last question
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>QUIZ APP</h1>
        {(gameOver || userAnswer.length === TOTAL_QUESTIONS) && (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        )}
        {!gameOver && <p className="score">Score: {score}</p>}
        {loading && <p>Loading Questions ...</p>}
        {(!loading && !gameOver) && (
          <QuestionCard
            questionNo={number + 1}  
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswer ? userAnswer[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {(!gameOver && !loading && userAnswer.length === number + 1 && number !== TOTAL_QUESTIONS - 1) && (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          )}
      </Wrapper>
    </>
  );
}

export default App;
