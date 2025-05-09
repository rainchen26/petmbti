export interface CatMBTIResult {
  type: string;
  title: string;
  description: string;
  traits: string[];
  strengths: string[];
  challenges: string[];
  careTips: string[];
  imageUrl: string;
}

export const catResults: { [key: string]: CatMBTIResult } = {
  ISFJ: {
    type: 'ISFJ',
    title: '温柔守护者',
    description: '你的猫咪是一个充满爱心和关怀的守护者，总是默默关注着家人的一举一动。它们像一位细心的管家，时刻守护着家的温暖。',
    traits: [
      '细心观察家人的一举一动',
      '温柔体贴，富有同理心',
      '忠诚可靠，守护家庭',
      '喜欢规律的生活节奏'
    ],
    strengths: [
      '能敏锐察觉家人的情绪变化',
      '提供温暖而持久的陪伴',
      '对家庭环境保持高度警觉',
      '愿意为家人付出和守护'
    ],
    challenges: [
      '有时过于关注他人而忽略自己',
      '容易感到疲惫和压力',
      '需要适当的独处时间恢复能量'
    ],
    careTips: [
      '每天安排固定的休息时间，让它们能够恢复精力',
      '提供安静舒适的休息空间，尊重它们的独处需求',
      '保持规律的作息时间，让它们感到安心',
      '给予足够的关注和爱护，但也要注意边界'
    ],
    imageUrl: '/cat1.jpeg'
  },
  // ... 其他15种类型的数据
}; 