# Portfolio Frontend v2

Portfolio personal construido con Astro y Tailwind CSS.

## Stack

- Astro 5 (sin React)
- Tailwind CSS 4
- TypeScript
- Docker + Nginx

## Estructura (estilo Astro)

```text
src/
  components/
  consts/
  data/
  layouts/
  pages/
    en/
  sections/
    home/
    projects/
```

## Desarrollo local

```bash
npm install
npm run dev
```

App local: `http://localhost:4321`

## Scripts

- `npm run dev`: entorno local
- `npm run build`: build de producción en `dist/`
- `npm run preview`: previsualizar build
- `npm run lint`: reglas ESLint
- `npm run typecheck`: validación TypeScript

## Variables de entorno

Copiar `.env.example` a `.env` y completar:

- `PUBLIC_APP_TITLE`
- `PUBLIC_APP_DESCRIPTION`
- `PUBLIC_APP_KEYWORDS`
- `PUBLIC_APP_AUTHOR`
- `PUBLIC_APP_URL`
- `PUBLIC_SOCIAL_GITHUB`
- `PUBLIC_SOCIAL_LINKEDIN`
- `PUBLIC_SOCIAL_TWITTER`
- `PUBLIC_META_OG_IMAGE`

## Docker

```bash
npm run build
docker build -t portfolio-frontend-v2 .
docker run --rm -p 3000:80 portfolio-frontend-v2
```

App local por Docker: `http://localhost:3000`

## CI/CD

Workflow: `.github/workflows/ci-production.yml`

Validaciones antes de build y deploy:

- Lint
- Typecheck
- Build
