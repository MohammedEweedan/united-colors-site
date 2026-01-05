"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLocale } from "@/providers/locale-provider";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const { dict, t } = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      await emailjs.sendForm(serviceId, templateId, e.currentTarget, {
        publicKey,
      });

      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <header className="section-header">
          <span className="section-kicker">{t("nav.contact")}</span>
          <h2 className="section-title">{dict.contact.title}</h2>
          <p className="section-subtitle">{dict.contact.subtitle}</p>
        </header>

          <div className="card">
            <h3 className="card-title">{t("nav.contact")}</h3>
            <p className="card-body">
              {dict.contact.details.phone}
              <br />
              {dict.contact.details.address}
            </p>
          </div>
      </div>
    </section>
  );
}
