import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'
import { Sparkles, Globe } from 'lucide-react'

const strengths = ['Quick Learner', 'Team Collaboration', 'Problem Solving', 'Professional Accountability']
const languages = ['English', 'Hindi', 'Marathi']

export default function AdditionalInfo() {
  return (
    <section
      id="additional"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 xl:px-32 max-w-6xl mx-auto"
    >
      <FadeIn>
        <SectionHeader
          eyebrow="Additional Info"
          title="Beyond the code."
        />
      </FadeIn>

      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
        {/* Strengths */}
        <FadeIn delay={0.1}>
          <div className="p-6 bg-white rounded-2xl border border-neutral-100 shadow-sm">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-violet-50 rounded-xl flex items-center justify-center">
                <Sparkles size={16} className="text-violet-500" />
              </div>
              <p className="text-[14px] font-bold text-neutral-900">Core Strengths</p>
            </div>
            <div className="flex flex-col gap-2.5">
              {strengths.map((s) => (
                <div key={s} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                  <span className="text-[14px] text-neutral-700 font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Languages */}
        <FadeIn delay={0.15}>
          <div className="p-6 bg-white rounded-2xl border border-neutral-100 shadow-sm">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-sky-50 rounded-xl flex items-center justify-center">
                <Globe size={16} className="text-sky-500" />
              </div>
              <p className="text-[14px] font-bold text-neutral-900">Languages</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {languages.map((l) => (
                <span
                  key={l}
                  className="px-3 py-1.5 text-[13px] font-medium bg-sky-50 border border-sky-100 text-sky-700 rounded-lg"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
