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
            Crafting Scalable Digital Experiences
          </span>
        </h2>

        <div
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(59,130,246,0.08)]"
        >
          <p className="text-lg leading-8 text-zinc-300 md:text-xl">
            I&apos;m <span className="font-semibold text-white">Prince Yadav</span>,
            a Computer Science student and Full Stack Developer passionate about
            transforming ideas into scalable, user-focused digital experiences.
            I enjoy building applications from the ground up—from designing intuitive
            interfaces to architecting robust backend systems.
          </p>

          <p className="mt-6 text-lg leading-8 text-zinc-400 md:text-xl">
            My core expertise lies in backend development using
            <span className="mx-1 text-cyan-400">Node.js</span>,
            <span className="mx-1 text-cyan-400">Express</span>,
            and
            <span className="mx-1 text-cyan-400">MongoDB</span>,
            while leveraging modern frontend technologies like
            <span className="mx-1 text-cyan-400">React</span> and
            <span className="mx-1 text-cyan-400">Next.js</span>
            to create seamless and responsive user experiences.
          </p>

          <p className="mt-6 text-lg leading-8 text-zinc-400 md:text-xl">
            Beyond development, I&apos;m deeply interested in
            problem-solving, system design, and software architecture.
            I regularly practice Data Structures & Algorithms and build
            production-ready projects focused on performance, scalability,
            and solving real-world challenges through technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;