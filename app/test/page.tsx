'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './test.module.css';

interface Question {
  id: number;
  text: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  options: {
    text: string;
    score: {
      E?: number;
      I?: number;
      S?: number;
      N?: number;
      T?: number;
      F?: number;
      J?: number;
      P?: number;
    };
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: '你的猫咪更喜欢：',
    dimension: 'EI',
    options: [
      {
        text: '主动接近陌生人，对来访者充满好奇',
        score: { E: 1 }
      },
      {
        text: '保持距离观察，需要时间适应新环境',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 2,
    text: '当遇到新玩具时，你的猫咪会：',
    dimension: 'SN',
    options: [
      {
        text: '仔细嗅闻和触摸，通过感官探索',
        score: { S: 1 }
      },
      {
        text: '快速尝试各种玩法，充满想象力',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 3,
    text: '在与其他猫咪互动时，你的猫咪：',
    dimension: 'TF',
    options: [
      {
        text: '遵循固定的社交规则，保持距离感',
        score: { T: 1 }
      },
      {
        text: '根据对方情绪调整行为，注重和谐',
        score: { F: 1 }
      }
    ]
  },
  {
    id: 4,
    text: '在日常生活中，你的猫咪：',
    dimension: 'JP',
    options: [
      {
        text: '喜欢固定的作息时间，规律性强',
        score: { J: 1 }
      },
      {
        text: '作息灵活，喜欢随性而为',
        score: { P: 1 }
      }
    ]
  }
];

export default function TestPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
  });

  const handleAnswer = (option: Question['options'][0]) => {
    const newAnswers = { ...answers };
    Object.entries(option.score).forEach(([trait, score]) => {
      newAnswers[trait as keyof typeof newAnswers] += score;
    });
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const mbtiType = calculateMBTIType(newAnswers);
      router.push(`/result?type=${mbtiType}`);
    }
  };

  const calculateMBTIType = (answers: { [key: string]: number }) => {
    const type = [
      answers.E > answers.I ? 'E' : 'I',
      answers.S > answers.N ? 'S' : 'N',
      answers.T > answers.F ? 'T' : 'F',
      answers.J > answers.P ? 'J' : 'P'
    ].join('');
    return type;
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.progressBar}>
          <div 
            className={styles.progress} 
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className={styles.questionContainer}>
          <h2 className={styles.questionNumber}>
            问题 {currentQuestion + 1}/{questions.length}
          </h2>
          <p className={styles.questionText}>
            {questions[currentQuestion].text}
          </p>

          <div className={styles.optionsContainer}>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={styles.optionButton}
                onClick={() => handleAnswer(option)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 