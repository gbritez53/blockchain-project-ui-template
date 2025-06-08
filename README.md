# 🚀 Dark Blockchain Template

Este proyecto es una plantilla moderna para sitios web SaaS con temática oscura, ideal para aplicaciones relacionadas con blockchain y tecnología.

## ✨ Características

- 🎨 Diseño oscuro y elegante
- ⚛️ Componentes reutilizables con React y Tailwind CSS
- 🖼️ Efectos visuales personalizados (esquinas recortadas, bordes SVG)
- 🏗️ Estructura optimizada para proyectos SaaS
- 🔧 Fácil de personalizar y escalar

## 🗂️ Estructura del Proyecto

```
├── public/
│   └── assets/
│       └── images/           # Imágenes y SVGs (incluye cut-corner.svg)
├── src/
│   ├── components/           # Componentes reutilizables
│   ├── layouts/              # Layouts base
│   ├── pages/                # Páginas principales
│   ├── sections/             # Secciones del sitio (Header, etc.)
│   └── styles/               # Estilos globales (Tailwind + CSS)
├── tailwind.config.mjs       # Configuración de Tailwind
├── package.json              # Dependencias y scripts
```

## ⚡ Instalación

1. 🌀 Clona el repositorio:
   ```bash
   git clone <repo-url>
   cd blockchain-project-ui-template
   ```
2. 📦 Instala las dependencias:
   ```bash
   npm install
   # o
   pnpm install
   ```
3. 🖥️ Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   pnpm dev
   ```

## 🛠️ Personalización

- ✏️ Modifica los archivos en `src/sections/` y `src/components/` para adaptar el contenido.
- 🎨 Cambia los estilos en `src/styles/global.css` o ajusta la configuración de Tailwind.
- 🖼️ Reemplaza imágenes y SVGs en `public/assets/images/` según tu branding.

## 📜 Scripts útiles

- `dev`: Inicia el servidor de desarrollo
- `build`: Genera la versión de producción
- `preview`: Previsualiza la build de producción

## 🪪 Licencia

MIT
