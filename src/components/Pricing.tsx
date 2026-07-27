"use client";

import styles from "./Pricing.module.css";
import { useLanguage } from "../context/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();

  const pricingPlans = [
    {
      ...t.pricing.plans.start,
      price: "€399",
      isPremium: false,
      hasMetrics: false,
    },
    {
      ...t.pricing.plans.pro,
      price: "€599",
      isPremium: false,
      hasMetrics: true,
    },
    {
      ...t.pricing.plans.premium,
      price: "€799",
      isPremium: true,
      hasMetrics: true,
    },
  ];

  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.kicker}>{t.pricing.kicker}</div>
          <h2 className={styles.title}>
            {t.pricing.titleMain} <br />
            <span className={styles.titleHighlight}>
              {t.pricing.titleHighlight}
            </span>
          </h2>
          <p className={styles.subtitle}>{t.pricing.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className={`${styles.card} fade-up delay-${((i % 3) + 1) * 100} ${plan.isPremium ? styles.premiumCard : ""}`}
            >
              {plan.isPremium && (
                <div className={styles.hitBadge}>{t.pricing.hitBadge}</div>
              )}

              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planTarget}>{plan.target}</p>
              </div>

              <div className={styles.featuresList}>
                {plan.features.map((feat, j) => (
                  <div key={`f-${j}`} className={styles.featureItem}>
                    <div className={styles.checkmark}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className={styles.featureTitle}>{feat.title}</h4>
                      {feat.desc && (
                        <p className={styles.featureDesc}>{feat.desc}</p>
                      )}
                    </div>
                  </div>
                ))}

                {"aiBlock" in plan && plan.aiBlock && (
                  <div className={styles.aiBlock}>
                    <h4 className={styles.aiTitle}>{plan.aiBlock.title}</h4>
                    <p className={styles.aiDesc}>{plan.aiBlock.desc}</p>
                  </div>
                )}

                {"extraFeatures" in plan &&
                  plan.extraFeatures &&
                  plan.extraFeatures.map((feat, j) => (
                    <div key={`ef-${j}`} className={styles.featureItem}>
                      <div className={styles.checkmark}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className={styles.featureTitle}>{feat.title}</h4>
                        {feat.desc && (
                          <p className={styles.featureDesc}>{feat.desc}</p>
                        )}
                      </div>
                    </div>
                  ))}
              </div>

              {plan.hasMetrics && "metrics" in plan && (
                <div className={styles.sectionBlock}>
                  <h4 className={styles.sectionLabel}>
                    {t.pricing.sections.metricsLabel}
                  </h4>
                  <p className={styles.sectionSub}>
                    {t.pricing.sections.metricsSub}
                  </p>
                  <div className={styles.featuresList}>
                    {plan.metrics?.map((feat, j) => (
                      <div key={`m-${j}`} className={styles.featureItem}>
                        <div className={styles.checkmark}>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                          >
                            <path
                              d="M20 6L9 17l-5-5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
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
                <h4 className={styles.sectionLabel}>
                  {t.pricing.sections.seoLabel}
                </h4>
                <p className={styles.sectionSub}>{t.pricing.sections.seoSub}</p>
                <div className={styles.featuresList}>
                  {plan.seo.map((feat, j) => (
                    <div key={`s-${j}`} className={styles.featureItem}>
                      <div className={styles.checkmark}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
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
                  <button className={styles.chooseBtn}>
                    {t.pricing.chooseBtn}
                  </button>
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
