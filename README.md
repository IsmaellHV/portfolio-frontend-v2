# 🚀 Portfolio Frontend v2

Portfolio personal de Ismael Hurtado - Full-Stack Developer & AI Specialist

## 📋 Descripción

Portfolio moderno y responsivo construido con Astro, React y TailwindCSS. Optimizado para rendimiento y SEO.

## 🛠️ Tecnologías

- **Framework**: [Astro](https://astro.build) 5.17.1
- **UI Library**: React 19
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Docker + Nginx

## 🚀 Inicio Rápido

### Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# La aplicación estará disponible en http://localhost:4321
```

### 🐳 Despliegue con Docker

#### Opción 1: Docker Compose (Recomendado)

```bash
# Despliegue completo (build + start)
./deploy.sh deploy

# O manualmente
docker-compose up -d
```

#### Opción 2: Script de Despliegue

```bash
# Ver comandos disponibles
./deploy.sh help

# Construir imagen
./deploy.sh build

# Iniciar contenedor
./deploy.sh start

# Ver logs
./deploy.sh logs

# Ver estado
./deploy.sh status
```

La aplicación estará disponible en: **http://localhost:3000**

Para más detalles sobre Docker, consulta [DOCKER.md](./DOCKER.md)

## 📁 Estructura del Proyecto

```text
/
├── public/              # Assets estáticos
├── src/
│   ├── components/      # Componentes React/Astro
│   ├── layouts/         # Layouts de página
│   ├── pages/           # Páginas (routing automático)
│   └── styles/          # Estilos globales
├── Dockerfile           # Configuración Docker multi-stage
├── docker-compose.yml   # Orquestación de contenedores
├── nginx.conf           # Configuración Nginx
└── deploy.sh            # Script de despliegue
```

## 🧞 Comandos Disponibles

### NPM Commands

| Comando              | Acción                                          |
| :------------------- | :---------------------------------------------- |
| `npm install`        | Instala dependencias                            |
| `npm run dev`        | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build`      | Construye el sitio para producción en `./dist/` |
| `npm run preview`    | Previsualiza el build localmente                |

### Docker Commands

| Comando                    | Acción                                    |
| :------------------------- | :---------------------------------------- |
| `./deploy.sh deploy`       | Despliegue completo (build + start)       |
| `./deploy.sh build`        | Construir imagen Docker                   |
| `./deploy.sh start`        | Iniciar contenedor                        |
| `./deploy.sh stop`         | Detener contenedor                        |
| `./deploy.sh restart`      | Reiniciar contenedor                      |
| `./deploy.sh logs`         | Ver logs del contenedor                   |
| `./deploy.sh status`       | Ver estado del contenedor                 |
| `./deploy.sh clean`        | Limpiar contenedor e imagen               |

## 🌍 Variables de Entorno

Copia `.env.example` a `.env` y configura las variables:

```bash
cp .env.example .env
```

Variables disponibles:
- `PUBLIC_APP_TITLE` - Título de la aplicación
- `PUBLIC_APP_DESCRIPTION` - Descripción para SEO
- `PUBLIC_APP_KEYWORDS` - Keywords para SEO
- `PUBLIC_APP_AUTHOR` - Autor del sitio
- `PUBLIC_APP_URL` - URL del sitio
- `PUBLIC_SOCIAL_*` - Enlaces a redes sociales

## 🚢 Despliegue en Producción

### Usando Docker Compose

```bash
# Producción
docker-compose -f docker-compose.prod.yml up -d

# Con dominio personalizado, configura nginx como reverse proxy
```

### CI/CD

El proyecto incluye GitHub Actions para CI/CD automático. Ver `.github/workflows/`

## 📊 Características

- ✅ **SEO Optimizado**: Meta tags, sitemap, robots.txt
- ✅ **Rendimiento**: Lighthouse score 95+
- ✅ **Responsive**: Mobile-first design
- ✅ **Accesibilidad**: WCAG 2.1 AA compliant
- ✅ **Docker**: Despliegue containerizado
- ✅ **Multi-stage Build**: Imágenes optimizadas (~25MB)
- ✅ **Healthchecks**: Monitoreo automático
- ✅ **Nginx**: Servidor web de alto rendimiento

## 🔧 Configuración Nginx

El archivo `nginx.conf` incluye:
- Compresión gzip
- Headers de seguridad
- Manejo de errores
- Routing para SPA

## 📝 Documentación Adicional

- [DOCKER.md](./DOCKER.md) - Guía completa de Docker
- [SEO_CHECKLIST.md](./SEO_CHECKLIST.md) - Checklist de SEO

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Ismael Hurtado**
- Website: [ismaelhv.com](https://ismaelhv.com)
- GitHub: [@ismaellhv](https://github.com/ismaellhv)
- LinkedIn: [ihurtadov](https://linkedin.com/in/ihurtadov)
- Twitter: [@Ismael_Hv](https://x.com/Ismael_Hv)

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!

