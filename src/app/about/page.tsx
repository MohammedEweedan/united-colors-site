"use client";

import Image from "next/image";
import Navbar from "@/components/site-header";
import { useLocale } from "@/providers/locale-provider";

// reuse some project images (adjust paths if needed)
import imgHero from "../../../public/img4.png";
import imgProject1 from "../../../public/img1.png";
import imgProject2 from "../../../public/img7.png";
import imgProject3 from "../../../public/img8.png";

const REGISTRATION_NUMBER = "05010202304603";
const PHONE1 = "+218913806999";
const PHONE2 = "+218923806999";

const timelineEn = [
  { year: "2010", label: "United Colors established in Tripoli." },
  {
    year: "2015",
    label: "Expanded import channels for key construction materials.",
  },
  {
    year: "2020",
    label:
      "Supported large residential and infrastructure projects across Libya.",
  },
  {
    year: "2023",
    label: "Strengthened logistics network and supplier partnerships.",
  },
];

const timelineAr = [
  { year: "2010", label: "تأسست شركة الألوان المتحدة في طرابلس." },
  { year: "2015", label: "توسيع قنوات الاستيراد للمواد الإنشائية الأساسية." },
  { year: "2020", label: "دعم مشاريع سكنية وبنى تحتية كبرى في ليبيا." },
  { year: "2023", label: "تعزيز شبكة اللوجستيات وشراكات الموردين." },
];

export default function AboutPage() {
  const { locale, dict } = useLocale();
  const isArabic = locale === "ar";
  const timeline = isArabic ? timelineAr : timelineEn;

  const whatsappLink1 = "https://wa.me/218913806999";
  const whatsappLink2 = "https://wa.me/218923806999";

  return (
    <div className="site-root" dir={isArabic ? "rtl" : "ltr"}>
      <Navbar />

      <main className="section section--center">
        <div className="container">
          {/* HERO BANNER */}
          <section className="about-hero">
            <div className="about-hero-image-wrap">
              <Image
                src={imgHero}
                alt={
                  isArabic
                    ? "مواد ومشاريع الألوان المتحدة"
                    : "United Colors imported materials in use"
                }
                fill
                className="about-hero-image"
                priority
              />
              <div className="about-hero-overlay" />
            </div>
            <div className="about-hero-text">
              <span className="section-kicker">{dict.nav.about}</span>
              <h1 className="section-title">{dict.about.title}</h1>
              <p className="section-subtitle">{dict.about.subtitle}</p>
            </div>
          </section>

          {/* STORY + HIGHLIGHTS + QUOTE */}
          <section className="about-layout">
            <div className="about-story">
              <p className="card-body">{dict.about.description}</p>

              <figure className="about-quote">
                <p className="about-quote-text">“{dict.about.quote.text}”</p>
                <figcaption className="about-quote-meta">
                  <span className="about-quote-author">
                    {dict.about.quote.author}
                  </span>
                  <span className="about-quote-role">
                    {dict.about.quote.role}
                  </span>
                </figcaption>
              </figure>
            </div>

            <div className="about-highlights">
              <h2 className="section-title about-highlights-title">
                {isArabic ? "أبرز النقاط" : "Highlights"}
              </h2>
              <ul className="about-highlights-list">
                {dict.about.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* SMALL PROJECT GALLERY */}
          <section className="section">
            <header className="section-header">
              <span className="section-kicker">
                {isArabic
                  ? "موادنا المستوردة في المشاريع"
                  : "Imported products in real projects"}
              </span>
            </header>

            <div className="about-projects-grid">
              {[imgProject1, imgProject2, imgProject3].map((img, idx) => (
                <div
                  key={idx}
                  className={`about-project-card ${
                    idx === 0
                      ? "about-project-card--left"
                      : idx === 2
                      ? "about-project-card--right"
                      : ""
                  }`}
                >
                  <Image
                    src={img}
                    alt={
                      isArabic
                        ? "مشروع من تنفيذ الألوان المتحدة"
                        : "United Colors project photo"
                    }
                    width={500}
                    height={180}
                    className="about-project-image"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* TIMELINE */}
          <section className="section">
            <header className="section-header">
              <span className="section-kicker">
                {isArabic ? "محطات زمنية" : "Timeline"}
              </span>
            </header>

            <div className="about-timeline">
              {timeline.map((item, index) => (
                <div
                  key={item.year + item.label}
                  className={`about-timeline-item ${
                    index % 2 === 0
                      ? "about-timeline-item--left"
                      : "about-timeline-item--right"
                  }`}
                >
                  <div className="about-timeline-year">{item.year}</div>
                  <div className="about-timeline-text">{item.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* PILLARS */}
          <section className="section">
            <header className="section-header">
              <span className="section-kicker">
                {isArabic ? "مرتكزات عملنا" : "What sets us apart"}
              </span>
            </header>

            <div className="cards-grid">
              {dict.about.pillars.map((pillar) => (
                <div className="card" key={pillar.title}>
                  <h3 className="card-title">{pillar.title}</h3>
                  <p className="card-body">{pillar.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT STRIP */}
          <section className="section">
            <h2 className="section-title" style={{ textAlign: "center" }}>
              {isArabic
                ? "تواصل مباشرة مع فريقنا"
                : "Contact our team directly"}
            </h2>

            <div className="about-contact-actions">
              <a href={`tel:${PHONE1}`} className="button-primary">
                📞 {PHONE1}
              </a>
              <a href={`tel:${PHONE2}`} className="button-primary">
                📞 {PHONE2}
              </a>
              <a
                href={whatsappLink1}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                🟢 WhatsApp {PHONE1}
              </a>
              <a
                href={whatsappLink2}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                🟢 WhatsApp {PHONE2}
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER WITH DETAILS */}
      <footer className="footer">
        <div className="container footer-inner footer-inner--stack">
          <span>
            © {new Date().getFullYear()} {dict.brand.name}. {dict.footer.rights}
          </span>
          <span>{dict.footer.address}</span>
          <span>
            {isArabic ? "رقم القيد / التسجيل: " : "Registration No.: "}{" "}
            {REGISTRATION_NUMBER}
          </span>
          <span>
            {PHONE1} · {PHONE2}
          </span>
        </div>
      </footer>
    </div>
  );
}
