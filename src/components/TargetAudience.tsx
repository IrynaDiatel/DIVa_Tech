"use client";

import React from "react";
import styles from "./TargetAudience.module.css";
import { useLanguage } from "../context/LanguageContext";

const TargetAudience = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.targetSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>{t.targetAudience.kicker}</span>
          <h2 className={`${styles.title} ${styles.highlight}`}>
            {t.targetAudience.title}
          </h2>
        </div>

        <div className={styles.cardsGrid}>
          {/* Card 1 */}
          <div className={`${styles.card} fade-up delay-100`}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNumber}>01</span>
              <h3 className={styles.cardTitle}>
                {t.targetAudience.card1Title}
              </h3>
            </div>
            <p className={styles.cardText}>{t.targetAudience.card1Text}</p>
          </div>

          {/* Card 2 */}
          <div className={`${styles.card} fade-up delay-200`}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>
                {t.targetAudience.card2Title}
              </h3>
            </div>
            <p className={styles.cardText}>{t.targetAudience.card2Text}</p>
          </div>

          {/* Card 3 */}
          <div className={`${styles.card} fade-up delay-300`}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNumber}>03</span>
              <h3 className={styles.cardTitle}>
                {t.targetAudience.card3Title}
              </h3>
            </div>
            <p className={styles.cardText}>{t.targetAudience.card3Text}</p>
          </div>
        </div>

        <div className={styles.footer}>
          <p>{t.targetAudience.footerText}</p>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
