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

        <div className="contact-grid">
          <div className="contact-panel">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">{dict.contact.form.name}</label>
                <input
                  className="input"
                  type="text"
                  name="from_name"
                  required
                />
              </div>

              <div className="field">
                <label className="label">{dict.contact.form.company}</label>
                <input className="input" type="text" name="company" />
              </div>

              <div className="field">
                <label className="label">{dict.contact.form.email}</label>
                <input
                  className="input"
                  type="email"
                  name="reply_to"
                  required
                />
              </div>

              <div className="field">
                <label className="label">{dict.contact.form.phone}</label>
                <input className="input" type="tel" name="phone" />
              </div>

              <div className="field">
                <label className="label">{dict.contact.form.message}</label>
                <textarea className="textarea" name="message" required />
              </div>

              <button
                type="submit"
                className="button-primary"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : dict.contact.form.submit}
              </button>

              {status === "success" && (
                <p className="form-note" style={{ color: "#22c55e" }}>
                  Message sent successfully.
                </p>
              )}
              {status === "error" && (
                <p className="form-note" style={{ color: "#f97316" }}>
                  {errorMessage}
                </p>
              )}
            </form>
          </div>

          <div className="card">
            <h3 className="card-title">{t("nav.contact")}</h3>
            <p className="card-body">
              {dict.contact.details.phone}
              <br />
              {dict.contact.details.email}
              <br />
              {dict.contact.details.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
