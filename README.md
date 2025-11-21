# 🛠️ Ferretería San Francisco – Proyecto Web  
![Status](https://img.shields.io/badge/Status-En%20desarrollo-yellow?style=for-the-badge)

Este repositorio corresponde al desarrollo del sitio web oficial de **Ferretería San Francisco**, un proyecto actualmente en proceso y construido bajo metodología **Scrum**.

---

## 📌 Funcionalidades Principales

### 🏠 Página Principal (Home)
Presentación de la ferretería y accesos clave.

### 🧾 Sección Institucional – *"Conocé la Marca"*
Historia, valores, misión y visión de la marca.

### 🛠️ Galería de Productos con Filtros
- Filtros por categoría  
- Presentación clara y responsiva  
- Base para ampliación futura (e-commerce)

### 🏷️ Sección de Marcas
Listado de las marcas comercializadas.

### 📩 Página de Contacto con Formulario
Integrado con **EmailJS** para envío de consultas.

### 📍 Google Maps API
Ubicación exacta del local.

### 🤖 ChatBot de Atención al Cliente
Soporte básico automatizado para consultas rápidas.

---

## 🚫 No Incluye (por ahora)
- Carrito de compras  
- Sistema de pagos  
- E-commerce completo  

---

## 🚀 Instalación y Ejecución

### Requisitos Previos
- Node.js (v18 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/ferreteria-san-francisco-web.git

# Entrar al directorio
cd ferreteria-san-francisco-web

# Instalar dependencias
npm install
```

### Scripts Disponibles
```bash
# Iniciar servidor de desarrollo
npm run dev

# Crear build de producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint
```

---

## 🛠️ Stack Tecnológico

![Scrum](https://img.shields.io/badge/Scrum-Methodology-blue?style=for-the-badge)

### 🎨 Frontend
![React](https://img.shields.io/badge/Frontend-React%2019-61dafb?style=for-the-badge&logo=react&logoColor=white)
Framework elegido para desarrollar una interfaz modular, ágil y mantenible.

### 💅 Estilos
![Tailwind](https://img.shields.io/badge/Styles-TailwindCSS%20v4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)
Sistema de utilidades para un diseño rápido, limpio y responsivo.

### ⚡ Build Tool
![Vite](https://img.shields.io/badge/Build-Vite%207-bd34fe?style=for-the-badge&logo=vite&logoColor=white)
Entorno de desarrollo rápido y moderno.

### 📦 Dependencias Principales
| Paquete | Versión | Descripción |
|---------|---------|-------------|
| react | ^19.2.0 | Librería UI |
| react-dom | ^19.2.0 | DOM rendering |
| react-router-dom | ^7.9.6 | Enrutamiento SPA |
| @tanstack/react-query | ^5.90.10 | Manejo de estado servidor |
| react-hook-form | ^7.66.1 | Manejo de formularios |
| tailwindcss | ^4.1.17 | Framework CSS |
| react-icons | ^5.5.0 | Iconos |
| @emailjs/browser | ^4.4.1 | Envío de emails |
| react-simple-chatbot | ^0.6.1 | Chatbot |
| styled-components | ^4.4.1 | CSS-in-JS (para chatbot) |

### 🔧 Dependencias de Desarrollo
| Paquete | Versión | Descripción |
|---------|---------|-------------|
| vite | ^7.2.4 | Build tool |
| @vitejs/plugin-react | ^5.1.1 | Plugin React para Vite |
| eslint | ^9.39.1 | Linter |
| prettier | ^3.6.2 | Formateo de código |
| eslint-config-prettier | ^10.1.8 | Integración ESLint + Prettier |

### 🔗 APIs y Servicios
- **EmailJS** – gestión de formularios
- **Google Maps API** – mapa y ubicación

### 🚀 Deployment
![Netlify/Vercel](https://img.shields.io/badge/Deployment-Netlify%20%7C%20Vercel-black?style=for-the-badge&logo=vercel)
Servicios en la nube para deploy continuo.

### 🔄 Control de Versiones
Git + GitHub (workflows, branches, PRs)

---

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Configuración global de la app
│   ├── providers/          # Providers (QueryProvider, etc.)
│   └── router/             # Configuración de rutas
│
├── features/               # Módulos por funcionalidad
│   ├── about/              # Página "Sobre Nosotros"
│   │   ├── components/
│   │   ├── pages/
│   │   └── index.js
│   ├── brands/             # Sección de marcas
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   └── index.js
│   ├── chatbot/            # Chatbot de atención
│   │   ├── api/
│   │   ├── components/
│   │   └── index.js
│   ├── contact/            # Página de contacto
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   └── index.js
│   ├── home/               # Página principal
│   │   ├── components/
│   │   ├── pages/
│   │   └── index.js
│   └── products/           # Galería de productos
│       ├── api/
│       ├── components/
│       ├── hooks/
│       ├── pages/
│       └── index.js
│
├── shared/                 # Código compartido
│   ├── components/
│   │   ├── layout/         # Layout, Navbar, Footer, Sidebar
│   │   └── ui/             # Componentes UI reutilizables
│   ├── hooks/              # Hooks personalizados
│   ├── lib/                # Utilidades y configuración
│   │   └── api/            # Cliente API y endpoints
│   └── utils/              # Funciones auxiliares
│
├── style/                  # Estilos globales
│   └── globals.css
│
├── App.jsx                 # Componente raíz
└── main.jsx                # Punto de entrada
```

---

## 👥 Metodología Scrum

El proyecto se gestiona con enfoque iterativo y entregas por Sprint.

### 🧭 Roles del Equipo

#### **Scrum Master – Mercedes Guerra**
- Facilita ceremonias Scrum  
- Remueve bloqueantes  
- Acompaña la gestión del proyecto  

#### **Stakeholder – Raúl Guerra (Ferretería San Francisco)**
- Define requerimientos del proyecto  
- Revisa avances en Sprint Reviews  

### 👨‍💻 Development Team  

| Nombre      | Rol                   | Responsabilidades |
|-------------|-----------------------|-------------------|
| **Alejandro** | Frontend Lead | Setup React + Vite, arquitectura, componentes base |
| **Nicolás** | UI/UX Developer | Wireframes, diseño visual, implementación con Tailwind, responsive |
| **Ezequiel** | Feature Developer 1 | Galería de productos, filtros, sección de marcas |
| **Ana Paula** | Feature Developer 2 | Página institucional, formulario de contacto, Google Maps |
| **Mariana** | Integration & Deployment | Netlify/Vercel, EmailJS, chatbot, documentación |
| **Melina** | QA & Code Review | Testing, code review, validación responsive |

---

## 🧰 Herramientas de Trabajo

### 📋 Gestión de Tareas
- **Trello**  
  - Tablero: *"PPS - Ferretería San Francisco"*  
  - Columnas: *Backlog | To Do | In Progress | In Review | Done*

### 💬 Comunicación
- WhatsApp / Discord – comunicación diaria  
- GitHub – discusiones y PRs  
- Google Meet / Zoom – ceremonias Scrum  

### 💻 Desarrollo
- Node.js (LTS)  
- Git  
- Visual Studio Code  
- Cuenta GitHub  
- Cuenta Trello  

### ⏱️ Registro de Horas
Google Sheets compartido  
**Formato:** Fecha | Nombre | Horas | Actividad realizada | Sprint

---

## 🗓️ Cronograma General del Proyecto

### **Semana 1–2 (Sprints 1–2) – Setup y planificación**
- Configuración del proyecto  
- Diseño de wireframes  
- Definición de componentes base  

### **Semana 3–5 (Sprints 3–5) – Desarrollo Core**
- Componentes reutilizables  
- Navegación  
- Página principal  
- Galería de productos  

### **Semana 6–7 (Sprints 6–7) – Features Avanzadas**
- Integraciones (EmailJS, Google Maps)  
- ChatBot  
- Sección institucional y marcas  

### **Semana 8 (Sprint 8) – Testing y Deployment**
- Testing cross-browser  
- Optimización  
- Deployment final  
- Documentación  

---

## 📌 Estado Actual
El proyecto se encuentra **recién iniciando**, con estructura, planificación y setup técnico en proceso.  

---

