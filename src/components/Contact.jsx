import { m } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import SectionTitle from "./SectionTitle";

const links = [
  {
    label: "Email",
    href: "mailto:hola@mauriander.dev",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mauricio-andermatten/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/mauriander",
    icon: Github,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5490000000000",
    icon: MessageCircle,
  },
];

function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[2.35rem] border border-white/40 bg-gradient-to-br from-[#101833] via-brand-700 to-iris-600 p-8 text-white shadow-panel sm:p-10 lg:p-12">
          <SectionTitle
            eyebrow="Contacto"
            title="Construyamos algo con impacto real."
            description="Estoy disponible para colaboraciones, proyectos freelance y desafios donde tecnologia y estrategia necesiten trabajar juntas."
          />

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
            }}
            className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {links.map((item) => {
              const Icon = item.icon;
              return (
                <m.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                  className="inline-flex items-center justify-center gap-2 rounded-[1rem] border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-xl transition hover:bg-white hover:text-ink"
                >
                  <Icon size={16} />
                  {item.label}
                </m.a>
              );
            })}
          </m.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
