# syntax=docker/dockerfile:1.7

FROM node:25-alpine AS build
WORKDIR /app

# Install dependencies with lockfile for reproducible builds
COPY package.json package-lock.json ./
RUN npm ci

# Build Astro static output
COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:80/ || exit 1
