'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../page.module.css';
import { cat100Questions } from '../../data/cat100Questions';
import { Question, DimensionType } from '../../types/mbti';

const DIMENSIONS = [
  {
    key: 'EI' as DimensionType,
    name: '外向(E)-内向(I)维度',
    poem: [
      '评估猫咪获取能量的方式',
      '外向猫通过社交互动充电',
      '表现为主动探索 高互动频率',
      '内向猫需要独处恢复能量',
      '表现为回避接触 选择性社交',
      '测试观察猫咪对陌生人 新环境的反应模式',
      '',
      '外向型',
      '通过社交互动获得能量',
      '主动探索新环境',
      '喜欢成为家庭活动的中心',
      '',
      '内向型',
      '在安静独处时恢复精力',
      '对陌生人保持警惕',
      '需要安全的私人空间',
    ]
  },
  {
    key: 'SN' as DimensionType,
    name: '实感(S)-直觉(N)维度',
    poem: [
      '检测信息处理偏好',
      '实感猫关注具体细节 材质 温度',
      '依赖经验判断',
      '直觉猫关注抽象关联 意义 氛围',
      '擅长创新解决',
      '通过玩具选择 问题解决方式区分',
      '',
      '实感型',
      '专注当下具体细节',
      '相信眼见为实',
      '依赖实际体验做判断',
      '',
      '直觉型',
      '对氛围变化敏感',
      '常表现出第六感',
      '关注事物背后的意义',
    ]
  },
  {
    key: 'TF' as DimensionType,
    name: '思考(T)-情感(F)维度',
    poem: [
      '分析决策机制',
      '思考猫理性优先 利弊分析',
      '情感猫情绪驱动 寻求关爱',
      '测试惩罚反应 资源争夺等场景的行为选择',
      '',
      '思考型',
      '理性解决问题',
      '行为目标明确',
      '保持客观中立态度',
      '',
      '情感型',
      '情绪驱动行为',
      '重视亲密关系',
      '会主动寻求情感互动',
    ]
  },
  {
    key: 'JP' as DimensionType,
    name: '判断(J)-感知(P)维度',
    poem: [
      '考察生活方式',
      '判断猫喜欢规律 固定作息',
      '感知猫随性而为 讨厌约束',
      '通过作息稳定性 环境适应力评估',
      '',
      '判断型',
      '作息严格规律',
      '讨厌计划被打乱',
      '喜欢可预测的环境',
      '',
      '感知型',
      '随性而为',
      '享受意外惊喜',
      '对变化适应力强',
    ]
  }
];

function getCurrentDimension(index: number) {
  if (index < 25) return DIMENSIONS[0];
  if (index < 50) return DIMENSIONS[1];
  if (index < 75) return DIMENSIONS[2];
  return DIMENSIONS[3];
}

