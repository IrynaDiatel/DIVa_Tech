export const dictionaries = {
  UA: {
    nav: {
      portfolio: "Портфоліо",
      pricing: "Ціни на послуги",
      consultation: "Консультація",
    },
    hero: {
      name: "Ірина Дятел",
      subtitle: "Створюю сучасні сайти та веб-додатки для вашого бізнесу.",
      titleMain: "Професійний сайт — сильний бізнес.",
      titleAccent:
        "Розробляю сучасні сайти та веб-додатки, що працюють на результат вашого бізнесу.",
      discussProject: "Обговорити проект",
      viewWorks: "Переглянути роботи",
    },
    targetAudience: {
      kicker: "КОМУ ЦЕ ПІДХОДИТЬ?",
      title: "ВПІЗНАЄТЕ СЕБЕ?",
      card1Title: "Клієнти приходять тільки за сарафанкою",
      card1Text:
        "І ви не знаєте, чи будуть вони завтра. Сайт забезпечить стабільний потік нових звернень.",
      card2Title: "Сьогодні ведете інстаграм — але нових клієнтів немає",
      card2Text:
        "Але нові люди вас просто не знаходять. Сайт дозволить залучати холодний трафік з пошуку.",
      card3Title: "Хочете підняти чек — але без сайту це складно",
      card3Text:
        "Без сильної онлайн-упаковки складно виглядати як преміум. Сайт змінює те, як вас сприймають.",
      footerText:
        "Прямо зараз хтось шукає спеціаліста у вашій ніші. Без сайту — він знайде конкурента.",
    },
    results: {
      tagline: "Як ми працюємо",
      title: "Результат вашого проекту після запуску",
      card1Title: "Технологична перевага",
      card1Desc:
        "Використання Next.js та React гарантує миттєве завантаження сторінок та відмінний користувацький досвід.",
      card2Title: "Преміальний дизайн",
      card2Desc:
        "Ваш продукт виглядатиме сучасно та дорого, що підвищить довіру ваших клієнтів та дозволить підняти чек.",
      card3Title: "Масштабованість",
      card3Desc:
        "Архітектура додатку розробляється з урахуванням майбутнього росту вашого бізнесу.",
    },
    pricing: {
      kicker: "ПАКЕТИ ПОСЛУГ",
      titleMain: "ОБЕРІТЬ СВІЙ ФОРМАТ — ",
      titleHighlight: "ПОЧНЕМО ВЖЕ НА ЦЬОМУ ТИЖНІ",
      subtitle:
        "Кожен пакет включає тексти, дизайн та запуск. Від вас — тільки відповіді на мої запитання.",
      chooseBtn: "Вибрати",
      hitBadge: "ХІТ",
      sections: {
        metricsLabel: "+ МЕТРИКИ",
        metricsSub: "Професійні інструменти для оцінки ефективності",
        seoLabel: "SEO-ОПТИМІЗАЦІЯ",
        seoSub: "Сайт починає показуватися по органічному пошуку Google",
      },
      plans: {
        start: {
          name: "START",
          target: "Ідеально для запуску і тестування ніші",
          days: "до 3 днів",
          revisions: "Правки до 3 шт",
          revisionsDesc: "Безкоштовно протягом тижня",
          features: [
            {
              title: "Лендінг-знайомство",
              desc: "Стильна візитка, яка представляє вашу експертність",
            },
            {
              title: "Унікальний дизайн",
              desc: "Розробляю візуальну концепцію індивідуально, верстаю вручну, без конструкторів",
            },
            {
              title: "Продаючі тексти",
              desc: "Якісний копірайтинг, що розкриває ваші переваги",
            },
            {
              title: "Блоки довіри",
              desc: "Про себе, Послуги, Відгуки, Контакти — повна структура для перших продажів",
            },
            {
              title: "Кнопки зв'язку і запису",
              desc: "Клієнт може записатися в один клік через Telegram",
            },
            {
              title: "Мобільна адаптація",
              desc: "Сайт ідеально виглядає на смартфонах (80% трафіку)",
            },
          ],
          seo: [
            { title: "Базова архітектура", desc: "Sitemap.xml, robots.txt" },
            { title: "Оптимізація сторінок", desc: "H1-H3, meta теги" },
            { title: "Технічне SEO", desc: "Базове" },
            {
              title: "Ключові слова (1-2)",
              desc: "Google почне рекомендувати вас по імені або професії",
            },
          ],
        },
        pro: {
          name: "PRO",
          target: "Для тих, хто готовий отримувати органічний трафік",
          days: "до 5 днів",
          revisions: "Правки до 5 шт",
          revisionsDesc: "Безкоштовно протягом тижня",
          features: [{ title: "Все з пакету START", desc: "" }],
          metrics: [
            {
              title: "Cookie Consent Banner",
              desc: "GDPR — вимоги законів ЄС",
            },
            { title: "Google Analytics 4", desc: "Повне налаштування" },
            { title: "Meta Pixel", desc: "Для відстеження конверсій" },
          ],
          seo: [
            { title: "Базова архітектура", desc: "Sitemap.xml, robots.txt" },
            { title: "Оптимізація сторінок", desc: "H1-H3, meta теги" },
            {
              title: "Структуровані дані",
              desc: "Повноцінна оптимізація на сторінці",
            },
            { title: "Технічне SEO", desc: "Розширене" },
            {
              title: "Ключові слова (5-8)",
              desc: "Більше шансів на органічний трафік",
            },
          ],
        },
        premium: {
          name: "PREMIUM",
          target: "Максимальний результат та повна автоматизація",
          days: "до 7 днів",
          revisions: "Правки до 10 шт",
          revisionsDesc: "Безкоштовно протягом тижня",
          features: [{ title: "Все з пакету PRO", desc: "" }],
          aiBlock: {
            title: "✨ AI Engine Optimization",
            desc: "Schema Markup + структура контенту для AI-пошуковиків (ChatGPT, Perplexity, Google AI Overview)",
          },
          extraFeatures: [
            {
              title: "Core Web Vitals",
              desc: "Глибока перевірка та оптимізація швидкості",
            },
            { title: "API інтеграції", desc: "Підключення сторонніх сервісів" },
            {
              title: "Онлайн запис",
              desc: "Повноцінний інтерактивний календар",
            },
            {
              title: "Платіжні системи",
              desc: "Підключення Stripe або WayForPay",
            },
          ],
          metrics: [
            {
              title: "Cookie Consent Banner",
              desc: "GDPR — вимоги законів ЄС",
            },
            { title: "Google Analytics 4", desc: "Повне налаштування" },
            { title: "Meta Pixel", desc: "Для відстеження конверсій" },
          ],
          seo: [
            {
              title: "Schema Markup",
              desc: "Повна розмітка для ИИ-пошуковиків",
            },
            { title: "Технічне SEO", desc: "Максимальне, ідеальні Web Vitals" },
            { title: "Ключові фрази (10+)", desc: "Повний охват вашої ніші" },
          ],
        },
      },
    },
    qualifications: {
      kicker: "КВАЛІФІКАЦІЯ",
      titleMain: "Я ПОСТІЙНО ВЧУСЬ — ",
      titleHighlight:
        "ЩОБ ВАШ<br />САЙТ ПРАЦЮВАВ ЗА<br />СУЧАСНИМИ СТАНДАРТАМИ",
      subtitle:
        "7 підтверджених сертифікатів · Програмування · Кібербезпека · Цифровізація",
      scoreText: "Оцінка",
      placeholder: "Сертифікат",
      items: [
        {
          tag: "ПРОГРАМУВАННЯ",
          title: "ПРОГРАМУВАННЯ ДЛЯ НОВАЧКІВ",
          subtitle: "Дія.Освіта - 2025",
          text: "Основи алгоритмізації та написання коду. Розуміння базової логіки роботи сучасних застосунків та веб-додатків зсередини.",
        },
        {
          tag: "БЕЗПЕКА ДАНИХ",
          title: "ЗАХИСТ ПЕРСОНАЛЬНИХ ДАНИХ",
          subtitle: "Edra - Спеціалізований курс",
          text: "Глибоке розуміння принципів обробки та захисту персональних даних відповідно до сучасних стандартів конфіденційності.",
        },
        {
          tag: "КІБЕРБЕЗПЕКА",
          title: "БАЗОВІ ЗНАННЯ З КІБЕРГІГІЄНИ",
          subtitle: "Дія.Освіта",
          text: "Навички безпечної роботи в мережі, захисту облікових записів, розпізнавання фішингу та протидії кіберзагрозам.",
        },
        {
          tag: "ПРИВАТНІСТЬ",
          title: "ПІДГОТОВКА DPO (ЗАХИСТ ДАНИХ)",
          subtitle: "Дія.Освіта",
          text: "Кваліфікація уповноваженої особи із захисту персональних даних (Data Protection Officer). Впровадження політик безпеки.",
        },
        {
          tag: "АНАЛІТИКА",
          title: "ОСНОВЫ РОБОТИ З ВІДКРИТИМИ ДАНИМИ",
          subtitle: "Дія.Освіта",
          text: "Вміння шукати, обробляти та аналізувати відкриті дані (Open Data). Використання державних реєстрів та дата-порталів.",
        },
        {
          tag: "ЦИФРОВІЗАЦІЯ",
          title: "РЕГІОНАЛЬНА ЦИФРОВА ТРАНСФОРМАЦІЯ",
          subtitle: "Дія.Освіта",
          text: "Розуміння процесів діджиталізації на рівні громад та регіонів, впровадження електронних послуг та сучасних цифрових рішень.",
        },
        {
          tag: "ІНФОБЕЗПЕКА",
          title: "КІБЕРБЕЗПЕКА",
          subtitle: "НАВС",
          text: "Комплексний курс від Національної академії внутрішніх справ. Протидія кіберзлочинності та забезпечення інформаційної безпеки.",
        },
      ],
    },
    portfolio: {
      label: "РЕАЛЬНІ ПРОЕКТИ",
      title: "Живі проекти",
      subtitle: "Натисніть, щоб переглянути кожен сайт",
      screenshot: "Скріншот проекту",
      project1Title: "Керування бізнесом",
      project1Desc:
        "Повноцінна SaaS платформа для оптимізації внутрішніх процесів компанії.",
      project2Title: "Преміум магазин",
      project2Desc:
        "Швидкий та зручний інтернет-магазин з інтеграцією платіжних систем.",
    },
    footer: {
      rights: "© 2024 DIVa Tech. All rights reserved.",
    },
  },
  EN: {
    nav: {
      portfolio: "Portfolio",
      pricing: "Pricing",
      consultation: "Consultation",
    },
    hero: {
      name: "Iryna Diatel",
      subtitle: "Creating modern websites and web apps for your business.",
      titleMain: "A professional website means a strong business.",
      titleAccent:
        "I develop modern websites and web applications that work for your business results.",
      discussProject: "Discuss project",
      viewWorks: "View works",
    },
    targetAudience: {
      kicker: "WHO IS THIS FOR?",
      title: "RECOGNIZE YOURSELF?",
      card1Title: "Clients come only by word of mouth",
      card1Text:
        "And you don't know if they will be there tomorrow. A website will provide a stable stream of new inquiries.",
      card2Title: "You run Instagram today — but there are no new clients",
      card2Text:
        "But new people simply don't find you. A website will allow you to attract cold traffic from search engines.",
      card3Title:
        "You want to raise your prices — but it's hard without a website",
      card3Text:
        "Without strong online packaging, it's hard to look premium. A website changes how you are perceived.",
      footerText:
        "Right now someone is looking for a specialist in your niche. Without a website — they will find a competitor.",
    },
    results: {
      tagline: "How we work",
      title: "The result of your project after launch",
      card1Title: "Technological advantage",
      card1Desc:
        "Using Next.js and React guarantees instant page loading and excellent user experience.",
      card2Title: "Premium design",
      card2Desc:
        "Your product will look modern and expensive, which will increase your clients' trust and allow you to raise your check.",
      card3Title: "Scalability",
      card3Desc:
        "The application architecture is developed taking into account the future growth of your business.",
    },
    pricing: {
      kicker: "SERVICE PACKAGES",
      titleMain: "CHOOSE YOUR FORMAT — ",
      titleHighlight: "LET'S START THIS WEEK",
      subtitle:
        "Each package includes texts, design and launch. From you — only answers to my questions.",
      chooseBtn: "Choose",
      hitBadge: "HIT",
      sections: {
        metricsLabel: "+ METRICS",
        metricsSub: "Professional tools for evaluating effectiveness",
        seoLabel: "SEO OPTIMIZATION",
        seoSub: "The site starts showing up in Google organic search",
      },
      plans: {
        start: {
          name: "START",
          target: "Ideal for launching and testing a niche",
          days: "up to 3 days",
          revisions: "Up to 3 revisions",
          revisionsDesc: "Free for a week",
          features: [
            {
              title: "Intro Landing Page",
              desc: "A stylish business card that presents your expertise",
            },
            {
              title: "Unique design",
              desc: "I develop the visual concept individually, layout manually, no builders",
            },
            {
              title: "Selling texts",
              desc: "High-quality copywriting that reveals your advantages",
            },
            {
              title: "Trust blocks",
              desc: "About me, Services, Reviews, Contacts — full structure for first sales",
            },
            {
              title: "Contact and booking buttons",
              desc: "Client can book in one click via Telegram",
            },
            {
              title: "Mobile adaptation",
              desc: "The site looks perfect on smartphones (80% of traffic)",
            },
          ],
          seo: [
            { title: "Basic architecture", desc: "Sitemap.xml, robots.txt" },
            { title: "Page optimization", desc: "H1-H3, meta tags" },
            { title: "Technical SEO", desc: "Basic" },
            {
              title: "Keywords (1-2)",
              desc: "Google will start recommending you by name or profession",
            },
          ],
        },
        pro: {
          name: "PRO",
          target: "For those ready to get organic traffic",
          days: "up to 5 days",
          revisions: "Up to 5 revisions",
          revisionsDesc: "Free for a week",
          features: [{ title: "Everything from START package", desc: "" }],
          metrics: [
            {
              title: "Cookie Consent Banner",
              desc: "GDPR — EU law requirements",
            },
            { title: "Google Analytics 4", desc: "Full setup" },
            { title: "Meta Pixel", desc: "For tracking conversions" },
          ],
          seo: [
            { title: "Basic architecture", desc: "Sitemap.xml, robots.txt" },
            { title: "Page optimization", desc: "H1-H3, meta tags" },
            { title: "Structured data", desc: "Full on-page optimization" },
            { title: "Technical SEO", desc: "Extended" },
            {
              title: "Keywords (5-8)",
              desc: "More chances for organic traffic",
            },
          ],
        },
        premium: {
          name: "PREMIUM",
          target: "Maximum result and full automation",
          days: "up to 7 days",
          revisions: "Up to 10 revisions",
          revisionsDesc: "Free for a week",
          features: [{ title: "Everything from PRO package", desc: "" }],
          aiBlock: {
            title: "✨ AI Engine Optimization",
            desc: "Schema Markup + content structure for AI search engines (ChatGPT, Perplexity, Google AI Overview)",
          },
          extraFeatures: [
            {
              title: "Core Web Vitals",
              desc: "Deep check and speed optimization",
            },
            {
              title: "API integrations",
              desc: "Connecting third-party services",
            },
            { title: "Online booking", desc: "Full interactive calendar" },
            {
              title: "Payment systems",
              desc: "Connecting Stripe or WayForPay",
            },
          ],
          metrics: [
            {
              title: "Cookie Consent Banner",
              desc: "GDPR — EU law requirements",
            },
            { title: "Google Analytics 4", desc: "Full setup" },
            { title: "Meta Pixel", desc: "For tracking conversions" },
          ],
          seo: [
            {
              title: "Schema Markup",
              desc: "Full markup for AI search engines",
            },
            { title: "Technical SEO", desc: "Maximum, perfect Web Vitals" },
            { title: "Keywords (10+)", desc: "Full coverage of your niche" },
          ],
        },
      },
    },
    qualifications: {
      kicker: "QUALIFICATIONS",
      titleMain: "I CONTINUOUSLY LEARN — ",
      titleHighlight: "SO YOUR<br />WEBSITE MEETS<br />MODERN STANDARDS",
      subtitle:
        "7 verified certificates · Programming · Cybersecurity · Digitalization",
      scoreText: "Score",
      placeholder: "Certificate",
      items: [
        {
          tag: "PROGRAMMING",
          title: "PROGRAMMING FOR BEGINNERS",
          subtitle: "Diia.Osvita - 2025",
          text: "Fundamentals of algorithmization and coding. Understanding the basic logic of modern applications and web apps from the inside.",
        },
        {
          tag: "DATA SECURITY",
          title: "PERSONAL DATA PROTECTION",
          subtitle: "Edra - Specialized course",
          text: "Deep understanding of the principles of processing and protecting personal data according to modern privacy standards.",
        },
        {
          tag: "CYBERSECURITY",
          title: "BASIC CYBER HYGIENE KNOWLEDGE",
          subtitle: "Diia.Osvita",
          text: "Skills in safe networking, account protection, phishing recognition and countering cyber threats.",
        },
        {
          tag: "PRIVACY",
          title: "DPO PREPARATION (DATA PROTECTION)",
          subtitle: "Diia.Osvita",
          text: "Qualification of Data Protection Officer. Implementation of security policies.",
        },
        {
          tag: "ANALYTICS",
          title: "BASICS OF WORKING WITH OPEN DATA",
          subtitle: "Diia.Osvita",
          text: "Ability to search, process and analyze Open Data. Use of state registers and data portals.",
        },
        {
          tag: "DIGITALIZATION",
          title: "REGIONAL DIGITAL TRANSFORMATION",
          subtitle: "Diia.Osvita",
          text: "Understanding digitalization processes at the community and regional levels, implementing e-services and modern digital solutions.",
        },
        {
          tag: "INFO SECURITY",
          title: "CYBERSECURITY",
          subtitle: "NAIA",
          text: "Comprehensive course from the National Academy of Internal Affairs. Countering cybercrime and ensuring information security.",
        },
      ],
    },
    portfolio: {
      label: "REAL PROJECTS",
      title: "Live projects",
      subtitle: "Click to view each site",
      screenshot: "Project screenshot",
      project1Title: "Business Management",
      project1Desc:
        "A complete SaaS platform for optimizing internal company processes.",
      project2Title: "Premium Store",
      project2Desc:
        "Fast and convenient online store with payment system integration.",
    },
    footer: {
      rights: "© 2024 DIVa Tech. All rights reserved.",
    },
  },
  RU: {
    nav: {
      portfolio: "Портфолио",
      pricing: "Цены на услуги",
      consultation: "Консультация",
    },
    hero: {
      name: "Ирина Дятел",
      subtitle: "Создаю современные сайты и веб-приложения для вашего бизнеса.",
      titleMain: "Профессиональный сайт — сильный бизнес.",
      titleAccent:
        "Разрабатываю современные сайты и веб-приложения, которые работают на результат вашего бизнеса.",
      discussProject: "Обсудить проект",
      viewWorks: "Посмотреть работы",
    },
    targetAudience: {
      kicker: "КОМУ ЭТО ПОДХОДИТ?",
      title: "УЗНАЕТЕ СЕБЯ?",
      card1Title: "Клиенты приходят только по сарафанке",
      card1Text:
        "И вы не знаете, будут ли они завтра. Сайт обеспечит стабильный поток новых обращений.",
      card2Title: "Сегодня ведете инстаграм — но новых клиентов нет",
      card2Text:
        "Но новые люди вас просто не находят. Сайт позволит привлекать холодный трафик из поиска.",
      card3Title: "Хотите поднять чек — но без сайта это сложно",
      card3Text:
        "Без сильной онлайн-упаковки сложно выглядеть как премиум. Сайт меняет то, как вас воспринимают.",
      footerText:
        "Прямо сейчас кто-то ищет специалиста в вашей нише. Без сайта — он найдет конкурента.",
    },
    results: {
      tagline: "Как мы работаем",
      title: "Результат вашего проекта после запуска",
      card1Title: "Технологическое преимущество",
      card1Desc:
        "Использование Next.js и React гарантирует мгновенную загрузку страниц и отличный пользовательский опыт.",
      card2Title: "Премиальный дизайн",
      card2Desc:
        "Ваш продукт будет выглядеть современно и дорого, что повысит доверие ваших клиентов и позволит поднять чек.",
      card3Title: "Масштабируемость",
      card3Desc:
        "Архитектура приложения разрабатывается с учетом будущего роста вашего бизнеса.",
    },
    pricing: {
      kicker: "ПАКЕТЫ УСЛУГ",
      titleMain: "ВЫБЕРИТЕ СВОЙ ФОРМАТ — ",
      titleHighlight: "НАЧНЕМ УЖЕ НА ЭТОЙ НЕДЕЛЕ",
      subtitle:
        "Каждый пакет включает тексты, дизайн и запуск. От вас — только ответы на мои вопросы.",
      chooseBtn: "Выбрать",
      hitBadge: "ХИТ",
      sections: {
        metricsLabel: "+ МЕТРИКИ",
        metricsSub: "Профессиональные инструменты для оценки эффективности",
        seoLabel: "SEO-ОПТИМИЗАЦИЯ",
        seoSub: "Сайт начинает показываться в органическом поиске Google",
      },
      plans: {
        start: {
          name: "START",
          target: "Идеально для запуска и тестирования ниши",
          days: "до 3 дней",
          revisions: "Правки до 3 шт",
          revisionsDesc: "Бесплатно в течение недели",
          features: [
            {
              title: "Лендинг-знакомство",
              desc: "Стильная визитка, которая представляет вашу экспертность",
            },
            {
              title: "Уникальный дизайн",
              desc: "Разрабатываю визуальную концепцию индивидуально, верстаю вручную, без конструкторов",
            },
            {
              title: "Продающие тексты",
              desc: "Качественный копирайтинг, раскрывающий ваши преимущества",
            },
            {
              title: "Блоки доверия",
              desc: "О себе, Услуги, Отзывы, Контакты — полная структура для первых продаж",
            },
            {
              title: "Кнопки связи и записи",
              desc: "Клиент может записаться в один клик через Telegram",
            },
            {
              title: "Мобильная адаптация",
              desc: "Сайт идеально выглядит на смартфонах (80% трафика)",
            },
          ],
          seo: [
            { title: "Базовая архитектура", desc: "Sitemap.xml, robots.txt" },
            { title: "Оптимизация страниц", desc: "H1-H3, meta теги" },
            { title: "Техническое SEO", desc: "Базовое" },
            {
              title: "Ключевые слова (1-2)",
              desc: "Google начнет рекомендовать вас по имени или профессии",
            },
          ],
        },
        pro: {
          name: "PRO",
          target: "Для тех, кто готов получать органический трафик",
          days: "до 5 дней",
          revisions: "Правки до 5 шт",
          revisionsDesc: "Бесплатно в течение недели",
          features: [{ title: "Все из пакета START", desc: "" }],
          metrics: [
            {
              title: "Cookie Consent Banner",
              desc: "GDPR — требования законов ЕС",
            },
            { title: "Google Analytics 4", desc: "Полная настройка" },
            { title: "Meta Pixel", desc: "Для отслеживания конверсий" },
          ],
          seo: [
            { title: "Базовая архитектура", desc: "Sitemap.xml, robots.txt" },
            { title: "Оптимизация страниц", desc: "H1-H3, meta теги" },
            {
              title: "Структурированные данные",
              desc: "Полноценная оптимизация на странице",
            },
            { title: "Техническое SEO", desc: "Расширенное" },
            {
              title: "Ключевые слова (5-8)",
              desc: "Больше шансов на органический трафик",
            },
          ],
        },
        premium: {
          name: "PREMIUM",
          target: "Максимальный результат и полная автоматизация",
          days: "до 7 дней",
          revisions: "Правки до 10 шт",
          revisionsDesc: "Бесплатно в течение недели",
          features: [{ title: "Все из пакета PRO", desc: "" }],
          aiBlock: {
            title: "✨ AI Engine Optimization",
            desc: "Schema Markup + структура контента для AI-поисковиков (ChatGPT, Perplexity, Google AI Overview)",
          },
          extraFeatures: [
            {
              title: "Core Web Vitals",
              desc: "Глубокая проверка и оптимизация скорости",
            },
            { title: "API интеграции", desc: "Подключение сторонних сервисов" },
            {
              title: "Онлайн запись",
              desc: "Полноценный интерактивный календарь",
            },
            {
              title: "Платежные системы",
              desc: "Подключение Stripe или WayForPay",
            },
          ],
          metrics: [
            {
              title: "Cookie Consent Banner",
              desc: "GDPR — требования законов ЕС",
            },
            { title: "Google Analytics 4", desc: "Полная настройка" },
            { title: "Meta Pixel", desc: "Для отслеживания конверсий" },
          ],
          seo: [
            {
              title: "Schema Markup",
              desc: "Полная разметка для ИИ-поисковиков",
            },
            {
              title: "Техническое SEO",
              desc: "Максимальное, идеальные Web Vitals",
            },
            { title: "Ключевые фразы (10+)", desc: "Полный охват вашей ниши" },
          ],
        },
      },
    },
    qualifications: {
      kicker: "КВАЛИФИКАЦИЯ",
      titleMain: "Я ПОСТОЯННО УЧУСЬ — ",
      titleHighlight:
        "ЧТОБЫ ВАШ<br />САЙТ РАБОТАЛ ПО<br />СОВРЕМЕННЫМ СТАНДАРТАМ",
      subtitle:
        "7 подтвержденных сертификатов · Программирование · Кибербезопасность · Цифровизация",
      scoreText: "Оценка",
      placeholder: "Сертификат",
      items: [
        {
          tag: "ПРОГРАММИРОВАНИЕ",
          title: "ПРОГРАММИРОВАНИЕ ДЛЯ НОВИЧКОВ",
          subtitle: "Дия.Освита - 2025",
          text: "Основы алгоритмизации и написания кода. Понимание базовой логики работы современных приложений и веб-приложений изнутри.",
        },
        {
          tag: "БЕЗОПАСНОСТЬ ДАННЫХ",
          title: "ЗАЩИТА ПЕРСОНАЛЬНЫХ ДАННЫХ",
          subtitle: "Edra - Специализированный курс",
          text: "Глубокое понимание принципов обработки и защиты персональных данных в соответствии с современными стандартами конфиденциальности.",
        },
        {
          tag: "КИБЕРБЕЗОПАСНОСТЬ",
          title: "БАЗОВЫЕ ЗНАНИЯ ПО КИБЕРГИГИЕНЕ",
          subtitle: "Дия.Освита",
          text: "Навыки безопасной работы в сети, защиты учетных записей, распознавания фишинга и противодействия киберугрозам.",
        },
        {
          tag: "ПРИВАТНОСТЬ",
          title: "ПОДГОТОВКА DPO (ЗАЩИТА ДАННЫХ)",
          subtitle: "Дия.Освита",
          text: "Квалификация уполномоченного лица по защите персональных данных (Data Protection Officer). Внедрение политик безопасности.",
        },
        {
          tag: "АНАЛИТИКА",
          title: "ОСНОВЫ РАБОТЫ С ОТКРЫТЫМИ ДАННЫМИ",
          subtitle: "Дия.Освита",
          text: "Умение искать, обрабатывать и анализировать открытые данные (Open Data). Использование государственных реестров и дата-порталов.",
        },
        {
          tag: "ЦИФРОВИЗАЦИЯ",
          title: "РЕГИОНАЛЬНАЯ ЦИФРОВАЯ ТРАНСФОРМАЦИЯ",
          subtitle: "Дия.Освита",
          text: "Понимание процессов диджитализации на уровне общин и регионов, внедрение электронных услуг и современных цифровых решений.",
        },
        {
          tag: "ИНФОБЕЗОПАСНОСТЬ",
          title: "КИБЕРБЕЗОПАСНОСТЬ",
          subtitle: "НАВД",
          text: "Комплексный курс от Национальной академии внутренних дел. Противодействие киберпреступности и обеспечение информационной безопасности.",
        },
      ],
    },
    portfolio: {
      label: "РЕАЛЬНЫЕ ПРОЕКТЫ",
      title: "Живые проекты",
      subtitle: "Нажмите, чтобы просмотреть каждый сайт",
      screenshot: "Скриншот проекта",
      project1Title: "Управление бизнесом",
      project1Desc:
        "Полноценная SaaS платформа для оптимизации внутренних процессов компании.",
      project2Title: "Премиум магазин",
      project2Desc:
        "Быстрый и удобный интернет-магазин с интеграцией платежных систем.",
    },
    footer: {
      rights: "© 2024 DIVa Tech. All rights reserved.",
    },
  },
};

export type Language = keyof typeof dictionaries;
