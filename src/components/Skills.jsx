import React from 'react'

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code"],
    },
    {
      title: "Core CS",
      skills: ["DSA", "DBMS", "Operating Systems", "Computer Networks"],
    },
  ];

  return (
    <section
      id="skills"
      className="flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="max-w-6xl w-full">
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cyan-400" />
          <p className="uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-cyan-400" />
        </div>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Technologies I Work With
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="mb-6 text-2xl font-semibold text-white">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <button
                    key={skill}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 hover:bg-cyan-500/20 cursor-pointer"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills