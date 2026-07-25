import styles from './Pricing.module.css';

const pricingPlans = [
  {
    name: "START",
    target: "Ідеально для запуску і тестування ніші",
    price: "€399",
    days: "до 3 днів",
    features: [
      {
        title: "Лендінг-знайомство",
        desc: "Стильна візитка, яка представляє вашу експертність"
      },
      {
        title: "Унікальний дизайн",
        desc: "Розробляю візуальну концепцію індивідуально, верстаю вручну, без конструкторів"
      },
      {
        title: "Продаючі тексти",
        desc: "Якісний копірайтинг, що розкриває ваші переваги"
      },
      {
        title: "Блоки довіри",
        desc: "Про себе, Послуги, Відгуки, Контакти — повна структура для перших продажів"
      },
      {
        title: "Кнопки зв'язку і запису",
        desc: "Клієнт може записатися в один клік через Telegram"
      },
      {
        title: "Мобільна адаптація",
        desc: "Сайт ідеально виглядає на смартфонах (80% трафіку)"
      }
    ],
    seo: [
      { title: "Базова архітектура", desc: "Sitemap.xml, robots.txt" },
      { title: "Оптимізація сторінок", desc: "H1-H3, meta теги" },
      { title: "Технічне SEO", desc: "Базове" },
      { title: "Ключові слова (1-2)", desc: "Google почне рекомендувати вас по імені або професії" }
    ],
    revisions: "Правки до 3 шт",
    revisionsDesc: "Безкоштовно протягом тижня",
    isPremium: false,
    hasMetrics: false
  },
  {
    name: "PRO",
    target: "Для тих, хто готовий отримувати органічний трафік",
    price: "€599",
    days: "до 5 днів",
    features: [
      {
        title: "Все з пакету START",
        desc: "",
        isInclude: true
      }
    ],
    metrics: [
      { title: "Cookie Consent Banner", desc: "GDPR — вимоги законів ЄС" },
      { title: "Google Analytics 4", desc: "Повне налаштування" },
      { title: "Meta Pixel", desc: "Для відстеження конверсій" }
    ],
    seo: [
      { title: "Базова архітектура", desc: "Sitemap.xml, robots.txt" },
      { title: "Оптимізація сторінок", desc: "H1-H3, meta теги" },
      { title: "Структуровані дані", desc: "Повноцінна оптимізація на сторінці" },
      { title: "Технічне SEO", desc: "Розширене" },
      { title: "Ключові слова (5-8)", desc: "Більше шансів на органічний трафік" }
    ],
    revisions: "Правки до 5 шт",
    revisionsDesc: "Безкоштовно протягом тижня",
    isPremium: false,
    hasMetrics: true
  },
  {
    name: "PREMIUM",
    target: "Максимальний результат та повна автоматизація",
    price: "€799",
    days: "до 7 днів",
    features: [
      {
        title: "Все з пакету PRO",
        desc: "",
        isInclude: true
      }
    ],
    aiBlock: {
      title: "✨ AI Engine Optimization",
      desc: "Schema Markup + структура контенту для AI-пошуковиків (ChatGPT, Perplexity, Google AI Overview)"
    },
    extraFeatures: [
      { title: "Core Web Vitals", desc: "Глибока перевірка та оптимізація швидкості" },
      { title: "API інтеграції", desc: "Підключення сторонніх сервісів" },
      { title: "Онлайн запис", desc: "Повноцінний інтерактивний календар" },
      { title: "Платіжні системи", desc: "Підключення Stripe або WayForPay" }
    ],
    metrics: [
      { title: "Cookie Consent Banner", desc: "GDPR — вимоги законів ЄС" },
      { title: "Google Analytics 4", desc: "Повне налаштування" },
      { title: "Meta Pixel", desc: "Для відстеження конверсій" }
    ],
    seo: [
      { title: "Schema Markup", desc: "Повна розмітка для ИИ-пошуковиків" },
      { title: "Технічне SEO", desc: "Максимальне, ідеальні Web Vitals" },
      { title: "Ключові фрази (10+)", desc: "Повний охват вашої ніші" }
    ],
    revisions: "Правки до 10 шт",
    revisionsDesc: "Безкоштовно протягом тижня",
    isPremium: true,
    hasMetrics: true
  }
];

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.kicker}>ПАКЕТИ ПОСЛУГ</div>
          <h2 className={styles.title}>
            ОБЕРІТЬ СВІЙ ФОРМАТ — <br /><span className={styles.titleHighlight}>ПОЧНЕМО ВЖЕ НА ЦЬОМУ ТИЖНІ</span>
          </h2>
          <p className={styles.subtitle}>
            Кожен пакет включає тексти, дизайн та запуск. Від вас — тільки відповіді на мої запитання.
          </p>
        </div>

        <div className={styles.grid}>
          {pricingPlans.map((plan, i) => (
            <div key={i} className={`${styles.card} ${plan.isPremium ? styles.premiumCard : ''}`}>
              {plan.isPremium && <div className={styles.hitBadge}>ХІТ</div>}
              
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planTarget}>{plan.target}</p>
              </div>

              <div className={styles.featuresList}>
                {plan.features.map((feat, j) => (
                  <div key={`f-${j}`} className={styles.featureItem}>
                    <div className={styles.checkmark}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className={styles.featureTitle}>{feat.title}</h4>
                      {feat.desc && <p className={styles.featureDesc}>{feat.desc}</p>}
                    </div>
                  </div>
                ))}

                {plan.aiBlock && (
                  <div className={styles.aiBlock}>
                    <h4 className={styles.aiTitle}>{plan.aiBlock.title}</h4>
                    <p className={styles.aiDesc}>{plan.aiBlock.desc}</p>
                  </div>
                )}

                {plan.extraFeatures && plan.extraFeatures.map((feat, j) => (
                  <div key={`ef-${j}`} className={styles.featureItem}>
                    <div className={styles.checkmark}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className={styles.featureTitle}>{feat.title}</h4>
                      {feat.desc && <p className={styles.featureDesc}>{feat.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {plan.hasMetrics && (
                <div className={styles.sectionBlock}>
                  <h4 className={styles.sectionLabel}>+ МЕТРИКИ</h4>
                  <p className={styles.sectionSub}>Професійні інструменти для оцінки ефективності</p>
                  <div className={styles.featuresList}>
                    {plan.metrics?.map((feat, j) => (
                      <div key={`m-${j}`} className={styles.featureItem}>
                        <div className={styles.checkmark}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className={styles.featureTitle}>{feat.title}</h4>
                          <p className={styles.featureDesc}>{feat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className={styles.sectionBlock}>
                <h4 className={styles.sectionLabel}>SEO-ОПТИМІЗАЦІЯ</h4>
                <p className={styles.sectionSub}>Сайт починає показуватися по органічному пошуку Google</p>
                <div className={styles.featuresList}>
                  {plan.seo.map((feat, j) => (
                    <div key={`s-${j}`} className={styles.featureItem}>
                      <div className={styles.checkmark}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className={styles.featureTitle}>{feat.title}</h4>
                        <p className={styles.featureDesc}>{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.revisionsBox}>
                <h4 className={styles.revisionsTitle}>{plan.revisions}</h4>
                <p className={styles.revisionsDesc}>{plan.revisionsDesc}</p>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.daysText}>{plan.days}</div>
                <div className={styles.actionRow}>
                  <button className={styles.chooseBtn}>Вибрати</button>
                  <span className={styles.price}>{plan.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
