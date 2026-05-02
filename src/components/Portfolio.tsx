import { useEffect, useState } from "react";
import {
  Moon, Sun, Download, Github, Linkedin, Mail, Phone, ExternalLink,
  GraduationCap, Briefcase, Award, Languages as LanguagesIcon,
  Code2, KanbanSquare, Database, BrainCircuit, Workflow, BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { translations, type Lang } from "@/lib/i18n";

const cvLinks: Record<Lang, string> = {
  es: "./assets/CV Nicolás del Rio.pdf",
  en: "./assets/Resume Nicolás del Rio.pdf",
};

const skillIcons = {
  code: Code2,
  pm: KanbanSquare,
  db: Database,
  ai: BrainCircuit,
  auto: Workflow,
  ms: BarChart3,
} as const;

export default function Portfolio() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark" | null) ?? "dark";
    const savedLang = (localStorage.getItem("lang") as Lang | null) ?? "es";
    setTheme(savedTheme);
    setLang(savedLang);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];
  const cvHref = cvLinks[lang];

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "education", label: t.nav.education },
    { id: "skills", label: t.nav.skills },
    { id: "languages", label: t.nav.languages },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#hero" className="text-lg font-bold tracking-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Nicolás</span> del Rio
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm text-muted-foreground transition-smooth hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              aria-label="Toggle language"
              className="text-xs font-semibold tracking-wider"
            >
              {lang.toUpperCase()}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="bg-gradient-hero relative overflow-hidden">
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 py-20 md:flex-row md:py-32">
          <div className="flex-1 animate-fade-up text-center md:text-left">
            <p className="mb-3 text-sm font-medium text-primary">{lang === "es" ? "Hola, soy" : "Hi, I'm"}</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Nicolás <span className="bg-gradient-primary bg-clip-text text-transparent">del Rio</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">{t.hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <Button asChild size="lg" className="bg-gradient-primary shadow-elegant transition-smooth hover:opacity-90">
                <a href="#projects">{t.hero.cta1}</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={cvHref} download>
                  <Download className="mr-2 h-4 w-4" />
                  {t.hero.cta2}
                </a>
              </Button>
            </div>
            <div className="mt-6 flex justify-center gap-4 md:justify-start">
              <a href="https://www.linkedin.com/in/nicolás-del-rio-08810523b" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-smooth hover:text-primary" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/NicolasSebastiandelRio" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-smooth hover:text-primary" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 animate-fade-up">
            <div className="bg-gradient-primary shadow-elegant rounded-full p-1">
              <img src="./assets/profile-pic.jpeg" alt="Nicolás del Rio" className="h-48 w-48 rounded-full object-cover md:h-64 md:w-64" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title={t.about.title}>
        <div className="grid items-center gap-10 md:grid-cols-5">
          <div className="shadow-card overflow-hidden rounded-2xl md:col-span-2">
            <img src="./assets/about-pic.jpeg" alt="" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="space-y-5 md:col-span-3">
            {t.about.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground md:text-lg">{p}</p>
            ))}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {t.about.stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-border/60 bg-card/50 p-4 text-center">
                  <p className="bg-gradient-primary bg-clip-text text-2xl font-bold text-transparent md:text-3xl">{s.value}</p>
                  <p className="mt-1 text-xs leading-tight text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title={t.experience.title} muted>
        <div className="grid gap-6 md:grid-cols-2">
          {t.experience.jobs.map((job) => (
            <Card key={job.company} className="shadow-card transition-smooth group p-6 hover:-translate-y-1 hover:shadow-elegant">
              <div className="mb-3 flex items-start justify-between">
                <div className="bg-gradient-primary rounded-lg p-2 text-primary-foreground">
                  <Briefcase className="h-5 w-5" />
                </div>
                <span className="text-xs text-muted-foreground">{job.date}</span>
              </div>
              <h3 className="text-lg font-semibold">{job.role}</h3>
              <p className="mb-3 text-sm font-medium text-primary">{job.company}</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title={t.education.title}>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            {t.education.items.map((it) => (
              <Card key={it.title} className="shadow-card p-5">
                <div className="flex gap-4">
                  <GraduationCap className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">{it.title}</h3>
                    <p className="text-sm text-muted-foreground">{it.place}</p>
                    {it.detail && <p className="mt-1 text-xs text-primary">{it.detail}</p>}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Card className="shadow-card p-6">
            <div className="mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">{t.education.certsTitle}</h3>
            </div>
            <ul className="space-y-3">
              {t.education.certs.map((c) => (
                <li key={c.name} className="flex items-start justify-between gap-3 border-b border-border/40 pb-3 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm font-medium leading-tight">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.issuer}</p>
                  </div>
                  <span className="flex-shrink-0 text-xs font-semibold text-primary">{c.year}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title={t.skills.title} muted>
        <div className="grid gap-6 md:grid-cols-2">
          {t.skills.groups.map((g) => {
            const Icon = skillIcons[g.key as keyof typeof skillIcons] ?? Code2;
            return (
              <Card key={g.title} className="shadow-card p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-gradient-primary rounded-lg p-2 text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{g.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <Badge key={s} variant="secondary" className="transition-smooth hover:bg-primary hover:text-primary-foreground">
                      {s}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Languages */}
      <Section id="languages" title={t.languages.title}>
        <div className="grid gap-6 sm:grid-cols-2">
          {t.languages.items.map((l) => (
            <Card key={l.name} className="shadow-card p-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-primary rounded-lg p-2 text-primary-foreground">
                  <LanguagesIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{l.name}</h3>
                  <p className="text-sm font-medium text-primary">{l.level}</p>
                  {l.detail && <p className="mt-1 text-xs text-muted-foreground">{l.detail}</p>}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title={t.projects.title} muted>
        <div className="grid gap-6 md:grid-cols-2">
          {t.projects.items.map((p) => (
            <Card key={p.title} className="shadow-card transition-smooth group relative overflow-hidden p-0 hover:shadow-elegant">
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <a
                  href="https://github.com/NicolasSebastiandelRio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-smooth hover:gap-2"
                >
                  {t.projects.viewCode} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com/NicolasSebastiandelRio" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              {t.projects.githubCta}
            </a>
          </Button>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title={t.contact.title}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-8 text-muted-foreground">{t.contact.subtitle}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <a href="mailto:Nicolassebastiandelrio@gmail.com" className="shadow-card transition-smooth hover:shadow-elegant group flex items-center gap-4 rounded-xl bg-card p-5 hover:-translate-y-1">
              <div className="bg-gradient-primary rounded-lg p-3 text-primary-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">{t.contact.email}</p>
                <p className="text-sm font-medium">Nicolassebastiandelrio@gmail.com</p>
              </div>
            </a>
            <a href="tel:+541161885502" className="shadow-card transition-smooth hover:shadow-elegant group flex items-center gap-4 rounded-xl bg-card p-5 hover:-translate-y-1">
              <div className="bg-gradient-primary rounded-lg p-3 text-primary-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">{t.contact.phone}</p>
                <p className="text-sm font-medium">+54 11 6188 5502</p>
              </div>
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/nicolás-del-rio-08810523b" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-smooth hover:text-primary">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/NicolasSebastiandelRio" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-smooth hover:text-primary">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </Section>

      <footer className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        {t.footer}
      </footer>
    </div>
  );
}

function Section({ id, title, children, muted }: { id: string; title: string; children: React.ReactNode; muted?: boolean }) {
  return (
    <section id={id} className={muted ? "bg-muted/30 py-16 md:py-24" : "py-16 md:py-24"}>
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">
          {title}
          <span className="bg-gradient-primary mt-2 block h-1 w-16 rounded-full" />
        </h2>
        {children}
      </div>
    </section>
  );
}
