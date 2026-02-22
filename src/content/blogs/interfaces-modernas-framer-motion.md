---
title: "Cómo construir interfaces modernas con Framer Motion"
excerpt: "Aprende a crear animaciones fluidas y profesionales en React usando Framer Motion, la librería de animación más popular del ecosistema."
date: "2026-02-12"
readTime: "8 min"
category: "Frontend"
color: "from-purple-500/20 to-indigo-500/20"
---

# Cómo construir interfaces modernas con Framer Motion

Las animaciones son una parte fundamental de las interfaces modernas. No solo hacen que la experiencia sea más agradable, sino que también guían al usuario a través de la interfaz de manera intuitiva.

## ¿Por qué Framer Motion?

Framer Motion es la librería de animación más popular para React. Ofrece una API declarativa que se integra perfectamente con el modelo de componentes de React.

### Ventajas principales:

- **API declarativa:** Define animaciones como props de componentes
- **Gestos:** Soporte nativo para hover, tap, drag y más
- **Layout animations:** Animaciones automáticas cuando cambia el layout
- **Server-side rendering:** Compatible con Next.js y SSR

## Ejemplo básico

```jsx
import { motion } from "framer-motion";

function AnimatedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Hola mundo</h2>
    </motion.div>
  );
}
```

## Animaciones al hacer scroll

Una de las funcionalidades más útiles es `whileInView`, que permite activar animaciones cuando un elemento entra en el viewport:

```jsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  Este contenido aparece al hacer scroll
</motion.div>
```

## Conclusión

Framer Motion es una herramienta esencial para cualquier desarrollador React que quiera crear interfaces profesionales y atractivas. Su API intuitiva y su rendimiento optimizado la convierten en la mejor opción para animaciones en el ecosistema React.
