"use client";
import React from 'react'

const timeline = [
  {
    year: "2023 - Present",
    title: "B.Tech in Computer Science",
    organization: "AKTU University",
    description:
      "Pursuing Computer Science with a focus on software development, data structures, algorithms, and backend engineering.",
  },
  {
    year: "2025",
    title: "Full Stack Development",
    organization: "Personal Projects",
    description:
      "Built full-stack applications using React, Node.js, Express, MongoDB, authentication systems, and REST APIs.",
  },
  {
    year: "2025",
    title: "Backend Engineering Focus",
    organization: "Self Learning",
    description:
      "Deepened expertise in scalable backend architecture, databases, deployment, and API development.",
  },
  {
    year: "Present",
    title: "Building Production Ready Projects",
    organization: "TaskForge & More",
    description:
      "Developing real-world applications with emphasis on performance, scalability, and user experience.",
  },
];

const Journey = () =>{
  return (
    <section
      id="journey"
      className="min-h-screen px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cyan-400" />
          <p className="uppercase tracking-[0.3em] text-cyan-400">
            Journey
          </p>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-cyan-400" />
        </div>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              My Learning & Growth
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600" />

          <div className="space-y-12">
            {timeline.map((item) => (
              <div
                key={item.title}
                className="relative pl-14"
              >
                <div className="absolute left-0 top-3 h-8 w-8 rounded-full border-4 border-cyan-400 bg-black shadow-[0_0_20px_rgba(34,211,238,0.6)]" />

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                  <p className="text-sm font-semibold text-cyan-400">
                    {item.year}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-zinc-400">
                    {item.organization}
                  </p>

                  <p className="mt-4 leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey