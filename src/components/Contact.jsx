"use client";
import React from 'react'

const Contact = () => {
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

        {/* Contact Card */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">
          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Left */}
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
                  href="mailto:yourmail@example.com"
                  className="block rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/40"
                >
                  <p className="text-sm text-cyan-400">Email</p>
                  <p className="text-white">
                    yourmail@example.com
                  </p>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="block rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/40"
                >
                  <p className="text-sm text-cyan-400">
                    LinkedIn
                  </p>
                  <p className="text-white">
                    linkedin.com/in/yourprofile
                  </p>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  className="block rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/40"
                >
                  <p className="text-sm text-cyan-400">
                    GitHub
                  </p>
                  <p className="text-white">
                    github.com/yourusername
                  </p>
                </a>
              </div>
            </div>

            {/* Right */}
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl placeholder:text-zinc-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl placeholder:text-zinc-500"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl placeholder:text-zinc-500"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-[linear-gradient(to_right,#4776E6_0%,#8E54E9_51%,#4776E6_100%)] bg-[length:200%_auto] px-6 py-4 font-semibold text-white transition-all duration-500 hover:bg-[position:right_center] hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact