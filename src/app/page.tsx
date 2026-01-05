"use client";

import Image from "next/image";
import ContactSection from "@/components/contact-section";
import Navbar from "@/components/site-header";
import { useLocale } from "@/providers/locale-provider";

import img9688 from "../../public/img1.png";
import img9689 from "../../public/img2.png";
import img9690 from "../../public/img3.png";
import img9691 from "../../public/img4.png";
import img9692 from "../../public/img5.png";
import img9693 from "../../public/img6.png";
import img9694 from "../../public/img7.png";
import img9695 from "../../public/img8.png";
import img9696 from "../../public/img9.png";

const projectImages = [
  { src: img9688, alt: "United Colors imported products on site – 1" },
  { src: img9689, alt: "United Colors imported products on site – 2" },
  { src: img9690, alt: "United Colors imported products on site – 3" },
  { src: img9691, alt: "United Colors imported products on site – 4" },
  { src: img9692, alt: "United Colors imported products on site – 5" },
  { src: img9693, alt: "United Colors imported products on site – 6" },
  { src: img9694, alt: "United Colors imported products on site – 7" },
  { src: img9695, alt: "United Colors imported products on site – 8" },
  { src: img9696, alt: "United Colors imported products on site – 9" },
];

// same details as About page footer
const REGISTRATION_NUMBER = "05010202304603";
const PHONE1 = "+218913806999";
const PHONE2 = "+218923806999";

export default function HomePage() {
  const { locale, t, dict } = useLocale();
  const isArabic = locale === "ar";

  return (
    <div className="site-root" dir={isArabic ? "rtl" : "ltr"} id="top">
      <Navbar />

      <main>
        {/* HERO */}
        <section id="home" className="section section--center">
          <div className="container">
            <div>
              <h1 className="hero-title">{t("hero.title")}</h1>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section section--center">
          <div className="container">
            <header className="section-header">
              <span className="section-kicker">{dict.nav.services}</span>
              <h2 className="section-title">{dict.services.title}</h2>
              <p className="section-subtitle">{dict.services.subtitle}</p>
            </header>

            <div className="cards-grid">
              {dict.services.cards.map((card) => (
                <div key={card.title} className="card">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-body">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECT IMAGES / IMPORTED PRODUCTS */}
        <section id="projects" className="section section--center">
          <div className="container">
            <header className="section-header">
              <span className="section-kicker">
                {isArabic
                  ? "مشاريع نستخدم فيها موادنا المستوردة"
                  : "Imported products in use"}
              </span>
            </header>

            <div className="project-gallery">
              {projectImages.map((image, index) => (
                <div
                  key={image.alt}
                  className={`project-card ${
                    index % 2 === 0
                      ? "project-card--left"
                      : "project-card--right"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="project-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <ContactSection />
      </main>

      {/* FOOTER – matches About page */}
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
