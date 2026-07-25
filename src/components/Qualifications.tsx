import styles from './Qualifications.module.css';

const qualifications = [
  {
    icon: "💻",
    tag: "ПРОГРАМУВАННЯ",
    title: "ПРОГРАМУВАННЯ ДЛЯ НОВАЧКІВ",
    subtitle: "Дія.Освіта - 2025",
    score: 100,
    maxScore: 100,
    text: "Основи алгоритмізації та написання коду. Розуміння базової логіки роботи сучасних застосунків та веб-додатків зсередини.",
    image: "/certs/cert-1.jpg"
  },
  {
    icon: "🛡️",
    tag: "БЕЗПЕКА ДАНИХ",
    title: "ЗАХИСТ ПЕРСОНАЛЬНИХ ДАНИХ",
    subtitle: "Edra - Спеціалізований курс",
    score: 100,
    maxScore: 100,
    text: "Глибоке розуміння принципів обробки та захисту персональних даних відповідно до сучасних стандартів конфіденційності.",
    image: "/certs/cert-2.jpg"
  },
  {
    icon: "🔐",
    tag: "КІБЕРБЕЗПЕКА",
    title: "БАЗОВІ ЗНАННЯ З КІБЕРГІГІЄНИ",
    subtitle: "Дія.Освіта",
    score: 100,
    maxScore: 100,
    text: "Навички безпечної роботи в мережі, захисту облікових записів, розпізнавання фішингу та протидії кіберзагрозам.",
    image: "/certs/cert-3.jpg"
  },
  {
    icon: "📝",
    tag: "ПРИВАТНІСТЬ",
    title: "ПІДГОТОВКА DPO (ЗАХИСТ ДАНИХ)",
    subtitle: "Дія.Освіта",
    score: 100,
    maxScore: 100,
    text: "Кваліфікація уповноваженої особи із захисту персональних даних (Data Protection Officer). Впровадження політик безпеки.",
    image: "/certs/cert-4.jpg"
  },
  {
    icon: "📊",
    tag: "АНАЛІТИКА",
    title: "ОСНОВИ РОБОТИ З ВІДКРИТИМИ ДАНИМИ",
    subtitle: "Дія.Освіта",
    score: 100,
    maxScore: 100,
    text: "Вміння шукати, обробляти та аналізувати відкриті дані (Open Data). Використання державних реєстрів та дата-порталів.",
    image: "/certs/cert-5.jpg"
  },
  {
    icon: "🔄",
    tag: "ЦИФРОВІЗАЦІЯ",
    title: "РЕГІОНАЛЬНА ЦИФРОВА ТРАНСФОРМАЦІЯ",
    subtitle: "Дія.Освіта",
    score: 100,
    maxScore: 100,
    text: "Розуміння процесів діджиталізації на рівні громад та регіонів, впровадження електронних послуг та сучасних цифрових рішень.",
    image: "/certs/cert-6.jpg"
  },
  {
    icon: "🛑",
    tag: "ІНФОБЕЗПЕКА",
    title: "КІБЕРБЕЗПЕКА",
    subtitle: "НАВС",
    score: 100,
    maxScore: 100,
    text: "Комплексний курс від Національної академії внутрішніх справ. Протидія кіберзлочинності та забезпечення інформаційної безпеки.",
    image: "/certs/cert-7.jpg"
  }
];

export default function Qualifications() {
  return (
    <section className={styles.section} id="qualifications">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>КВАЛІФІКАЦІЯ</span>
          <h2 className={styles.title}>
            Я ПОСТІЙНО ВЧУСЯ — <span className={styles.titleHighlight}>ЩОБ ВАШ<br />САЙТ ПРАЦЮВАВ ЗА<br />СУЧАСНИМИ СТАНДАРТАМИ</span>
          </h2>
          <p className={styles.subtitle}>
            7 підтверджених сертифікатів · Програмування · Кібербезпека · Цифровізація
          </p>
        </div>

        <div className={styles.scrollWrapper}>
          <div className={styles.cardsContainer}>
            {qualifications.map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.tag}>
                    <span>{item.icon}</span> {item.tag}
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardSubtitle}>{item.subtitle}</p>
                </div>
                
                <div className={styles.scoreSection}>
                  <div className={styles.scoreText}>Оцінка: {item.score} / {item.maxScore}</div>
                  <div className={styles.scoreBarBg}>
                    <div 
                      className={styles.scoreBarFill} 
                      style={{ width: `${(item.score / item.maxScore) * 100}%` }}
                    />
                  </div>
                </div>

                <p className={styles.cardText}>{item.text}</p>

                <div className={styles.cardImageWrapper}>
                  {item.image ? (
                    <img src={item.image} alt={item.title} className={styles.certImage} />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      Сертифікат {index + 1}
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
