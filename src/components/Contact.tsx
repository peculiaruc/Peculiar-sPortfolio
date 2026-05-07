import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      console.error(
        "Missing EmailJS env vars. Add VITE_EMAILJS_* to .env locally or GitHub Actions secrets for production.",
      );
      return;
    }

    setStatus("sending");
    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => setStatus("sent"))
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="container-4xl section-py-20">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="mt-3">
        Get in touch for speaking, consulting or collaboration.
      </p>

      <form ref={form} onSubmit={sendEmail} className="mt-6 grid grid-cols-1 gap-4">
        <input
          name="from_name"
          required
          placeholder="Your name"
          className="p-3 rounded border bg-white dark:bg-gray-800"
        />
        <input
          name="reply_to"
          type="email"
          required
          placeholder="Email"
          className="p-3 rounded border bg-white dark:bg-gray-800"
        />
        <textarea
          name="message"
          required
          placeholder="Message"
          className="p-3 rounded border bg-white dark:bg-gray-800 h-32"
        />
        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="px-5 py-2 bg-orange-500 text-white rounded"
          >
            Send message
          </button>
          {status === "sending" && <span>Sending…</span>}
          {status === "sent" && (
            <span className="text-green-500">Sent — thank you!</span>
          )}
          {status === "error" && (
            <span className="text-red-500">Error sending</span>
          )}
        </div>
      </form>
    </section>
  );
}
