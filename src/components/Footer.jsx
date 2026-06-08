export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-10 px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-neutral-400">
        <p>© 2026 Keshav Agrawal. All rights reserved.</p>
        <p>
          Built with{' '}
          <span className="font-medium text-neutral-500">React + Vite + Tailwind CSS</span>
        </p>
      </div>
    </footer>
  )
}
