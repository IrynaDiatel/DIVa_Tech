import React from 'react';
import styles from './TargetAudience.module.css';

const TargetAudience = () => {
  return (
    <section className={styles.targetSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>КОМУ ЦЕ ПІДХОДИТЬ?</span>
          <h2 className={`${styles.title} ${styles.highlight}`}>
            ВПІЗНАЄТЕ СЕБЕ?
          </h2>
        </div>

        <div className={styles.cardsGrid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNumber}>01</span>
              <h3 className={styles.cardTitle}>
                Клієнти приходять тільки за сарафанкою
              </h3>
            </div>
            <p className={styles.cardText}>
              І ви не знаєте, чи будуть вони завтра. Сайт забезпечить стабільний потік нових звернень.
            </p>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>
                Сьогодні ведете інстаграм — але нових клієнтів немає
              </h3>
            </div>
            <p className={styles.cardText}>
              Але нові люди вас просто не знаходять. Сайт дозволить залучати холодний трафік з пошуку.
            </p>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNumber}>03</span>
              <h3 className={styles.cardTitle}>
                Хочете підняти чек — але без сайту це складно
              </h3>
            </div>
            <p className={styles.cardText}>
              Без сильної онлайн-упаковки складно виглядати як преміум. Сайт змінює те, як вас сприймають.
            </p>
          </div>
        </div>

        <div className={styles.footer}>
          <p>Прямо зараз хтось шукає спеціаліста у вашій ніші. Без сайту — він знайде конкурента.</p>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
