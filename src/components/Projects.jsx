"use client";
import React from 'react'

const projects = [
  {
    title: "Project One",
    description:
      "Replace this with your project description. Explain the problem solved, key features, and technical highlights.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Two",
    description:
      "Replace this with your project description. Explain the architecture and what makes the project interesting.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    tech: ["Next.js", "Express", "Socket.io"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Three",
    description:
      "Replace this with your project description. Mention scalability, performance, or unique features.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    tech: ["MongoDB", "JWT", "Tailwind"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cyan-400" />
          <p className="uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-cyan-400" />
        </div>
          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Things I've Built
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            A collection of projects where I explored full-stack
            development, backend engineering, and scalable systems.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-24 space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-3xl font-bold text-white md:text-5xl">
                  {project.title}
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:scale-105"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:scale-105"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects