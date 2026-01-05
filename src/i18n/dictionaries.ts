import { ReactNode } from "react";

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

type Metric = {
  value: string;
  label: string;
};

type ServiceCard = {
  title: string;
  description: string;
  bullets: string[];
};

type ApproachStep = {
  title: string;
  body: string;
};

type Pillar = {
  body: ReactNode;
  title: string;
  description: string;
};

type Quote = {
  text: string;
  author: string;
  role: string;
};

type ContactFormCopy = {
  name: string;
  company: string;
  email: string;
  /** We’ll use this label for “Project type” / "نوع المشروع" from JSON */
  phone: string;
  message: string;
  submit: string;
  note: string;
};

type ContactDetailsCopy = {
  phone: string;
  address: string;
};

export type Dictionary = {
  brand: {
    name: string;
    tagline: string;
  };
  nav: {
    home: string;
    services: string;
    materials: string;
    approach: string;
    about: string;
    contact: string;
    theme: string;
    language: {
      label: string;
      en: string;
      ar: string;
    };
  };
  hero: {
    kicker: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: Metric[];
    badges: string[];
  };
  services: {
    title: string;
    subtitle: string;
    cards: ServiceCard[];
  };
  materials: {
    title: string;
    subtitle: string;
    items: string[];
  };
  approach: {
    title: string;
    subtitle: string;
    steps: ApproachStep[];
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    pillars: Pillar[];
    highlights: string[];
    quote: Quote;
  };
  contact: {
    title: string;
    subtitle: string;
    form: ContactFormCopy;
    details: ContactDetailsCopy;
  };
  footer: {
    rights: string;
    address: string;
    cta: string;
  };
};

/* ------------------------------------------------------------------ */
/* ENGLISH – matches your JSON text                                  */
/* ------------------------------------------------------------------ */

const en: Dictionary = {
  brand: {
    name: "United Colors", // brandName
    tagline: "Construction & Materials Importing", // tagline
  },
  nav: {
    home: "Home", // nav.home
    services: "Services", // nav.services
    materials: "Materials", // nav.materials
    approach: "Approach", // not in JSON, reasonable default
    about: "About", // not in JSON, reasonable default
    contact: "Contact", // nav.contact
    theme: "Theme",
    language: {
      label: "Language",
      en: "English", // nav.language.en
      ar: "العربية", // nav.language.ar
    },
  },
  hero: {
    kicker: "Construction & Materials Importing", // same as tagline / kicker
    title: "Building tomorrow with trusted materials today.", // hero.title
    description:
      "United Colors partners with contractors, developers, and suppliers across the region to deliver high-quality construction materials on time and at scale.", // hero.subtitle
    primaryCta: "Our services", // hero.cta.primary
    secondaryCta: "Contact sales", // hero.cta.secondary
    metrics: [
      { value: "180+", label: "Projects delivered" },
      { value: "40+", label: "Partner suppliers" },
      { value: "96%", label: "On-time deliveries" },
    ],
    badges: [
      "Construction supply",
      "Global importing",
      "Logistics & warehousing",
      "Trusted partners",
    ],
  },
  services: {
    title: "What we do", // services.title
    subtitle:
      "Flexible, reliable solutions for every stage of your project.", // services.subtitle
    cards: [
      {
        title: "Construction supply", // services.item.1.title
        description:
          "From cement and steel to finishing materials, we source and coordinate delivery directly to your sites.", // services.item.1.body
        bullets: [],
      },
      {
        title: "Global importing", // services.item.2.title
        description:
          "We work with trusted international manufacturers to bring certified materials into the region.", // services.item.2.body
        bullets: [],
      },
      {
        title: "Logistics & warehousing", // services.item.3.title
        description:
          "Optimized storage and transport so your materials arrive when you actually need them.", // services.item.3.body
        bullets: [],
      },
    ],
  },
  materials: {
    title: "Key materials", // materials.title
    subtitle:
      "Core materials we import and distribute for our partners.", // materials.subtitle
    items: [
      "Structural steel profiles & rebar", // materials.item.1
      "Cement, concrete additives & grouts", // materials.item.2
      "Insulation and waterproofing systems", // materials.item.3
      "Tiles, cladding & architectural finishes", // materials.item.4
      "Doors, windows & aluminum systems", // materials.item.5
    ],
  },
  approach: {
    // JSON doesn’t have this; create a simple, neutral “process” section
    title: "How we work",
    subtitle:
      "A clear process from first conversation to final delivery.",
    steps: [
      {
        title: "Understand your project",
        body: "We start with scope, timelines, and material requirements so we can respond with realistic options.",
      },
      {
        title: "Source & coordinate",
        body: "We match your needs with the right suppliers and logistics routes for dependable delivery.",
      },
      {
        title: "Deliver & support",
        body: "We follow through until materials are on site and teams are fully supported.",
      },
    ],
  },
  about: {
    // Not in JSON; keep short, consistent copy
    title: "About United Colors",
    subtitle:
      "Construction and materials importing trusted across the region.",
    description:
      "United Colors connects project owners, contractors, and suppliers to deliver reliable construction materials where they are needed most.",
    pillars: [
      {
        title: "Integrated supply",
        description:
          "From sourcing to delivery, we manage the full materials journey.",
        body: "From sourcing to delivery, we manage the full materials journey.",
      },
      {
        title: "Trusted partners",
        description:
          "We work with certified manufacturers and logistics providers.",
        body: "We work with certified manufacturers and logistics providers.",
      },
      {
        title: "Regional expertise",
        description:
          "Experience across residential, commercial, and infrastructure projects.",
        body: "Experience across residential, commercial, and infrastructure projects.",
      },
    ],
    highlights: [
      "Reliable deliveries",
      "Regional supplier network",
      "Support across project stages",
    ],
    quote: {
      text:
        "Building better projects starts with delivering the right materials at the right time.",
      author: "United Colors team",
      role: "Construction & Materials Importing",
    },
  },
  contact: {
    title: "Let’s talk about your next project", // contact.title
    subtitle:
      "Share a few details and our team will reach out with tailored material and logistics options.", // contact.subtitle
    form: {
      name: "Name", // contact.form.name
      company: "Company", // contact.form.company
      email: "Work email", // contact.form.email
      phone: "Project type", // using contact.form.projectType label
      message: "How can we help?", // contact.form.message
      submit: "Send message", // contact.form.submit
      note:
        "By submitting, you agree to be contacted by the United Colors team.", // contact.form.note
    },
    details: {
      phone: "+218 91 380 69 99",
      address: "Tripoli, Libya",
    },
  },
  footer: {
    rights: "All rights reserved.", // footer.copyright
    address: "Tripoli, Libya",
    cta: "Schedule a consultation",
  },
};

