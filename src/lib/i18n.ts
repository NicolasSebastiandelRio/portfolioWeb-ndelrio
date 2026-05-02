export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: { about: "Sobre Mí", experience: "Experiencia", education: "Educación", skills: "Habilidades", projects: "Proyectos", contact: "Contacto" },
    hero: {
      subtitle: "Estudiante de Ingeniería en Informática | Mejora Continua & Automatización",
      cta1: "Ver Proyectos",
      cta2: "Descargar CV",
    },
    about: {
      title: "Sobre Mí",
      body: "Soy estudiante de Ingeniería en Informática con experiencia combinando una sólida visión técnica de sistemas con la optimización de procesos corporativos. Me apasiona diseñar soluciones que unen el desarrollo de software, la automatización y la mejora continua para generar impacto medible en las organizaciones. Trabajo con metodologías ágiles, herramientas de IA generativa y plataformas como n8n y Power Automate para transformar flujos de trabajo manuales en sistemas eficientes y escalables.",
    },
    experience: {
      title: "Experiencia Profesional",
      jobs: [
        {
          company: "Adecco",
          role: "Continuous Improvement Intern",
          date: "Mar 2025 — Presente",
          bullets: [
            "Análisis de KPIs y métricas operativas para identificar oportunidades de mejora.",
            "Diseño de flujos de automatización con Microsoft Power Automate y n8n.",
            "Documentación técnica y estandarización de procesos corporativos.",
          ],
        },
        {
          company: "INMO",
          role: "Full-Stack Web Developer",
          date: "Mar 2022 — Dic 2022",
          bullets: [
            "Desarrollo Front-End con React.js y Next.js.",
            "Implementación de base de datos en tiempo real con Firebase.",
            "Gestión ágil del proyecto con JIRA y Scrum.",
          ],
        },
      ],
    },
    education: {
      title: "Educación y Certificaciones",
      items: [
        { title: "Ingeniería en Informática", place: "Universidad del Salvador", detail: "3er año completado" },
        { title: "Técnico en Computación Personal y Profesional", place: "Instituto Técnico Industrial San Judas Tadeo", detail: "" },
      ],
      certsTitle: "Certificaciones",
      certs: ["Google Project Management Professional", "Google AI Essentials", "FCE English Certificate (Grade B)"],
    },
    skills: {
      title: "Habilidades Técnicas",
      groups: [
        { title: "Desarrollo", items: ["C", "C++", "Python", "Java", "React Native", "JavaScript", "HTML", "CSS", "ASP.NET"] },
        { title: "Data & Cloud", items: ["SQL Server", "Firebase", "MariaDB"] },
        { title: "Agile & Gestión", items: ["Scrum", "Kanban", "JIRA", "RUP"] },
        { title: "Automatización & IA", items: ["n8n", "Power Automate", "LLMs", "Generative AI"] },
      ],
    },
    projects: {
      title: "Proyectos",
      viewCode: "Ver código",
      items: [
        { title: "Automatización de Procesos", desc: "Workflows con n8n y Power Automate para tareas corporativas repetitivas.", img: "./assets/project2.jpg" },
        { title: "Dashboard Web Full-Stack", desc: "App con React, Next.js y Firebase para gestión en tiempo real.", img: "./assets/project3.jpg" },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Querés trabajar juntos? Escribime.",
      email: "Correo",
      phone: "Teléfono",
    },
    footer: "Hecho con pasión por Nicolás del Rio",
  },
  en: {
    nav: { about: "About", experience: "Experience", education: "Education", skills: "Skills", projects: "Projects", contact: "Contact" },
    hero: {
      subtitle: "Software Engineering Student | Continuous Improvement & Automation",
      cta1: "View Projects",
      cta2: "Download CV",
    },
    about: {
      title: "About Me",
      body: "I'm a Software Engineering student combining a solid technical systems vision with corporate process optimization. I'm passionate about designing solutions that merge software development, automation and continuous improvement to deliver measurable impact. I work with agile methodologies, generative AI tools and platforms like n8n and Power Automate to transform manual workflows into efficient, scalable systems.",
    },
    experience: {
      title: "Professional Experience",
      jobs: [
        {
          company: "Adecco",
          role: "Continuous Improvement Intern",
          date: "Mar 2025 — Present",
          bullets: [
            "KPI and operational metrics analysis to identify improvement opportunities.",
            "Automation flow design with Microsoft Power Automate and n8n.",
            "Technical documentation and standardization of corporate processes.",
          ],
        },
        {
          company: "INMO",
          role: "Full-Stack Web Developer",
          date: "Mar 2022 — Dec 2022",
          bullets: [
            "Front-End development with React.js and Next.js.",
            "Real-time database implementation with Firebase.",
            "Agile project management with JIRA and Scrum.",
          ],
        },
      ],
    },
    education: {
      title: "Education & Certifications",
      items: [
        { title: "Software Engineering", place: "Universidad del Salvador", detail: "3rd year completed" },
        { title: "Personal & Professional Computing Technician", place: "Instituto Técnico Industrial San Judas Tadeo", detail: "" },
      ],
      certsTitle: "Certifications",
      certs: ["Google Project Management Professional", "Google AI Essentials", "FCE English Certificate (Grade B)"],
    },
    skills: {
      title: "Technical Skills",
      groups: [
        { title: "Development", items: ["C", "C++", "Python", "Java", "React Native", "JavaScript", "HTML", "CSS", "ASP.NET"] },
        { title: "Data & Cloud", items: ["SQL Server", "Firebase", "MariaDB"] },
        { title: "Agile & Management", items: ["Scrum", "Kanban", "JIRA", "RUP"] },
        { title: "Automation & AI", items: ["n8n", "Power Automate", "LLMs", "Generative AI"] },
      ],
    },
    projects: {
      title: "Projects",
      viewCode: "View code",
      items: [
        { title: "Process Automation", desc: "Workflows with n8n and Power Automate for repetitive corporate tasks.", img: "./assets/project2.jpg" },
        { title: "Full-Stack Web Dashboard", desc: "App built with React, Next.js and Firebase for real-time management.", img: "./assets/project3.jpg" },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Want to work together? Reach out.",
      email: "Email",
      phone: "Phone",
    },
    footer: "Crafted with passion by Nicolás del Rio",
  },
} as const;
