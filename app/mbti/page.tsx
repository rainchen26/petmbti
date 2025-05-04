import Image from 'next/image';
import styles from '../page.module.css';

export default function MBTIPage() {
  return (
    <main className={styles.main}>
      {/* 宠物MBTI频道介绍区块 */}
      <section id="mbti" className={styles.mbtiSection}>
        <div className={styles.mbtiHeroImgWrap}>
          <Image src="/mbti-hero.jpg" alt="宠物与主人" width={400} height={300} className={styles.mbtiHeroImg} priority />
        </div>
        <h1 className={styles.mbtiMainTitle}>宠物MBTI</h1>
        <h2 className={styles.mbtiTitle}>它不说话 但它有性格</h2>
        <p className={styles.mbtiSubtitle}>——一场和你毛孩子的灵魂对话</p>
        <div className={styles.mbtiContent + ' ' + styles.mbtiPoem}>
          <div>你有没有想过</div>
          <div>为什么你的猫咪总爱躲在窗边发呆</div>
          <div>却不喜欢被抱</div>
          <div>为什么你的狗狗见到陌生人总会摇尾巴</div>
          <div>而另一只却始终安静地站在你身后</div>
          <div style={{height: '1.2em'}}></div>
          <div>就像每一个人有不同的性格</div>
          <div>每只宠物也都有属于自己的内在人格</div>
          <div>它们或许外向活泼</div>
          <div>或许细腻敏感</div>
          <div>或许思维缜密</div>
          <div>或许自由浪漫</div>
          <div>我们所做的</div>
          <div>就是帮你更好地读懂它的方式</div>
          <div style={{height: '1.2em'}}></div>
          <div>宠物MBTI性格测试</div>
          <div>通过你对它日常行为的观察</div>
          <div>从性格倾向 情绪模式 社交风格等多个维度分析</div>
          <div>为它匹配属于它的十六种个性标签之一</div>
          <div style={{height: '1.2em'}}></div>
          <div>你会收获一份专属性格报告</div>
          <div>它为什么这样做</div>
          <div>它需要怎样的陪伴</div>
          <div>怎样训练它才最合适</div>
          <div>不止于了解</div>
          <div>更是一次深入心灵的陪伴</div>
        </div>
      </section>
    </main>
  );
} 