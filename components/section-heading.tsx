interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
}

export default function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  return (
    <div className={`mb-8 ${alignmentClasses[align]}`}>
      <h2 className="text-3xl font-bold text-amber-800">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
      <div
        className={`h-1 bg-amber-400 w-24 mt-4 ${align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""}`}
      ></div>
    </div>
  )
}
