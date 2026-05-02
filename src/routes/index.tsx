import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nicolás del Rio — Software Engineering & Continuous Improvement" },
      { name: "description", content: "Portafolio de Nicolás del Rio, estudiante de Ingeniería en Informática especializado en mejora continua, automatización y desarrollo full-stack." },
      { property: "og:title", content: "Nicolás del Rio — Portfolio" },
      { property: "og:description", content: "Software Engineering Student | Continuous Improvement & Automation" },
    ],
  }),
  component: Portfolio,
});
