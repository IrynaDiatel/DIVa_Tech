import Image from 'next/image';
import styles from './page.module.css';
import Qualifications from '../components/Qualifications';
import Pricing from '../components/Pricing';
import LanguageSwitcher from '../components/LanguageSwitcher';
import TargetAudience from '../components/TargetAudience';

const Logo = () => (
  <div className={styles.customLogo}>
    <div className={styles.customLogoMain}>
      <span>DIVa</span> <span className={styles.customLogoHighlight}>Tech</span>
    </div>
    <div className={styles.customLogoLine}></div>
    <div className={styles.customLogoSub}>
      WEB & APP DEVELOPMENT
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <div className={styles.auras}>
        <div className={styles.aura1}></div>
        <div className={styles.aura2}></div>
      </div>

      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerContainer}`}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <nav className={styles.nav}>
            <a href="#portfolio" className={styles.navLink}>Портфоліо</a>
            <a href="#pricing" className={styles.navLink}>Ціни на послуги</a>
            <a href="https://t.me/Iryna_Diatel" target="_blank" rel="noopener noreferrer" className={styles.navLink}>Консультація</a>
            <LanguageSwitcher />
          </nav>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={`${styles.container} ${styles.heroContainer} fade-up`}>
            <div className={styles.heroContent}>
              <p className={styles.heroKicker}>
                <span className={styles.heroName}>Ірина Дятел</span> <br/><span className={styles.titleHighlight}>Створюю сучасні сайти та веб-додатки для вашого бізнесу.</span>
              </p>
              <h1 className={styles.heroTitleMain}>
                Професійний сайт — сильний бізнес.
              </h1>
              <h2 className={styles.heroTitleAccent}>
                Розробляю сучасні сайти та веб-додатки, що працюють на результат вашого бізнесу.
              </h2>
              
              <div className={styles.heroActions}>
                <a href="https://t.me/Iryna_Diatel" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                  Обговорити проект
                </a>
                <a href="#portfolio" className={styles.btnOutline}>
                  Переглянути роботи
                </a>
              </div>
            </div>
            
            <div className={styles.heroPortrait}>
              <img src="/hero-portrait.jpg" alt="Iryna Diatel" className={styles.portraitImg} />
            </div>
          </div>
        </section>

        <TargetAudience />

        <section id="results" className={styles.results}>
          <div className={styles.container}>
            <span className={styles.tagline}>Як мы працюємо</span>
            <h2 className={`${styles.sectionTitle} ${styles.titleHighlight}`}>
              Результат вашого проекту після запуску
            </h2>

            <div className={styles.resultsGrid}>
              <div className={`${styles.resultCard} fade-up`}>
                <h4 className={`${styles.resultTitle} ${styles.titleHighlight}`}>Технологічна перевага</h4>
                <p className={styles.resultDesc}>
                  Використання Next.js та React гарантує миттєве завантаження сторінок та відмінний користувацький досвід.
                </p>
              </div>

              <div className={`${styles.resultCard} fade-up`} style={{ transitionDelay: '0.1s' }}>
                <h4 className={`${styles.resultTitle} ${styles.titleHighlight}`}>Преміальний дизайн</h4>
                <p className={styles.resultDesc}>
                  Ваш продукт виглядатиме сучасно та дорого, що підвищить довіру ваших клієнтів та дозволить підняти чек.
                </p>
              </div>

              <div className={`${styles.resultCard} fade-up`} style={{ transitionDelay: '0.2s' }}>
                <h4 className={`${styles.resultTitle} ${styles.titleHighlight}`}>Масштабованість</h4>
                <p className={styles.resultDesc}>
                  Архітектура додатку розробляється з урахуванням майбутнього росту вашого бізнесу.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Pricing />

        <Qualifications />

        <section id="portfolio" className={styles.portfolio}>
          <div className={styles.container}>
            <div className={styles.portfolioHeader}>
              <span className={styles.portfolioLabel}>РЕАЛЬНІ ПРОЕКТИ</span>
              <h2 className={`${styles.portfolioSectionTitle} ${styles.titleHighlight}`}>Живі проекти</h2>
              <p className={styles.portfolioSubtitle}>Натисніть, щоб переглянути кожен сайт</p>
            </div>
            
            <div className={styles.portfolioGrid}>
              <div className={`${styles.portfolioCard} fade-up`}>
                <div className={styles.portfolioImage}>
                  <span>Скріншот проекту</span>
                </div>
                <div className={styles.portfolioInfo}>
                  <span className={styles.portfolioTag}>SaaS Platform</span>
                  <h3 className={styles.portfolioTitle}>Керування бізнесом</h3>
                  <p className={styles.portfolioDesc}>
                    Повноцінна SaaS платформа для оптимізації внутрішніх процесів компанії.
                  </p>
                </div>
              </div>

              <div className={`${styles.portfolioCard} fade-up`} style={{ transitionDelay: '0.1s' }}>
                <div className={styles.portfolioImage}>
                  <span>Скріншот проекту</span>
                </div>
                <div className={styles.portfolioInfo}>
                  <span className={styles.portfolioTag}>E-commerce</span>
                  <h3 className={styles.portfolioTitle}>Преміум магазин</h3>
                  <p className={styles.portfolioDesc}>
                    Швидкий та зручний інтернет-магазин з інтеграцією платіжних систем.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <p>© 2024 DIVa Tech. All rights reserved.</p>
        </div>
        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/iryna-diatel/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
          <a href="https://t.me/Iryna_Diatel" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Telegram</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=iryna.diatel.dev@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>iryna.diatel.dev@gmail.com</a>
        </div>
      </footer>
    </>
  );
}
