import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from 'lucide-react'

const contacts = [
  {
    icon: <Mail size={20} className="text-indigo-500" />,
    label: 'Email',
    value: 'keshavagrawal@email.com',
    href: 'mailto:keshavagrawal@email.com',
    bg: 'bg-indigo-50',
  },
  {
    icon: <Phone size={20} className="text-emerald-500" />,
    label: 'Phone',
    value: '+91 XXXXX XXXXX',
    href: 'tel:+91XXXXXXXXXX',
    bg: 'bg-emerald-50',
  },
  {
    icon: <Github size={20} className="text-neutral-700" />,
    label: 'GitHub',
    value: 'github.com/keshuagrawaal',
    href: 'https://github.com/keshuagrawaal',
    bg: 'bg-neutral-100',
    external: true,
  },
  {
    icon: <Linkedin size={20} className="text-sky-500" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/keshavagrawal',
    href: 'https://linkedin.com',
    bg: 'bg-sky-50',
    external: true,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 xl:px-32 max-w-6xl mx-auto"
    >
      <FadeIn>
        <SectionHeader
          eyebrow="Contact"
          title="Let's work together."
          description="I'm actively looking for entry-level Java Developer or Software Engineer roles. Let's connect."
        />
      </FadeIn>

      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
        {contacts.map((c, i) => (
          <FadeIn key={c.label} delay={i * 0.08}>
            <a
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-200 group"
            >
              <div className={`w-11 h-11 ${c.bg} rounded-xl flex items-center justify-center shrink-0`}>
                {c.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold tracking-widest uppercase text-neutral-400 mb-0.5">
                  {c.label}
                </p>
                <p className="text-[14px] font-semibold text-neutral-800 truncate">{c.value}</p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-neutral-300 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
              />
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
