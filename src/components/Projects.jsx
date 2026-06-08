import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'
import { Github, ArrowUpRight } from 'lucide-react'

const GITHUB = 'https://github.com/keshuagrawaal'

const featuredProject = {
  title: 'Online Voting System for College Elections',
  description:
    'A secure web-based platform designed to conduct college elections digitally. The system provides authentication, candidate management, vote management, and administrative controls to ensure a transparent voting process.',
  tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs'],
  github: GITHUB,
  badge: 'Featured Project',
}

const otherProjects = [
  {
    title: 'OneStop Events',
    description:
      'Event planning and management platform for weddings, birthdays, corporate events and social gatherings. Includes booking management, vendor coordination and event scheduling.',
    tech: ['React', 'Spring Boot', 'MySQL'],
    github: GITHUB,
  },
  {
    title: 'SamsTrack',
    description:
      'Student Attendance Management System for educational institutions with attendance tracking, record management and reporting features.',
    tech: ['React', 'Spring Boot', 'Hibernate', 'MySQL'],
    github: GITHUB,
  },
  {
    title: 'Fixed Deposit Management System',
    description:
      'Diploma final year project developed to manage fixed deposit records, customer information and maturity tracking.',
    tech: ['PHP', 'MySQL'],
    github: GITHUB,
  },
]

function TechChip({ label }) {
  return (
    <span className="px-2.5 py-1 text-[12px] font-medium bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-lg">
      {label}
    </span>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 xl:px-32 max-w-6xl mx-auto"
    >
      <FadeIn>
        <SectionHeader
          eyebrow="Projects"
          title="Things I've built."
          description="A selection of academic and personal projects demonstrating my full-stack capabilities."
        />
      </FadeIn>

      {/* Featured Project */}
      <FadeIn delay={0.1}>
        <div className="mb-6 p-8 md:p-10 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full -translate-y-32 translate-x-32 opacity-60 pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-widest uppercase bg-indigo-500 text-white rounded-full mb-5">
              {featuredProject.badge}
            </span>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3 leading-snug">
                  {featuredProject.title}
                </h3>
                <p className="text-[15px] text-neutral-500 leading-relaxed mb-5 max-w-xl">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tech.map((t) => (
                    <TechChip key={t} label={t} />
                  ))}
                </div>
              </div>

              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start shrink-0 inline-flex items-center gap-2 px-4 py-2.5 bg-neutral-900 text-white text-[13px] font-semibold rounded-xl hover:bg-neutral-700 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Github size={14} />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Other Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {otherProjects.map((project, i) => (
          <FadeIn key={project.title} delay={0.1 + i * 0.08}>
            <div className="flex flex-col h-full p-6 bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-200 group">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-[15px] font-bold text-neutral-900 leading-snug pr-4">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                  aria-label="GitHub"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
              <p className="text-[13px] text-neutral-500 leading-relaxed flex-1 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((t) => (
                  <TechChip key={t} label={t} />
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
