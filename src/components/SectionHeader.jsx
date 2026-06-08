export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-12 md:mb-16">
      {eyebrow && (
        <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-indigo-500 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-[16px] text-neutral-500 leading-relaxed max-w-xl">{description}</p>
      )}
    </div>
  )
}
