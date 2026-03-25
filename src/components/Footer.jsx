const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mauricio-andermatten/" },
  { label: "GitHub", href: "https://github.com/mauriander" },
  { label: "Email", href: "mailto:andermattenmauricio@gmail.com" },
];

function Footer({ content }) {
  return (
    <footer className="bg-ink text-mist dark:bg-[#060606]">
      <div className="mx-auto max-w-[1440px] border-t border-white/10">
        <div className="grid md:grid-cols-[280px_1fr_1fr]">
          <div className="border-b border-white/10 px-6 py-10 md:border-b-0 md:border-r md:px-8">
            <p className="mono text-[9px] text-mist/35">{content.project}</p>
            <p className="mt-3 font-display text-3xl leading-none tracking-[-0.03em]">
              Mauricio Andermatten
            </p>
            <p className="mono mt-3 text-[10px] text-mist/35">{content.subtitle}</p>
          </div>

          <div className="border-b border-white/10 px-6 py-10 md:border-b-0 md:border-r md:px-8">
            <p className="mono text-[9px] text-mist/35">{content.profile}</p>
            <p className="mt-4 max-w-md font-mono text-[11px] uppercase leading-[1.9] tracking-[0.08em] text-mist/48">
              {content.body}
            </p>
          </div>

          <div className="px-6 py-10 md:px-8">
            <p className="mono text-[9px] text-mist/35">{content.links}</p>
            <div className="mt-4 flex flex-col">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="mono flex items-center justify-between border-b border-white/10 py-3 text-[10px] text-mist/55 transition hover:text-mist"
                >
                  <span>{item.label}</span>
                  <span>{content.open}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 px-6 py-5 text-center md:flex-row md:items-center md:justify-between md:px-8 md:text-left">
          <span className="mono text-[9px] text-mist/25">
            Copyright {new Date().getFullYear()} Mauricio Andermatten
          </span>
          <span className="mono text-[9px] text-mist/25">{content.location}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
