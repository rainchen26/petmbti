'use client';

import styles from '../../page.module.css';
import catStyles from '../cat.module.css';

const DOG_TYPES = [
  {
    group: '守护者 SJ型',
    types: [
      { name: 'ISTJ「安保主任」', desc: '严谨可靠的警卫犬\n每天准时蹲守大门\n对陌生访客严格审查\n家中最称职的保安' },
      { name: 'ISFJ「护理长」', desc: '温柔体贴的护士犬\n会轻轻叼走小孩手里的危险物品\n时刻关注家人安全' },
      { name: 'ESTJ「社区民警」', desc: '认真负责的巡逻犬\n对路过行人进行严格气味登记\n维护领地秩序一丝不苟' },
      { name: 'ESFJ「幼儿园长」', desc: '热心肠的保姆犬\n主动帮其他狗狗理毛\n公平分配玩具\n像个暖心大家长' },
    ]
  },
  {
    group: '冒险家 SP型',
    types: [
      { name: 'ISTP「拆弹专家」', desc: '聪明机智的技术犬\n五分钟就能解开复杂狗笼锁扣\n天生的问题解决者' },
      { name: 'ISFP「文艺青年」', desc: '敏感浪漫的艺术家犬\n只在樱花树下方便\n对散步路线有独特美学要求' },
      { name: 'ESTP「极限运动员」', desc: '精力旺盛的运动犬\n把普通散步变成跨栏障碍赛\n永远活力四射' },
      { name: 'ESFP「派对之星」', desc: '热情洋溢的社交犬\n会自己按音响开关开派对\n用表演换取零食和掌声' },
    ]
  },
  {
    group: '指挥官 NT型',
    types: [
      { name: 'INTJ「战略家」', desc: '深谋远虑的军师犬\n藏玩具时会设计虚假埋藏点\n战术思维令人惊叹' },
      { name: 'INTP「发明家」', desc: '创意无限的科学家犬\n能用食盆和水盆组合出新玩具\n天生发明家' },
      { name: 'ENTJ「项目总监」', desc: '领导力强的管理犬\n能组织流浪狗集体觅食\n天生的团队领导者' },
      { name: 'ENTP「谈判专家」', desc: '机智灵活的辩论犬\n偷吃被抓后会叼来拖鞋抵罪\n总能找到解决办法' },
    ]
  },
  {
    group: '陪伴者 NF型',
    types: [
      { name: 'INFJ「治疗犬」', desc: '善解人意的心理师犬\n能精准识别主人焦虑时刻\n提供温暖的安慰' },
      { name: 'INFP「林黛玉」', desc: '敏感细腻的诗人犬\n会因为你摸别的狗而绝食抗议三分钟\n感情丰富' },
      { name: 'ENFJ「班主任」', desc: '责任心强的教导犬\n主动指导小狗们遵守交通规则\n像个耐心的老师' },
      { name: 'ENFP「开心果」', desc: '活力满满的欢乐犬\n发明甩水珠逗你笑等游戏\n永远能带来欢笑' },
    ]
  },
];

export default function DogTypesPage() {
  return (
    <main className={styles.main}>
      {/* 旺星内容区块 */}
      <section id="dog" className={catStyles.mbtiTypesSection}>
        <h1 className={catStyles.mbtiTypesMainTitle}>狗狗16型旺格</h1>
        {DOG_TYPES.map(group => (
          <div className={catStyles.mbtiTypeGroup} key={group.group}>
            <h2 className={catStyles.mbtiTypeGroupTitle}>{group.group}</h2>
            <div className={catStyles.mbtiTypeList}>
              {group.types.map(type => (
                <div className={catStyles.mbtiTypeCard} key={type.name}>
                  <div className={catStyles.mbtiTypeImgPlaceholder}></div>
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