export interface DogMBTIResult {
  type: string;
  title: string;
  description: string;
  traits: string[];
  strengths: string[];
  challenges: string[];
  careTips: string[];
  imageUrl: string;
}

export const dogResults: { [key: string]: DogMBTIResult } = {
  ISTJ: {
    type: 'ISTJ',
    title: '安保主任',
    description: '你的狗狗是一个严谨可靠的警卫犬，每天准时蹲守大门，对陌生访客严格审查，家中最称职的保安。',
    traits: [
      '严谨可靠，守护家庭',
      '对陌生访客严格审查',
      '喜欢规律的生活节奏',
      '忠诚可靠，守护家庭'
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
    imageUrl: '/dog1.jpeg'
  },
  ISFJ: {
    type: 'ISFJ',
    title: '护理长',
    description: '你的狗狗是一个温柔体贴的护士犬，会轻轻叼走小孩手里的危险物品，时刻关注家人安全。',
    traits: [
      '温柔体贴，富有同理心',
      '细心观察家人的一举一动',
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
    imageUrl: '/dog2.jpeg'
  },
  ESTJ: {
    type: 'ESTJ',
    title: '社区民警',
    description: '你的狗狗是一个认真负责的巡逻犬，对路过行人进行严格气味登记，维护领地秩序一丝不苟。',
    traits: [
      '认真负责，维护秩序',
      '对路过行人进行严格气味登记',
      '喜欢规律的生活节奏',
      '忠诚可靠，守护家庭'
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
    imageUrl: '/dog3.jpeg'
  },
  ESFJ: {
    type: 'ESFJ',
    title: '幼儿园长',
    description: '你的狗狗是一个热心肠的保姆犬，主动帮其他狗狗理毛，公平分配玩具，像个暖心大家长。',
    traits: [
      '热心肠，富有同理心',
      '主动帮其他狗狗理毛',
      '公平分配玩具',
      '像个暖心大家长'
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
    imageUrl: '/dog4.jpeg'
  },
  ISTP: {
    type: 'ISTP',
    title: '拆弹专家',
    description: '你的狗狗是一个聪明机智的技术犬，五分钟就能解开复杂狗笼锁扣，天生的问题解决者。',
    traits: [
      '聪明机智，技术高超',
      '五分钟就能解开复杂狗笼锁扣',
      '天生的问题解决者',
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
    imageUrl: '/dog5.jpeg'
  },
  ISFP: {
    type: 'ISFP',
    title: '文艺青年',
    description: '你的狗狗是一个敏感浪漫的艺术家犬，只在樱花树下方便，对散步路线有独特美学要求。',
    traits: [
      '敏感浪漫，富有艺术气息',
      '只在樱花树下方便',
      '对散步路线有独特美学要求',
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
    imageUrl: '/dog6.jpeg'
  },
  ESTP: {
    type: 'ESTP',
    title: '极限运动员',
    description: '你的狗狗是一个精力旺盛的运动犬，把普通散步变成跨栏障碍赛，永远活力四射。',
    traits: [
      '精力旺盛，活力四射',
      '把普通散步变成跨栏障碍赛',
      '永远活力四射',
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
    imageUrl: '/dog7.jpeg'
  },
  ESFP: {
    type: 'ESFP',
    title: '派对之星',
    description: '你的狗狗是一个热情洋溢的社交犬，会自己按音响开关开派对，用表演换取零食和掌声。',
    traits: [
      '热情洋溢，社交达人',
      '会自己按音响开关开派对',
      '用表演换取零食和掌声',
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
    imageUrl: '/dog8.jpeg'
  },
  INTJ: {
    type: 'INTJ',
    title: '战略家',
    description: '你的狗狗是一个深谋远虑的军师犬，藏玩具时会设计虚假埋藏点，战术思维令人惊叹。',
    traits: [
      '深谋远虑，战术思维',
      '藏玩具时会设计虚假埋藏点',
      '战术思维令人惊叹',
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
    imageUrl: '/dog9.jpeg'
  },
  INTP: {
    type: 'INTP',
    title: '发明家',
    description: '你的狗狗是一个创意无限的科学家犬，能用食盆和水盆组合出新玩具，天生发明家。',
    traits: [
      '创意无限，天生发明家',
      '能用食盆和水盆组合出新玩具',
      '天生发明家',
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
    imageUrl: '/dog10.jpeg'
  },
  ENTJ: {
    type: 'ENTJ',
    title: '项目总监',
    description: '你的狗狗是一个领导力强的管理犬，能组织流浪狗集体觅食，天生的团队领导者。',
    traits: [
      '领导力强，管理能力出众',
      '能组织流浪狗集体觅食',
      '天生的团队领导者',
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
    imageUrl: '/dog11.jpeg'
  },
  ENTP: {
    type: 'ENTP',
    title: '谈判专家',
    description: '你的狗狗是一个机智灵活的辩论犬，偷吃被抓后会叼来拖鞋抵罪，总能找到解决办法。',
    traits: [
      '机智灵活，辩论能力强',
      '偷吃被抓后会叼来拖鞋抵罪',
      '总能找到解决办法',
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
    imageUrl: '/dog12.jpeg'
  },
  INFJ: {
    type: 'INFJ',
    title: '治疗犬',
    description: '你的狗狗是一个善解人意的心理师犬，能精准识别主人焦虑时刻，提供温暖的安慰。',
    traits: [
      '善解人意，心理师犬',
      '能精准识别主人焦虑时刻',
      '提供温暖的安慰',
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
    imageUrl: '/dog13.jpeg'
  },
  INFP: {
    type: 'INFP',
    title: '林黛玉',
    description: '你的狗狗是一个敏感细腻的诗人犬，会因为你摸别的狗而绝食抗议三分钟，感情丰富。',
    traits: [
      '敏感细腻，感情丰富',
      '会因为你摸别的狗而绝食抗议三分钟',
      '感情丰富',
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
    imageUrl: '/dog14.jpeg'
  },
  ENFJ: {
    type: 'ENFJ',
    title: '班主任',
    description: '你的狗狗是一个责任心强的教导犬，主动指导小狗们遵守交通规则，像个耐心的老师。',
    traits: [
      '责任心强，教导能力强',
      '主动指导小狗们遵守交通规则',
      '像个耐心的老师',
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
    imageUrl: '/dog15.jpeg'
  },
  ENFP: {
    type: 'ENFP',
    title: '开心果',
    description: '你的狗狗是一个活力满满的欢乐犬，发明甩水珠逗你笑等游戏，永远能带来欢笑。',
    traits: [
      '活力满满，欢乐无限',
      '发明甩水珠逗你笑等游戏',
      '永远能带来欢笑',
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
    imageUrl: '/dog16.jpeg'
  }
}; 