export default function CatTestPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const question = cat100Questions[current];
  const dimension = getCurrentDimension(current);
  const router = useRouter();

  // 进度百分比
  const percent = ((current + 1) / 100) * 100;
  // 当前维度在DIMENSIONS中的索引
  const dimIdx = DIMENSIONS.findIndex(d => d.key === dimension.key);

  // 计算MBTI类型
  const calculateMBTIType = (answers: number[]) => {
    const scores = {
      E: 0, I: 0,
      S: 0, N: 0,
      T: 0, F: 0,
      J: 0, P: 0
    };

    // 计算每个维度的得分
    answers.forEach((answer, index) => {
      const question = cat100Questions[index];
      const option = question.options[answer];
      
      if (index < 25) { // EI维度
        if (option.score.E) scores.E += option.score.E;
        if (option.score.I) scores.I += option.score.I;
      } else if (index < 50) { // SN维度
        if (option.score.S) scores.S += option.score.S;
        if (option.score.N) scores.N += option.score.N;
      } else if (index < 75) { // TF维度
        if (option.score.T) scores.T += option.score.T;
        if (option.score.F) scores.F += option.score.F;
      } else { // JP维度
        if (option.score.J) scores.J += option.score.J;
        if (option.score.P) scores.P += option.score.P;
      }
    });

    // 根据得分确定每个维度的类型
    const type = [
      scores.E > scores.I ? 'E' : 'I',
      scores.S > scores.N ? 'S' : 'N',
      scores.T > scores.F ? 'T' : 'F',
      scores.J > scores.P ? 'J' : 'P'
    ].join('');

    return type;
  };

  // 选项点击后自动跳到下一题并记录答案
  const handleOption = (idx: number) => {
    setAnswers(ans => {
      const newAns = [...ans];
      newAns[current] = idx;
      return newAns;
    });

    if (current < cat100Questions.length - 1) {
      setCurrent(current + 1);
    } else {
      // 测试完成，计算MBTI类型并跳转到结果页
      const mbtiType = calculateMBTIType(answers);
      router.push(`/result?type=${mbtiType}&testType=cat`);
    }
  };

  // 处理上一题按钮点击
  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <main className={styles.main}>
      {/* 主标题和当前维度名 */}
      <div style={{width: '100%', maxWidth: 600, margin: '2.5rem auto 0 auto', textAlign: 'center'}}>
        <div style={{fontSize: '1.5rem', fontWeight: 700, color: '#6b6fa7', marginBottom: 8}}>4把钥匙解锁宠物性格密码</div>
        <div style={{fontSize: '1.08rem', color: '#6b6fa7', fontWeight: 500, marginBottom: 8}}>{dimension.name}</div>
      </div>
      {/* 进度条与题号 */}
      <div style={{width: '100%', maxWidth: 600, margin: '1.2rem auto 1.5rem auto', position: 'relative'}}>
        <span style={{position: 'absolute', left: 0, top: -32, fontWeight: 700, color: '#6b6fa7', fontSize: 18}}>
          {String(current + 1).padStart(2, '0')}/100
        </span>
        {/* 上一题按钮 */}
        {current > 0 && (
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              right: 0,
              top: -32,
              background: 'none',
              border: 'none',
              color: '#6b6fa7',
              fontSize: 16,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 4
            }}
          >
            ← 上一题
          </button>
        )}
        <div style={{display: 'flex', height: 12, background: '#f0f0f0', borderRadius: 8, overflow: 'hidden', position: 'relative'}}>
          {/* 分隔节点 - 小猫头像 */}
          {[25, 50, 75].map((pos) => (
            <div key={pos} style={{
              position: 'absolute',
              left: `${pos}%`,
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: 20,
              height: 20,
              background: '#ccd3ee',
              borderRadius: '50%',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{fontSize: 12, color: '#6b6fa7'}}>🐱</span>
            </div>
          ))}
          {/* 进度条背景 */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            background: '#f0f0f0'
          }} />
          {/* 进度条填充 */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: `${((current + 1) / 100) * 100}%`,
            height: '100%',
            background: '#6b6fa7',
            transition: 'width 0.3s ease'
          }} />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 8}}>
          {DIMENSIONS.map(d => (
            <span key={d.key} style={{fontSize: 13, color: '#6b6fa7', fontWeight: 500}}>{d.name}</span>
          ))}
        </div>
      </div>

      {/* 题目与维度介绍 */}
      <div style={{width: '100%', maxWidth: 600, margin: '0 auto'}}>
        {/* 每部分第一题显示维度介绍 */}
        {(current % 25 === 0) && (
          <div style={{background: '#f8f8ff', borderRadius: 8, padding: '2.2rem 1.2rem 2.2rem 1.2rem', color: '#6b6fa7', fontSize: 16, lineHeight: 2.1, margin: '0 0 18px 0', textAlign: 'center', fontFamily: 'Source Han Serif, Noto Serif SC, serif'}}>
            {dimension.poem.map((line, i) => <div key={i}>{line}</div>)}
          </div>
        )}
        <div style={{fontSize: 1.15 * 16, fontWeight: 600, marginBottom: 18, color: '#6b6fa7', textAlign: 'left'}}>{question?.text}</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
          {question?.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleOption(idx)}
              style={{
                background: answers[current] === idx ? '#ccd3ee' : '#fff',
                border: '1.5px solid #ccd3ee',
                borderRadius: 8,
                padding: '1rem 1.2rem',
                fontSize: 16,
                color: '#6b6fa7',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {opt.text}
            </button>
          ))}
        </div>
        {/* 最后一题完成提示 */}
        {current === 99 && (
          <div style={{
            marginTop: '2rem',
            textAlign: 'center',
            color: '#6b6fa7',
            fontSize: 16,
            lineHeight: 1.6
          }}>
            <p style={{ marginBottom: '1.5rem' }}>恭喜你完成了所有测试题！</p>
            <button
              onClick={() => {
                const mbtiType = calculateMBTIType(answers);
                router.push(`/result?type=${mbtiType}`);
              }}
              style={{
                background: '#6b6fa7',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '1rem 2rem',
                fontSize: 16,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 4px rgba(107, 111, 167, 0.2)'
              }}
            >
              查看16型性格分析
            </button>
          </div>
        )}
      </div>
    </main>
  );
} 