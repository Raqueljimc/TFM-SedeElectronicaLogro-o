# Sistema de Componentes - Sede Electrónica de Logroño

Este proyecto consiste en el diseño y desarrollo de un sistema de componentes reutilizables para la Sede Electrónica del Ayuntamiento de Logroño, desarrollado como TFM para el Máster Universitario en Diseño y Desarrollo de Interfaz de Usuario Web (Front-End Design and Development)-(UNIR).

---

## Descripción

El objetivo de este proyecto es crear una biblioteca de componentes reutilizables y escalables que permitan construir una interfaz coherentes, accesibles y mantenibles para la Sede Electrónica del Ayuntamiento de Logroño.

Incluye:

- Sistema de diseño (tipografía, colores, spacing...)
- Componentes reutilizables
- Vistas funcionales (demo y login)
- Navegación con React Router
- Diseño responsive

---

## Componentes

Se han desarrollado los siguientes componentes:

- Button
- Link
- Input / Textarea
- Select
- Checkbox
- Header
- Menu
- Breadcrumbs
- Pagination
- Card
- List
- Details
- Notification
- Footer
- Modal
- Stepper
- Searchbar
- FileUpload

---

## Estructura del proyecto

```bash
SedeElectronicaLogrono/
├── public/
├── src/
│   ├── assets/                # Imágenes y recursos
│   │
│   ├── components/            # Componentes reutilizables
│   │   ├── breadcrumbs/
│   │   ├── button/
│   │   ├── card/
│   │   ├── checkbox/
│   │   ├── details/
│   │   ├── fileUpload/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── input/
│   │   ├── link/
│   │   ├── list/
│   │   ├── menu/
│   │   ├── modal/
│   │   ├── notification/
│   │   ├── pagination/
│   │   ├── searchbar/
│   │   ├── select/
│   │   └── stepper/
│   │
│   ├── pages/                 # Vistas de la aplicación
│   │   ├── demo.jsx
│   │   ├── demo.css
│   │   ├── login.jsx
│   │   └── login.css
│   │
│   ├── styles/                # Estilos globales y tokens
│   │   └── global.css
│   │
│   ├── App.jsx                # Raíz y configuración de rutas
│   ├── App.css
│   ├── main.jsx               # Punto de entrada de React
│   └── index.css
│
├── index.html                 # HTML principal
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
```
---

## Vistas

### Componentes (`/`)
Pantalla que muestra un ejemplo de cada componentes desarrollado y sus variantes.

### Demo (`/demo`)
Respresenta la página principal de la Sede con:

- Header + Menu
- Sección destacada con imagen de fondo
- Cards
- Notificación
- Listado de trámites
- Footer

---

### Login (`/login`)
Representa la pantalla de acceso con:

- Header
- Botón de navegación (volver)
- Login tradicional (usuario + contraseña)
- Acceso con certificado digital
- Modal de feedback
- Notificación
- Footer

---

## Routing

Se utiliza **React Router**:

```jsx
<Routes>
  <Route path="/" element={...} />
  <Route path="/demo" element={<Demo />} />
  <Route path="/login" element={<Login />} />
</Routes>
```

---

## Diseño

El sistema se basa en:

- Variables CSS (:root)
- Sistema de spacing
- Escalas tipográficas
- Tokens de color

---

## Responsive

El proyecto incluye:

- Menú adaptativo (header, menu y footer)
- Layouts flexibles
- Grids responsive

---

## Tecnologías utilizadas

- React
- React Router
- Vite
- CSS
- Heroicons (para iconos)

---

## Autora

Raquel Jiménez Castrillo
- Máster Universitario en Diseño y Desarrollo de Interfaz de Usuario Web
- Trabajo Fin de Máster
- UNIR · 2025–2026