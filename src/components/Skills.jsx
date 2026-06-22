import React from 'react'
import { ArrowUpRight } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", url: "https://react.dev" },
      { name: "Next.js", url: "https://nextjs.org" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com" },
      { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", url: "https://nodejs.org" },
      { name: "Express.js", url: "https://expressjs.com" },
      { name: "MongoDB", url: "https://mongodb.com" },
      { name: "REST APIs", url: "https://restfulapi.net" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", url: "https://git-scm.com" },
      { name: "GitHub", url: "https://github.com" },
      { name: "Postman", url: "https://postman.com" },
    ],
  },
  {
    title: "Core CS",
    skills: [
      { name: "DSA", url: "https://leetcode.com" },
      { name: "DBMS", url: "https://www.geeksforgeeks.org/dbms/" },
      { name: "Operating Systems", url: "https://www.geeksforgeeks.org/operating-systems/" },
      { name: "Computer Networks", url: "https://www.geeksforgeeks.org/computer-network-tutorials/" },
    ],
  },
];
const Skills = () => {
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
                  <a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:text-cyan-200"
                  >
                    <span>{skill.name}</span>

                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
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