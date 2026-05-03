export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: { about: "Sobre Mí", experience: "Experiencia", education: "Educación", skills: "Habilidades", languages: "Idiomas", projects: "Proyectos", contact: "Contacto" },
    hero: {
      subtitle: "Estudiante de Ingeniería en Informática | Mejora Continua & Automatización",
      cta1: "Ver Proyectos",
      cta2: "Descargar CV",
    },
    about: {
      title: "Sobre Mí",
      paragraphs: [
        "Soy estudiante de Ingeniería en Informática y Analista de Mejora Continua, apasionado por la gestión de proyectos como puente entre la tecnología y los objetivos del negocio. Aplico marcos como Scrum, Kanban, Waterfall y RUP para planificar entregas, gestionar riesgos y alinear stakeholders alrededor de resultados medibles.",
        "Cuento con el Google Project Management Professional Certificate y estoy próximo a certificarme como Professional Scrum Master I (PSM I). Mi experiencia combina liderazgo de iniciativas, definición de KPIs y coordinación con equipos multidisciplinarios usando JIRA, Asana y Trello.",
        "Actualmente curso 4° año en la Universidad del Salvador y me desempeño como Continuous Improvement Intern en Adecco, donde gestiono proyectos de automatización con n8n y Power Automate, y construyo dashboards en Power BI que potencian la toma de decisiones del equipo.",
      ],
      stats: [
        { value: "4°", label: "Año de carrera" },
        { value: "2+", label: "Años de experiencia técnica" },
        { value: "10+", label: "Tecnologías dominadas" },
      ],
    },
    experience: {
      title: "Experiencia Profesional",
      jobs: [
        {
          company: "Entropy",
          url: "https://www.entropydevs.com",
          role: "Co-Founder & Product Manager",
          date: "Mar 2026 — Presente",
          bullets: [
            "Gestión de stakeholders como único punto de contacto comercial, controlando el alcance y las expectativas del cliente.",
            "Traducción de requerimientos en historias de usuario y priorización continua del backlog alineado al negocio.",
            "Definición de roadmaps, hitos y supervisión ágil de los sprints para asegurar entregas en tiempo.",
            "Elaboración de documentación estratégica: requerimientos, propuestas, manuales y reportes de estado.",
          ],
        },
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
        { title: "Ingeniería en Informática", place: "Universidad del Salvador", detail: "Cursando 4° año · 2023 – Actualidad" },
        { title: "Técnico en Computación Personal y Profesional", place: "Instituto Técnico Industrial San Judas Tadeo", detail: "2015 – 2022" },
      ],
      certsTitle: "Certificaciones",
      certs: [
        { name: "Professional Scrum Master™ I (PSM I)", issuer: "Scrum.org", year: "2026" },
        { name: "Google Project Management: Professional Certificate", issuer: "Google – Coursera", year: "2025" },
        { name: "Google AI Essentials", issuer: "Google – Coursera", year: "2024" },
        { name: "Certificado de Prácticas Profesionalizantes", issuer: "Instituto Técnico Industrial San Judas Tadeo", year: "2022" },
      ],
    },
    skills: {
      title: "Habilidades Técnicas",
      groups: [
        { key: "code", title: "Lenguajes y Paradigmas de Programación", items: ["C", "C++", "C#", "Python", "Java", "JavaScript", "HTML", "CSS", "ASP.NET", "LINQ", "React Native", "OOP", "Layered Programming"] },
        { key: "pm", title: "Gestión de Proyectos y Metodologías", items: ["Agile (Scrum & Kanban)", "Waterfall", "RUP", "Extreme Programming (XP)", "Risk Management", "Stakeholder Management", "JIRA", "Asana", "Trello"] },
        { key: "db", title: "Bases de Datos y Servicios Cloud", items: ["SQL Server (DML & DDL)", "Firebase", "Supabase", "MariaDB"] },
        { key: "ai", title: "Inteligencia Artificial y Tecnologías Emergentes", items: ["Large Language Models (LLMs)", "Prompt Design", "Generative AI"] },
        { key: "auto", title: "Automatización de Algoritmos", items: ["n8n", "Microsoft Power Automate"] },
        { key: "ms", title: "Microsoft 365 & Business Intelligence", items: ["Power BI", "Power Query", "Excel Avanzado", "SharePoint", "Microsoft Teams", "OneDrive"] },
      ],
    },
    languages: {
      title: "Idiomas",
      items: [
        { name: "Español", level: "Nativo", detail: "" },
        { name: "Inglés", level: "Avanzado (B2)", detail: "First Certificate in English – Cambridge (178/190)" },
      ],
    },
    projects: {
      title: "Proyectos",
      viewCode: "Ver en GitHub",
      githubCta: "Ver más en mi GitHub",
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
    footer: "Copyright © 2026 Nicolás del Río. Todos los derechos reservados.",
  },
  en: {
    nav: { about: "About", experience: "Experience", education: "Education", skills: "Skills", languages: "Languages", projects: "Projects", contact: "Contact" },
    hero: {
      subtitle: "Software Engineering Student | Continuous Improvement & Automation",
      cta1: "View Projects",
      cta2: "Download CV",
    },
    about: {
      title: "About Me",
      paragraphs: [
        "I'm a Software Engineering student and Continuous Improvement Analyst, passionate about project management as the bridge between technology and business goals. I apply frameworks like Scrum, Kanban, Waterfall and RUP to plan deliveries, manage risks and align stakeholders around measurable outcomes.",
        "I hold the Google Project Management Professional Certificate and I'm close to certifying as Professional Scrum Master I (PSM I). My experience combines initiative leadership, KPI definition and coordination of cross-functional teams using JIRA, Asana and Trello.",
        "I'm currently in my 4th year at Universidad del Salvador and work as a Continuous Improvement Intern at Adecco, where I lead automation projects with n8n and Power Automate, and build Power BI dashboards that drive better team decision-making.",
      ],
      stats: [
        { value: "4th", label: "Year of degree" },
        { value: "2+", label: "Years of technical experience" },
        { value: "10+", label: "Technologies mastered" },
      ],
    },
    experience: {
      title: "Professional Experience",
      jobs: [
        {
          company: "Entropy",
          role: "Co-Founder & Product Manager",
          date: "Mar 2026 — Present",
          bullets: [
            "Strategic stakeholder management as the sole commercial point of contact, ensuring project viability and protecting the technical team's productivity through scope management and expectation setting.",
            "Translation of client requirements into user stories, leading product definition and continuous prioritization of the technical backlog to ensure alignment with business goals.",
            "Definition of roadmaps and project planning, setting delivery milestones and supervising agile execution within each sprint to guarantee on-time delivery.",
            "Drafting of strategic documentation including requirement specifications, service proposals, user manuals and status reports to keep all stakeholders aligned.",
          ],
        },
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
        { title: "Software Engineering", place: "Universidad del Salvador", detail: "4th year in progress · 2023 – Present" },
        { title: "Personal & Professional Computing Technician", place: "Instituto Técnico Industrial San Judas Tadeo", detail: "2015 – 2022" },
      ],
      certsTitle: "Certifications",
      certs: [
        { name: "Professional Scrum Master™ I (PSM I)", issuer: "Scrum.org", year: "2026" },
        { name: "Google Project Management: Professional Certificate", issuer: "Google – Coursera", year: "2025" },
        { name: "Google AI Essentials", issuer: "Google – Coursera", year: "2024" },
        { name: "Professional Practices Certificate", issuer: "Instituto Técnico Industrial San Judas Tadeo", year: "2022" },
      ],
    },
    skills: {
      title: "Technical Skills",
      groups: [
        { key: "code", title: "Programming Languages & Paradigms", items: ["C", "C++", "C#", "Python", "Java", "JavaScript", "HTML", "CSS", "ASP.NET", "LINQ", "React Native", "OOP", "Layered Programming"] },
        { key: "pm", title: "Project Management & Methodologies", items: ["Agile (Scrum & Kanban)", "Waterfall", "RUP", "Extreme Programming (XP)", "Risk Management", "Stakeholder Management", "JIRA", "Asana", "Trello"] },
        { key: "db", title: "Databases & Cloud Services", items: ["SQL Server (DML & DDL)", "Firebase", "Supabase", "MariaDB"] },
        { key: "ai", title: "Artificial Intelligence & Emerging Tech", items: ["Large Language Models (LLMs)", "Prompt Design", "Generative AI"] },
        { key: "auto", title: "Algorithm Automation", items: ["n8n", "Microsoft Power Automate"] },
        { key: "ms", title: "Microsoft 365 & Business Intelligence", items: ["Power BI", "Power Query", "Advanced Excel", "SharePoint", "Microsoft Teams", "OneDrive"] },
      ],
    },
    languages: {
      title: "Languages",
      items: [
        { name: "Spanish", level: "Native", detail: "" },
        { name: "English", level: "Advanced (B2)", detail: "First Certificate in English – Cambridge (178/190)" },
      ],
    },
    projects: {
      title: "Projects",
      viewCode: "View on GitHub",
      githubCta: "See more on my GitHub",
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
    footer: "Copyright © 2026 Nicolás del Río. All rights reserved.",
  },
} as const;
