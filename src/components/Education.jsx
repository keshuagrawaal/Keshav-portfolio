import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'
import { GraduationCap } from 'lucide-react'

const education = [
  {
    degree: 'B.E. Computer Engineering',
    period: '2022 – 2025',
    score: 'CGPA: 6.50',
    scoreLabel: 'CGPA',
    level: 'Bachelor\'s Degree',
    highlight: true,
  },
  {
    degree: 'Diploma in Computer Engineering',
    period: '2020 – 2022',
    score: '80.64%',
    scoreLabel: 'Percentage',
    level: 'Diploma',
    highlight: false,
  },
  {
    degree: 'SSC (10th Standard)',
    period: '2019',
    score: '88.60%',
    scoreLabel: 'Percentage',
    level: 'Secondary Education',
    highlight: false,
  },
]

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 xl:px-32 max-w-6xl mx-auto"
    >
      <FadeIn>
        <SectionHeader
          eyebrow="Education"
          title="Academic background."
        />
      </FadeIn>

      <div className="relative max-w-2xl">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-neutral-200 hidden sm:block" />

        <div className="flex flex-col gap-5">
          {education.map((edu, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex gap-6">
                {/* Dot */}
                <div className="relative shrink-0 hidden sm:flex flex-col items-center pt-1">
                  <div
                    className={`w-3 h-3 rounded-full border-2 z-10 mt-1 ${
                      edu.highlight ? 'bg-indigo-500 border-indigo-500' : 'bg-white border-neutral-300'
                    }`}
                  />
                </div>

                {/* Card */}
                <div
                  className={`flex-1 p-6 bg-white rounded-2xl border transition-all duration-200 hover:shadow-md ${
                    edu.highlight
                      ? 'border-indigo-100 shadow-sm ring-1 ring-indigo-50'
                      : 'border-neutral-100 shadow-sm'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[11px] font-bold tracking-widest uppercase text-neutral-400 mb-1 block">
                        {edu.level}
                      </span>
                      <h3 className="text-[16px] font-bold text-neutral-900">{edu.degree}</h3>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[13px] font-medium text-neutral-400">{edu.period}</p>
                      <p
                        className={`text-[15px] font-bold mt-0.5 ${
                          edu.highlight ? 'text-indigo-500' : 'text-neutral-700'
                        }`}
                      >
                        {edu.score}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
