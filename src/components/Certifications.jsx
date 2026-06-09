import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'
import { Award } from 'lucide-react'

const certifications = [
  {
    title: 'Java Programming Fundamentals',
    issuer: 'Infosys Springboard',
    type: 'Certification',
    certificate: '/certificates/Infosys_java_Certificate.pdf',
  },
  {
    title: 'Java Full Stack Development',
    issuer: 'The Kiran Academy, Pune',
    type: '6 Months Program',
    certificate: '/certificates/Kiran_Academhy_Certificate.pdf',
  },
]

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 xl:px-32 max-w-6xl mx-auto"
    >
      <FadeIn>
        <SectionHeader
          eyebrow="Certifications"
          title="Credentials & training."
        />
      </FadeIn>

      <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
        {certifications.map((cert, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-200">
              <div className="shrink-0 w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                <Award size={18} className="text-amber-500" />
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-neutral-400 mb-1 block">
                  {cert.type}
                </span>
                <h3 className="text-[15px] font-bold text-neutral-900 mb-0.5">{cert.title}</h3>
                <p className="text-[13px] text-neutral-500">{cert.issuer}</p>
                <a
  href={cert.certificate}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-3 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
>
  View Certificate →
</a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
