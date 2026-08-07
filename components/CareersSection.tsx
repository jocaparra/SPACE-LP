export default function CareersSection() {
  return (
    <section id="careers" className="py-20 md:py-[140px] bg-[#171A1F] border-b border-[#C7CDD6]/12">
      <div className="max-w-[1200px] mx-auto px-6">
        <span className="mono-eyebrow">FOUNDING TEAM</span>
        <h2 className="section-h2">We are looking for one person.</h2>
        <p className="body-text mb-12">
          A senior thermal or cryogenic engineer, as a founding partner — not an employee.
          Meaningful equity. You will define the architecture.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-[#C7CDD6]/12 mb-12">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#C7CDD6] block mb-6">
              WHAT WE HAVE
            </span>
            <ul className="space-y-3 text-[15px] text-[#8C939D]">
              <li className="relative pl-5 before:content-['—'] before:absolute before:left-0 before:text-[#C7CDD6]">
                a validated first-order thermal model
              </li>
              <li className="relative pl-5 before:content-['—'] before:absolute before:left-0 before:text-[#C7CDD6]">
                a mapped route to non-dilutive funding
              </li>
              <li className="relative pl-5 before:content-['—'] before:absolute before:left-0 before:text-[#C7CDD6]">
                full-time commercial leadership
              </li>
            </ul>
          </div>

          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#C7CDD6] block mb-6">
              WHAT WE DON&apos;T
            </span>
            <ul className="space-y-3 text-[15px] text-[#8C939D]">
              <li className="relative pl-5 before:content-['—'] before:absolute before:left-0 before:text-[#C7CDD6]">
                capital
              </li>
              <li className="relative pl-5 before:content-['—'] before:absolute before:left-0 before:text-[#C7CDD6]">
                a prototype
              </li>
              <li className="relative pl-5 before:content-['—'] before:absolute before:left-0 before:text-[#C7CDD6]">
                a technical founder
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4">
          <a
            href="mailto:founding@basx.space?subject=Thermal%20Analysis%20Feedback"
            className="inline-block px-6 py-3.5 border border-[#D6C3A3] text-[#D6C3A3] text-[14px] font-sans bg-transparent hover:bg-[#D6C3A3] hover:text-[#0E1013] transition-colors"
          >
            Tell me where the model is wrong
          </a>
        </div>
      </div>
    </section>
  );
}
