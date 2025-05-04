export interface Question {
  id: string;
  text: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  type: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
  options: {
    text: string;
    score: number;
  }[];
}

export const questions: Question[] = [
  // EI维度问题 (1-25)
  {
    id: 'EI1',
    text: '当你回家时，你家宠物通常会：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '兴奋地冲过来迎接你', score: 5 },
      { text: '慢慢走过来看看你', score: 4 },
      { text: '继续做自己的事，偶尔看你一眼', score: 2 },
      { text: '躲起来直到确定是你', score: 1 }
    ]
  },
  {
    id: 'EI2',
    text: '面对陌生人时，你家宠物会：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '主动靠近并嗅闻', score: 5 },
      { text: '保持距离观察', score: 3 },
      { text: '躲起来', score: 2 },
      { text: '吠叫/发出警告声', score: 4 }
    ]
  },
  {
    id: 'EI3',
    text: '在公园或其他宠物聚集的地方，你家宠物会：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '立即跑去和其他宠物玩耍', score: 5 },
      { text: '谨慎地接近感兴趣的宠物', score: 4 },
      { text: '待在主人身边观察', score: 2 },
      { text: '紧张或试图离开', score: 1 }
    ]
  },
  {
    id: 'EI4',
    text: '你家宠物对新玩具的反应是：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '立即兴奋地玩起来', score: 5 },
      { text: '谨慎地闻闻看看，然后尝试', score: 4 },
      { text: '观察一会儿，可能过段时间才玩', score: 2 },
      { text: '完全不感兴趣', score: 1 }
    ]
  },
  {
    id: 'EI5',
    text: '当你家来客人时，你家宠物会：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '热情地迎接每位客人', score: 5 },
      { text: '选择性接近某些客人', score: 4 },
      { text: '保持安全距离观察', score: 2 },
      { text: '躲藏直到客人离开', score: 1 }
    ]
  },
  {
    id: 'EI6',
    text: '散步时遇到其他宠物，你家宠物会：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '主动上前打招呼', score: 5 },
      { text: '等对方先接近', score: 4 },
      { text: '观察但不互动', score: 2 },
      { text: '绕道避开', score: 1 }
    ]
  },
  {
    id: 'EI7',
    text: '你家宠物独自在家时的表现：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '经常在门口等待', score: 5 },
      { text: '在窗边观察外界', score: 4 },
      { text: '安静地睡觉', score: 2 },
      { text: '躲在自己的安全角落', score: 1 }
    ]
  },
  {
    id: 'EI8',
    text: '在宠物社交场合，你家宠物：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '是聚会的中心', score: 5 },
      { text: '参与但不主导', score: 4 },
      { text: '选择性互动', score: 2 },
      { text: '寻找安静角落', score: 1 }
    ]
  },
  {
    id: 'EI9',
    text: '你家宠物对户外活动的态度：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '非常兴奋，迫不及待', score: 5 },
      { text: '喜欢但不会过度兴奋', score: 4 },
      { text: '适度享受', score: 2 },
      { text: '更喜欢室内', score: 1 }
    ]
  },
  {
    id: 'EI10',
    text: '当你打电话或视频时，你家宠物：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '经常凑过来参与', score: 5 },
      { text: '偶尔会过来看看', score: 4 },
      { text: '保持距离观察', score: 2 },
      { text: '完全不理睬', score: 1 }
    ]
  },
  {
    id: 'EI11',
    text: '你家宠物对突发声响的反应：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '立即前去查看来源', score: 5 },
      { text: '警觉但不过度反应', score: 4 },
      { text: '轻微受惊后观察', score: 2 },
      { text: '迅速躲藏', score: 1 }
    ]
  },
  {
    id: 'EI12',
    text: '在兽医诊所，你家宠物：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '好奇地探索新环境', score: 5 },
      { text: '对医生表现友好', score: 4 },
      { text: '紧张但配合', score: 2 },
      { text: '极度恐惧躲藏', score: 1 }
    ]
  },
  {
    id: 'EI13',
    text: '你家宠物对新家具的反应：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '立即上前检查', score: 5 },
      { text: '谨慎地探索', score: 4 },
      { text: '几天后才慢慢适应', score: 2 },
      { text: '长期回避', score: 1 }
    ]
  },
  {
    id: 'EI14',
    text: '当你吃东西时，你家宠物：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '总是凑过来要分享', score: 5 },
      { text: '会表现出兴趣但不强求', score: 4 },
      { text: '偶尔会看一眼', score: 2 },
      { text: '完全不感兴趣', score: 1 }
    ]
  },
  {
    id: 'EI15',
    text: '你家宠物对镜中自己的反应：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '兴奋地互动', score: 5 },
      { text: '好奇地观察', score: 4 },
      { text: '短暂注意后失去兴趣', score: 2 },
      { text: '回避或攻击', score: 1 }
    ]
  },
  {
    id: 'EI16',
    text: '当你工作时，你家宠物：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '经常打扰寻求关注', score: 5 },
      { text: '偶尔来蹭蹭你', score: 4 },
      { text: '安静地陪伴', score: 2 },
      { text: '完全自己做自己的事', score: 1 }
    ]
  },
  {
    id: 'EI17',
    text: '你家宠物对洗澡的态度：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '享受洗澡过程', score: 5 },
      { text: '配合但不热衷', score: 4 },
      { text: '勉强忍受', score: 2 },
      { text: '强烈抗拒', score: 1 }
    ]
  },
  {
    id: 'EI18',
    text: '在乘车时，你家宠物：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '兴奋地看窗外', score: 5 },
      { text: '安静但好奇', score: 4 },
      { text: '有些紧张', score: 2 },
      { text: '极度焦虑', score: 1 }
    ]
  },
  {
    id: 'EI19',
    text: '你家宠物对家中变化的适应速度：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '立即适应', score: 5 },
      { text: '几天内适应', score: 4 },
      { text: '需要较长时间', score: 2 },
      { text: '很难适应', score: 1 }
    ]
  },
  {
    id: 'EI20',
    text: '当你训练新指令时，你家宠物：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '热情参与', score: 5 },
      { text: '配合但不过度兴奋', score: 4 },
      { text: '需要更多鼓励', score: 2 },
      { text: '容易放弃', score: 1 }
    ]
  },
  {
    id: 'EI21',
    text: '你家宠物对门铃的反应：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '立即冲向门口', score: 5 },
      { text: '会去查看但不激动', score: 4 },
      { text: '警觉但不行动', score: 2 },
      { text: '躲藏起来', score: 1 }
    ]
  },
  {
    id: 'EI22',
    text: '在户外遇到其他动物时，你家宠物：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '主动上前互动', score: 5 },
      { text: '保持安全距离观察', score: 4 },
      { text: '躲在你身后', score: 2 },
      { text: '表现出攻击性', score: 1 }
    ]
  },
  {
    id: 'EI23',
    text: '你家宠物对拍照的反应：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '喜欢面对镜头', score: 5 },
      { text: '配合但不主动', score: 4 },
      { text: '回避镜头', score: 2 },
      { text: '强烈抗拒', score: 1 }
    ]
  },
  {
    id: 'EI24',
    text: '当你情绪激动时，你家宠物：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '会参与你的情绪', score: 5 },
      { text: '表现出关心', score: 4 },
      { text: '保持距离观察', score: 2 },
      { text: '躲开', score: 1 }
    ]
  },
  {
    id: 'EI25',
    text: '总体而言，你家宠物：',
    dimension: 'EI',
    type: 'E',
    options: [
      { text: '非常外向活泼', score: 5 },
      { text: '适度外向', score: 4 },
      { text: '适度内向', score: 2 },
      { text: '非常内向安静', score: 1 }
    ]
  },

  // SN维度问题 (26-50)
  {
    id: 'SN1',
    text: '当你改变家具摆放时，你家宠物会：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '立即注意到并探索变化', score: 5 },
      { text: '花时间适应新布局', score: 4 },
      { text: '似乎没注意到变化', score: 2 },
      { text: '表现出焦虑或不安', score: 1 }
    ]
  },
  {
    id: 'SN2',
    text: '你家宠物最喜欢的游戏类型是：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '追逐实际物体(球、飞盘等)', score: 5 },
      { text: '解决食物谜题', score: 4 },
      { text: '观察窗外或电视上的移动图像', score: 2 },
      { text: '与主人进行眼神交流或互动', score: 1 }
    ]
  },
  {
    id: 'SN3',
    text: '当你带宠物去新环境时，它会：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '立即开始探索每个角落', score: 5 },
      { text: '系统地检查每个区域', score: 4 },
      { text: '观察整体环境后再行动', score: 2 },
      { text: '表现出对氛围的敏感', score: 1 }
    ]
  },
  {
    id: 'SN4',
    text: '你家宠物学习新技能的方式：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '通过重复练习掌握', score: 5 },
      { text: '通过具体奖励学习', score: 4 },
      { text: '似乎突然就理解了', score: 2 },
      { text: '创造自己的执行方式', score: 1 }
    ]
  },
  {
    id: 'SN5',
    text: '你家宠物对食物的态度：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '专注于食物的味道和质地', score: 5 },
      { text: '对特定食物有强烈偏好', score: 4 },
      { text: '更关注进食的环境氛围', score: 2 },
      { text: '有时会忘记吃饭', score: 1 }
    ]
  },
  {
    id: 'SN6',
    text: '当你藏起玩具时，你家宠物会：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '通过气味系统寻找', score: 5 },
      { text: '检查所有可能的地方', score: 4 },
      { text: '似乎能猜到藏匿点', score: 2 },
      { text: '用非传统方式寻找', score: 1 }
    ]
  },
  {
    id: 'SN7',
    text: '你家宠物对季节变化的反应：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '立即适应温度变化', score: 5 },
      { text: '改变作息适应季节', score: 4 },
      { text: '似乎不受影响', score: 2 },
      { text: '表现出情绪变化', score: 1 }
    ]
  },
  {
    id: 'SN8',
    text: '在玩耍时，你家宠物更注重：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '玩具的物理特性', score: 5 },
      { text: '游戏的具体规则', score: 4 },
      { text: '互动的氛围', score: 2 },
      { text: '创造新玩法', score: 1 }
    ]
  },
  {
    id: 'SN9',
    text: '你家宠物对日常散步路线的态度：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '喜欢固定的路线', score: 5 },
      { text: '会注意沿途的每个细节', score: 4 },
      { text: '对路线不特别在意', score: 2 },
      { text: '喜欢探索新路线', score: 1 }
    ]
  },
  {
    id: 'SN10',
    text: '当你换新香水时，你家宠物：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '立即注意到并嗅闻', score: 5 },
      { text: '会表现出困惑', score: 4 },
      { text: '似乎没注意到', score: 2 },
      { text: '表现出喜欢或不喜欢', score: 1 }
    ]
  },
  {
    id: 'SN11',
    text: '你家宠物解决问题的策略：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '尝试已知有效的方法', score: 5 },
      { text: '系统性地尝试各种方法', score: 4 },
      { text: '等待灵感闪现', score: 2 },
      { text: '发明全新方法', score: 1 }
    ]
  },
  {
    id: 'SN12',
    text: '你家宠物对电视节目的反应：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '只对动物画面有反应', score: 5 },
      { text: '对特定声音有反应', score: 4 },
      { text: '似乎理解剧情', score: 2 },
      { text: '对隐喻性画面有反应', score: 1 }
    ]
  },
  {
    id: 'SN13',
    text: '当你情绪低落时，你家宠物：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '通过具体行为安慰(如蹭你)', score: 5 },
      { text: '带来它喜欢的玩具', score: 4 },
      { text: '似乎感知你的情绪状态', score: 2 },
      { text: '表现出同步的情绪', score: 1 }
    ]
  },
  {
    id: 'SN14',
    text: '你家宠物对时间的感知：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '准时要求吃饭散步', score: 5 },
      { text: '遵循严格的作息', score: 4 },
      { text: '对时间不敏感', score: 2 },
      { text: '有自己的时间概念', score: 1 }
    ]
  },
  {
    id: 'SN15',
    text: '在训练中，你家宠物：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '需要具体明确的指令', score: 5 },
      { text: '逐步学习每个步骤', score: 4 },
      { text: '能理解复杂指令', score: 2 },
      { text: '会加入自己的理解', score: 1 }
    ]
  },
  {
    id: 'SN16',
    text: '你家宠物对新物品的态度：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '详细检查每个部分', score: 5 },
      { text: '测试物品的功能', score: 4 },
      { text: '关注物品的象征意义', score: 2 },
      { text: '赋予物品特殊含义', score: 1 }
    ]
  },
  {
    id: 'SN17',
    text: '当你使用新买的宠物用品时，你家宠物会：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '立即注意到物品的材质和气味', score: 5 },
      { text: '仔细检查物品的各个部分', score: 4 },
      { text: '对物品的"意义"更感兴趣(如是否代表外出)', score: 2 },
      { text: '根据物品出现的情境判断用途', score: 1 }
    ]
  },
  {
    id: 'SN18',
    text: '你家宠物对音乐的反应：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '对特定频率有反应', score: 5 },
      { text: '喜欢或讨厌某些声音', score: 4 },
      { text: '似乎享受旋律', score: 2 },
      { text: '对音乐情绪有反应', score: 1 }
    ]
  },
  {
    id: 'SN19',
    text: '在解决问题时，你家宠物：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '依赖以往经验', score: 5 },
      { text: '尝试物理性方法', score: 4 },
      { text: '表现出洞察力', score: 2 },
      { text: '有创造性解决方案', score: 1 }
    ]
  },
  {
    id: 'SN20',
    text: '你家宠物对梦境的表现：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '有明显的肢体动作', score: 5 },
      { text: '会发出声音', score: 4 },
      { text: '似乎有复杂梦境', score: 2 },
      { text: '醒来后若有所思', score: 1 }
    ]
  },
  {
    id: 'SN21',
    text: '当你改变日常流程时，你家宠物：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '立即注意到变化', score: 5 },
      { text: '需要时间调整', score: 4 },
      { text: '似乎不在意', score: 2 },
      { text: '表现出情绪反应', score: 1 }
    ]
  },
  {
    id: 'SN22',
    text: '你家宠物对空间的利用：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '有固定的活动区域', score: 5 },
      { text: '喜欢特定的休息地点', score: 4 },
      { text: '随意使用整个空间', score: 2 },
      { text: '创造性地使用空间', score: 1 }
    ]
  },
  {
    id: 'SN23',
    text: '在互动游戏中，你家宠物：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '喜欢有明确规则的游戏', score: 5 },
      { text: '专注于游戏物品本身', score: 4 },
      { text: '更注重互动体验', score: 2 },
      { text: '会改变游戏规则', score: 1 }
    ]
  },
  {
    id: 'SN24',
    text: '你家宠物对天气变化的反应：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '立即调整行为适应', score: 5 },
      { text: '对特定天气有固定反应', score: 4 },
      { text: '似乎不受影响', score: 2 },
      { text: '表现出情绪变化', score: 1 }
    ]
  },
  {
    id: 'SN25',
    text: '总体而言，你家宠物：',
    dimension: 'SN',
    type: 'S',
    options: [
      { text: '非常实际和具体', score: 5 },
      { text: '偏实际但有一定灵活性', score: 4 },
      { text: '偏直觉但有一定实际性', score: 2 },
      { text: '非常直觉和抽象', score: 1 }
    ]
  },

  // TF维度问题 (51-75)
  {
    id: 'TF1',
    text: '当你情绪低落时，你家宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '似乎没注意到', score: 5 },
      { text: '保持平常行为', score: 4 },
      { text: '靠近你寻求接触', score: 2 },
      { text: '表现出担忧的样子', score: 1 }
    ]
  },
  {
    id: 'TF2',
    text: '在训练中犯错被纠正时，你家宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '立即尝试新方法', score: 5 },
      { text: '表现出困惑', score: 4 },
      { text: '寻求安慰', score: 2 },
      { text: '表现出受伤的样子', score: 1 }
    ]
  },
  {
    id: 'TF3',
    text: '当主人工作时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '安静陪伴', score: 5 },
      { text: '偶尔互动', score: 4 },
      { text: '自己玩耍', score: 3 },
      { text: '打扰主人', score: 2 },
      { text: '完全离开', score: 1 }
    ]
  },
  {
    id: 'TF4',
    text: '当主人睡觉时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '安静守护', score: 5 },
      { text: '在旁休息', score: 4 },
      { text: '自由活动', score: 3 },
      { text: '制造噪音', score: 2 },
      { text: '完全不在', score: 1 }
    ]
  },
  {
    id: 'TF5',
    text: '当主人哭泣时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '紧贴安慰', score: 5 },
      { text: '轻声呜咽', score: 4 },
      { text: '保持距离', score: 3 },
      { text: '显得不安', score: 2 },
      { text: '完全逃避', score: 1 }
    ]
  },
  {
    id: 'TF6',
    text: '当主人生气时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '试图缓和', score: 5 },
      { text: '保持距离', score: 4 },
      { text: '观察情况', score: 3 },
      { text: '显得紧张', score: 2 },
      { text: '躲起来', score: 1 }
    ]
  },
  {
    id: 'TF7',
    text: '当主人开心时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '一起欢乐', score: 5 },
      { text: '轻松互动', score: 4 },
      { text: '保持平静', score: 3 },
      { text: '略显兴奋', score: 2 },
      { text: '无动于衷', score: 1 }
    ]
  },
  {
    id: 'TF8',
    text: '当主人忙碌时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '耐心等待', score: 5 },
      { text: '偶尔示意', score: 4 },
      { text: '自己玩耍', score: 3 },
      { text: '频繁打扰', score: 2 },
      { text: '完全离开', score: 1 }
    ]
  },
  {
    id: 'TF9',
    text: '当主人外出回家时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '热情迎接', score: 5 },
      { text: '表示欢迎', score: 4 },
      { text: '平静对待', score: 3 },
      { text: '略显冷淡', score: 2 },
      { text: '完全无视', score: 1 }
    ]
  },
  {
    id: 'TF10',
    text: '当主人抱抱你的宠物时，它会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '享受依偎', score: 5 },
      { text: '温顺接受', score: 4 },
      { text: '保持平静', score: 3 },
      { text: '轻微挣扎', score: 2 },
      { text: '强烈反抗', score: 1 }
    ]
  },
  {
    id: 'TF11',
    text: '当主人给予表扬时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '兴奋回应', score: 5 },
      { text: '表示喜悦', score: 4 },
      { text: '平静接受', score: 3 },
      { text: '略显冷淡', score: 2 },
      { text: '完全无视', score: 1 }
    ]
  },
  {
    id: 'TF12',
    text: '当主人责备时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '认错示好', score: 5 },
      { text: '表示歉意', score: 4 },
      { text: '保持沉默', score: 3 },
      { text: '显得委屈', score: 2 },
      { text: '完全反抗', score: 1 }
    ]
  },
  {
    id: 'TF13',
    text: '当主人给予奖励时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '感激接受', score: 5 },
      { text: '开心领取', score: 4 },
      { text: '平静对待', score: 3 },
      { text: '漫不经心', score: 2 },
      { text: '完全拒绝', score: 1 }
    ]
  },
  {
    id: 'TF14',
    text: '当主人需要帮助时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '主动协助', score: 5 },
      { text: '尝试帮忙', score: 4 },
      { text: '保持观望', score: 3 },
      { text: '无所作为', score: 2 },
      { text: '完全不管', score: 1 }
    ]
  },
  {
    id: 'TF15',
    text: '当主人受伤时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '焦急关心', score: 5 },
      { text: '靠近查看', score: 4 },
      { text: '保持距离', score: 3 },
      { text: '显得不安', score: 2 },
      { text: '完全逃避', score: 1 }
    ]
  },
  {
    id: 'TF16',
    text: '当主人打喷嚏时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '立即查看', score: 5 },
      { text: '投来关注', score: 4 },
      { text: '略显惊讶', score: 3 },
      { text: '有点害怕', score: 2 },
      { text: '完全躲开', score: 1 }
    ]
  },
  {
    id: 'TF17',
    text: '当主人唱歌时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '专注倾听', score: 5 },
      { text: '靠近陪伴', score: 4 },
      { text: '保持平静', score: 3 },
      { text: '显得困惑', score: 2 },
      { text: '躲开逃避', score: 1 }
    ]
  },
  {
    id: 'TF18',
    text: '当主人做运动时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '积极参与', score: 5 },
      { text: '在旁陪伴', score: 4 },
      { text: '保持观望', score: 3 },
      { text: '偶尔打扰', score: 2 },
      { text: '完全离开', score: 1 }
    ]
  },
  {
    id: 'TF19',
    text: '当主人看电视时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '依偎陪伴', score: 5 },
      { text: '安静休息', score: 4 },
      { text: '自己玩耍', score: 3 },
      { text: '要求注意', score: 2 },
      { text: '离开房间', score: 1 }
    ]
  },
  {
    id: 'TF20',
    text: '当主人打电话时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '安静等待', score: 5 },
      { text: '保持关注', score: 4 },
      { text: '自行活动', score: 3 },
      { text: '制造噪音', score: 2 },
      { text: '完全离开', score: 1 }
    ]
  },
  {
    id: 'TF21',
    text: '当主人玩手机时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '温柔提醒', score: 5 },
      { text: '轻轻触碰', score: 4 },
      { text: '默默等待', score: 3 },
      { text: '强行打扰', score: 2 },
      { text: '完全离开', score: 1 }
    ]
  },
  {
    id: 'TF22',
    text: '当主人吃饭时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '安静等待', score: 5 },
      { text: '保持距离', score: 4 },
      { text: '偶尔观望', score: 3 },
      { text: '不断乞食', score: 2 },
      { text: '完全不管', score: 1 }
    ]
  },
  {
    id: 'TF23',
    text: '当主人梳理它时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '享受配合', score: 5 },
      { text: '温顺接受', score: 4 },
      { text: '保持平静', score: 3 },
      { text: '轻微抗拒', score: 2 },
      { text: '强烈反抗', score: 1 }
    ]
  },
  {
    id: 'TF24',
    text: '当主人哼歌时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '快乐摇摆', score: 5 },
      { text: '轻声应和', score: 4 },
      { text: '安静聆听', score: 3 },
      { text: '略显困惑', score: 2 },
      { text: '完全无视', score: 1 }
    ]
  },
  {
    id: 'TF25',
    text: '当主人打扫卫生时，你的宠物会：',
    dimension: 'TF',
    type: 'T',
    options: [
      { text: '主动避让', score: 5 },
      { text: '保持距离', score: 4 },
      { text: '跟随观察', score: 3 },
      { text: '捣乱干扰', score: 2 },
      { text: '完全不管', score: 1 }
    ]
  },

  // JP维度问题 (76-100)
  {
    id: 'JP1',
    text: '你家宠物对日常作息的反应是：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '严格遵守，准时提醒你', score: 5 },
      { text: '喜欢固定的时间表', score: 4 },
      { text: '适应性强，时间不固定也行', score: 2 },
      { text: '完全没有规律', score: 1 }
    ]
  },
  {
    id: 'JP2',
    text: '当你改变散步路线时，你家宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '坚持原来的路线', score: 5 },
      { text: '表现出困惑', score: 4 },
      { text: '兴奋地探索新路线', score: 2 },
      { text: '无所谓', score: 1 }
    ]
  },
  {
    id: 'JP3',
    text: '对于固定的睡觉时间，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '自觉入睡', score: 5 },
      { text: '慢慢准备', score: 4 },
      { text: '随时可睡', score: 3 },
      { text: '经常熬夜', score: 2 },
      { text: '完全不固定', score: 1 }
    ]
  },
  {
    id: 'JP4',
    text: '对于固定的训练时间，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '积极配合', score: 5 },
      { text: '基本遵守', score: 4 },
      { text: '看心情', score: 3 },
      { text: '经常抗拒', score: 2 },
      { text: '完全拒绝', score: 1 }
    ]
  },
  {
    id: 'JP5',
    text: '对于固定的玩耍时间，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '准时参与', score: 5 },
      { text: '愿意配合', score: 4 },
      { text: '随性而为', score: 3 },
      { text: '偶尔参与', score: 2 },
      { text: '不愿遵守', score: 1 }
    ]
  },
  {
    id: 'JP6',
    text: '对于固定的如厕地点，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '严格遵守', score: 5 },
      { text: '基本遵守', score: 4 },
      { text: '偶尔改变', score: 3 },
      { text: '经常变化', score: 2 },
      { text: '随地可以', score: 1 }
    ]
  },
  {
    id: 'JP7',
    text: '对于固定的休息区域，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '固定使用', score: 5 },
      { text: '偏好使用', score: 4 },
      { text: '随处可以', score: 3 },
      { text: '经常改变', score: 2 },
      { text: '完全不固定', score: 1 }
    ]
  },
  {
    id: 'JP8',
    text: '对于固定的梳理时间，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '主动配合', score: 5 },
      { text: '基本接受', score: 4 },
      { text: '随时可以', score: 3 },
      { text: '偶尔抗拒', score: 2 },
      { text: '完全拒绝', score: 1 }
    ]
  },
  {
    id: 'JP9',
    text: '对于固定的洗澡时间，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '乖乖配合', score: 5 },
      { text: '基本接受', score: 4 },
      { text: '看情况', score: 3 },
      { text: '经常抗拒', score: 2 },
      { text: '强烈反对', score: 1 }
    ]
  },
  {
    id: 'JP10',
    text: '对于固定的活动顺序，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '严格遵循', score: 5 },
      { text: '基本遵守', score: 4 },
      { text: '偶尔调整', score: 3 },
      { text: '随意变动', score: 2 },
      { text: '完全混乱', score: 1 }
    ]
  },
  {
    id: 'JP11',
    text: '对于固定的玩具摆放，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '自觉归位', score: 5 },
      { text: '基本保持', score: 4 },
      { text: '偶尔整理', score: 3 },
      { text: '随意放置', score: 2 },
      { text: '到处乱放', score: 1 }
    ]
  },
  {
    id: 'JP12',
    text: '对于固定的互动规则，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '严格遵守', score: 5 },
      { text: '基本遵守', score: 4 },
      { text: '视情况而定', score: 3 },
      { text: '经常违反', score: 2 },
      { text: '完全不遵守', score: 1 }
    ]
  },
  {
    id: 'JP13',
    text: '对于固定的活动范围，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '自觉遵守', score: 5 },
      { text: '基本遵守', score: 4 },
      { text: '偶尔越界', score: 3 },
      { text: '经常越界', score: 2 },
      { text: '完全不守', score: 1 }
    ]
  },
  {
    id: 'JP14',
    text: '对于固定的指令用语，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '立即响应', score: 5 },
      { text: '基本理解', score: 4 },
      { text: '偶尔混淆', score: 3 },
      { text: '经常忽视', score: 2 },
      { text: '完全不理', score: 1 }
    ]
  },
  {
    id: 'JP15',
    text: '对于固定的奖励方式，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '欣然接受', score: 5 },
      { text: '基本满意', score: 4 },
      { text: '看心情', score: 3 },
      { text: '偶尔抗拒', score: 2 },
      { text: '完全拒绝', score: 1 }
    ]
  },
  {
    id: 'JP16',
    text: '对于固定的清洁程序，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '配合完成', score: 5 },
      { text: '基本配合', score: 4 },
      { text: '被动接受', score: 3 },
      { text: '经常抗拒', score: 2 },
      { text: '强烈反对', score: 1 }
    ]
  },
  {
    id: 'JP17',
    text: '对于固定的社交时间，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '准时参与', score: 5 },
      { text: '愿意参加', score: 4 },
      { text: '随性而为', score: 3 },
      { text: '偶尔参与', score: 2 },
      { text: '拒绝参加', score: 1 }
    ]
  },
  {
    id: 'JP18',
    text: '对于固定的运动时间，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '积极参与', score: 5 },
      { text: '基本配合', score: 4 },
      { text: '看心情', score: 3 },
      { text: '不太愿意', score: 2 },
      { text: '完全拒绝', score: 1 }
    ]
  },
  {
    id: 'JP19',
    text: '对于固定的休息信号，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '立即响应', score: 5 },
      { text: '慢慢配合', score: 4 },
      { text: '偶尔执行', score: 3 },
      { text: '经常忽视', score: 2 },
      { text: '完全不理', score: 1 }
    ]
  },
  {
    id: 'JP20',
    text: '对于固定的活动场所，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '自觉前往', score: 5 },
      { text: '基本遵守', score: 4 },
      { text: '偶尔改变', score: 3 },
      { text: '随意变换', score: 2 },
      { text: '完全不定', score: 1 }
    ]
  },
  {
    id: 'JP21',
    text: '对于固定的活动节奏，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '完全适应', score: 5 },
      { text: '基本跟随', score: 4 },
      { text: '偶尔调整', score: 3 },
      { text: '经常打乱', score: 2 },
      { text: '完全混乱', score: 1 }
    ]
  },
  {
    id: 'JP22',
    text: '对于固定的行为规范，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '严格遵守', score: 5 },
      { text: '基本遵守', score: 4 },
      { text: '偶尔违反', score: 3 },
      { text: '经常违反', score: 2 },
      { text: '完全不守', score: 1 }
    ]
  },
  {
    id: 'JP23',
    text: '对于固定的生活习惯，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '自觉遵循', score: 5 },
      { text: '基本保持', score: 4 },
      { text: '偶尔改变', score: 3 },
      { text: '经常变化', score: 2 },
      { text: '毫无规律', score: 1 }
    ]
  },
  {
    id: 'JP24',
    text: '对于固定的日常程序，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '按部就班', score: 5 },
      { text: '基本遵循', score: 4 },
      { text: '偶尔调整', score: 3 },
      { text: '随意变动', score: 2 },
      { text: '完全混乱', score: 1 }
    ]
  },
  {
    id: 'JP25',
    text: '对于固定的生活规律，你的宠物会：',
    dimension: 'JP',
    type: 'J',
    options: [
      { text: '完全遵守', score: 5 },
      { text: '基本遵守', score: 4 },
      { text: '偶尔打破', score: 3 },
      { text: '经常违反', score: 2 },
      { text: '毫无规律', score: 1 }
    ]
  }
]; 