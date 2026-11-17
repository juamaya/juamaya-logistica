
# 🧳   Gestión de Maletines

Aplicación web desarrollada para la gestión, organización y consulta de maletines   HTP-A320.

El proyecto permite visualizar los diferentes maletines, consultar sus referencias y cantidades de materiales mediante una interfaz moderna, intuitiva y responsive.

---

## 🚀 Tecnologías utilizadas

- **Nuxt 3** - Framework basado en Vue.js.
- **Vue 3** - Desarrollo de componentes reutilizables.
- **TypeScript** - Tipado estático y seguridad del código.
- **Tailwind CSS** - Diseño responsive y estilos.
- **Nuxt Image** - Optimización y adaptación de imágenes.
- **GitHub Pages** - Publicación y alojamiento de la aplicación.
- **GitHub Actions** - Automatización del despliegue.

---

## 📁 Estructura del proyecto

```text
UNION/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── assets/
│   └── css/
│
├── components/
│   ├── Navbar.vue
│   ├── CardMaletin.vue
│   └── Footer.vue
│
├── pages/
│   └── index.vue
│
├── public/
│   ├── images/
│   │   ├── sonaca.png
│   │   ├── union1.jpg
│   │   ├── union2.jpg
│   │   └── favicon.ico
│
├── app.vue
├── nuxt.config.ts
├── package.json
└── README.md
```

---

## ✨ Características principales

### 🧭 Navegación
- Navbar responsive.
- Siete enlaces de navegación.
- Identificación visual de la página activa.
- Menú hamburguesa para dispositivos móviles.
- Animaciones de navegación entre páginas.

### 🧳 Gestión de maletines
- Visualización de maletines UNION.
- Tarjetas reutilizables mediante componentes Vue.
- Información configurable mediante Props con TypeScript.
- Campos opcionales que se muestran únicamente cuando contienen información.
- Fotografías individuales para cada maletín.
- Visualización de referencias y cantidades de materiales.

### 🎨 Diseño
- Interfaz moderna y responsive.
- Imagen de fondo adaptable.
- Diseño compatible con móviles, tablets y ordenadores.
- Efectos hover y transiciones.
- Footer con información de la aplicación.

### 🌐 Publicación
- Despliegue en GitHub Pages.
- Generación de archivos estáticos.
- Publicación automática mediante GitHub Actions.

---

## 🛠️ Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/USUARIO/union.git
```

### 2. Acceder al proyecto

```bash
cd union
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar en desarrollo

```bash
npm run dev
```

Abrir en el navegador:

```text
http://localhost:3000
```

---

## 🏗️ Generar versión de producción

Para generar la versión estática:

```bash
npm run generate
```

Los archivos generados se encuentran en:

```text
.output/public/
```

---

## 🌍 Publicación en GitHub Pages

El proyecto está preparado para publicarse mediante GitHub Actions.

Pasos:

1. Subir el proyecto a GitHub.
2. Acceder a Settings del repositorio.
3. Seleccionar Pages.
4. Elegir GitHub Actions como método de publicación.
5. Esperar a que finalice el proceso de despliegue.

Cada actualización enviada a la rama principal `main` iniciará automáticamente el despliegue.

---

## 📱 Diseño responsive

La aplicación se adapta a diferentes dispositivos:

| Dispositivo | Diseño |
|---|---|
| Móvil | Una tarjeta por fila |
| Tablet | Dos tarjetas por fila |
| Escritorio | Cuatro tarjetas por fila |

---

## 📌 Objetivo del proyecto

Centralizar la información de los maletines UNION del HTP-A320, facilitando la consulta visual de referencias y cantidades de materiales.

El objetivo es disponer de una herramienta sencilla, accesible y adaptable a diferentes dispositivos.

---

## 👨‍💻 Desarrollo

**Proyecto:**   Gestión de Maletines  
**Modelo:** HTP-A320  
**Framework:** Nuxt 3  
**Lenguaje:** TypeScript  
**Estilos:** Tailwind CSS  
**Alojamiento:** GitHub Pages

---

## 📄 Licencia

Proyecto de uso interno. Todos los derechos reservados.
