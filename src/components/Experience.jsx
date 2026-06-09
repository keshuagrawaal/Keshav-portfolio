import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    role: 'Web Development Intern',
    company: 'A2Z IT Hub',
    location: 'Ahilyanagar',
    description:
      'Successfully completed a 45-day Web Development Internship Program. Worked on responsive web applications and gained practical experience in frontend and backend development.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
  },
  {
    role: 'PHP Project Trainee Intern',
    company: 'RB Tech Services',
    location: 'Ahilyanagar',
    description:
      'Completed internship as a Project Trainee on PHP platform. Successfully developed and delivered a live project within the internship timeline while working with databases and web technologies.',
    skills: ['PHP', 'MySQL', 'Web Development', 'Project Development'],
  },
]
export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 xl:px-32 max-w-6xl mx-auto"
    >
      <FadeIn>
        <SectionHeader
  eyebrow="Internships"
  title="Internships & Training."
/>
      </FadeIn>

      <div className="flex flex-col gap-5 max-w-3xl">
        {experiences.map((exp, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="flex gap-5 p-6 bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-200">
              <div className="shrink-0 w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
                <Briefcase size={18} className="text-indigo-500" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1.5 gap-1">
                  <h3 className="text-[16px] font-bold text-neutral-900">{exp.role}</h3>
                  <span className="text-[12px] font-medium text-neutral-400">{exp.location}</span>
                </div>
                <p className="text-[14px] font-semibold text-indigo-500 mb-2">{exp.company}</p>
                <p className="text-[14px] text-neutral-500 leading-relaxed mb-3">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 text-[12px] font-medium bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-lg"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
