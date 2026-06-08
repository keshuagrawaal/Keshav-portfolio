import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16 px-6 md:px-12 lg:px-24 xl:px-32 max-w-6xl mx-auto"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          opacity: 0.35,
        }}
      />

      <div className="relative z-10 max-w-3xl">
        {/* Status pill */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-[12px] font-medium text-neutral-600 mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.05] mb-4"
        >
          Keshav
          <br />
          Agrawal
          <span className="text-indigo-500">.</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-lg md:text-xl font-medium text-neutral-500 mb-4 tracking-wide uppercase text-sm"
        >
          Java Full Stack Developer
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="text-[17px] md:text-[19px] text-neutral-600 leading-relaxed max-w-lg mb-10"
        >
          Building scalable web applications using{' '}
          <span className="text-neutral-900 font-semibold">Spring Boot</span>,{' '}
          <span className="text-neutral-900 font-semibold">React</span> and{' '}
          <span className="text-neutral-900 font-semibold">MySQL</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="flex flex-wrap gap-3"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-[14px] font-semibold rounded-xl hover:bg-neutral-700 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download size={15} />
            Download Resume
          </a>
          <a
            href="https://github.com/keshuagrawaal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-neutral-200 text-neutral-700 text-[14px] font-semibold rounded-xl hover:border-neutral-400 hover:bg-neutral-50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-neutral-200 text-neutral-700 text-[14px] font-semibold rounded-xl hover:border-neutral-400 hover:bg-neutral-50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-50 border border-indigo-200 text-indigo-600 text-[14px] font-semibold rounded-xl hover:bg-indigo-100 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail size={15} />
            Contact
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-6 md:left-12 lg:left-24 xl:left-32 flex items-center gap-2 text-neutral-400 text-[12px] font-medium"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
        Scroll to explore
      </motion.div>
    </section>
  )
}
