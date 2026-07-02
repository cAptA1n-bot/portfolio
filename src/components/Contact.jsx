"use client";
import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { CheckCircle2, AlertCircle, X, Loader2 } from 'lucide-react'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();

    if (!name || !email || !message) {
      setToast({
        show: true,
        message: "Please fill in all fields.",
        type: "error"
      });
      return;
    }

    setIsSubmitting(true);

    const payload = { name, email, message };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setToast({
          show: true,
          message: "Thank you! Your message has been sent successfully.",
          type: "success"
        });
        e.target.reset();
      } else {
        setToast({
          show: true,
          message: data.message || "Failed to send message. Please try again.",
          type: "error"
        });
      }
    } catch (err) {
      console.error(err);
      setToast({
        show: true,
        message: "An unexpected error occurred. Please check your connection.",
        type: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cyan-400" />
            <p className="uppercase tracking-[0.3em] text-cyan-400">
              Contact
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Let's Build Something Together
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            I'm currently looking for internship opportunities,
            collaborating on exciting projects, and connecting
            with other developers.
          </p>
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">
          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <h3 className="text-3xl font-bold text-white">
                Get In Touch
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Whether you have an internship opportunity,
                project idea, or just want to connect,
                feel free to reach out.
              </p>

              <div className="mt-10 space-y-5">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=princeyadav46487@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/40"
                >
                  <p className="text-sm text-cyan-400">Email</p>
                  <p className="text-white">
                    princeyadav46487@gmail.com
                  </p>
                </a>

                <a
                  href="https://www.linkedin.com/in/prince-yadav-99bb5b300"
                  target="_blank"
                  className="block rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/40"
                >
                  <p className="text-sm text-cyan-400">
                    LinkedIn
                  </p>
                  <p className="text-white">
                    linkedin.com/in/prince-yadav-99bb5b300
                  </p>
                </a>

                <a
                  href="https://github.com/cAptA1n-bot"
                  target="_blank"
                  className="block rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/40"
                >
                  <p className="text-sm text-cyan-400">
                    GitHub
                  </p>
                  <p className="text-white">
                    github.com/cAptA1n-bot
                  </p>
                </a>
              </div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl placeholder:text-zinc-500"
              />

              <input
                type="email"
                name='email'
                placeholder="Your Email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl placeholder:text-zinc-500"
              />

              <textarea
                rows={6}
                name='message'
                placeholder="Your Message"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl placeholder:text-zinc-500"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[linear-gradient(to_right,#4776E6_0%,#8E54E9_51%,#4776E6_100%)] bg-[length:200%_auto] px-6 py-4 font-semibold text-white transition-all duration-500 hover:bg-[position:right_center] hover:scale-[1.02] disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Alert */}
      {mounted && toast.show && typeof document !== 'undefined'
        ? createPortal(
            <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-max max-w-[90vw] flex items-center gap-3 rounded-2xl border px-5 py-4 shadow-2xl backdrop-blur-xl transition-all duration-300 animate-in fade-in slide-in-from-top-4 ${
              toast.type === "success"
                ? "border-emerald-500/20 bg-emerald-950/85 text-emerald-200 shadow-emerald-500/10"
                : "border-rose-500/20 bg-rose-950/85 text-rose-200 shadow-rose-500/10"
            }`}>
              {toast.type === "success" ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 text-rose-400 shrink-0" />
              )}
              <span className="text-sm font-medium pr-2">{toast.message}</span>
              <button
                type="button"
                onClick={() => setToast((prev) => ({ ...prev, show: false }))}
                className={`rounded-lg p-1 transition-colors ${
                  toast.type === "success"
                    ? "hover:bg-emerald-900/50 text-emerald-400"
                    : "hover:bg-rose-900/50 text-rose-400"
                }`}
              >
                <X className="h-4 w-4" />
              </button>
            </div>,
            document.body
          )
        : null}
    </section>
  );
}

export default Contact