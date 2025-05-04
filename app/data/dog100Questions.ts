export const dog100Questions = [
  // 1-25 外向(E)-内向(I)
  { text: '当门铃响起时，你的狗狗会：', options: [
    { text: '立即冲到门口大声吠叫', value: 'E' },
    { text: '跑到门口但不叫唤', value: 'E' },
    { text: '抬头看一眼然后继续做自己的事', value: 'I' },
    { text: '躲到安全的地方', value: 'I' }
  ], dimension: 'EI' },
  { text: '在狗狗公园里，你的狗狗：', options: [
    { text: '主动找其他狗玩耍', value: 'E' },
    { text: '等别的狗来邀请', value: 'E' },
    { text: '只跟熟悉的狗玩', value: 'I' },
    { text: '始终待在主人身边', value: 'I' }
  ], dimension: 'EI' },
  { text: '家里来客人时，你的狗狗：', options: [
    { text: '兴奋地扑向每个客人', value: 'E' },
    { text: '选择性接近某些客人', value: 'E' },
    { text: '等客人坐下后才慢慢靠近', value: 'I' },
    { text: '全程保持警惕，不靠近', value: 'I' }
  ], dimension: 'EI' },
  { text: '散步时遇到其他狗狗，你的狗狗会：', options: [
    { text: '立即摇尾巴冲过去打招呼', value: 'E' },
    { text: '先观察再谨慎接近', value: 'E' },
    { text: '保持距离，等对方先靠近', value: 'I' },
    { text: '直接躲到你身后', value: 'I' }
  ], dimension: 'EI' },
  { text: '当你回家时，你的狗狗：', options: [
    { text: '兴奋地扑上来舔脸', value: 'E' },
    { text: '摇尾巴叼玩具迎接', value: 'E' },
    { text: '慢慢走过来蹭腿', value: 'I' },
    { text: '从远处看着你', value: 'I' }
  ], dimension: 'EI' },
  { text: '面对新玩具时，你的狗狗：', options: [
    { text: '立即兴奋地玩起来', value: 'E' },
    { text: '谨慎地闻闻看看再玩', value: 'E' },
    { text: '观察一会儿才尝试', value: 'I' },
    { text: '完全不感兴趣', value: 'I' }
  ], dimension: 'EI' },
  { text: '在宠物店/医院的表现：', options: [
    { text: '兴奋地探索每个角落', value: 'E' },
    { text: '谨慎但好奇地走动', value: 'E' },
    { text: '紧贴主人身边', value: 'I' },
    { text: '害怕得发抖', value: 'I' }
  ], dimension: 'EI' },
  { text: '对突发声响的反应：', options: [
    { text: '立即前去查看来源', value: 'E' },
    { text: '警觉地观察', value: 'E' },
    { text: '轻微受惊后保持警惕', value: 'I' },
    { text: '迅速躲藏', value: 'I' }
  ], dimension: 'EI' },
  { text: '日常活动时的表现：', options: [
    { text: '总是充满活力跑来跑去', value: 'E' },
    { text: '适度活跃，会自己找乐子', value: 'E' },
    { text: '安静地待在自己喜欢的地方', value: 'I' },
    { text: '大部分时间都在睡觉', value: 'I' }
  ], dimension: 'EI' },
  { text: '与其他狗狗相处时：', options: [
    { text: '主动发起游戏', value: 'E' },
    { text: '回应其他狗的邀请', value: 'E' },
    { text: '只与熟悉的狗互动', value: 'I' },
    { text: '避免与其他狗接触', value: 'I' }
  ], dimension: 'EI' },
  { text: '对陌生人的态度：', options: [
    { text: '立即友好接近', value: 'E' },
    { text: '等陌生人先示好', value: 'E' },
    { text: '保持安全距离', value: 'I' },
    { text: '直接躲开', value: 'I' }
  ], dimension: 'EI' },
  { text: '在车上时的表现：', options: [
    { text: '兴奋地看窗外', value: 'E' },
    { text: '安静但好奇', value: 'E' },
    { text: '有些紧张', value: 'I' },
    { text: '害怕得发抖', value: 'I' }
  ], dimension: 'EI' },
  { text: '对洗澡的反应：', options: [
    { text: '享受洗澡过程', value: 'E' },
    { text: '配合但不热衷', value: 'E' },
    { text: '勉强忍受', value: 'I' },
    { text: '强烈抗拒', value: 'I' }
  ], dimension: 'EI' },
  { text: '当你工作时，你的狗狗：', options: [
    { text: '经常打扰寻求关注', value: 'E' },
    { text: '偶尔来蹭蹭你', value: 'E' },
    { text: '安静地陪伴', value: 'I' },
    { text: '完全自己做自己的事', value: 'I' }
  ], dimension: 'EI' },
  { text: '对拍照的反应：', options: [
    { text: '喜欢面对镜头', value: 'E' },
    { text: '配合但不主动', value: 'E' },
    { text: '回避镜头', value: 'I' },
    { text: '强烈抗拒', value: 'I' }
  ], dimension: 'EI' },
  { text: '对日常作息的遵守：', options: [
    { text: '准时提醒你各项活动', value: 'E' },
    { text: '对固定时间有期待', value: 'E' },
    { text: '对时间不敏感', value: 'I' },
    { text: '经常忘记日常活动', value: 'I' }
  ], dimension: 'EI' },
  { text: '对训练新指令的态度：', options: [
    { text: '热情参与', value: 'E' },
    { text: '配合但不过度兴奋', value: 'E' },
    { text: '需要更多鼓励', value: 'I' },
    { text: '容易放弃', value: 'I' }
  ], dimension: 'EI' },
  { text: '对家庭成员的态度：', options: [
    { text: '对所有人都同样热情', value: 'E' },
    { text: '有最喜欢的人但仍亲近其他人', value: 'E' },
    { text: '只亲近特定家庭成员', value: 'I' },
    { text: '对所有人都保持距离', value: 'I' }
  ], dimension: 'EI' },
  { text: '对户外活动的态度：', options: [
    { text: '非常兴奋，迫不及待', value: 'E' },
    { text: '喜欢但不会过度兴奋', value: 'E' },
    { text: '适度享受', value: 'I' },
    { text: '更喜欢室内', value: 'I' }
  ], dimension: 'EI' },
  { text: '当你情绪激动时，你的狗狗：', options: [
    { text: '会参与你的情绪', value: 'E' },
    { text: '表现出关心', value: 'E' },
    { text: '保持距离观察', value: 'I' },
    { text: '躲开', value: 'I' }
  ], dimension: 'EI' },
  { text: '对家中变化的适应速度：', options: [
    { text: '立即适应', value: 'E' },
    { text: '几天内适应', value: 'E' },
    { text: '需要较长时间', value: 'I' },
    { text: '很难适应', value: 'I' }
  ], dimension: 'EI' },
  { text: '对抚摸的反应：', options: [
    { text: '主动寻求各种抚摸', value: 'E' },
    { text: '享受但不过度索取', value: 'E' },
    { text: '只接受特定方式的抚摸', value: 'I' },
    { text: '通常回避抚摸', value: 'I' }
  ], dimension: 'EI' },
  { text: '对陌生环境的反应：', options: [
    { text: '立即开始探索', value: 'E' },
    { text: '谨慎但好奇地探索', value: 'E' },
    { text: '保持警惕缓慢适应', value: 'I' },
    { text: '害怕得不敢移动', value: 'I' }
  ], dimension: 'EI' },
  { text: '对零食训练的态度：', options: [
    { text: '为零食做任何事', value: 'E' },
    { text: '喜欢但能控制自己', value: 'E' },
    { text: '需要特别喜欢的零食才配合', value: 'I' },
    { text: '对零食兴趣不大', value: 'I' }
  ], dimension: 'EI' },
  { text: '总体而言，你的狗狗：', options: [
    { text: '非常外向活泼', value: 'E' },
    { text: '适度外向', value: 'E' },
    { text: '适度内向', value: 'I' },
    { text: '非常内向安静', value: 'I' }
  ], dimension: 'EI' },

  // 26-50 实感(S)-直觉(N)
  { text: '对新买的狗玩具，你的狗狗：', options: [
    { text: '立即用牙齿测试材质', value: 'S' },
    { text: '仔细闻遍每个角落', value: 'S' },
    { text: '先观察你如何使用', value: 'N' },
    { text: '赋予玩具特殊意义', value: 'N' }
  ], dimension: 'SN' },
  { text: '当你拿出牵引绳时，你的狗狗：', options: [
    { text: '立即认出是散步的信号', value: 'S' },
    { text: '会检查绳子的状态', value: 'S' },
    { text: '结合其他线索判断是否真能出门', value: 'N' },
    { text: '有时会误判情况', value: 'N' }
  ], dimension: 'SN' },
  { text: '对新环境的适应方式：', options: [
    { text: '立即开始探索每个角落', value: 'S' },
    { text: '系统性地检查每个区域', value: 'S' },
    { text: '先观察整体氛围', value: 'N' },
    { text: '表现出对气场的敏感', value: 'N' }
  ], dimension: 'SN' },
  { text: '学习新技能的方式：', options: [
    { text: '通过重复练习掌握', value: 'S' },
    { text: '通过具体奖励学习', value: 'S' },
    { text: '似乎突然就理解了', value: 'N' },
    { text: '创造自己的执行方式', value: 'N' }
  ], dimension: 'SN' },
  { text: '对食物的态度：', options: [
    { text: '专注于食物的味道和质地', value: 'S' },
    { text: '对特定食物有强烈偏好', value: 'S' },
    { text: '更关注进食的环境氛围', value: 'N' },
    { text: '有时会忘记吃饭', value: 'N' }
  ], dimension: 'SN' },
  // 31-50 实感(S)-直觉(N)
  { text: '当你藏起玩具时，你的狗狗会：', options: [
    { text: '通过气味系统性地寻找', value: 'S' },
    { text: '检查所有可能藏匿的地方', value: 'S' },
    { text: '似乎能猜到你的藏匿模式', value: 'N' },
    { text: '用非传统方式寻找（如等你露出破绽）', value: 'N' }
  ], dimension: 'SN' },
  { text: '对季节变化的反应：', options: [
    { text: '立即适应温度变化', value: 'S' },
    { text: '改变作息适应季节', value: 'S' },
    { text: '似乎不受天气影响', value: 'N' },
    { text: '表现出情绪变化', value: 'N' }
  ], dimension: 'SN' },
  { text: '在玩耍时更注重：', options: [
    { text: '玩具的物理特性（材质/形状）', value: 'S' },
    { text: '游戏的具体规则', value: 'S' },
    { text: '互动的氛围和情感', value: 'N' },
    { text: '创造新玩法', value: 'N' }
  ], dimension: 'SN' },
  { text: '对日常散步路线的态度：', options: [
    { text: '喜欢完全固定的路线', value: 'S' },
    { text: '会注意沿途每个细节变化', value: 'S' },
    { text: '对路线不特别在意', value: 'N' },
    { text: '主动带你去新路线探索', value: 'N' }
  ], dimension: 'SN' },
  { text: '当你换新香水时：', options: [
    { text: '立即注意到并仔细嗅闻', value: 'S' },
    { text: '会表现出困惑不安', value: 'S' },
    { text: '似乎没注意到', value: 'N' },
    { text: '表现出喜欢或讨厌的情绪', value: 'N' }
  ], dimension: 'SN' },
  { text: '解决问题的策略：', options: [
    { text: '尝试已知有效的方法', value: 'S' },
    { text: '系统性地尝试各种方法', value: 'S' },
    { text: '等待灵感闪现', value: 'N' },
    { text: '发明全新解决方法', value: 'N' }
  ], dimension: 'SN' },
  { text: '对电视节目的反应：', options: [
    { text: '只对动物画面有反应', value: 'S' },
    { text: '对特定声音（如狗叫声）有反应', value: 'S' },
    { text: '似乎理解简单剧情', value: 'N' },
    { text: '对隐喻性画面有反应（如悲伤场景）', value: 'N' }
  ], dimension: 'SN' },
  { text: '当你情绪低落时：', options: [
    { text: '通过具体行为安慰（如蹭你）', value: 'S' },
    { text: '带来它最喜欢的玩具', value: 'S' },
    { text: '似乎感知你的情绪状态', value: 'N' },
    { text: '表现出同步的情绪变化', value: 'N' }
  ], dimension: 'SN' },
  { text: '对时间的感知：', options: [
    { text: '准时要求吃饭散步（误差<5分钟）', value: 'S' },
    { text: '遵循严格的作息规律', value: 'S' },
    { text: '对时间不敏感', value: 'P' },
    { text: '有自己的时间概念（如觉得该吃饭了）', value: 'N' }
  ], dimension: 'SN' },
  { text: '在训练中：', options: [
    { text: '需要具体明确的指令', value: 'S' },
    { text: '逐步学习每个分解步骤', value: 'S' },
    { text: '能理解复杂复合指令', value: 'N' },
    { text: '会加入自己的理解执行', value: 'N' }
  ], dimension: 'SN' },
  { text: '对新物品的态度：', options: [
    { text: '详细检查每个物理部分', value: 'S' },
    { text: '测试物品的实际功能', value: 'S' },
    { text: '关注物品的象征意义', value: 'N' },
    { text: '赋予物品特殊含义（如这是专属我的）', value: 'N' }
  ], dimension: 'SN' },
  { text: '对新买的宠物用品：', options: [
    { text: '立即注意到材质和气味', value: 'S' },
    { text: '仔细检查各个部件', value: 'S' },
    { text: '对物品的用途更感兴趣', value: 'N' },
    { text: '根据出现情境判断用途', value: 'N' }
  ], dimension: 'SN' },
  { text: '对音乐的反应：', options: [
    { text: '对特定频率声音有反应', value: 'S' },
    { text: '明确喜欢/讨厌某些声音', value: 'S' },
    { text: '似乎享受旋律', value: 'N' },
    { text: '对音乐情绪有反应（如安静时听慢歌）', value: 'N' }
  ], dimension: 'SN' },
  { text: '解决问题时：', options: [
    { text: '依赖以往成功经验', value: 'S' },
    { text: '尝试物理性解决方法', value: 'S' },
    { text: '表现出突然的洞察力', value: 'N' },
    { text: '有创造性的解决方案', value: 'N' }
  ], dimension: 'SN' },
  { text: '对梦境的表现：', options: [
    { text: '有明显的肢体动作', value: 'S' },
    { text: '会发出梦呓声音', value: 'S' },
    { text: '似乎在做复杂梦境', value: 'N' },
    { text: '醒来后若有所思', value: 'N' }
  ], dimension: 'SN' },
  { text: '当你改变日常流程时：', options: [
    { text: '立即注意到变化', value: 'S' },
    { text: '需要几天时间调整', value: 'S' },
    { text: '似乎不在意', value: 'N' },
    { text: '表现出情绪反应', value: 'N' }
  ], dimension: 'SN' },
  { text: '对空间的利用：', options: [
    { text: '有固定的活动区域', value: 'S' },
    { text: '喜欢特定的休息地点', value: 'S' },
    { text: '随意使用整个空间', value: 'N' },
    { text: '创造性地使用空间（如开发新路线）', value: 'N' }
  ], dimension: 'SN' },
  { text: '在互动游戏中：', options: [
    { text: '喜欢有明确规则的游戏', value: 'S' },
    { text: '专注于游戏物品本身', value: 'S' },
    { text: '更注重互动体验', value: 'N' },
    { text: '会改变游戏规则', value: 'N' }
  ], dimension: 'SN' },
  { text: '对天气变化的反应：', options: [
    { text: '立即调整行为适应', value: 'S' },
    { text: '对特定天气有固定反应', value: 'S' },
    { text: '似乎不受影响', value: 'N' },
    { text: '表现出情绪变化', value: 'N' }
  ], dimension: 'SN' },
  { text: '总体而言，你的狗狗：', options: [
    { text: '非常实际和具体', value: 'S' },
    { text: '偏实际但有一定灵活性', value: 'S' },
    { text: '偏直觉但有一定实际性', value: 'N' },
    { text: '非常直觉和抽象', value: 'N' }
  ], dimension: 'SN' },

  // 51-75 思考(T)-情感(F)
  { text: '当你训斥它时，你的狗狗：', options: [
    { text: '立即停止行为但很快忘记', value: 'T' },
    { text: '分析为什么被训斥', value: 'T' },
    { text: '表现出委屈的样子', value: 'F' },
    { text: '需要很长时间才能恢复情绪', value: 'F' }
  ], dimension: 'TF' },
  { text: '当你哭泣时，你的狗狗：', options: [
    { text: '似乎没注意到', value: 'T' },
    { text: '困惑地看着你', value: 'T' },
    { text: '用头蹭你安慰', value: 'F' },
    { text: '叼来玩具逗你开心', value: 'F' }
  ], dimension: 'TF' },
  { text: '在多狗家庭中争夺玩具时：', options: [
    { text: '评估后理性竞争', value: 'T' },
    { text: '采取策略性行为', value: 'T' },
    { text: '情绪化地守护玩具', value: 'F' },
    { text: '表现出受伤的样子', value: 'F' }
  ], dimension: 'TF' },
  { text: '当你生病时：', options: [
    { text: '行为如常', value: 'T' },
    { text: '似乎没注意到', value: 'T' },
    { text: '更多地陪伴你', value: 'F' },
    { text: '表现出特别关心', value: 'F' }
  ], dimension: 'TF' },
  { text: '在争夺资源(食物/玩具)时：', options: [
    { text: '理性评估后行动', value: 'T' },
    { text: '采取策略性行为', value: 'T' },
    { text: '情绪化反应', value: 'F' },
    { text: '表现出委屈或愤怒', value: 'F' }
  ], dimension: 'TF' },
  { text: '当你表扬其他宠物时：', options: [
    { text: '不特别反应', value: 'T' },
    { text: '继续自己的活动', value: 'T' },
    { text: '寻求你的关注', value: 'F' },
    { text: '表现出嫉妒行为', value: 'F' }
  ], dimension: 'TF' },
  { text: '对惩罚的反应：', options: [
    { text: '尝试理解原因', value: 'T' },
    { text: '调整行为避免惩罚', value: 'T' },
    { text: '情感上受伤', value: 'F' },
    { text: '长时间记仇', value: 'F' }
  ], dimension: 'TF' },
  { text: '在多宠物家庭中：', options: [
    { text: '建立明确的等级关系', value: 'T' },
    { text: '保持适度距离', value: 'T' },
    { text: '寻求情感联系', value: 'F' },
    { text: '表现出强烈的依恋', value: 'F' }
  ], dimension: 'TF' },
  { text: '当你离家时：', options: [
    { text: '适应独处', value: 'T' },
    { text: '保持日常活动', value: 'T' },
    { text: '表现出分离焦虑', value: 'F' },
    { text: '情感上难以接受', value: 'F' }
  ], dimension: 'TF' },
  { text: '对冲突的处理方式：', options: [
    { text: '理性回避', value: 'T' },
    { text: '评估后采取行动', value: 'T' },
    { text: '情绪化反应', value: 'F' },
    { text: '长时间受影响', value: 'F' }
  ], dimension: 'TF' },
  { text: '在玩耍中：', options: [
    { text: '注重游戏本身', value: 'T' },
    { text: '有明确的游戏目标', value: 'T' },
    { text: '更注重互动体验', value: 'F' },
    { text: '为取悦你而玩', value: 'F' }
  ], dimension: 'TF' },
  { text: '对陌生人宠物的态度：', options: [
    { text: '理性评估威胁', value: 'T' },
    { text: '保持警惕但不情绪化', value: 'T' },
    { text: '根据感觉决定反应', value: 'F' },
    { text: '迅速建立情感联系', value: 'F' }
  ], dimension: 'TF' },
  { text: '当你改变规则时：', options: [
    { text: '尝试理解新规则', value: 'T' },
    { text: '理性适应变化', value: 'T' },
    { text: '情感上抗拒', value: 'F' },
    { text: '表现出困惑不安', value: 'F' }
  ], dimension: 'TF' },
  { text: '对失败的反应：', options: [
    { text: '尝试不同方法', value: 'T' },
    { text: '理性放弃', value: 'T' },
    { text: '情绪低落', value: 'F' },
    { text: '需要安慰', value: 'F' }
  ], dimension: 'TF' },
  { text: '当你同时照顾多只宠物时：', options: [
    { text: '接受公平分配', value: 'T' },
    { text: '理性竞争资源', value: 'T' },
    { text: '需要特别关注', value: 'F' },
    { text: '情感上难以分享', value: 'F' }
  ], dimension: 'TF' },
  { text: '对日常护理(梳毛/剪指甲)的态度：', options: [
    { text: '配合但不享受', value: 'T' },
    { text: '视为必要过程', value: 'T' },
    { text: '享受护理时的亲密', value: 'F' },
    { text: '视为主人爱的表达', value: 'F' }
  ], dimension: 'TF' },
  { text: '当你不小心踩到它时：', options: [
    { text: '叫一声然后走开', value: 'T' },
    { text: '表现出困惑但不记仇', value: 'T' },
    { text: '需要较长时间安抚', value: 'F' },
    { text: '会记仇一段时间', value: 'F' }
  ], dimension: 'TF' },
  { text: '在训练中：', options: [
    { text: '对奖励做出理性反应', value: 'T' },
    { text: '注重任务完成', value: 'T' },
    { text: '更在意你的表扬', value: 'F' },
    { text: '为取悦你而学习', value: 'F' }
  ], dimension: 'TF' },
  { text: '对家庭秩序的态度：', options: [
    { text: '接受明确的等级', value: 'T' },
    { text: '理性适应结构', value: 'T' },
    { text: '需要情感确认', value: 'F' },
    { text: '重视情感连接胜过规则', value: 'F' }
  ], dimension: 'TF' },
  { text: '当你情绪激动时：', options: [
    { text: '保持冷静', value: 'T' },
    { text: '理性观察', value: 'T' },
    { text: '情绪同步', value: 'F' },
    { text: '试图安抚你', value: 'F' }
  ], dimension: 'TF' },
  { text: '在多宠物互动中：', options: [
    { text: '建立实用关系', value: 'T' },
    { text: '保持适度距离', value: 'T' },
    { text: '寻求友谊', value: 'F' },
    { text: '发展深厚情感', value: 'F' }
  ], dimension: 'TF' },
  { text: '对纪律的态度：', options: [
    { text: '理解必要规则', value: 'T' },
    { text: '理性遵守', value: 'T' },
    { text: '情感上抗拒', value: 'F' },
    { text: '需要温柔执行', value: 'F' }
  ], dimension: 'TF' },
  { text: '在资源分享时：', options: [
    { text: '理性评估后决定', value: 'T' },
    { text: '采取策略性行为', value: 'T' },
    { text: '情感上难以分享', value: 'F' },
    { text: '为维持关系而分享', value: 'F' }
  ], dimension: 'TF' },
  { text: '对主人权威的态度：', options: [
    { text: '尊重明确的领导', value: 'T' },
    { text: '理性服从', value: 'T' },
    { text: '需要情感确认', value: 'F' },
    { text: '基于爱而非权威服从', value: 'F' }
  ], dimension: 'TF' },
  { text: '总体而言，你的狗狗：', options: [
    { text: '非常理性和客观', value: 'T' },
    { text: '偏理性但有一定情感性', value: 'T' },
    { text: '偏情感但有一定理性', value: 'F' },
    { text: '非常情感化和主观', value: 'F' }
  ], dimension: 'TF' },

  // 76-100 判断(J)-感知(P)
  { text: '你家的喂食时间：', options: [
    { text: '狗狗每天准时提醒你', value: 'J' },
    { text: '狗狗有固定的期待时间', value: 'J' },
    { text: '狗狗对时间不敏感', value: 'P' },
    { text: '狗狗经常忘记吃饭', value: 'P' }
  ], dimension: 'JP' },
  { text: '散步路线改变时：', options: [
    { text: '坚持要走熟悉路线', value: 'J' },
    { text: '表现出困惑', value: 'J' },
    { text: '兴奋探索新路线', value: 'P' },
    { text: '完全不在意', value: 'P' }
  ], dimension: 'JP' },
  { text: '对日常护理的反应：', options: [
    { text: '配合固定流程', value: 'J' },
    { text: '习惯特定时间的美容', value: 'J' },
    { text: '每次反应都不一样', value: 'P' },
    { text: '完全无法预测', value: 'P' }
  ], dimension: 'JP' },
  { text: '对食物摆放的要求：', options: [
    { text: '必须在固定地点', value: 'J' },
    { text: '喜欢规律的喂食时间', value: 'J' },
    { text: '对地点不特别在意', value: 'P' },
    { text: '对时间不特别在意', value: 'P' }
  ], dimension: 'JP' },
  { text: '当你试图改变习惯时：', options: [
    { text: '强烈抗拒变化', value: 'J' },
    { text: '需要时间适应', value: 'J' },
    { text: '轻松接受', value: 'P' },
    { text: '享受变化', value: 'P' }
  ], dimension: 'JP' },
  { text: '探索新环境时：', options: [
    { text: '系统性地检查每个区域', value: 'J' },
    { text: '按照固定模式探索', value: 'J' },
    { text: '随意探索', value: 'P' },
    { text: '即兴发挥', value: 'P' }
  ], dimension: 'JP' },
  { text: '对训练的态度：', options: [
    { text: '喜欢明确的指令', value: 'J' },
    { text: '遵循固定训练流程', value: 'J' },
    { text: '喜欢灵活的训练方式', value: 'P' },
    { text: '讨厌重复性训练', value: 'P' }
  ], dimension: 'JP' },
  { text: '解决问题时：', options: [
    { text: '使用已知有效的方法', value: 'J' },
    { text: '遵循固定思维模式', value: 'J' },
    { text: '尝试各种可能性', value: 'P' },
    { text: '即兴创造新方法', value: 'P' }
  ], dimension: 'JP' },
  { text: '休息地点的选择：', options: [
    { text: '固定的几个地点', value: 'J' },
    { text: '严格划分活动与休息区', value: 'J' },
    { text: '随处可休息', value: 'P' },
    { text: '经常变换地点', value: 'P' }
  ], dimension: 'JP' },
  { text: '准备外出时：', options: [
    { text: '提前等待在固定位置', value: 'J' },
    { text: '表现出固定准备行为', value: 'J' },
    { text: '随机反应', value: 'P' },
    { text: '最后一刻才准备', value: 'P' }
  ], dimension: 'JP' },
  { text: '在多狗家庭中：', options: [
    { text: '建立明确的等级秩序', value: 'J' },
    { text: '坚持固定互动模式', value: 'J' },
    { text: '灵活调整关系', value: 'P' },
    { text: '随机互动', value: 'P' }
  ], dimension: 'JP' },
  { text: '对玩具的使用方式：', options: [
    { text: '按照设计用途使用', value: 'J' },
    { text: '有固定的玩耍方式', value: 'J' },
    { text: '创造性使用', value: 'P' },
    { text: '经常发明新玩法', value: 'P' }
  ], dimension: 'JP' },
  { text: '遇到障碍时：', options: [
    { text: '坚持已知解决方案', value: 'J' },
    { text: '重复尝试相同方法', value: 'J' },
    { text: '尝试各种可能性', value: 'P' },
    { text: '寻找非传统解决方案', value: 'P' }
  ], dimension: 'JP' },
  { text: '吃饭时间的把控：', options: [
    { text: '非常准时，到点就提醒', value: 'J' },
    { text: '喜欢固定的吃饭时间', value: 'J' },
    { text: '吃饭时间灵活无所谓', value: 'P' },
    { text: '经常忘记吃饭时间', value: 'P' }
  ], dimension: 'JP' },
  { text: '家里来客人时：', options: [
    { text: '有固定的欢迎仪式', value: 'J' },
    { text: '遵循固定互动模式', value: 'J' },
    { text: '随机反应', value: 'P' },
    { text: '每次反应都不同', value: 'P' }
  ], dimension: 'JP' },
  { text: '对日常散步的态度：', options: [
    { text: '必须按照固定路线', value: 'J' },
    { text: '喜欢固定的散步时间', value: 'J' },
    { text: '享受路线变化', value: 'P' },
    { text: '对时间不特别在意', value: 'P' }
  ], dimension: 'JP' },
  { text: '在玩耍互动中：', options: [
    { text: '喜欢可预测的游戏', value: 'J' },
    { text: '坚持游戏规则', value: 'J' },
    { text: '喜欢即兴游戏', value: 'P' },
    { text: '经常改变游戏方式', value: 'P' }
  ], dimension: 'JP' },
  { text: '学习新指令的方式：', options: [
    { text: '逐步按步骤学习', value: 'J' },
    { text: '需要明确指导', value: 'J' },
    { text: '整体性理解', value: 'P' },
    { text: '自我探索学习', value: 'P' }
  ], dimension: 'JP' },
  { text: '资源管理(食物/玩具)：', options: [
    { text: '有固定的存放地点', value: 'J' },
    { text: '严格管理自己的物品', value: 'J' },
    { text: '随意存放', value: 'P' },
    { text: '经常忘记物品位置', value: 'P' }
  ], dimension: 'JP' },
  { text: '对家庭规则的态度：', options: [
    { text: '严格遵守已知规则', value: 'J' },
    { text: '坚持固定行为模式', value: 'J' },
    { text: '灵活解释规则', value: 'P' },
    { text: '经常打破常规', value: 'P' }
  ], dimension: 'JP' },
  { text: '解决问题时：', options: [
    { text: '依赖以往经验', value: 'J' },
    { text: '使用已验证的方法', value: 'J' },
    { text: '尝试新方法', value: 'P' },
    { text: '即兴发挥', value: 'P' }
  ], dimension: 'JP' },
  { text: '对日程变化的适应：', options: [
    { text: '很难适应变化', value: 'J' },
    { text: '需要时间调整', value: 'J' },
    { text: '轻松适应', value: 'P' },
    { text: '享受变化', value: 'P' }
  ], dimension: 'JP' },
  { text: '与其他狗互动时：', options: [
    { text: '遵循固定社交模式', value: 'J' },
    { text: '有明确的互动规则', value: 'J' },
    { text: '即兴互动', value: 'P' },
    { text: '每次互动都不同', value: 'P' }
  ], dimension: 'JP' },
  { text: '对训练进度的态度：', options: [
    { text: '喜欢循序渐进', value: 'J' },
    { text: '需要明确里程碑', value: 'J' },
    { text: '跳跃式进步', value: 'P' },
    { text: '讨厌固定进度', value: 'P' }
  ], dimension: 'JP' },
  { text: '总体而言，你的狗狗：', options: [
    { text: '非常有计划性和条理', value: 'J' },
    { text: '偏计划性但有一定灵活性', value: 'J' },
    { text: '偏灵活性但有一定计划性', value: 'P' },
    { text: '非常灵活和随性', value: 'P' }
  ], dimension: 'JP' },
]; 