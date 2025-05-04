'use client';

import styles from '../page.module.css';
import catStyles from './cat.module.css';
import Image from 'next/image';

const CAT_TYPES = [
  {
    group: '务实派 SJ型',
    types: [
      { name: 'ISTJ「纪律委员」', desc: '严谨守时的管家猫\n每天准时叫醒你\n对猫砂盆洁净度有严格标准\n讨厌打乱作息' },
      { name: 'ISFJ「家庭医生」', desc: '细心温柔的护理猫\n会记住全家作息规律\n轻咬提醒你吃药\n默默守护每个家庭成员' },
      { name: 'ESTJ「区域总管」', desc: '精明能干的管理猫\n每天三次领地巡视\n对新家具要审核\n确保家中秩序井然' },
      { name: 'ESFJ「贴心护工」', desc: '温暖体贴的保姆猫\n会把玩具叼给生病的你\n主动安抚其他宠物\n维持家庭和谐' },
    ]
  },
  {
    group: '探险家 SP型',
    types: [
      { name: 'ISTP「机械师」', desc: '动手能力强的技术猫\n痴迷研究自动喂食器构造\n能拆开各种电器探索内部机关' },
      { name: 'ISFP「艺术家」', desc: '敏感挑剔的文艺猫\n只喝流动的活水\n对特定颜色的玩具有执着偏好\n生活充满仪式感' },
      { name: 'ESTP「特技演员」', desc: '活力四射的运动猫\n把窗帘当攀岩墙\n空中转体接零食满分\n家中永远充满惊喜' },
      { name: 'ESFP「社交达人」', desc: '热情开朗的明星猫\n主动迎接客人\n擅长表演翻肚皮卖萌\n用魅力换取额外零食' },
    ]
  },
  {
    group: '哲学家 NT型',
    types: [
      { name: 'INTJ「幕后BOSS」', desc: '深谋远虑的策划猫\n暗中观察三天后精准推下你最贵的杯子\n一切尽在掌控' },
      { name: 'INTP「科学怪喵」', desc: '好奇心爆棚的研究猫\n实验不同高度推物\n详细记录你的反应数据\n探索世界规律' },
      { name: 'ENTJ「霸道总裁」', desc: '强势果断的领导猫\n凌晨踩脸要求加餐\n用威严眼神下达命令\n全家都要听它的' },
      { name: 'ENTP「诡辩专家」', desc: '机智狡猾的谈判猫\n学会开冰箱后和你讨价还价\n总能找到漏洞获取额外利益' },
    ]
  },
  {
    group: '治愈者 NF型',
    types: [
      { name: 'INFJ「心灵捕手」', desc: '善解人意的治愈猫\n能敏锐感知情绪变化\n在你崩溃时突然献上珍藏的塑料瓶盖安慰' },
      { name: 'INFP「诗人」', desc: '多愁善感的文艺猫\n喜欢对着窗外飞鸟吟唱忧伤喵呜长调\n活在自己的幻想世界' },
      { name: 'ENFJ「政委」', desc: '乐于助人的外交猫\n主动调解打架的流浪猫\n耐心教导幼猫埋屎技巧\n社区和事佬' },
      { name: 'ENFP「快乐病毒」', desc: '活力无限的创意猫\n发明凌晨三点跑酷等健身方式\n用热情感染全家' },
    ]
  },
];

export default function TypesPage() {
  return (
    <main className={styles.main}>
      {/* 喵星内容区块 */}
      <section id="cat" className={catStyles.mbtiTypesSection}>
        <h1 className={catStyles.mbtiTypesMainTitle}>猫咪16型喵格</h1>
        {CAT_TYPES.map((group, groupIdx) => (
          <div className={catStyles.mbtiTypeGroup} key={group.group}>
            <h2 className={catStyles.mbtiTypeGroupTitle}>{group.group}</h2>
            <div className={catStyles.mbtiTypeList}>
              {group.types.map((type, typeIdx) => (
                <div className={catStyles.mbtiTypeCard} key={type.name}>
                  <Image
                    src={`/cat${groupIdx * 4 + typeIdx + 1}.jpeg`}
                    alt={type.name}
                    width={300}
                    height={200}
                    className={catStyles.mbtiTypeImgPlaceholder}
                    style={{objectFit: 'cover'}}
                  />
                  <div className={catStyles.mbtiTypeName}>{type.name}</div>
                  <div className={catStyles.mbtiTypeDesc}>
                    {type.desc.split('\n').map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
} 