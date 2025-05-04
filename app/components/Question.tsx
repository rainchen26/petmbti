'use client';

import { Question as QuestionType } from '../data/questions';
import styles from './Question.module.css';

interface QuestionProps {
  question: QuestionType;
  onAnswer: (questionId: string, score: number) => void;
}

export default function Question({ 
  question, 
  onAnswer
}: QuestionProps) {
  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionCard}>
        <h2 className={styles.questionText}>{question.text}</h2>
        <div className={styles.options}>
          {question.options.map((option, index) => (
            <button
              key={index}
              className={styles.optionButton}
              onClick={() => onAnswer(question.id, option.score)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 