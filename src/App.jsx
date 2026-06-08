import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import AdditionalInfo from './components/AdditionalInfo'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#F8F7F4] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="h-px bg-neutral-200" />
        </div>
        <About />
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="h-px bg-neutral-200" />
        </div>
        <Skills />
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="h-px bg-neutral-200" />
        </div>
        <Projects />
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="h-px bg-neutral-200" />
        </div>
        <Experience />
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="h-px bg-neutral-200" />
        </div>
        <Education />
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="h-px bg-neutral-200" />
        </div>
        <Certifications />
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="h-px bg-neutral-200" />
        </div>
        <AdditionalInfo />
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="h-px bg-neutral-200" />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
