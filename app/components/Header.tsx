'use client';
import Image from 'next/image';
import styles from '../page.module.css';
import { useState } from 'react';

export default function Header({ onStartTest }: { onStartTest?: () => void }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className={styles.header}>
      <div className={styles.logoWrap}>
        <Image src="/logo.svg" alt="Taily Logo" width={160} height={50} priority />
      </div>
      <nav className={styles.navbar}>
        <a className={styles.navItem} href="/">萌尾时空</a>
        <a className={styles.navItem} href="/mbti">宠物MBTI</a>
        <div
          className={styles.navDropdownWrap}
          onMouseEnter={() => setOpenMenu('types')}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <a className={styles.navItem} href="/types">16型性格</a>
          {openMenu === 'types' && (
            <div className={styles.navDropdown}>
              <a className={styles.navDropdownItem} href="/types#cat">喵星</a>
              <a className={styles.navDropdownItem} href="/types/dog#dog">旺星</a>
            </div>
          )}
        </div>
        <div
          className={styles.navDropdownWrap}
          onMouseEnter={() => setOpenMenu('test')}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <a
            className={styles.navItem}
            href="#"
            onClick={e => { e.preventDefault(); onStartTest && onStartTest(); }}
          >
            开启测试
          </a>
          {openMenu === 'test' && (
            <div className={styles.navDropdown}>
              <a className={styles.navDropdownItem} href="/test/cat">喵星</a>
              <a className={styles.navDropdownItem} href="/test/dog">旺星</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
} 