/* ------------------------------------------------------------------ */
/* ARABIC – matches your Arabic JSON text                             */
/* ------------------------------------------------------------------ */

const ar: Dictionary = {
  brand: {
    name: "الالوان المتحدة", // brandName
    tagline: "شركة إنشاءات واستيراد مواد البناء", // tagline
  },
  nav: {
    home: "الرئيسية", // nav.home
    services: "الخدمات", // nav.services
    materials: "المواد", // nav.materials
    approach: "منهجيتنا", // not in JSON, reasonable default
    about: "من نحن", // not in JSON, reasonable default
    contact: "تواصل معنا", // nav.contact
    theme: "الوضع",
    language: {
      label: "اللغة",
      en: "English", // nav.language.en
      ar: "العربية", // nav.language.ar
    },
  },
  hero: {
    kicker: "شركة إنشاءات واستيراد مواد البناء",
    title: "نبني غدًا أفضل بمواد موثوقة اليوم.", // hero.title
    description:
      "تتعاون الالوان المتحدة مع المقاولين والمطورين والموردين في المنطقة لتوفير مواد بناء عالية الجودة في الوقت المناسب وبالكميات المطلوبة.", // hero.subtitle
    primaryCta: "خدماتنا", // hero.cta.primary
    secondaryCta: "تواصل مع المبيعات", // hero.cta.secondary
    metrics: [
      { value: "180+", label: "مشروع منفذ" },
      { value: "40+", label: "مورد شريك" },
      { value: "96%", label: "تسليم في الموعد" },
    ],
    badges: [
      "توريد مواد البناء",
      "الاستيراد العالمي",
      "الخدمات اللوجستية والتخزين",
      "شراكات طويلة الأمد",
    ],
  },
  services: {
    title: "ماذا نقدم", // services.title
    subtitle:
      "حلول مرنة وموثوقة لكل مرحلة من مراحل مشروعك.", // services.subtitle
    cards: [
      {
        title: "توريد مواد البناء", // services.item.1.title
        description:
          "من الإسمنت والحديد إلى مواد التشطيب، نقوم بالتوريد والتنسيق حتى موقع العمل.", // services.item.1.body
        bullets: [],
      },
      {
        title: "الاستيراد العالمي", // services.item.2.title
        description:
          "نتعامل مع مصانع دولية موثوقة لتوفير مواد معتمدة للأسواق المحلية.", // services.item.2.body
        bullets: [],
      },
      {
        title: "الخدمات اللوجستية والتخزين", // services.item.3.title
        description:
          "تخطيط للنقل والتخزين يضمن وصول المواد في الوقت الذي تحتاجه بالضبط.", // services.item.3.body
        bullets: [],
      },
    ],
  },
  materials: {
    title: "المواد الأساسية", // materials.title
    subtitle:
      "مجموعة من المواد التي نستوردها ونوزعها لشركائنا.", // materials.subtitle
    items: [
      "مقاطع الحديد التسليح والهيكلي", // materials.item.1
      "الإسمنت وإضافات الخرسانة والحقن", // materials.item.2
      "مواد العزل ومنظومات العزل المائي", // materials.item.3
      "البلاط والكسوة ومواد التشطيب المعماري", // materials.item.4
      "الأبواب والنوافذ وأنظمة الألمنيوم", // materials.item.5
    ],
  },
  approach: {
    title: "كيف نعمل",
    subtitle:
      "خطوات واضحة من أول اتصال حتى اكتمال التوريد.",
    steps: [
      {
        title: "فهم المشروع",
        body: "نبدأ من نطاق المشروع والجداول الزمنية ومتطلبات المواد لوضع خيارات واقعية.",
      },
      {
        title: "التوريد والتنسيق",
        body: "نطابق احتياجاتكم مع الموردين المناسبين وخطط النقل المناسبة لضمان الاعتمادية.",
      },
      {
        title: "التسليم والمتابعة",
        body: "نتابع حتى وصول المواد للموقع وتقديم الدعم اللازم للفرق التنفيذية.",
      },
    ],
  },
  about: {
    title: "عن الالوان المتحدة",
    subtitle: "شريك موثوق في الإنشاءات واستيراد مواد البناء.",
    description:
      "تربط الالوان المتحدة بين المالكين والمقاولين والموردين لتوفير مواد بناء موثوقة حيثما تدعو الحاجة.",
    pillars: [
      {
        title: "توريد متكامل",
        description:
          "من اختيار المورد إلى التسليم في الموقع، ندير دورة التوريد بالكامل.",
        body: "من اختيار المورد إلى التسليم في الموقع، ندير دورة التوريد بالكامل.",
      },
      {
        title: "شركاء معتمدون",
        description:
          "نتعاون مع مصانع وموردي لوجستيات موثوقين ومعتمدين.",
        body: "نتعاون مع مصانع وموردي لوجستيات موثوقين ومعتمدين.",
      },
      {
        title: "خبرة ميدانية",
        description:
          "خبرة في المشاريع السكنية والتجارية والبنية التحتية.",
        body: "خبرة في المشاريع السكنية والتجارية والبنية التحتية.",
      },
    ],
    highlights: [
      "توريد موثوق",
      "شبكة موردين إقليمية",
      "دعم متواصل لمراحل المشروع",
    ],
    quote: {
      text:
        "نجاح المشاريع يبدأ من وصول المواد الصحيحة في الوقت الصحيح.",
      author: "فريق الالوان المتحدة",
      role: "شركة إنشاءات واستيراد مواد البناء",
    },
  },
  contact: {
    title: "دعنا نتحدث عن مشروعك القادم", // contact.title
    subtitle:
      "شاركنا بعض التفاصيل، وسيتواصل معك فريقنا باقتراحات للمواد والحلول اللوجستية.", // contact.subtitle
    form: {
      name: "الاسم", // contact.form.name
      company: "الشركة", // contact.form.company
      email: "البريد الإلكتروني", // contact.form.email
      phone: "نوع المشروع", // contact.form.projectType
      message: "كيف يمكننا مساعدتك؟", // contact.form.message
      submit: "إرسال", // contact.form.submit
      note:
        "بإرسال هذا النموذج، فإنك توافق على تواصل فريق الالوان المتحدة معك.", // contact.form.note
    },
    details: {
      phone: "+218 91 380 69 99",
      address: "طرابلس، ليبيا",
    },
  },
  footer: {
    rights: "جميع الحقوق محفوظة.", // footer.copyright
    address: "طرابلس، ليبيا",
    cta: "احجز استشارة",
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  ar,
};

export const defaultLocale: Locale = "en";
