"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../page.module.css";
import { dog100Questions } from "../../data/dog100Questions";

const DIMENSIONS = [
  {
    key: "EI",
    name: "外向(E)-内向(I)维度",
    poem: [
      "测量社交能量来源",
      "外向狗通过互动兴奋 主动邀玩",
      "内向狗易过度刺激 需要冷静期",
      "重点评估与其他狗 人的互动质量",
      "",
      "外向型",
      "通过玩耍和社交兴奋",
      "喜欢成为关注焦点",
      "容易和其他狗打成一片",
      "",
      "内向型",
      "需要独处时间恢复",
      "对新朋友保持距离",
      "偏好安静的环境"
    ]
  },
  {
    key: "SN",
    name: "实感(S)-直觉(N)维度",
    poem: [
      "区分认知风格",
      "实感狗依赖感官输入 气味 声音",
      "直觉狗理解抽象指令 手势 眼神",
      "通过训练反应 问题解决策略判断",
      "",
      "实感型",
      "依赖嗅觉 听觉等感官信息",
      "专注于眼前的具体事物",
      "",
      "直觉型",
      "能理解抽象指令",
      "擅长联想学习",
      "对主人情绪敏感"
    ]
  },
  {
    key: "TF",
    name: "思考(T)-情感(F)维度",
    poem: [
      "解析行为动机",
      "思考狗目标导向 任务优先",
      "情感狗关系驱动 讨好主人",
      "观察分离焦虑 惩罚反应等表现",
      "",
      "思考型",
      "任务优先",
      "善于分析利弊",
      "行为目的性强",
      "",
      "情感型",
      "关系驱动",
      "渴望主人认可",
      "容易产生分离焦虑"
    ]
  },
  {
    key: "JP",
    name: "判断(J)-感知(P)维度",
    poem: [
      "评估适应模式",
      "判断狗守时守规 讨厌变化",
      "感知狗灵活随性 享受意外",
      "测试日程变化 新指令学习的反应速度",
      "",
      "判断型",
      "严格遵守日常流程",
      "喜欢规律生活",
      "训练时追求完美执行",
      "",
      "感知型",
      "灵活适应变化",
      "享受即兴玩耍",
      "训练中常有创意发挥"
    ]
  }
];

function getCurrentDimension(index: number) {
  if (index < 25) return DIMENSIONS[0];
  if (index < 50) return DIMENSIONS[1];
  if (index < 75) return DIMENSIONS[2];
  return DIMENSIONS[3];
}

export default function DogTestPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const question = dog100Questions[current];
  const dimension = getCurrentDimension(current);
  const router = useRouter();

  // 进度百分比
  const percent = ((current + 1) / 100) * 100;

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
      const question = dog100Questions[index];
      const option = question.options[answer];
      
      if (index < 25) { // EI维度
        if (option.value === 'E') scores.E += 1;
        if (option.value === 'I') scores.I += 1;
      } else if (index < 50) { // SN维度
        if (option.value === 'S') scores.S += 1;
        if (option.value === 'N') scores.N += 1;
      } else if (index < 75) { // TF维度
        if (option.value === 'T') scores.T += 1;
        if (option.value === 'F') scores.F += 1;
      } else { // JP维度
        if (option.value === 'J') scores.J += 1;
        if (option.value === 'P') scores.P += 1;
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
    const newAnswers = [...answers];
    newAnswers[current] = idx;
    setAnswers(newAnswers);

    if (current < dog100Questions.length - 1) {
      setCurrent(current + 1);
    } else {
      // 测试完成，计算MBTI类型并跳转到结果页
      const mbtiType = calculateMBTIType(newAnswers);
      router.push(`/result?type=${mbtiType}&testType=dog`);
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
        <div style={{display: 'flex', height: 12, background: '#f0f0f0', borderRadius: 8, overflow: 'hidden', position: 'relative'}}>
          {/* 分隔节点 - 小狗头像 */}
          {[25, 50, 75].map((pos) => (
            <div key={pos} style={{
              position: 'absolute',
              left: `${pos}%`,
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: 20,
              height: 20,
              background: '#ccd3ee', // 主色浅紫
              borderRadius: '50%',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{fontSize: 12, color: '#6b6fa7'}}>🐶</span>
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
            background: '#6b6fa7', // 主色紫色
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
                padding: '0.9em 1.2em',
                color: '#6b6fa7',
                fontWeight: answers[current] === idx ? 700 : 500,
                fontSize: 16,
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
                boxShadow: answers[current] === idx ? '0 2px 8px rgba(108, 111, 167, 0.2)' : 'none',
                transform: answers[current] === idx ? 'translateY(-1px)' : 'none',
              }}
            >{opt.text}</button>
          ))}
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-start', marginTop: 32}}>
          <button
            onClick={() => setCurrent(c => Math.max(0, c - 1))}
            disabled={current === 0}
            style={{
              background: '#f0f0f0',
              color: '#6b6fa7',
              border: 'none',
              borderRadius: 8,
              padding: '0.7em 1.5em',
              fontWeight: 600,
              fontSize: 15,
              cursor: current === 0 ? 'not-allowed' : 'pointer',
              opacity: current === 0 ? 0.5 : 1
            }}
          >上一题</button>
        </div>
      </div>
    </main>
  );
} 