"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Qualifications from "../components/Qualifications";
import Pricing from "../components/Pricing";
import LanguageSwitcher from "../components/LanguageSwitcher";
import TargetAudience from "../components/TargetAudience";
import { useLanguage } from "../context/LanguageContext";

const Logo = () => (
  <div className={styles.customLogo}>
    <div className={styles.customLogoMain}>
      <span>DIVa</span> <span className={styles.customLogoHighlight}>Tech</span>
    </div>
    <div className={styles.customLogoLine}></div>
    <div className={styles.customLogoSub}>WEB & APP DEVELOPMENT</div>
  </div>
);

export default function Home() {
  const { t } = useLanguage();

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
            <a href="#portfolio" className={styles.navLink}>
              {t.nav.portfolio}
            </a>
            <a href="#pricing" className={styles.navLink}>
              {t.nav.pricing}
            </a>
            <a
              href="https://t.me/Iryna_Diatel"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              {t.nav.consultation}
            </a>
            <LanguageSwitcher />
          </nav>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div
            className={`${styles.container} ${styles.heroContainer} fade-up`}
          >
            <div className={styles.heroContent}>
              <p className={styles.heroKicker}>
                <span className={styles.heroName}>{t.hero.name}</span> <br />
                <span className={styles.titleHighlight}>{t.hero.subtitle}</span>
              </p>
              <h1 className={styles.heroTitleMain}>{t.hero.titleMain}</h1>
              <h2 className={styles.heroTitleAccent}>{t.hero.titleAccent}</h2>

              <div className={styles.heroActions}>
                <a
                  href="https://t.me/Iryna_Diatel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnPrimary}
                >
                  {t.hero.discussProject}
                </a>
                <a href="#portfolio" className={styles.btnOutline}>
                  {t.hero.viewWorks}
                </a>
              </div>
            </div>

            <div className={styles.heroPortrait}>
              <img
                src="/hero-portrait.jpg"
                alt={t.hero.name}
                className={styles.portraitImg}
              />
            </div>
          </div>
        </section>

        <TargetAudience />

        <section id="results" className={styles.results}>
          <div className={styles.container}>
            <span className={styles.tagline}>{t.results.tagline}</span>
            <h2 className={`${styles.sectionTitle} ${styles.titleHighlight}`}>
              {t.results.title}
            </h2>

            <div className={styles.resultsGrid}>
              <div className={`${styles.resultCard} fade-up`}>
                <h4
                  className={`${styles.resultTitle} ${styles.titleHighlight}`}
                >
                  {t.results.card1Title}
                </h4>
                <p className={styles.resultDesc}>{t.results.card1Desc}</p>
              </div>

              <div
                className={`${styles.resultCard} fade-up`}
                style={{ transitionDelay: "0.1s" }}
              >
                <h4
                  className={`${styles.resultTitle} ${styles.titleHighlight}`}
                >
                  {t.results.card2Title}
                </h4>
                <p className={styles.resultDesc}>{t.results.card2Desc}</p>
              </div>

              <div
                className={`${styles.resultCard} fade-up`}
                style={{ transitionDelay: "0.2s" }}
              >
                <h4
                  className={`${styles.resultTitle} ${styles.titleHighlight}`}
                >
                  {t.results.card3Title}
                </h4>
                <p className={styles.resultDesc}>{t.results.card3Desc}</p>
              </div>
            </div>
          </div>
        </section>

        <Pricing />

        <Qualifications />

        <section id="portfolio" className={styles.portfolio}>
          <div className={styles.container}>
            <div className={styles.portfolioHeader}>
              <span className={styles.portfolioLabel}>{t.portfolio.label}</span>
              <h2
                className={`${styles.portfolioSectionTitle} ${styles.titleHighlight}`}
              >
                {t.portfolio.title}
              </h2>
              <p className={styles.portfolioSubtitle}>{t.portfolio.subtitle}</p>
            </div>

            <div className={styles.portfolioGrid}>
              <div className={`${styles.portfolioCard} fade-up`}>
                <div className={styles.portfolioImage}>
                  <span>{t.portfolio.screenshot}</span>
                </div>
                <div className={styles.portfolioInfo}>
                  <span className={styles.portfolioTag}>SaaS Platform</span>
                  <h3 className={styles.portfolioTitle}>
                    {t.portfolio.project1Title}
                  </h3>
                  <p className={styles.portfolioDesc}>
                    {t.portfolio.project1Desc}
                  </p>
                </div>
              </div>

              <div
                className={`${styles.portfolioCard} fade-up`}
                style={{ transitionDelay: "0.1s" }}
              >
                <div className={styles.portfolioImage}>
                  <span>{t.portfolio.screenshot}</span>
                </div>
                <div className={styles.portfolioInfo}>
                  <span className={styles.portfolioTag}>E-commerce</span>
                  <h3 className={styles.portfolioTitle}>
                    {t.portfolio.project2Title}
                  </h3>
                  <p className={styles.portfolioDesc}>
                    {t.portfolio.project2Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <p>{t.footer.rights}</p>
        </div>
        <div className={styles.socials}>
          <a
            href="https://github.com/IrynaDiatel"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/iryna-diatel/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            LinkedIn
          </a>
          <a
            href="https://t.me/Iryna_Diatel"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Telegram
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=iryna.diatel.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            iryna.diatel.dev@gmail.com
          </a>
        </div>
      </footer>
    </>
  );
}
