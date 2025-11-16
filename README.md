# Portafolio de Desarrollador Full-Stack ✨

Un portafolio moderno y atractivo construido con React, TypeScript, Vite y Framer Motion.

## 🚀 Características

- ✨ Animaciones suaves con Framer Motion
- 🎨 Diseño moderno con gradientes y efectos visuales
- 🌓 Modo oscuro/claro completamente funcional
- 📱 Diseño 100% responsivo
- 🎯 Efectos 3D en tarjetas de proyectos
- 📊 Barras de progreso animadas para habilidades
- 📝 Formulario de contacto con validación
- ⚡ Rendimiento optimizado con Vite

## 🛠️ Tecnologías Utilizadas

- **React 19** - Librería de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultrarrápido
- **Framer Motion** - Animaciones profesionales
- **Tailwind CSS** - Estilos utility-first
- **Google Fonts** - Tipografía (Playfair Display + Inter)

## 📋 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/NoeliaCQ28/portafolio.git
cd portafolio
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:3000`

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción

## 📁 Estructura del Proyecto

```
portafolio/
├── components/
│   ├── Header.tsx          # Navegación principal
│   ├── Hero.tsx            # Sección hero con animación de escritura
│   ├── About.tsx           # Timeline de experiencia
│   ├── Projects.tsx        # Lista de proyectos
│   ├── ProjectCard.tsx     # Tarjeta individual de proyecto (3D)
│   ├── Skills.tsx          # Habilidades con barras de progreso
│   ├── Contact.tsx         # Formulario de contacto
│   ├── Footer.tsx          # Footer con links sociales
│   └── Icons.tsx           # Iconos SVG
├── contexts/
│   └── ThemeContext.tsx    # Context para modo oscuro/claro
├── App.tsx                 # Componente principal
├── index.tsx               # Punto de entrada
├── index.html              # HTML base
└── vite.config.ts          # Configuración de Vite
```

## 🎨 Personalización

### 1. Información Personal

Actualiza los siguientes archivos con tu información:

**Hero.tsx** (línea 49):
```tsx
<h1>¡Hola! Soy <span>Tu Nombre</span></h1>
```

**Header.tsx** (línea 18-19):
```tsx
<a href="#" className="...">Tu Nombre</a>
```

### 2. Proyectos

Edita `components/Projects.tsx` (líneas 4-29) con tus proyectos reales:
```tsx
const projectsData = [
  {
    image: 'url-de-tu-imagen',
    title: 'Tu Proyecto',
    description: 'Descripción de tu proyecto',
    tags: ['React', 'Node.js'],
    demoUrl: 'https://demo.com',
    sourceUrl: 'https://github.com/tu-usuario/proyecto',
  },
];
```

### 3. Experiencia

Actualiza `components/About.tsx` (líneas 11-30) con tu trayectoria:
```tsx
const experiences: Experience[] = [
  {
    year: '2023 - Presente',
    title: 'Tu Cargo',
    company: 'Tu Empresa',
    description: 'Descripción de tus responsabilidades',
  },
];
```

### 4. Habilidades

Modifica `components/Skills.tsx` (líneas 10-32) ajustando niveles:
```tsx
const skillsData: Record<string, Skill[]> = {
  frontend: [
    { name: 'React', level: 95, color: 'from-cyan-500 to-blue-500' },
  ],
};
```

### 5. Información de Contacto

Actualiza en varios archivos:
- `components/Contact.tsx`: Email y enlaces de redes sociales
- `components/Footer.tsx`: Enlaces sociales

## 🎯 Secciones del Portafolio

1. **Hero** - Presentación con efecto de escritura animado
2. **About** - Timeline interactiva de experiencia profesional
3. **Projects** - Galería de proyectos con efectos 3D
4. **Skills** - Barras de progreso animadas por categoría
5. **Contact** - Formulario funcional con validación
6. **Footer** - Enlaces rápidos y redes sociales

## 🌈 Características Destacadas

### Animaciones
- Efecto typing en el título principal
- Blobs de gradiente animados en el fondo
- Aparición progresiva de elementos al hacer scroll
- Efectos 3D en tarjetas de proyectos
- Transiciones suaves en todos los componentes

### Modo Oscuro
- Toggle en el header
- Guardado en localStorage
- Transiciones suaves entre modos
- Colores optimizados para ambos modos

### Formulario de Contacto
- Validación en tiempo real
- Mensajes de error descriptivos
- Feedback visual al enviar
- Limpieza automática tras envío exitoso

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arrastra la carpeta 'dist' a Netlify
```

## 📝 Notas

- Las imágenes de los proyectos usan Lorem Picsum como placeholder
- El formulario de contacto simula el envío (necesita backend)
- Todos los enlaces sociales apuntan a "#" por defecto
- Los colores principales son naranja (#f97316) y rosa (#ec4899)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

⭐ Si te gusta este proyecto, dale una estrella en GitHub!
