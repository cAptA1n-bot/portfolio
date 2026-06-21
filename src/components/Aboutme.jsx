"use client";

const Aboutme = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">
        
        <div className="mb-4 flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cyan-400" />
          <p className="uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-cyan-400" />
        </div>

        <h2 className="mb-10 text-4xl font-bold md:text-6xl">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Building Things That Matter
          </span>
        </h2>

        <div
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(59,130,246,0.08)]"
        >
          <p className="text-lg leading-8 text-zinc-300 md:text-xl">
            I&apos;m <span className="font-semibold text-white">Prince Yadav</span>,
            a Computer Science student and passionate Backend Developer who
            enjoys building scalable applications and solving complex problems.
          </p>

          <p className="mt-6 text-lg leading-8 text-zinc-400 md:text-xl">
            My primary focus is on creating robust backend systems using
            <span className="mx-1 text-cyan-400">Node.js</span>,
            <span className="mx-1 text-cyan-400">Express</span>,
            <span className="mx-1 text-cyan-400">MongoDB</span>, and modern
            web technologies.
          </p>

          <p className="mt-6 text-lg leading-8 text-zinc-400 md:text-xl">
            Beyond development, I spend time sharpening my problem-solving
            skills through Data Structures & Algorithms and building
            production-ready projects that focus on performance, scalability,
            and real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;