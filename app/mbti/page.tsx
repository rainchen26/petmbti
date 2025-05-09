import Image from 'next/image';
import styles from '../page.module.css';

export default function MBTIPage() {
  return (
    <main className={styles.main} style={{maxWidth: 800, margin: '0 auto', padding: 0}}>
      {/* 宠物MBTI频道介绍+图片区块，全部放在同一个section */}
      <section className={styles.mbtiSection} style={{maxWidth: 800, margin: '0 auto', padding: 0}}>
        {/* hero图片+文字 */}
        <div className={styles.mbtiHeroImgWrap} style={{position: 'relative', maxWidth: 800, margin: '0 auto', padding: 0, marginBottom: 0}}>
          <Image src="/mbti hero.png" alt="宠物与主人" width={1456} height={816} className={styles.mbtiHeroImg} style={{width: '100%', height: 'auto', display: 'block'}} priority />
          <div style={{position: 'absolute', bottom: '10%', right: '4%', width: '60%', textAlign: 'right', color: '#fff', fontSize: '2.1rem', fontWeight: 700, letterSpacing: 1, zIndex: 2, lineHeight: 1.3}}>
            <div>宠物MBTI</div>
            <div style={{fontSize: '1.3rem', fontWeight: 400, marginTop: 8}}>它不说话 但它有性格</div>
            <div style={{fontSize: '1.1rem', fontWeight: 400, marginTop: 4}}>一场和你毛孩子的灵魂对话——</div>
          </div>
        </div>
        {/* 第一张图片+文字 */}
        <div className={styles.mbtiHeroImgWrap} style={{position: 'relative', maxWidth: 800, margin: '0 auto', padding: 0, marginBottom: 0}}>
          <Image src="/mbti1-new.png" alt="mbti1" width={1456} height={816} className={styles.mbtiHeroImg} style={{width: '100%', height: 'auto', display: 'block'}} />
          <div style={{position: 'absolute', top: '50%', right: '5%', transform: 'translateY(-50%)', width: '60%', color: '#fff', fontSize: 16, fontWeight: 500, textAlign: 'right', lineHeight: 1.5}}>
            你有没有想过<br/>为什么你的猫咪总爱躲在窗边发呆<br/>却不喜欢被抱<br/>为什么你的狗狗见到陌生人总会摇尾巴<br/>而另一只却始终安静地站在你身后
          </div>
        </div>
        {/* 第二张图片+文字 */}
        <div className={styles.mbtiHeroImgWrap} style={{position: 'relative', maxWidth: 800, margin: '0 auto', padding: 0, marginBottom: 0}}>
          <Image src="/mbti2-new.png" alt="mbti2" width={1456} height={816} className={styles.mbtiHeroImg} style={{width: '100%', height: 'auto', display: 'block'}} />
          <div style={{position: 'absolute', bottom: '5%', left: '5%', width: '60%', color: '#fff', fontSize: 16, fontWeight: 500, textAlign: 'left', lineHeight: 1.5}}>
            就像每一个人有不同的性格<br/>每只宠物也都有属于自己的内在人格<br/>它们或许外向活泼<br/>或许细腻敏感<br/>或许思维缜密<br/>或许自由浪漫<br/>我们所做的<br/>就是帮你更好地读懂它的方式
          </div>
        </div>
        {/* 第三张图片+文字 */}
        <div className={styles.mbtiHeroImgWrap} style={{position: 'relative', maxWidth: 800, margin: '0 auto', padding: 0, marginBottom: 0}}>
          <Image src="/mbti3-new.png" alt="mbti3" width={1456} height={816} className={styles.mbtiHeroImg} style={{width: '100%', height: 'auto', display: 'block'}} />
          <div style={{position: 'absolute', top: '62%', right: '5%', transform: 'translateY(-50%)', width: '60%', color: '#fff', fontSize: 16, fontWeight: 500, textAlign: 'right', lineHeight: 1.5}}>
            宠物MBTI性格测试<br/>通过你对它日常行为的观察<br/>从性格倾向 情绪模式 社交风格等多个维度分析<br/>为它匹配属于它的十六种个性标签之一
          </div>
        </div>
        {/* 第四张图片+文字 */}
        <div className={styles.mbtiHeroImgWrap} style={{position: 'relative', maxWidth: 800, margin: '0 auto', padding: 0, marginBottom: 0}}>
          <Image src="/mbti4-new.png" alt="mbti4" width={1456} height={816} className={styles.mbtiHeroImg} style={{width: '100%', height: 'auto', display: 'block'}} />
          <div style={{position: 'absolute', bottom: '5%', right: '5%', width: '60%', color: '#fff', fontSize: 16, fontWeight: 500, textAlign: 'right', lineHeight: 1.5}}>
            你会收获一份专属性格报告<br/>它为什么这样做<br/>它需要怎样的陪伴<br/>怎样训练它才最合适<br/>不止于了解<br/>更是一次深入心灵的陪伴
          </div>
        </div>
      </section>
    </main>
  );
} 