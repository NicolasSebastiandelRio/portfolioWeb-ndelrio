# 🚀 Portfolio Web - Nicolas del Rio

Un portafolio personal moderno y de alto rendimiento, diseñado para mostrar mis proyectos, experiencia y habilidades en el desarrollo de software y la mejora continua.

## 🎯 Arquitectura y Calidad del Proyecto

Este proyecto fue estructurado aplicando principios de **Mejora Continua** para optimizar su rendimiento. Utiliza una arquitectura **100% SPA (Single Page Application) estática**, lo que garantiza tiempos de carga mínimos y una experiencia de usuario fluida, operando de manera nativa sobre infraestructura serverless.

### 🛠️ Stack Tecnológico
*   **Frontend:** React.js, Vite
*   **Enrutamiento:** TanStack Router (Client-Side Routing)
*   **CI/CD & Hosting:** GitHub Actions y GitHub Pages
*   **Control de Versiones:** Git

## ⚙️ Pipeline de Despliegue (Integración Continua)

El proyecto cuenta con un flujo de **Integración y Despliegue Continuo (CI/CD)**. Cada *commit* integrado en la rama `main` activa un *workflow* automatizado que:
1. Provisiona el entorno y gestiona las dependencias (`npm install`).
2. Ejecuta el proceso de compilación estática a través de Vite (`npm run build`).
3. Aplica controles de calidad de enrutamiento (Fallback 404 para estandarizar la navegación de la SPA).
4. Despliega la última versión de manera determinista en GitHub Pages.

## 💻 Entorno de Desarrollo Local

Para inicializar este proyecto en un entorno de pruebas local, ejecuta los siguientes comandos:

1. Clonar el repositorio:
   
```bash
   git clone [https://github.com/NicolasSebastiandelRio/portfolioWeb-ndelrio.git](https://github.com/NicolasSebastiandelRio/portfolioWeb-ndelrio.git)
