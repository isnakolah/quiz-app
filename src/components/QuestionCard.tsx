import { FC, MouseEvent } from 'react';
import { AnswerObject } from "../App";
import { ButtonWrapper, Wrapper } from './QuestionCard.styles';

interface Props {
  question: string;
  answers: string[];
  callback: (e: MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNo: number;
  totalQuestions: number;
}

const QuestionCard: FC<Props> = ({question, answers, callback, userAnswer, questionNo, totalQuestions}) => (
    <Wrapper>
      <p className="number">
        Question: {questionNo} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{__html: question}} />
      <div>
        {answers.map(answer => (
          <ButtonWrapper 
            key={answer} 
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{__html: answer}} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
);

export default QuestionCard
