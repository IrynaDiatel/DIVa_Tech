"use client";

import styles from "./Qualifications.module.css";
import { useLanguage } from "../context/LanguageContext";

export default function Qualifications() {
  const { t } = useLanguage();

  const qualifications = [
    {
      icon: "💻",
      score: 100,
      maxScore: 100,
      image: "/certs/cert-1.jpg",
      ...t.qualifications.items[0],
    },
    {
      icon: "🛡️",
      score: 100,
      maxScore: 100,
      image: "/certs/cert-2.jpg",
      ...t.qualifications.items[1],
    },
    {
      icon: "🔐",
      score: 100,
      maxScore: 100,
      image: "/certs/cert-3.jpg",
      ...t.qualifications.items[2],
    },
    {
      icon: "📝",
      score: 100,
      maxScore: 100,
      image: "/certs/cert-4.jpg",
      ...t.qualifications.items[3],
    },
    {
      icon: "📊",
      score: 100,
      maxScore: 100,
      image: "/certs/cert-5.jpg",
      ...t.qualifications.items[4],
    },
    {
      icon: "🔄",
      score: 100,
      maxScore: 100,
      image: "/certs/cert-6.jpg",
      ...t.qualifications.items[5],
    },
    {
      icon: "🛑",
      score: 100,
      maxScore: 100,
      image: "/certs/cert-7.jpg",
      ...t.qualifications.items[6],
    },
  ];

  return (
    <section className={styles.section} id="qualifications">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>{t.qualifications.kicker}</span>
          <h2 className={styles.title}>
            {t.qualifications.titleMain}{" "}
            <span
              className={styles.titleHighlight}
              dangerouslySetInnerHTML={{
                __html: t.qualifications.titleHighlight,
              }}
            />
          </h2>
          <p className={styles.subtitle}>{t.qualifications.subtitle}</p>
        </div>

        <div className={styles.scrollWrapper}>
          <div className={styles.cardsContainer}>
            {qualifications.map((item, index) => (
              <div
                key={index}
                className={`${styles.card} fade-up delay-${((index % 4) + 1) * 100}`}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.tag}>
                    <span>{item.icon}</span> {item.tag}
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardSubtitle}>{item.subtitle}</p>
                </div>

                <div className={styles.scoreSection}>
                  <div className={styles.scoreText}>
                    {t.qualifications.scoreText}: {item.score} / {item.maxScore}
                  </div>
                  <div className={styles.scoreBarBg}>
                    <div
                      className={styles.scoreBarFill}
                      style={{
                        width: `${(item.score / item.maxScore) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <p className={styles.cardText}>{item.text}</p>

                <div className={styles.cardImageWrapper}>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.certImage}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      {t.qualifications.placeholder} {index + 1}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
