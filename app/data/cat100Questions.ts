import { Question } from '../types/mbti';

// 猫咪MBTI 100题题库
export const cat100Questions: Question[] = [
  // 1-25 EI
  {
    id: 1,
    text: '家里来客人时，你的猫咪：',
    dimension: 'EI',
    options: [
      {
        text: '主动上前嗅闻访客',
        score: { E: 1 }
      },
      {
        text: '保持距离观察访客',
        score: { E: 0.5 }
      },
      {
        text: '躲到高处暗中观察',
        score: { I: 0.5 }
      },
      {
        text: '直接藏到床底下',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 2,
    text: '对新玩具的反应：',
    dimension: 'EI',
    options: [
      {
        text: '立即扑上去玩',
        score: { E: 1 }
      },
      {
        text: '谨慎地用手掌试探',
        score: { E: 0.5 }
      },
      {
        text: '观察几分钟后才决定',
        score: { I: 0.5 }
      },
      {
        text: '完全无视',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 3,
    text: '在宠物医院的表现：',
    dimension: 'EI',
    options: [
      {
        text: '好奇地探索诊室',
        score: { E: 1 }
      },
      {
        text: '允许医生检查',
        score: { E: 0.5 }
      },
      {
        text: '躲在猫包最里面',
        score: { I: 0.5 }
      },
      {
        text: '出现应激反应',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 4,
    text: '对窗外鸟类的反应：',
    dimension: 'EI',
    options: [
      {
        text: '发出兴奋的咔咔声',
        score: { E: 1 }
      },
      {
        text: '尾巴快速摆动',
        score: { E: 0.5 }
      },
      {
        text: '静静观察不发声',
        score: { I: 0.5 }
      },
      {
        text: '直接走开',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 5,
    text: '当你回家时：',
    dimension: 'EI',
    options: [
      {
        text: '跑到门口迎接',
        score: { E: 1 }
      },
      {
        text: '慢悠悠走过来',
        score: { E: 0.5 }
      },
      {
        text: '抬头看一眼继续睡',
        score: { I: 0.5 }
      },
      {
        text: '假装没看见',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 6,
    text: '对陌生猫咪的态度：',
    dimension: 'EI',
    options: [
      {
        text: '主动靠近打招呼',
        score: { E: 1 }
      },
      {
        text: '保持安全距离观察',
        score: { E: 0.5 }
      },
      {
        text: '立即躲藏',
        score: { I: 0.5 }
      },
      {
        text: '发出威胁声',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 7,
    text: '玩耍时的活跃程度：',
    dimension: 'EI',
    options: [
      {
        text: '持续玩到累趴',
        score: { E: 1 }
      },
      {
        text: '每天固定时间玩',
        score: { E: 0.5 }
      },
      {
        text: '偶尔配合玩一下',
        score: { I: 0.5 }
      },
      {
        text: '基本不玩',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 8,
    text: '对突发声响的反应：',
    dimension: 'EI',
    options: [
      {
        text: '立即跑去查看',
        score: { E: 1 }
      },
      {
        text: '警觉地观察',
        score: { E: 0.5 }
      },
      {
        text: '轻微受惊后躲藏',
        score: { I: 0.5 }
      },
      {
        text: '直接吓跑',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 9,
    text: '对洗澡的反应：',
    dimension: 'EI',
    options: [
      {
        text: '好奇地玩水',
        score: { E: 1 }
      },
      {
        text: '勉强配合',
        score: { E: 0.5 }
      },
      {
        text: '强烈挣扎',
        score: { I: 0.5 }
      },
      {
        text: '直接逃跑',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 10,
    text: '日常活动范围：',
    dimension: 'EI',
    options: [
      {
        text: '探索家里每个角落',
        score: { E: 1 }
      },
      {
        text: '主要在开放区域活动',
        score: { E: 0.5 }
      },
      {
        text: '固定几个安全点',
        score: { I: 0.5 }
      },
      {
        text: '只待在一个隐蔽处',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 11,
    text: '对高空路线的使用：',
    dimension: 'EI',
    options: [
      {
        text: '经常在柜顶/冰箱上巡逻',
        score: { E: 1 }
      },
      {
        text: '选择性使用高处通道',
        score: { E: 0.5 }
      },
      {
        text: '偶尔跳上窗台',
        score: { I: 0.5 }
      },
      {
        text: '基本不攀高',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 12,
    text: '对门铃的反应：',
    dimension: 'EI',
    options: [
      {
        text: '立即冲到门口查看',
        score: { E: 1 }
      },
      {
        text: '在安全距离观望',
        score: { E: 0.5 }
      },
      {
        text: '躲到高处观察',
        score: { I: 0.5 }
      },
      {
        text: '直接钻到床底',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 13,
    text: '与你互动的方式：',
    dimension: 'EI',
    options: [
      {
        text: '主动蹭腿求关注',
        score: { E: 1 }
      },
      {
        text: '用尾巴勾你的手',
        score: { E: 0.5 }
      },
      {
        text: '等你先伸手',
        score: { I: 0.5 }
      },
      {
        text: '拒绝主动接触',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 14,
    text: '对新环境的适应：',
    dimension: 'EI',
    options: [
      {
        text: '立即开始探索',
        score: { E: 1 }
      },
      {
        text: '谨慎但快速适应',
        score: { E: 0.5 }
      },
      {
        text: '需要3天以上适应',
        score: { I: 0.5 }
      },
      {
        text: '始终无法放松',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 15,
    text: '对梳毛的反应：',
    dimension: 'EI',
    options: [
      {
        text: '享受并主动配合',
        score: { E: 1 }
      },
      {
        text: '适度接受',
        score: { E: 0.5 }
      },
      {
        text: '勉强忍耐',
        score: { I: 0.5 }
      },
      {
        text: '直接逃跑',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 16,
    text: '玩耍时的主动性：',
    dimension: 'EI',
    options: [
      {
        text: '经常叼玩具找你玩',
        score: { E: 1 }
      },
      {
        text: '看到玩具就兴奋',
        score: { E: 0.5 }
      },
      {
        text: '需要你主动逗玩',
        score: { I: 0.5 }
      },
      {
        text: '对玩具兴趣缺缺',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 17,
    text: '睡觉时的位置选择：',
    dimension: 'EI',
    options: [
      {
        text: '睡在你枕头上',
        score: { E: 1 }
      },
      {
        text: '靠在你腿边',
        score: { E: 0.5 }
      },
      {
        text: '独自在猫窝',
        score: { I: 0.5 }
      },
      {
        text: '隐蔽角落',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 18,
    text: '对陌生物品的反应：',
    dimension: 'EI',
    options: [
      {
        text: '立即上前检查',
        score: { E: 1 }
      },
      {
        text: '谨慎地闻嗅',
        score: { E: 0.5 }
      },
      {
        text: '保持距离观察',
        score: { I: 0.5 }
      },
      {
        text: '直接回避',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 19,
    text: '日常存在感：',
    dimension: 'EI',
    options: [
      {
        text: '时刻在你视线内',
        score: { E: 1 }
      },
      {
        text: '经常刷存在感',
        score: { E: 0.5 }
      },
      {
        text: '选择性出现',
        score: { I: 0.5 }
      },
      {
        text: '神出鬼没',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 20,
    text: '对拍照的反应：',
    dimension: 'EI',
    options: [
      {
        text: '主动看镜头',
        score: { E: 1 }
      },
      {
        text: '允许拍照',
        score: { E: 0.5 }
      },
      {
        text: '转身回避',
        score: { I: 0.5 }
      },
      {
        text: '直接走开',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 21,
    text: '与其他动物的相处：',
    dimension: 'EI',
    options: [
      {
        text: '主动建立社交',
        score: { E: 1 }
      },
      {
        text: '保持友好距离',
        score: { E: 0.5 }
      },
      {
        text: '尽量避免接触',
        score: { I: 0.5 }
      },
      {
        text: '表现出攻击性',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 22,
    text: '对音乐的反应：',
    dimension: 'EI',
    options: [
      {
        text: '会靠近声源',
        score: { E: 1 }
      },
      {
        text: '随着音乐摇尾巴',
        score: { E: 0.5 }
      },
      {
        text: '躲到安静处',
        score: { I: 0.5 }
      },
      {
        text: '明显烦躁',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 23,
    text: '日常叫声频率：',
    dimension: 'EI',
    options: [
      {
        text: '经常与你对话',
        score: { E: 1 }
      },
      {
        text: '有需求时会叫',
        score: { E: 0.5 }
      },
      {
        text: '极少发声',
        score: { I: 0.5 }
      },
      {
        text: '几乎不叫',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 24,
    text: '对变化的适应力：',
    dimension: 'EI',
    options: [
      {
        text: '立即接受新事物',
        score: { E: 1 }
      },
      {
        text: '3天内适应',
        score: { E: 0.5 }
      },
      {
        text: '需要1周以上',
        score: { I: 0.5 }
      },
      {
        text: '始终无法适应',
        score: { I: 1 }
      }
    ]
  },
  {
    id: 25,
    text: '总体社交倾向：',
    dimension: 'EI',
    options: [
      {
        text: '像狗狗一样亲人',
        score: { E: 1 }
      },
      {
        text: '选择性社交',
        score: { E: 0.5 }
      },
      {
        text: '高冷慢热',
        score: { I: 0.5 }
      },
      {
        text: '完全独行侠',
        score: { I: 1 }
      }
    ]
  },
  // 26-50 SN
  {
    id: 26,
    text: '当你打开罐头时：',
    dimension: 'SN',
    options: [
      {
        text: '立即通过声音辨认',
        score: { S: 1 }
      },
      {
        text: '会先确认气味',
        score: { S: 0.5 }
      },
      {
        text: '结合你的行为判断',
        score: { N: 0.5 }
      },
      {
        text: '有时会误判声音',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 27,
    text: '对新买的猫抓板：',
    dimension: 'SN',
    options: [
      {
        text: '立即测试材质',
        score: { S: 1 }
      },
      {
        text: '系统性地抓遍每个角落',
        score: { S: 0.5 }
      },
      {
        text: '先观察你如何使用',
        score: { N: 0.5 }
      },
      {
        text: '赋予特殊意义',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 28,
    text: '对家具摆放变化的反应：',
    dimension: 'SN',
    options: [
      {
        text: '立即注意到并检查',
        score: { S: 1 }
      },
      {
        text: '重新规划行走路线',
        score: { S: 0.5 }
      },
      {
        text: '似乎没注意到',
        score: { N: 0.5 }
      },
      {
        text: '表现出焦虑',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 29,
    text: '学习开门的技巧：',
    dimension: 'SN',
    options: [
      {
        text: '通过反复尝试学会',
        score: { S: 1 }
      },
      {
        text: '观察门把手机制',
        score: { S: 0.5 }
      },
      {
        text: '突然某天就会了',
        score: { N: 0.5 }
      },
      {
        text: '发明独特开门方式',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 30,
    text: '对梦境的表现：',
    dimension: 'SN',
    options: [
      {
        text: '明显的肢体抽动',
        score: { S: 1 }
      },
      {
        text: '发出轻微叫声',
        score: { S: 0.5 }
      },
      {
        text: '似乎在做复杂梦',
        score: { N: 0.5 }
      },
      {
        text: '醒来后若有所思',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 31,
    text: '对食物的选择标准：',
    dimension: 'SN',
    options: [
      {
        text: '只吃特定品牌的猫粮',
        score: { S: 1 }
      },
      {
        text: '挑剔食物的温度',
        score: { S: 0.5 }
      },
      {
        text: '根据喂食人的情绪决定吃不吃',
        score: { N: 0.5 }
      },
      {
        text: '会把食物和你给的爱联系起来',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 32,
    text: '对新玩具的探索方式：',
    dimension: 'SN',
    options: [
      {
        text: '先用牙齿测试材质',
        score: { S: 1 }
      },
      {
        text: '系统性地检查每个部位',
        score: { S: 0.5 }
      },
      {
        text: '观察你如何使用它',
        score: { N: 0.5 }
      },
      {
        text: '赋予特殊意义（如"这是专属玩具"）',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 33,
    text: '对陌生环境的适应方式：',
    dimension: 'SN',
    options: [
      {
        text: '立即开始检查每个角落',
        score: { S: 1 }
      },
      {
        text: '先确认逃生路线',
        score: { S: 0.5 }
      },
      {
        text: '感知整体氛围后才行动',
        score: { N: 0.5 }
      },
      {
        text: '表现出对"能量场"的敏感',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 34,
    text: '学习开柜门的方式：',
    dimension: 'SN',
    options: [
      {
        text: '反复尝试同个动作',
        score: { S: 1 }
      },
      {
        text: '观察柜门机械结构',
        score: { S: 0.5 }
      },
      {
        text: '突然某天就顿悟了',
        score: { N: 0.5 }
      },
      {
        text: '发明独特开门技巧',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 35,
    text: '对你换新发型时的反应：',
    dimension: 'SN',
    options: [
      {
        text: '立即凑近嗅闻',
        score: { S: 1 }
      },
      {
        text: '用爪子触摸确认',
        score: { S: 0.5 }
      },
      {
        text: '先观察你的整体变化',
        score: { N: 0.5 }
      },
      {
        text: '表现出喜欢/讨厌的态度',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 36,
    text: '对电视节目的反应：',
    dimension: 'SN',
    options: [
      {
        text: '只对移动的小动物有反应',
        score: { S: 1 }
      },
      {
        text: '会拍打屏幕里的虫子',
        score: { S: 0.5 }
      },
      {
        text: '似乎理解简单剧情',
        score: { N: 0.5 }
      },
      {
        text: '对特定情绪场景有反应',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 37,
    text: '解决问题的策略：',
    dimension: 'SN',
    options: [
      {
        text: '用已知有效的方法',
        score: { S: 1 }
      },
      {
        text: '尝试各种物理方式',
        score: { S: 0.5 }
      },
      {
        text: '等待灵感出现',
        score: { N: 0.5 }
      },
      {
        text: '发明全新解决方案',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 38,
    text: '对季节变化的反应：',
    dimension: 'SN',
    options: [
      {
        text: '立即调整睡觉位置',
        score: { S: 1 }
      },
      {
        text: '改变掉毛量适应温度',
        score: { S: 0.5 }
      },
      {
        text: '表现出情绪波动',
        score: { N: 0.5 }
      },
      {
        text: '作息随光照变化',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 39,
    text: '对时间的感知：',
    dimension: 'SN',
    options: [
      {
        text: '准时在饭点叫醒你',
        score: { S: 1 }
      },
      {
        text: '有固定的晨昏活动规律',
        score: { S: 0.5 }
      },
      {
        text: '对时间不敏感',
        score: { N: 0.5 }
      },
      {
        text: '有自己的生物钟',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 40,
    text: '对医疗护理的反应：',
    dimension: 'SN',
    options: [
      {
        text: '注意药物具体味道',
        score: { S: 1 }
      },
      {
        text: '抗拒特定材质的喂药器',
        score: { S: 0.5 }
      },
      {
        text: '理解"吃药后会舒服"',
        score: { N: 0.5 }
      },
      {
        text: '把看病和外出笼关联起来',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 41,
    text: '对梦境的表现：',
    dimension: 'SN',
    options: [
      {
        text: '胡须和爪子抽动',
        score: { S: 1 }
      },
      {
        text: '发出轻微的捕猎声',
        score: { S: 0.5 }
      },
      {
        text: '似乎在做复杂梦',
        score: { N: 0.5 }
      },
      {
        text: '醒来后若有所思',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 42,
    text: '对家具摆放变化的反应：',
    dimension: 'SN',
    options: [
      {
        text: '立即注意到并检查',
        score: { S: 1 }
      },
      {
        text: '重新规划行走路线',
        score: { S: 0.5 }
      },
      {
        text: '似乎没察觉',
        score: { N: 0.5 }
      },
      {
        text: '表现出焦虑',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 43,
    text: '对空间的使用方式：',
    dimension: 'SN',
    options: [
      {
        text: '固定几个休息点',
        score: { S: 1 }
      },
      {
        text: '有专属活动区域',
        score: { S: 0.5 }
      },
      {
        text: '创造性利用空间（如纸箱变城堡）',
        score: { N: 0.5 }
      },
      {
        text: '开发隐藏动线',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 44,
    text: '对音乐的反应：',
    dimension: 'SN',
    options: [
      {
        text: '对特定频率有反应',
        score: { S: 1 }
      },
      {
        text: '明确喜欢/讨厌某些乐器',
        score: { S: 0.5 }
      },
      {
        text: '似乎享受旋律',
        score: { N: 0.5 }
      },
      {
        text: '对音乐情绪有共鸣',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 45,
    text: '对新成员的接纳：',
    dimension: 'SN',
    options: [
      {
        text: '通过气味逐步熟悉',
        score: { S: 1 }
      },
      {
        text: '观察具体行为再决定',
        score: { S: 0.5 }
      },
      {
        text: '感知对方能量场',
        score: { N: 0.5 }
      },
      {
        text: '凭直觉立即喜欢/讨厌',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 46,
    text: '对训练的反应：',
    dimension: 'SN',
    options: [
      {
        text: '需要具体手势提示',
        score: { S: 1 }
      },
      {
        text: '依赖实物奖励',
        score: { S: 0.5 }
      },
      {
        text: '能理解抽象指令',
        score: { N: 0.5 }
      },
      {
        text: '为情感反馈而学习',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 47,
    text: '对洗澡的反应：',
    dimension: 'SN',
    options: [
      {
        text: '专注水温感受',
        score: { S: 1 }
      },
      {
        text: '在意沐浴露气味',
        score: { S: 0.5 }
      },
      {
        text: '理解"洗完有零食"',
        score: { N: 0.5 }
      },
      {
        text: '把洗澡和兽医联系起来',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 48,
    text: '对物品的分类：',
    dimension: 'SN',
    options: [
      {
        text: '按材质区分玩具',
        score: { S: 1 }
      },
      {
        text: '有固定的物品归属地',
        score: { S: 0.5 }
      },
      {
        text: '赋予物品情感价值',
        score: { N: 0.5 }
      },
      {
        text: '创造性地改造用途',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 49,
    text: '对天气变化的反应：',
    dimension: 'SN',
    options: [
      {
        text: '立即调整睡觉姿势',
        score: { S: 1 }
      },
      {
        text: '雨天固定躲在某处',
        score: { S: 0.5 }
      },
      {
        text: '表现出情绪变化',
        score: { N: 0.5 }
      },
      {
        text: '作息随气压改变',
        score: { N: 1 }
      }
    ]
  },
  {
    id: 50,
    text: '总体而言，你的猫咪：',
    dimension: 'SN',
    options: [
      {
        text: '非常现实和务实',
        score: { S: 1 }
      },
      {
        text: '偏实际但能变通',
        score: { S: 0.5 }
      },
      {
        text: '偏直觉但有常识',
        score: { N: 0.5 }
      },
      {
        text: '完全活在感觉中',
        score: { N: 1 }
      }
    ]
  },
  // 51-75 TF
  {
    id: 51,
    text: '当你强行抱它时：',
    dimension: 'TF',
    options: [
      {
        text: '冷静地挣脱',
        score: { T: 1 }
      },
      {
        text: '寻找最佳逃脱时机',
        score: { T: 0.5 }
      },
      {
        text: '发出不满叫声',
        score: { F: 1 }
      },
      {
        text: '会记仇一段时间',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 52,
    text: '当你生病卧床时：',
    dimension: 'TF',
    options: [
      {
        text: '行为如常',
        score: { T: 1 }
      },
      {
        text: '趁机占领你的位置',
        score: { T: 0.5 }
      },
      {
        text: '趴在身边陪伴',
        score: { F: 1 }
      },
      {
        text: '特别温柔地蹭你',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 53,
    text: '当你表扬其他宠物时：',
    dimension: 'TF',
    options: [
      {
        text: '不特别反应',
        score: { T: 1 }
      },
      {
        text: '继续自己活动',
        score: { T: 0.5 }
      },
      {
        text: '过来寻求关注',
        score: { F: 1 }
      },
      {
        text: '表现出嫉妒',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 54,
    text: '做错事被训斥时：',
    dimension: 'TF',
    options: [
      {
        text: '冷静观察你的反应',
        score: { T: 1 }
      },
      {
        text: '寻找机会逃跑',
        score: { T: 0.5 }
      },
      {
        text: '耳朵下垂表现出愧疚',
        score: { F: 1 }
      },
      {
        text: '主动讨好请求原谅',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 55,
    text: '你哭泣时的反应：',
    dimension: 'TF',
    options: [
      {
        text: '若无其事走开',
        score: { T: 1 }
      },
      {
        text: '趁机占领你的座位',
        score: { T: 0.5 }
      },
      {
        text: '轻轻用爪子碰你',
        score: { F: 1 }
      },
      {
        text: '叼来最爱的玩具安慰你',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 56,
    text: '家里来新宠物时：',
    dimension: 'TF',
    options: [
      {
        text: '冷静评估威胁程度',
        score: { T: 1 }
      },
      {
        text: '制定领地防御策略',
        score: { T: 0.5 }
      },
      {
        text: '表现出焦虑不安',
        score: { F: 1 }
      },
      {
        text: '试图通过撒娇获得更多关注',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 57,
    text: '剪指甲时的表现：',
    dimension: 'TF',
    options: [
      {
        text: '忍耐到结束才逃跑',
        score: { T: 1 }
      },
      {
        text: '计算最佳反抗时机',
        score: { T: 0.5 }
      },
      {
        text: '全程发抖呜咽',
        score: { F: 1 }
      },
      {
        text: '完成后需要长时间安抚',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 58,
    text: '最爱的互动方式：',
    dimension: 'TF',
    options: [
      {
        text: '有规则的游戏',
        score: { T: 1 }
      },
      {
        text: '智力挑战玩具',
        score: { T: 0.5 }
      },
      {
        text: '温柔的抚摸',
        score: { F: 1 }
      },
      {
        text: '面对面的对话',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 59,
    text: '你长时间不在家时：',
    dimension: 'TF',
    options: [
      {
        text: '作息如常不受影响',
        score: { T: 1 }
      },
      {
        text: '趁机探索禁区',
        score: { T: 0.5 }
      },
      {
        text: '食欲明显下降',
        score: { F: 1 }
      },
      {
        text: '在你物品上留下气味标记',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 60,
    text: '对待幼猫的态度：',
    dimension: 'TF',
    options: [
      {
        text: '保持安全距离',
        score: { T: 1 }
      },
      {
        text: '抢夺食物资源',
        score: { T: 0.5 }
      },
      {
        text: '帮忙清理毛发',
        score: { F: 1 }
      },
      {
        text: '主动教授生存技能',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 61,
    text: '被陌生人抚摸时：',
    dimension: 'TF',
    options: [
      {
        text: '评估是否构成威胁',
        score: { T: 1 }
      },
      {
        text: '寻找逃脱路线',
        score: { T: 0.5 }
      },
      {
        text: '害怕得发抖',
        score: { F: 1 }
      },
      {
        text: '根据对方态度决定反应',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 62,
    text: '最喜欢的奖励：',
    dimension: 'TF',
    options: [
      {
        text: '新奇的玩具',
        score: { T: 1 }
      },
      {
        text: '解谜获得的食物',
        score: { T: 0.5 }
      },
      {
        text: '专属的亲密时间',
        score: { F: 1 }
      },
      {
        text: '特别的夸奖语调',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 63,
    text: '与其他猫冲突时：',
    dimension: 'TF',
    options: [
      {
        text: '理性评估战力差距',
        score: { T: 1 }
      },
      {
        text: '采用策略性威慑',
        score: { T: 0.5 }
      },
      {
        text: '寻求你的保护',
        score: { F: 1 }
      },
      {
        text: '通过撒娇转移注意力',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 64,
    text: '对兽医检查的反应：',
    dimension: 'TF',
    options: [
      {
        text: '静止不动观察',
        score: { T: 1 }
      },
      {
        text: '记仇但很快恢复',
        score: { T: 0.5 }
      },
      {
        text: '应激反应强烈',
        score: { F: 1 }
      },
      {
        text: '需要多日情感安抚',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 65,
    text: '你情绪激动时：',
    dimension: 'TF',
    options: [
      {
        text: '不受影响继续睡觉',
        score: { T: 1 }
      },
      {
        text: '躲到安全距离观察',
        score: { T: 0.5 }
      },
      {
        text: '表现出同步焦虑',
        score: { F: 1 }
      },
      {
        text: '试图用头蹭你安抚',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 66,
    text: '对待玩具的态度：',
    dimension: 'TF',
    options: [
      {
        text: '研究运作原理',
        score: { T: 1 }
      },
      {
        text: '制定游戏规则',
        score: { T: 0.5 }
      },
      {
        text: '赋予情感价值',
        score: { F: 1 }
      },
      {
        text: '选择最像你的玩具',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 67,
    text: '被强行抱起的反应：',
    dimension: 'TF',
    options: [
      {
        text: '计算挣脱角度',
        score: { T: 1 }
      },
      {
        text: '忍耐预定时间',
        score: { T: 0.5 }
      },
      {
        text: '发出委屈叫声',
        score: { F: 1 }
      },
      {
        text: '事后回避接触',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 68,
    text: '你生病时的表现：',
    dimension: 'TF',
    options: [
      {
        text: '占领你的床位',
        score: { T: 1 }
      },
      {
        text: '趁机偷吃你的食物',
        score: { T: 0.5 }
      },
      {
        text: '长时间贴身陪伴',
        score: { F: 1 }
      },
      {
        text: '带来"礼物"安慰你',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 69,
    text: '对家庭新成员的态度：',
    dimension: 'TF',
    options: [
      {
        text: '观察3天再决定',
        score: { T: 1 }
      },
      {
        text: '建立新的领地范围',
        score: { T: 0.5 }
      },
      {
        text: '立即表现出敌意',
        score: { F: 1 }
      },
      {
        text: '通过撒娇巩固地位',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 70,
    text: '学习新技能的动力：',
    dimension: 'TF',
    options: [
      {
        text: '食物奖励',
        score: { T: 1 }
      },
      {
        text: '智力挑战',
        score: { T: 0.5 }
      },
      {
        text: '你的表扬',
        score: { F: 1 }
      },
      {
        text: '专属互动时间',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 71,
    text: '被冷落时的反应：',
    dimension: 'TF',
    options: [
      {
        text: '自得其乐',
        score: { T: 1 }
      },
      {
        text: '探索新领域',
        score: { T: 0.5 }
      },
      {
        text: '故意搞破坏',
        score: { F: 1 }
      },
      {
        text: '抑郁不吃东西',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 72,
    text: '对洗澡的反应：',
    dimension: 'TF',
    options: [
      {
        text: '分析逃生路线',
        score: { T: 1 }
      },
      {
        text: '计算忍耐时间',
        score: { T: 0.5 }
      },
      {
        text: '全程惨叫',
        score: { F: 1 }
      },
      {
        text: '事后需要安抚',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 73,
    text: '你工作时的表现：',
    dimension: 'TF',
    options: [
      {
        text: '利用机会睡键盘',
        score: { T: 1 }
      },
      {
        text: '当你面打翻水杯',
        score: { T: 0.5 }
      },
      {
        text: '轻轻趴在你手上',
        score: { F: 1 }
      },
      {
        text: '用头蹭你求关注',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 74,
    text: '对待食物的态度：',
    dimension: 'TF',
    options: [
      {
        text: '按营养价值选择',
        score: { T: 1 }
      },
      {
        text: '定时定量进食',
        score: { T: 0.5 }
      },
      {
        text: '根据心情决定',
        score: { F: 1 }
      },
      {
        text: '你喂的才吃',
        score: { F: 0.5 }
      }
    ]
  },
  {
    id: 75,
    text: '总体而言，你的猫咪：',
    dimension: 'TF',
    options: [
      {
        text: '理性高于情感',
        score: { T: 1 }
      },
      {
        text: '冷静但可沟通',
        score: { T: 0.5 }
      },
      {
        text: '敏感且情绪化',
        score: { F: 1 }
      },
      {
        text: '完全情感驱动',
        score: { F: 0.5 }
      }
    ]
  },
  // 76-100 JP
  {
    id: 76,
    text: '你家的喂食时间：',
    dimension: 'JP',
    options: [
      {
        text: '每天准时叫你',
        score: { J: 1 }
      },
      {
        text: '有固定期待时间',
        score: { J: 0.5 }
      },
      {
        text: '对时间不敏感',
        score: { P: 0.5 }
      },
      {
        text: '经常忘记吃饭',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 77,
    text: '对猫砂盆清洁度的要求：',
    dimension: 'JP',
    options: [
      {
        text: '必须保持非常干净',
        score: { J: 1 }
      },
      {
        text: '有固定如厕时间',
        score: { J: 0.5 }
      },
      {
        text: '对清洁度不挑剔',
        score: { P: 0.5 }
      },
      {
        text: '随地抗议',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 78,
    text: '睡觉地点的选择：',
    dimension: 'JP',
    options: [
      {
        text: '固定几个位置',
        score: { J: 1 }
      },
      {
        text: '按季节更换',
        score: { J: 0.5 }
      },
      {
        text: '随处可睡',
        score: { P: 0.5 }
      },
      {
        text: '每天不同',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 79,
    text: '每日作息规律：',
    dimension: 'JP',
    options: [
      {
        text: '早上会准时醒来',
        score: { J: 1 }
      },
      {
        text: '准时在特定位置等你回家',
        score: { J: 0.5 }
      },
      {
        text: '随心所欲想吃就吃',
        score: { P: 0.5 }
      },
      {
        text: '睡觉地点每天不同',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 80,
    text: '玩具收纳习惯：',
    dimension: 'JP',
    options: [
      {
        text: '放回固定位置',
        score: { J: 1 }
      },
      {
        text: '有专属玩具区',
        score: { J: 0.5 }
      },
      {
        text: '到处散落',
        score: { P: 0.5 }
      },
      {
        text: '故意藏在不同地方',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 81,
    text: '适应新环境的节奏：',
    dimension: 'JP',
    options: [
      {
        text: '3天内建立新领地',
        score: { J: 1 }
      },
      {
        text: '按固定流程探索',
        score: { J: 0.5 }
      },
      {
        text: '永远保持警惕',
        score: { P: 0.5 }
      },
      {
        text: '随心情决定适应度',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 82,
    text: '对新指令的学习：',
    dimension: 'JP',
    options: [
      {
        text: '需要重复固定步骤',
        score: { J: 1 }
      },
      {
        text: '习惯相同训练环境',
        score: { J: 0.5 }
      },
      {
        text: '拒绝系统性训练',
        score: { P: 0.5 }
      },
      {
        text: '即兴发挥动作',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 83,
    text: '遇到障碍时的反应：',
    dimension: 'JP',
    options: [
      {
        text: '使用已验证方法',
        score: { J: 1 }
      },
      {
        text: '按固定路线绕行',
        score: { J: 0.5 }
      },
      {
        text: '尝试各种奇怪方式',
        score: { P: 0.5 }
      },
      {
        text: '发明新解决方法',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 84,
    text: '与其他猫相处模式：',
    dimension: 'JP',
    options: [
      {
        text: '建立明确等级',
        score: { J: 1 }
      },
      {
        text: '维持固定距离',
        score: { J: 0.5 }
      },
      {
        text: '每天关系不同',
        score: { P: 0.5 }
      },
      {
        text: '看心情决定互动',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 85,
    text: '对日常变化的接受度：',
    dimension: 'JP',
    options: [
      {
        text: '强烈抗拒',
        score: { J: 1 }
      },
      {
        text: '需要适应期',
        score: { J: 0.5 }
      },
      {
        text: '立即接受',
        score: { P: 1 }
      },
      {
        text: '享受新鲜感',
        score: { P: 0.5 }
      }
    ]
  },
  {
    id: 86,
    text: '玩耍时的规则意识：',
    dimension: 'JP',
    options: [
      {
        text: '按固定方式玩',
        score: { J: 1 }
      },
      {
        text: '讨厌玩法改变',
        score: { J: 0.5 }
      },
      {
        text: '随意创新玩法',
        score: { P: 0.5 }
      },
      {
        text: '把玩具当其他用途',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 87,
    text: '对主人的服从度：',
    dimension: 'JP',
    options: [
      {
        text: '严格听从指令',
        score: { J: 1 }
      },
      {
        text: '习惯固定命令',
        score: { J: 0.5 }
      },
      {
        text: '选择性服从',
        score: { P: 0.5 }
      },
      {
        text: '经常自作主张',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 88,
    text: '睡眠习惯：',
    dimension: 'JP',
    options: [
      {
        text: '固定时间地点',
        score: { J: 1 }
      },
      {
        text: '特定姿势入睡',
        score: { J: 0.5 }
      },
      {
        text: '随处随时可睡',
        score: { P: 0.5 }
      },
      {
        text: '睡觉姿势千奇百怪',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 89,
    text: '对待医疗护理：',
    dimension: 'JP',
    options: [
      {
        text: '忍耐固定时长',
        score: { J: 1 }
      },
      {
        text: '配合固定流程',
        score: { J: 0.5 }
      },
      {
        text: '每次反应不同',
        score: { P: 0.5 }
      },
      {
        text: '医生也捉摸不透',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 90,
    text: '散步路线选择：',
    dimension: 'JP',
    options: [
      {
        text: '坚持相同路线',
        score: { J: 1 }
      },
      {
        text: '标记固定地点',
        score: { J: 0.5 }
      },
      {
        text: '每天探索新路径',
        score: { P: 0.5 }
      },
      {
        text: '完全随性走动',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 91,
    text: '对新家具的态度：',
    dimension: 'JP',
    options: [
      {
        text: '按流程检查',
        score: { J: 1 }
      },
      {
        text: '建立使用规则',
        score: { J: 0.5 }
      },
      {
        text: '创造性利用',
        score: { P: 0.5 }
      },
      {
        text: '开发意外用途',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 92,
    text: '饮食规律：',
    dimension: 'JP',
    options: [
      {
        text: '定时定量',
        score: { J: 1 }
      },
      {
        text: '固定进食仪式',
        score: { J: 0.5 }
      },
      {
        text: '看心情进食',
        score: { P: 0.5 }
      },
      {
        text: '把食物当玩具',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 93,
    text: '压力应对方式：',
    dimension: 'JP',
    options: [
      {
        text: '躲到固定安全点',
        score: { J: 1 }
      },
      {
        text: '采取既定策略',
        score: { J: 0.5 }
      },
      {
        text: '每次反应不同',
        score: { P: 0.5 }
      },
      {
        text: '创造性地缓解',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 94,
    text: '季节性换毛期：',
    dimension: 'JP',
    options: [
      {
        text: '固定时间开始',
        score: { J: 1 }
      },
      {
        text: '规律性掉毛',
        score: { J: 0.5 }
      },
      {
        text: '毫无规律可言',
        score: { P: 0.5 }
      },
      {
        text: '随温度任性掉毛',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 95,
    text: '与人类互动模式：',
    dimension: 'JP',
    options: [
      {
        text: '建立固定流程',
        score: { J: 1 }
      },
      {
        text: '特定时间求抚摸',
        score: { J: 0.5 }
      },
      {
        text: '完全看心情',
        score: { P: 0.5 }
      },
      {
        text: '每次互动都创新',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 96,
    text: '对训练的反应：',
    dimension: 'JP',
    options: [
      {
        text: '按部就班学习',
        score: { J: 1 }
      },
      {
        text: '需要重复练习',
        score: { J: 0.5 }
      },
      {
        text: '突然开窍',
        score: { P: 0.5 }
      },
      {
        text: '自学成才',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 97,
    text: '领地巡逻习惯：',
    dimension: 'JP',
    options: [
      {
        text: '固定路线时间',
        score: { J: 1 }
      },
      {
        text: '标记特定地点',
        score: { J: 0.5 }
      },
      {
        text: '随性巡逻',
        score: { P: 0.5 }
      },
      {
        text: '开发新领地',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 98,
    text: '对突发状况反应：',
    dimension: 'JP',
    options: [
      {
        text: '使用既定应对',
        score: { J: 1 }
      },
      {
        text: '按经验处理',
        score: { J: 0.5 }
      },
      {
        text: '随机应变',
        score: { P: 0.5 }
      },
      {
        text: '创造新方法',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 99,
    text: '日常存在感：',
    dimension: 'JP',
    options: [
      {
        text: '可预测的行为',
        score: { J: 1 }
      },
      {
        text: '规律性刷存在',
        score: { J: 0.5 }
      },
      {
        text: '神出鬼没',
        score: { P: 0.5 }
      },
      {
        text: '永远给人惊喜',
        score: { P: 1 }
      }
    ]
  },
  {
    id: 100,
    text: '总体生活方式：',
    dimension: 'JP',
    options: [
      {
        text: '高度结构化',
        score: { J: 1 }
      },
      {
        text: '适度计划性',
        score: { J: 0.5 }
      },
      {
        text: '灵活随性',
        score: { P: 0.5 }
      },
      {
        text: '完全不可预测',
        score: { P: 1 }
      }
    ]
  },
]; 