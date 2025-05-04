import styles from './cat.module.css';

const CAT_TYPES = [
  {
    group: '【务实派】(SJ型)',
    types: [
      { name: 'ISTJ「纪律委员」', desc: '严谨守时的管家猫，每天准时叫醒你，对猫砂盆洁净度有严格标准，讨厌打乱作息。' },
      { name: 'ISFJ「家庭医生」', desc: '细心温柔的护理猫，会记住全家作息规律，轻咬提醒你吃药，默默守护每个家庭成员。' },
      { name: 'ESTJ「区域总管」', desc: '精明能干的管理猫，每天三次领地巡视，对新家具要审核，确保家中秩序井然。' },
      { name: 'ESFJ「贴心护工」', desc: '温暖体贴的保姆猫，会把玩具叼给生病的你，主动安抚其他宠物，维持家庭和谐。' },
    ]
  },
  {
    group: '【探险家】(SP型)',
    types: [
      { name: 'ISTP「机械师」', desc: '动手能力强的技术猫，痴迷研究自动喂食器构造，能拆开各种电器探索内部机关。' },
      { name: 'ISFP「艺术家」', desc: '敏感挑剔的文艺猫，只喝流动的活水，对特定颜色的玩具有执着偏好，生活充满仪式感。' },
      { name: 'ESTP「特技演员」', desc: '活力四射的运动猫，把窗帘当攀岩墙，空中转体接零食满分，家中永远充满惊喜(吓)。' },
      { name: 'ESFP「社交达人」', desc: '热情开朗的明星猫，主动迎接客人，擅长表演翻肚皮卖萌，用魅力换取额外零食。' },
    ]
  },
  {
    group: '【哲学家】(NT型)',
    types: [
      { name: 'INTJ「幕后BOSS」', desc: '深谋远虑的策划猫，暗中观察三天后精准推下你最贵的杯子，一切尽在掌控。' },
      { name: 'INTP「科学怪喵」', desc: '好奇心爆棚的研究猫，实验不同高度推物，详细记录你的反应数据，探索世界规律。' },
      { name: 'ENTJ「霸道总裁」', desc: '强势果断的领导猫，凌晨踩脸要求加餐，用威严眼神下达命令，全家都要听它的。' },
      { name: 'ENTP「诡辩专家」', desc: '机智狡猾的谈判猫，学会开冰箱后和你讨价还价，总能找到漏洞获取额外利益。' },
    ]
  },
  {
    group: '【治愈者】(NF型)',
    types: [
      { name: 'INFJ「心灵捕手」', desc: '善解人意的治愈猫，能敏锐感知情绪变化，在你崩溃时突然献上珍藏的塑料瓶盖安慰。' },
      { name: 'INFP「诗人」', desc: '多愁善感的文艺猫，喜欢对着窗外飞鸟吟唱忧伤喵呜长调，活在自己的幻想世界。' },
      { name: 'ENFJ「政委」', desc: '乐于助人的外交猫，主动调解打架的流浪猫，耐心教导幼猫埋屎技巧，社区和事佬。' },
      { name: 'ENFP「快乐病毒」', desc: '活力无限的创意猫，发明"凌晨三点跑酷"等健身方式，用热情感染全家。' },
    ]
  },
];

export default function CatTypes() {
  return (
    <section className={styles.mbtiTypesSection}>
      <h1 className={styles.mbtiTypesMainTitle}>猫咪16型人格速查表</h1>
      {CAT_TYPES.map(group => (
        <div className={styles.mbtiTypeGroup} key={group.group}>
          <h2 className={styles.mbtiTypeGroupTitle}>{group.group}</h2>
          <div className={styles.mbtiTypeList}>
            {group.types.map(type => (
              <div className={styles.mbtiTypeCard} key={type.name}>
                <div className={styles.mbtiTypeImgPlaceholder}></div>
                <div className={styles.mbtiTypeName}>{type.name}</div>
                <div className={styles.mbtiTypeDesc}>{type.desc}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
} 