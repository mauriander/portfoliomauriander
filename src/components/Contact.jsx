import { m } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import SectionTitle from "./SectionTitle";

const linkMap = {
  Email: {
    href: "mailto:andermattenmauricio@gmail.com",
    icon: Mail,
  },
  LinkedIn: {
    href: "https://www.linkedin.com/in/mauricio-andermatten/",
    icon: Linkedin,
  },
  GitHub: {
    href: "https://github.com/mauriander",
    icon: Github,
  },
  WhatsApp: {
    href: "https://wa.me/5490000000000",
    icon: MessageCircle,
  },
};

function Contact({ content }) {
  return (
    <section id="contact" className="section-shell bg-ink text-mist dark:bg-[#060606]">
      <div className="mx-auto max-w-[1440px]">
        <SectionTitle
          eyebrow={content.eyebrow}
          number="05"
          meta={content.meta}
          title={content.title}
          description={content.description}
          inverted
        />

        <div className="grid border-b border-white/15 px-6 py-12 md:grid-cols-[1fr_1fr] md:px-8 lg:px-10 lg:py-16">
          <div className="md:pr-12">
            <p className="mono flex items-center gap-4 text-[10px] text-mist/35">
              <span className="inline-block h-px w-8 bg-white/25" />
              {content.availability}
            </p>
            <p className="mt-6 max-w-xl border-l-2 border-mist pl-6 font-display text-3xl leading-[1.2] tracking-[-0.02em] text-mist sm:text-5xl">
              "{content.quote}"
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-6 md:mt-0">
            <p className="font-mono text-[11px] uppercase leading-[1.95] tracking-[0.08em] text-mist/48">
              {content.body}
            </p>

            <div className="flex flex-wrap gap-2">
              {content.tags.map((tag) => (
                <span
                  key={tag}
                  className="mono border border-white/15 px-3 py-2 text-[9px] text-mist/40"
                >
                  {tag}
                </span>
              ))}
            </div>

            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
              }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {content.links.map((label) => {
                const item = linkMap[label];
                const Icon = item.icon;

                return (
                  <m.a
                    key={label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                    className="flex items-center justify-between border border-white/15 px-4 py-4 transition hover:bg-white/5"
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={16} />
                      <span className="mono text-[10px] text-mist/75">{label}</span>
                    </span>
                    <span className="mono text-[10px] text-mist/35">{content.open}</span>
                  </m.a>
                );
              })}
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
