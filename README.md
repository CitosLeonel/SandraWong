# Sandra Quiromasajista · Web

Landing page de conversión para servicios de quiromasaje y bienestar en Madrid.

## Estructura del proyecto

```
sandra-quiromasajista/
├── index.html          → Landing page principal
├── privacidad.html     → Política de privacidad (obligatoria por RGPD)
├── aviso-legal.html    → Aviso legal
├── css/
│   └── styles.css      → Todos los estilos (variables, componentes, responsive)
├── js/
│   └── main.js         → Interactividad: nav, FAQ, formulario, tracking
├── images/
│   ├── favicon.svg     → Favicon del sitio
│   ├── og-image.jpg    → Imagen para redes sociales / ads (agregar: 1200x630px)
│   └── sandra.jpg      → Foto de Sandra (agregar)
└── fonts/              → Fuentes locales (opcional)
```

## Configuración antes de subir a producción

### 1. Formulario de contacto
El formulario usa **Formspree** (gratuito hasta 50 envíos/mes):
1. Crear cuenta en [formspree.io](https://formspree.io)
2. Crear nuevo formulario
3. Reemplazar `YOUR_FORM_ID` en `index.html` con tu ID:
   ```html
   <form action="https://formspree.io/f/TU_ID_AQUI" method="POST">
   ```

Alternativas: EmailJS, Netlify Forms (si se despliega en Netlify).

### 2. Número de WhatsApp
Reemplazar todos los `34XXXXXXXXX` con el número real de Sandra (sin espacios, con prefijo España 34):
```
Buscar: 34XXXXXXXXX
Reemplazar: 34612345678  ← ejemplo
```

### 3. Google Analytics / Ads
Descomentar en `<head>` de `index.html` y añadir tu ID:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```
Y en `js/main.js`, reemplazar el ID de conversión de Google Ads.

### 4. Meta Pixel (Facebook Ads)
Añadir en `<head>` justo antes de `</head>`:
```html
<script>
!function(f,b,e,v,n,t,s){...}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'TU_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

### 5. Imágenes
- Añadir `images/sandra.jpg` (foto profesional de Sandra)
- Añadir `images/og-image.jpg` (1200×630px para redes sociales y ads)
- Reemplazar los datos de `[nombre del centro]`, `[X] años`, `[Barrio/Zona]`, etc. en `index.html`

### 6. Datos legales
En `privacidad.html` y `aviso-legal.html`, rellenar:
- `Sandra [Apellido]` → nombre completo de Sandra
- Email y ubicación real

---

## Despliegue en producción

### Opción A: GitHub Pages (gratuito)
1. Subir este proyecto a un repositorio de GitHub
2. Ir a Settings → Pages → Branch: `main`, carpeta: `/ (root)`
3. URL: `https://[usuario].github.io/[repositorio]`
4. Para usar dominio propio: añadir archivo `CNAME` con el dominio

### Opción B: Netlify (recomendado, gratuito)
1. Arrastrar la carpeta del proyecto a [app.netlify.com/drop](https://app.netlify.com/drop)
2. Dominio gratis: `tu-nombre.netlify.app`
3. Con dominio propio: configurar DNS

### Opción C: Hostinger / hosting tradicional
1. Subir los archivos por FTP a la carpeta `public_html`
2. Funciona con cualquier hosting que sirva archivos estáticos

---

## Dominio sugerido
- `sandraquiromasajista.es` (disponible si es nueva)
- `sandraquiromasajista.com`
- `masajesmadrid.es`

---

## Mantenimiento
- **Testimonios**: Actualizar con testimonios reales en `index.html` (sección `#testimonios`)
- **Precios**: Actualizar en la sección `#servicios` cuando cambien
- **Fotos**: Añadir galería de resultados o del espacio de trabajo en el futuro
