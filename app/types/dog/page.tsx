'use client';

import styles from './dog.module.css';
import Image from 'next/image';
import { DOG_TYPES } from '@/app/data/dogTypes';

interface DogType {
  type: string;
  name: string;
  description: string;
  imageUrl: string;
}

const TYPE_GROUPS = [
  {
    title: '守护者 SJ型',
    types: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ']
  },
  {
    title: '冒险家 SP型',
    types: ['ISTP', 'ISFP', 'ESTP', 'ESFP']
  },
  {
    title: '指挥官 NT型',
    types: ['INTJ', 'INTP', 'ENTJ', 'ENTP']
  },
  {
    title: '陪伴者 NF型',
    types: ['INFJ', 'INFP', 'ENFJ', 'ENFP']
  }
];

export default function DogTypesPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.mbtiTypesMainTitle}>狗狗16型旺格</h1>
      {TYPE_GROUPS.map((group) => (
        <section key={group.title} className={styles.typeGroup}>
          <h2 className={styles.typeGroupTitle}>{group.title}</h2>
          <div className={styles.grid}>
            {DOG_TYPES.filter((dogType) => group.types.includes(dogType.type)).map((dogType) => (
              <div key={dogType.type} className={styles.card}>
                <div className={styles.typeContent}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={dogType.imageUrl}
                      alt={dogType.name}
                      className={styles.typeImage}
                      width={140}
                      height={140}
                    />
                  </div>
                  <div className={styles.typeInfo}>
                    <div className={styles.mbtiTypeTitle}>
                      {dogType.type} {dogType.name}
                    </div>
                    <div className={styles.descriptionPoem}>
                      {dogType.description
                        .replace(/，|、|。|\n/g, '\n')
                        .split(/\n/)
                        .filter(line => line.trim() !== '')
                        .map((line, idx) => (
                          <div key={idx} className={styles.poemLine}>{line}</div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
} 