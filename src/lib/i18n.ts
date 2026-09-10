export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: { about: "Sobre Mí", experience: "Experiencia", education: "Educación", skills: "Habilidades", languages: "Idiomas", projects: "Proyectos", contact: "Contacto" },
    hero: {
      subtitle: "Estudiante de Ingeniería en Informática | Desarrollo de Software, Automatización & Análisis de Datos",
      cta1: "Ver Proyectos",
      cta2: "Descargar CV",
    },
    about: {
      title: "Sobre Mí",
      paragraphs: [
        "Soy estudiante de Ingeniería en Informática apasionado por la gestión de proyectos como puente entre la tecnología y los objetivos del negocio. Me especializo en desarrollo de software, automatización de procesos y análisis de datos para convertir necesidades operativas en soluciones medibles.",
        "Cuento con el Google Project Management Professional Certificate y soy Professional Scrum Master I (PSM I) certificado por Scrum.org. Aplico marcos como Scrum, Kanban, Waterfall y RUP para planificar entregas, gestionar riesgos y alinear stakeholders, coordinando equipos multidisciplinarios con JIRA, Asana y Trello.",
        "Actualmente curso 4° año en la Universidad del Salvador y trabajo como freelance en Entropy como Co-Founder & Product Manager, gestionando proyectos de software con clientes. Realicé una pasantía como Continuous Improvement Intern en Adecco (Mar 2025 – Sep 2026), donde trabajé en automatización con n8n y Power Automate, análisis de KPIs y construcción de dashboards en Power BI para la toma de decisiones.",
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
          date: "Mar 2025 — Sep 2026",
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
      verify: "Ver credencial",
      certs: [
        { name: "Professional Scrum Master™ I (PSM I)", issuer: "Scrum.org", year: "2026", url: "https://www.credly.com/badges/00ec338d-7c4e-4580-843f-783db6fa0c6a/linked_in_profile" },
        { name: "Google Project Management: Professional Certificate", issuer: "Google – Coursera", year: "2025", url: "https://www.coursera.org/account/accomplishments/specialization/24RKCYGSOFRY" },
        { name: "Google AI Essentials", issuer: "Google – Coursera", year: "2024", url: "https://www.coursera.org/account/accomplishments/verify/QBRRGRM0K10K" },
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
      methodologyTitle: "Metodologías y gestión",
      stackTitle: "Stack proyectado",
      items: [
        {
          title: "ConstructING",
          desc: "Ecosistema mobile Offline-First de gestión y auditoría técnica de obras. Reduce la asimetría de información entre el profesional y el propietario mediante evidencia fehaciente y transparencia técnica: registro inalterable del ciclo de vida de la obra en lugar de seguimiento informal por WhatsApp o minutas en papel.",
          img: "constructing",
          url: "https://github.com/NicolasSebastiandelRio/ConstructING",
          features: [
            "Certificación de hitos con firma digital en pantalla",
            "Evidencia multimedia georreferenciada con GPS",
            "Cálculo de Ruta Crítica (CPM) y reajuste automático de entregas",
            "Operación Offline-First con sincronización inteligente",
            "Audit log inalterable: quién, cuándo y dónde de cada cambio",
          ],
          methodologies: [
            "Project Charter y objetivos SMART",
            "SRS bajo estándar IEEE",
            "Casos de uso y diagramas UML",
            "Modelo Entidad-Relación (DER)",
            "Prototipado de alta fidelidad en Figma",
            "Planificación Gantt por fases Q1–Q2 2026",
          ],
          stack: ["Flutter", "NestJS", "PostgreSQL + PostGIS", "Supabase / AWS"],
        },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Querés trabajar juntos? Escribime.",
      email: "Correo",
      phone: "Teléfono",
      copy: "Copiar email",
      copied: "¡Copiado!",
      whatsapp: "WhatsApp",
    },
    footer: "Copyright © 2026 Nicolás del Río. Todos los derechos reservados.",
  },
  en: {
    nav: { about: "About", experience: "Experience", education: "Education", skills: "Skills", languages: "Languages", projects: "Projects", contact: "Contact" },
    hero: {
      subtitle: "Software Engineering Student | Software Development, Automation & Data Analysis",
      cta1: "View Projects",
      cta2: "Download CV",
    },
    about: {
      title: "About Me",
      paragraphs: [
        "I'm a Software Engineering student passionate about project management as the bridge between technology and business goals. I focus on software development, process automation and data analysis to turn operational needs into measurable solutions.",
        "I hold the Google Project Management Professional Certificate and I'm a certified Professional Scrum Master I (PSM I) by Scrum.org. I apply Scrum, Kanban, Waterfall and RUP to plan deliveries, manage risks and align stakeholders, coordinating cross-functional teams with JIRA, Asana and Trello.",
        "I'm currently in my 4th year at Universidad del Salvador and work freelance at Entropy as Co-Founder & Product Manager, managing software projects with clients. I did an internship as a Continuous Improvement Intern at Adecco (Mar 2025 – Sep 2026), working on automation with n8n and Power Automate, KPI analysis and Power BI dashboards for decision-making.",
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
          url: "https://www.entropydevs.com",
          role: "Co-Founder & Product Manager",
          date: "Mar 2026 — Present",
          bullets: [
            "Stakeholder management as the sole commercial point of contact, controlling scope and client expectations.",
            "Translation of requirements into user stories and continuous backlog prioritization aligned with business goals.",
            "Definition of roadmaps, milestones and agile sprint supervision to ensure on-time delivery.",
            "Drafting of strategic documentation: requirements, proposals, user manuals and status reports.",
          ],
        },
        {
          company: "Adecco",
          role: "Continuous Improvement Intern",
          date: "Mar 2025 — Sep 2026",
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
      verify: "Verify credential",
      certs: [
        { name: "Professional Scrum Master™ I (PSM I)", issuer: "Scrum.org", year: "2026", url: "https://www.credly.com/badges/00ec338d-7c4e-4580-843f-783db6fa0c6a/linked_in_profile" },
        { name: "Google Project Management: Professional Certificate", issuer: "Google – Coursera", year: "2025", url: "https://www.coursera.org/account/accomplishments/specialization/24RKCYGSOFRY" },
        { name: "Google AI Essentials", issuer: "Google – Coursera", year: "2024", url: "https://www.coursera.org/account/accomplishments/verify/QBRRGRM0K10K" },
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
      methodologyTitle: "Methodologies & management",
      stackTitle: "Planned stack",
      items: [
        {
          title: "ConstructING",
          desc: "Offline-First mobile ecosystem for construction site management and technical auditing. It reduces information asymmetry between professionals and owners through reliable evidence and technical transparency: an immutable record of the building lifecycle instead of informal tracking via WhatsApp or paper notes.",
          img: "constructing",
          url: "https://github.com/NicolasSebastiandelRio/ConstructING",
          features: [
            "Milestone certification with on-screen digital signature",
            "GPS-georeferenced multimedia evidence",
            "Critical Path Method (CPM) calculation with automatic rescheduling",
            "Offline-First operation with smart synchronization",
            "Immutable audit log: who, when and where for every change",
          ],
          methodologies: [
            "Project Charter and SMART objectives",
            "IEEE-standard SRS",
            "Use cases and UML diagrams",
            "Entity-Relationship model (ERD)",
            "High-fidelity prototyping in Figma",
            "Gantt planning in Q1–Q2 2026 phases",
          ],
          stack: ["Flutter", "NestJS", "PostgreSQL + PostGIS", "Supabase / AWS"],
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Want to work together? Reach out.",
      email: "Email",
      phone: "Phone",
      copy: "Copy email",
      copied: "Copied!",
      whatsapp: "WhatsApp",
    },
    footer: "Copyright © 2026 Nicolás del Río. All rights reserved.",
  },
} as const;
