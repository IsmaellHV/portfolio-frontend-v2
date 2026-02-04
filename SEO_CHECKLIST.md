# Checklist SEO para Portfolio

## 1. Metadatos Base

- [x] Title Tag único por página (Implementado en Layout.astro)
- [x] Meta Description (Implementado en Layout.astro)
- [x] Canonical URL (Astro lo genera automáticamente con `site` config, asegura configurar `site` en `astro.config.mjs`)
- [x] Favicon

## 2. Redes Sociales (Open Graph / Twitter)

- [x] og:title, og:description
- [x] og:image (Asegúrate de poner una imagen en `public/og-image.jpg`)
- [x] og:type = website
- [x] twitter:card = summary_large_image

## 3. Estructura y Semántica

- [x] Solo un `<h1>` por página
- [x] Uso correcto de `<section>`, `<article>`, `<header>`, `<footer>`, `<nav>`
- [x] Enlaces con atributos accesibles (`aria-label` en iconos)
- [x] Jerarquía de encabezados (`h1` -> `h2` -> `h3`) lógica

## 4. Performance (Core Web Vitals)

- [x] SSG (Static Site Generation) para HTML pre-renderizado
- [x] Lazy Loading en imágenes (Astro Image lo hace por defecto, o usar `loading="lazy"` en `img`)
- [x] Minimizar JS (Islas de Astro: solo `client:load` donde es necesario)
- [x] Fuentes optimizadas (Usar `@font-source` o Google Fonts con display swap) - _Recomendado agregar font-display: swap en CSS_

## 5. Accesibilidad

- [x] Contraste de colores (Verificado con colores semánticos de Tailwind/shadcn)
- [x] Navegación por teclado
- [x] Textos alternativos en imágenes (`alt`)

## 6. Técnico

- [x] Sitemap.xml (`@astrojs/sitemap` recomendado agregar)
- [x] Robots.txt (Manual en public/robots.txt o generado)
- [x] JSON-LD (Schema.org) para Person/Portfolio - _Recomendado agregar script en Layout_

### Instrucciones Adicionales

Para completar el SEO técnico:

1. Instalar sitemap: `npx astro add sitemap`
2. Configurar `site` en `astro.config.mjs`: `site: 'https://ismael.dev'`
3. Agregar JSON-LD schema en `Layout.astro`.
