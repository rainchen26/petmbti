import styles from './cat.module.css';
import { CAT_TYPES } from '../../data/catTypes';

interface CatType {
  name: string;
  description: string;
}

export default function CatTypesPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.mbtiTypesMainTitle}>猫咪16型喵格</h1>
      <div className={styles.grid}>
        {CAT_TYPES.map((type: CatType, index: number) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src={`/cat${index + 1}-new.jpeg`}
                alt={type.name}
                width={320}
                height={240}
                className={styles.typeImage}
              />
            </div>
            <div className={styles.mbtiTypeTitle}>{type.name}</div>
            <div className={styles.poemLine}>{type.description}</div>
          </div>
        ))}
      </div>
    </main>
  );
} 