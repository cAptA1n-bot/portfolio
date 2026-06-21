import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center">
        
        <h3 className="text-xl font-bold text-white">
          Prince Yadav
        </h3>

        <p className="text-zinc-400">
          Backend Developer • Full Stack Developer
        </p>

        <div className="flex gap-6 text-zinc-400">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:yourmail@example.com"
            className="hover:text-cyan-400 transition"
          >
            Email
          </a>
        </div>

        <p className="text-sm text-zinc-500">
          © 2026 Prince Yadav. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
