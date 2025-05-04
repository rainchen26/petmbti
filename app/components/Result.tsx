'use client';

import { useState } from 'react';
import styles from './Result.module.css';

interface ResultProps {
  type: string;
  onRestart: () => void;
}

const personalityData: Record<string, {
  title: string;
  tags: string[];
  keywords: string[];
  overview: string;
  behaviors: string[];
  relationship: string[];
  careTips: string[];
  problems: string[];
  training: string[];
  breeds: {
    dog: string[];
    cat: string[];
  };
  ownerProfile: string[];
}> = {
  ESTJ: {
    title: '纪律管理员型（组织者）',
    tags: ['高效有序'],
    keywords: ['纪律性', '责任感', '逻辑性'],
    overview: 'ESTJ型宠物是"家中的小管家"。它们对自己的环境有着严格的秩序感，喜欢通过设置规律和固定的生活模式来维持稳定。它们性格直接、务实，绝对是一个"高效能执行者"，同时对主人有着极高的忠诚度和责任感。',
    behaviors: [
      '喜欢定时吃饭，活动和休息都有严格的规律',
      '非常听指令，能根据主人的意图行动',
      '高度专注，执行任务时专心致志',
      '喜欢固定的行为模式，环境变化时易产生焦虑',
      '会在主人行为出现变化时做出提醒'
    ],
    relationship: [
      '强烈的责任感和忠诚度，喜欢确保主人处于"舒适"状态',
      '它对家庭和其他宠物有"保护"欲望，但表现稳重',
      '主人如果没有给出明确的指令或规则，它会显得困惑'
    ],
    careTips: [
      '需要有规律的作息、饮食和活动时间',
      '与主人形成清晰的"管理"关系，宠物应知道规则并遵循',
      '为它提供安静且稳定的生活环境，避免频繁变化'
    ],
    problems: [
      '如果缺乏明确的规则和结构，它会感到不安',
      '在无序环境中容易出现焦虑或困惑',
      '对突如其来的变化反应强烈，需要提前适应'
    ],
    training: [
      '建立一致性的规则和日常活动，让宠物习惯纪律性',
      '通过任务式训练增强它的责任感',
      '清晰简洁的指令最适合该类宠物'
    ],
    breeds: {
      dog: ['德国牧羊犬', '金毛', '贝灵顿梗'],
      cat: ['俄罗斯蓝猫', '英短', '美国短毛猫']
    },
    ownerProfile: [
      '喜欢有秩序、规律生活的人',
      '能提供清晰训练与行为模式的主人',
      '高效、有责任感的饲养者'
    ]
  },
  ISTJ: {
    title: '检查者型（守护者）',
    tags: ['谨慎可靠'],
    keywords: ['责任感', '忠诚', '传统'],
    overview: 'ISTJ型宠物是"家中的守护者"。它们性格沉稳、可靠，对家庭有着强烈的责任感。它们喜欢规律的生活，对新事物持谨慎态度，但一旦接受就会非常忠诚。',
    behaviors: [
      '喜欢固定的作息时间和活动模式',
      '对陌生人保持警惕，但不会过度反应',
      '对新环境需要较长时间适应',
      '喜欢通过观察来了解周围环境',
      '对主人的指令非常认真执行'
    ],
    relationship: [
      '对主人非常忠诚，但不会过度表达情感',
      '喜欢保持一定的个人空间',
      '对家庭环境有强烈的保护意识'
    ],
    careTips: [
      '提供稳定的生活环境和规律的作息',
      '给予足够的个人空间和独处时间',
      '循序渐进地引入新事物'
    ],
    problems: [
      '对变化适应较慢',
      '可能显得过于严肃或拘谨',
      '需要较长时间建立信任'
    ],
    training: [
      '采用渐进式的训练方法',
      '保持训练的一致性和规律性',
      '给予足够的适应时间'
    ],
    breeds: {
      dog: ['拉布拉多', '柯基', '柴犬'],
      cat: ['英国短毛猫', '波斯猫', '缅因猫']
    },
    ownerProfile: [
      '喜欢规律生活的人',
      '有耐心的主人',
      '能提供稳定环境的饲养者'
    ]
  },
  ESTP: {
    title: '挑战者型（冒险家）',
    tags: ['活力四射'],
    keywords: ['冒险', '灵活', '行动派'],
    overview: 'ESTP型宠物是"家中的小冒险家"。它们充满活力，喜欢探索和冒险，对新鲜事物充满好奇。它们性格外向，善于社交，总是能给家庭带来欢乐和活力。',
    behaviors: [
      '喜欢探索新环境，对新鲜事物充满好奇',
      '精力充沛，需要大量运动和活动',
      '善于社交，喜欢与其他宠物互动',
      '适应能力强，能快速适应新环境',
      '喜欢挑战和冒险，有时会显得冲动'
    ],
    relationship: [
      '与主人互动积极，喜欢一起玩耍',
      '对陌生人友好，容易建立联系',
      '需要主人给予足够的关注和陪伴'
    ],
    careTips: [
      '提供充足的运动和活动空间',
      '定期安排社交活动，满足其社交需求',
      '提供丰富的玩具和游戏'
    ],
    problems: [
      '可能过于活跃，需要适当控制',
      '容易冲动，需要引导',
      '对新事物过于好奇，可能带来安全隐患'
    ],
    training: [
      '通过游戏和互动进行训练',
      '建立明确的界限和规则',
      '利用其好奇心和活力进行正向引导'
    ],
    breeds: {
      dog: ['边境牧羊犬', '杰克罗素梗', '比格犬'],
      cat: ['孟加拉豹猫', '阿比西尼亚猫', '暹罗猫']
    },
    ownerProfile: [
      '喜欢户外活动的人',
      '有活力的主人',
      '能提供丰富活动环境的饲养者'
    ]
  },
  ESFJ: {
    title: '主人型（照顾者）',
    tags: ['温暖体贴'],
    keywords: ['关怀', '社交', '责任感'],
    overview: 'ESFJ型宠物是"家中的小天使"。它们性格温暖，善于照顾他人，对家庭有着强烈的责任感。它们喜欢社交，善于表达情感，总是能给家庭带来温暖和欢乐。',
    behaviors: [
      '喜欢与家人互动，善于表达情感',
      '对家庭成员非常关心，会主动照顾',
      '喜欢社交，善于与其他宠物相处',
      '对家庭环境非常敏感，能察觉情绪变化',
      '喜欢参与家庭活动，善于配合'
    ],
    relationship: [
      '与主人关系亲密，善于表达爱意',
      '对家庭成员非常忠诚，会主动照顾',
      '需要得到主人的认可和关爱'
    ],
    careTips: [
      '提供足够的社交机会',
      '给予充分的关爱和关注',
      '建立稳定的家庭环境'
    ],
    problems: [
      '可能过于依赖主人',
      '对家庭变化敏感，需要适应时间',
      '需要得到足够的关注和认可'
    ],
    training: [
      '通过正向激励进行训练',
      '建立稳定的日常活动',
      '培养其独立性和自信心'
    ],
    breeds: {
      dog: ['金毛', '拉布拉多', '比熊犬'],
      cat: ['布偶猫', '缅因猫', '英国短毛猫']
    },
    ownerProfile: [
      '喜欢社交的人',
      '有爱心的主人',
      '能提供温暖环境的饲养者'
    ]
  },
  ESFP: {
    title: '表演者型（开心果）',
    tags: ['活泼可爱'],
    keywords: ['活力', '社交', '表现欲'],
    overview: 'ESFP型宠物是"家中的开心果"。它们性格活泼，喜欢表现自己，善于社交。它们充满活力，喜欢玩耍，总是能给家庭带来欢乐和活力。',
    behaviors: [
      '喜欢表现自己，善于吸引注意力',
      '精力充沛，喜欢玩耍和互动',
      '善于社交，喜欢与其他宠物相处',
      '适应能力强，能快速适应新环境',
      '喜欢参与家庭活动，善于配合'
    ],
    relationship: [
      '与主人关系亲密，善于表达情感',
      '喜欢得到主人的关注和赞美',
      '善于与其他宠物相处，喜欢社交'
    ],
    careTips: [
      '提供充足的运动和活动空间',
      '定期安排社交活动，满足其社交需求',
      '给予充分的关注和赞美'
    ],
    problems: [
      '可能过于活跃，需要适当控制',
      '需要得到足够的关注和认可',
      '对新事物过于好奇，可能带来安全隐患'
    ],
    training: [
      '通过游戏和互动进行训练',
      '利用其表现欲进行正向引导',
      '建立明确的界限和规则'
    ],
    breeds: {
      dog: ['贵宾犬', '比熊犬', '博美犬'],
      cat: ['暹罗猫', '布偶猫', '美国短毛猫']
    },
    ownerProfile: [
      '喜欢社交的人',
      '有活力的主人',
      '能提供丰富活动环境的饲养者'
    ]
  },
  // ... 其他11种性格类型的数据
};

export default function Result({ type, onRestart }: ResultProps) {
  const data = personalityData[type];
  const [activeTab, setActiveTab] = useState('overview');

  if (!data) {
    return (
      <div className={styles.resultContainer}>
        <h2>未找到对应的性格类型</h2>
        <button onClick={onRestart}>重新测试</button>
      </div>
    );
  }

  return (
    <div className={styles.resultContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>🧠 {type} - {data.title}</h1>
        <div className={styles.tags}>
          {data.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <div className={styles.keywords}>
          关键词：{data.keywords.join('、')}
        </div>
      </div>

      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'overview' ? styles.active : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          性格总览
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'behaviors' ? styles.active : ''}`}
          onClick={() => setActiveTab('behaviors')}
        >
          行为表现
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'relationship' ? styles.active : ''}`}
          onClick={() => setActiveTab('relationship')}
        >
          与主人关系
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'care' ? styles.active : ''}`}
          onClick={() => setActiveTab('care')}
        >
          饲养建议
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'breeds' ? styles.active : ''}`}
          onClick={() => setActiveTab('breeds')}
        >
          代表品种
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === 'overview' && (
          <div className={styles.section}>
            <h3>🪞 一、性格总览</h3>
            <p>{data.overview}</p>
          </div>
        )}
        
        {activeTab === 'behaviors' && (
          <div className={styles.section}>
            <h3>🐾 二、典型行为表现</h3>
            <ul>
              {data.behaviors.map((behavior, index) => (
                <li key={index}>{behavior}</li>
              ))}
            </ul>
          </div>
        )}
        
        {activeTab === 'relationship' && (
          <div className={styles.section}>
            <h3>👩‍👧 三、与主人的关系模式</h3>
            <ul>
              {data.relationship.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        
        {activeTab === 'care' && (
          <div className={styles.section}>
            <h3>🏡 四、生活与饲养建议</h3>
            <ul>
              {data.careTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
            <h3>⚠️ 五、容易出现的问题</h3>
            <ul>
              {data.problems.map((problem, index) => (
                <li key={index}>{problem}</li>
              ))}
            </ul>
            <h3>✅ 六、训练建议</h3>
            <ul>
              {data.training.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
        
        {activeTab === 'breeds' && (
          <div className={styles.section}>
            <h3>🐕 七、代表品种参考</h3>
            <div className={styles.breeds}>
              <div>
                <h4>狗：</h4>
                <p>{data.breeds.dog.join('、')}</p>
              </div>
              <div>
                <h4>猫：</h4>
                <p>{data.breeds.cat.join('、')}</p>
              </div>
            </div>
            <h3>💬 八、适配主人画像</h3>
            <ul>
              {data.ownerProfile.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className={styles.actions}>
        <button className={styles.restartButton} onClick={onRestart}>
          重新测试
        </button>
        <button className={styles.shareButton}>
          分享结果
        </button>
      </div>
    </div>
  );
} 