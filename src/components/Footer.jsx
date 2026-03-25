import { Github, Linkedin, Mail } from "lucide-react";

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mauricio-andermatten/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/mauriander", icon: Github },
  { label: "Email", href: "mailto:hola@mauriander.dev", icon: Mail },
];

function Footer() {
  return (
    <footer className="px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-[1.8rem] border border-white/50 bg-white/55 px-6 py-6 backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-xl font-semibold tracking-[-0.03em] text-ink">
            Mauricio Andermatten
          </p>
          <p className="mt-1 text-sm text-slate">
            Software Developer · Functional Analyst · Product Builder
          </p>
        </div>

        <div className="flex items-center gap-2">
          {social.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={item.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/55 bg-white/75 text-slate transition hover:text-iris-600"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

        <p className="text-sm text-slate">
          Copyright {new Date().getFullYear()} Mauricio Andermatten
        </p>
      </div>
    </footer>
  );
}

export default Footer;
