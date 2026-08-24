# MKR Web

Sitio web de **MKR Solutions**: catalogo y promocion de los sistemas de escritorio
(**MkrCart**, **MkrMed** y los que vengan).

Vue 3 + Vite + Vue Router, sin backend. Todo el contenido sale de dos archivos de datos.

## Puesta en marcha

```bash
pnpm install
pnpm dev        # desarrollo en http://localhost:5174
pnpm build      # compila a dist/
pnpm preview    # revisa el compilado antes de publicar
```

## Que edito y donde

Casi nunca necesitas tocar los componentes. El contenido vive aqui:

| Archivo | Que contiene |
| --- | --- |
| `src/data/site.js` | Nombre de la marca, WhatsApp, correo, telefono, ciudad, horario, redes, nota de precios, lo que incluye toda licencia y los servicios adicionales. |
| `src/data/productos.js` | Cada producto: nombre, categoria, tagline, resumen, para quien es, modulos, precios y preguntas frecuentes. Tambien los proximos productos, las ventajas del inicio y los pasos de "como trabajamos". |
| `index.html` | Titulo, descripcion y etiquetas Open Graph para buscadores y redes. |
| `public/robots.txt` | Dominio del sitemap. |

Busca los comentarios `TODO:` — marcan cada dato de ejemplo que hay que reemplazar:
**telefono de WhatsApp, correo, ciudad y todos los precios**.

### Agregar un producto nuevo

1. En `src/data/productos.js`, copia un bloque completo de `productos` y cambia los datos.
2. El `slug` define su direccion: `slug: 'mkrfix'` genera `/productos/mkrfix`.
3. Aparece solo en el menu, en el inicio, en el footer, en precios y en el selector del formulario.
4. Para la imagen usa `mockup: 'cart'` o `mockup: 'med'` mientras no tenga la suya (ver abajo).

Un producto que todavia no esta listo va en el arreglo `proximos` del mismo archivo, no en
`productos`: se muestra en la seccion "Lo que viene" sin pagina propia.

## Capturas de pantalla

Ahora mismo las pantallas de las apps son dibujos en SVG (`src/components/MockupCart.vue` y
`MockupMed.vue`), no capturas reales. Cuando tengas capturas:

1. Guardalas en `public/capturas/` (por ejemplo `mkrcart-ventas.png`).
2. En el componente correspondiente, cambia el bloque `<svg>...</svg>` por:
   ```html
   <img src="/capturas/mkrcart-ventas.png" alt="Pantalla de ventas de MkrCart" />
   ```

Los datos de los mockups (nombres de clientes, medicamentos, precios) son inventados y estan al
final de cada componente, en `<script setup>`, si quieres cambiarlos.

## Formulario de contacto

No hay servidor: el formulario arma el mensaje y lo manda por **WhatsApp** o por **correo**, con
los datos ya escritos. Si despues quieres que se envie solo, en `src/views/Contacto.vue` hay un
comentario al final del `<script setup>` con el `fetch` listo para conectar Formspree, EmailJS o tu
propia API.

## Publicar

El sitio usa rutas normales (`/precios`, no `/#/precios`), asi que el hosting tiene que devolver
`index.html` en cualquier ruta. Ya viene resuelto para los dos casos mas comunes:

- **Netlify / Cloudflare Pages** — `public/_redirects`
- **Vercel** — `vercel.json`

Comando de build: `pnpm build`. Carpeta a publicar: `dist`.

Si lo subes a un subdirectorio (por ejemplo `misitio.com/web/`), agrega `base: '/web/'` en
`vite.config.js`.

## Estructura

```
src/
  data/          site.js, productos.js, icons.js   <- aqui se edita el contenido
  components/    encabezado, pie, mockups, FAQ, CTA, boton de WhatsApp
  views/         Home, Producto, Precios, Contacto, NotFound
  router/        rutas y titulo de la pestana
  styles/        main.css: colores de marca, botones, tarjetas
```

El color de marca (`--brand`) y el acento de cada producto (`color`, `colorDark`, `colorSoft` en
`productos.js`) se combinan solos: cada pagina de producto se pinta con su propio color.
