'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Question from './components/Question';
import Result from './components/Result';
import { questions } from './data/questions';
import Image from 'next/image';

type DimensionType = 'EI' | 'SN' | 'TF' | 'JP';
type TraitType = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

interface DimensionScores {
  [key: string]: {
    [key: string]: number;
  };
}

interface Question {
  id: string;
  text: string;
  dimension: DimensionType;
  type: TraitType;
  options: {
    text: string;
    score: number;
  }[];
}

const dimensionInfo = {
  EI: {
    title: '第一部分：外向(E) vs 内向(I)',
    description: '这个维度主要评估你的宠物在社交和能量获取方面的倾向。外向型宠物从外部世界获取能量，喜欢社交互动；内向型宠物则从内心世界获取能量，更倾向于独处。',
    examples: [
      '外向型宠物：喜欢主动接近其他宠物和人，对新环境充满好奇',
      '内向型宠物：更倾向于观察和等待，需要时间适应新环境'
    ],
    total: 25,
    start: 0
  },
  SN: {
    title: '第二部分：感觉(S) vs 直觉(N)',
    description: '这个维度关注你的宠物如何感知和处理信息。感觉型宠物注重具体细节和实际经验；直觉型宠物则更关注整体模式和可能性。',
    examples: [
      '感觉型宠物：喜欢通过嗅觉和触觉探索，注重当下的体验',
      '直觉型宠物：对新事物充满好奇，喜欢探索未知领域'
    ],
    total: 25,
    start: 25
  },
  TF: {
    title: '第三部分：思考(T) vs 情感(F)',
    description: '这个维度反映你的宠物在决策时的倾向。思考型宠物更注重逻辑和规则；情感型宠物则更关注情感联系和和谐。',
    examples: [
      '思考型宠物：行为更有规律性，注重领地意识',
      '情感型宠物：对主人情绪敏感，善于表达情感'
    ],
    total: 25,
    start: 50
  },
  JP: {
    title: '第四部分：判断(J) vs 感知(P)',
    description: '这个维度描述你的宠物对生活的态度。判断型宠物喜欢计划性和规律；感知型宠物则更灵活，喜欢随性而为。',
    examples: [
      '判断型宠物：作息规律，喜欢固定的活动模式',
      '感知型宠物：适应性强，对新变化反应积极'
    ],
    total: 25,
    start: 75
  }
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{width: '100%', maxWidth: 800, margin: '0 auto', textAlign: 'center'}}>
        <div style={{margin: '0 auto', width: '100%', maxWidth: 700, borderRadius: 0, overflow: 'hidden'}}>
          <Image src="/homepage hero.png" alt="萌尾时空 hero" width={700} height={320} style={{width: '100%', height: 'auto', display: 'block', borderRadius: 0}} priority />
        </div>
        <h1 style={{fontSize: '2.1rem', fontWeight: 700, color: '#6b6fa7', margin: '2.2rem 0 1.2rem 0', letterSpacing: 1}}>萌尾时空｜让爱超越时间</h1>
        <div style={{color: '#6b6fa7', fontSize: 18, lineHeight: 2.1, fontFamily: 'Source Han Serif, Noto Serif SC, serif', maxWidth: 600, margin: '0 auto', textAlign: 'center'}}>
          <div>亲爱的家人 你好呀</div>
          <div>这里是萌尾时空</div>
          <div>一个用AI科技守护每份毛孩子之爱的温暖星球</div>
          <div>我们相信宠物不仅是生命中的过客</div>
          <div>更是镌刻在时光里的家人</div>
          <div>那些蹭过掌心的温度</div>
          <div>深夜等待的小身影</div>
          <div>调皮捣蛋的独家记忆</div>
          <div>萌尾时空愿以AI为笔</div>
          <div>为你和爱宠书写永不褪色的故事</div>
          <div style={{height: '1.2em'}}></div>
          <div>在萌尾时空</div>
          <div>科技不是冷冰冰的代码</div>
          <div>而是让爱流动的桥梁</div>
          <div>因为我们和你一样坚信</div>
          <div>真正的告别是忘记如何相爱</div>
          <div>而这里</div>
          <div>永远为每一份我想永远记得TA的心愿</div>
          <div>预留一片星辰大海</div>
        </div>
      </div>
    </main>
  );
}
