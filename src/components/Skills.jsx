import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Java', 'SQL', 'JavaScript', 'HTML5', 'CSS3', 'Python (Basics)'],
    color: 'bg-violet-50 text-violet-700 border-violet-100',
  },
  {
    category: 'Frameworks & Technologies',
    skills: ['Spring', 'Spring Boot', 'Hibernate', 'JDBC', 'React'],
    color: 'bg-indigo-50 text-indigo-700 border-indigo-100',
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'MongoDB'],
    color: 'bg-sky-50 text-sky-700 border-sky-100',
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Eclipse', 'Postman'],
    color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 xl:px-32 max-w-6xl mx-auto"
    >
      <FadeIn>
        <SectionHeader
          eyebrow="Technical Skills"
          title="Technologies I work with."
          description="A curated set of tools and technologies I've used building real projects."
        />
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {skillGroups.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.08}>
            <div className="p-6 bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-200 h-full">
              <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-neutral-400 mb-4">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-[13px] font-medium rounded-lg border ${group.color} transition-transform hover:scale-105 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
