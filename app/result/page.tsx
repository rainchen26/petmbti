'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './result.module.css';
import Image from 'next/image';
import { dogResults } from '../data/dogResults';
import { catResults } from '../data/catResults';

export default function ResultPage() {
  const searchParams = useSearchParams();
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [testType, setTestType] = useState<string>('cat');

  useEffect(() => {
    const type = searchParams.get('type');
    const typeParam = searchParams.get('testType') || 'cat'; // 默认为猫咪测试
    setTestType(typeParam);

    if (!type) {
      setError('未找到测试结果');
      setLoading(false);
      return;
    }

    // 根据测试类型选择对应的结果数据
    const results = typeParam === 'cat' ? catResults : dogResults;
    const mbtiResult = results[type as keyof typeof results];
    
    if (!mbtiResult) {
      setError('无效的MBTI类型');
      setLoading(false);
      return;
    }

    setResult(mbtiResult);
    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner} />
        <p className={styles.loadingText}>正在分析结果...</p>
      </div>
    );
  }

  if (error || !result) {
    return (
      <div className={styles.errorContainer}>
        <h2>出错了</h2>
        <p>{error || '无法加载结果'}</p>
      </div>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.typeInfo}>
            <h1 className={styles.type}>{result.type}</h1>
            <h2 className={styles.title}>{result.title}</h2>
          </div>
          <div className={styles.imageContainer}>
            <img
              src={`/${testType}-${result.type}-new.jpeg`}
              alt={result.title}
              className={styles.typeImage}
              width={320}
              height={240}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
                borderRadius: 0,
                border: 'none',
                boxShadow: 'none'
              }}
            />
          </div>
        </div>

        <p className={styles.description}>{result.description}</p>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>性格特征</h3>
          <div className={styles.cardContent}>
            {result.traits.map((trait: string, index: number) => (
              <div key={index} className={styles.traitItem}>
                <span className={styles.bullet}>•</span>
                {trait}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>优势</h3>
          <div className={styles.cardContent}>
            {result.strengths.map((strength: string, index: number) => (
              <div key={index} className={styles.strengthItem}>
                <span className={styles.bullet}>•</span>
                {strength}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>挑战</h3>
          <div className={styles.cardContent}>
            {result.challenges.map((challenge: string, index: number) => (
              <div key={index} className={styles.challengeItem}>
                <span className={styles.bullet}>•</span>
                {challenge}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>饲养建议</h3>
          <div className={styles.cardContent}>
            {result.careTips.map((tip: string, index: number) => (
              <div key={index} className={styles.tipItem}>
                <span className={styles.bullet}>•</span>
                {tip}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.shareSection}>
          <button className={styles.shareButton} onClick={() => window.location.href = '/'}>
            重新测试
          </button>
        </div>
      </div>
    </main>
  );
} 