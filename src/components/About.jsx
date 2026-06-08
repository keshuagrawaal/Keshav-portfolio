import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'
import { Zap, Target, Coffee } from 'lucide-react'

const highlights = [
  {
    icon: <Zap size={18} className="text-indigo-500" />,
    label: 'Backend Focused',
    desc: 'Deep expertise in Spring Boot, Hibernate & REST APIs',
  },
  {
    icon: <Target size={18} className="text-indigo-500" />,
    label: 'Full Stack Capable',
    desc: 'Comfortable building end-to-end with React + Java',
  },
  {
    icon: <Coffee size={18} className="text-indigo-500" />,
    label: 'Always Learning',
    desc: 'Driven by curiosity, building real solutions from day one',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 xl:px-32 max-w-6xl mx-auto">
      <FadeIn>
        <SectionHeader
          eyebrow="About Me"
          title="Turning ideas into robust software."
        />
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Bio */}
        <FadeIn delay={0.1}>
          <div className="space-y-4 text-[16px] text-neutral-600 leading-[1.8]">
            <p>
              I'm a <span className="font-semibold text-neutral-900">Computer Engineering graduate</span> with hands-on experience
              in Java Full Stack Development and backend application development.
            </p>
            <p>
              Skilled in <span className="font-semibold text-neutral-900">Java, Spring Boot, Hibernate, MySQL</span> and REST API development,
              with practical exposure through real-world academic projects that solve genuine problems.
            </p>
            <p>
              Passionate about building <span className="font-semibold text-neutral-900">scalable and efficient software solutions</span>, I'm
              actively seeking an entry-level Java Developer or Software Engineer role where I can contribute
              meaningfully from day one.
            </p>
          </div>
        </FadeIn>

        {/* Highlight cards */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col gap-4">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-200"
              >
                <div className="p-2.5 bg-indigo-50 rounded-xl shrink-0">{h.icon}</div>
                <div>
                  <p className="text-[14px] font-semibold text-neutral-900 mb-0.5">{h.label}</p>
                  <p className="text-[13px] text-neutral-500">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
