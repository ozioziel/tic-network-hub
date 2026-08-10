# NetScope TIC

Sitio académico frontend para la materia **Gerencia de las TIC**. Incluye una portada y dos páginas de contenido: Gestión de Tecnología, y Ciencia, Tecnología e Innovación.

## Tecnologías

- React 19
- Vite 8
- TypeScript
- React Router
- Lucide React
- CSS moderno y responsive

## Instalación y ejecución

```bash
npm install
npm run dev
```

Para generar la versión de producción:

```bash
npm run build
npm run preview
```

## Video de portada

Coloca el archivo MP4 en:

```text
public/videos/technology-background.mp4
```

El componente ya usa `autoPlay`, `muted`, `loop` y `playsInline`. Mientras el archivo no exista, la portada utiliza un fondo tecnológico degradado como alternativa visual.
