/* ==========================================================================
   DATOS DE LA MARCA Y CONTACTO
   Todo lo que se ve en el sitio (nombre, telefonos, correos, textos del
   footer) sale de este archivo. Edita aqui, no en los componentes.
   Las lineas marcadas con TODO son datos de ejemplo que debes reemplazar.
   ========================================================================== */

export const site = {
  marca: 'MKR Solutions',
  slogan: 'Software de escritorio hecho para trabajar',

  // Frase corta que aparece en el footer y en metadatos
  descripcion:
    'Desarrollamos sistemas de escritorio para negocios, consultorios y areas de recursos humanos: funcionan sin internet y la informacion se queda en tu equipo.',

  // TODO: reemplaza con tus datos reales
  contacto: {
    // Numero en formato internacional SIN + ni espacios (asi lo pide wa.me)
    whatsapp: '5213300000000',
    // El mismo numero, pero como quieres que se lea en pantalla
    whatsappVisible: '+52 33 0000 0000',
    telefono: '+52 33 0000 0000',
    correo: 'contacto@mkrsolutions.mx',
    ciudad: 'Guadalajara, Jalisco, Mexico',
    horario: 'Lunes a viernes, 9:00 a 19:00 h'
  },

  // Mensaje precargado al abrir WhatsApp desde los botones del sitio
  whatsappMensaje: 'Hola, vi su sitio y me interesa saber mas sobre sus sistemas.',

  // TODO: pon tus redes o deja el valor vacio ('') para ocultar el enlace
  redes: {
    facebook: '',
    instagram: '',
    linkedin: ''
  },

  // Datos de precios generales (los precios por producto van en productos.js)
  precios: {
    moneda: 'MXN',
    nota: 'Precios en pesos mexicanos, mas IVA. La licencia es un pago unico por equipo instalado.',
    incluyeSiempre: [
      'Instalacion y configuracion inicial en tu equipo',
      'Carga de tu catalogo o lista inicial de datos',
      'Capacitacion de hasta 2 horas para tu personal',
      'Actualizaciones menores del primer ano'
    ],
    // Servicios extra que se cotizan aparte
    adicionales: [
      {
        nombre: 'Equipo adicional',
        desc: 'Licencia para una segunda o tercera computadora del mismo negocio.',
        precio: '30% de la licencia' // TODO
      },
      {
        nombre: 'Migracion de datos',
        desc: 'Pasamos tu informacion desde Excel u otro sistema al nuevo sistema.',
        precio: 'Desde $1,500' // TODO
      },
      {
        nombre: 'Modulo a la medida',
        desc: 'Reportes, formatos o procesos propios de tu operacion.',
        precio: 'Cotizacion' // TODO
      },
      {
        nombre: 'Capacitacion extra',
        desc: 'Sesiones adicionales para personal nuevo, presenciales o en linea.',
        precio: '$600 por hora' // TODO
      }
    ]
  },

  // Se muestran como sellos de confianza en el inicio
  garantias: [
    'Sin renta mensual obligatoria',
    'Tus datos viven en tu equipo',
    'Instalacion el mismo dia'
  ]
}

/* Enlace de WhatsApp listo para usar. Se puede pasar un mensaje distinto:
   waLink('Me interesa MkrMed para mi consultorio') */
export function waLink(mensaje) {
  const texto = encodeURIComponent(mensaje || site.whatsappMensaje)
  return `https://wa.me/${site.contacto.whatsapp}?text=${texto}`
}

/* Enlace de correo con asunto precargado */
export function mailLink(asunto, cuerpo) {
  const params = []
  if (asunto) params.push(`subject=${encodeURIComponent(asunto)}`)
  if (cuerpo) params.push(`body=${encodeURIComponent(cuerpo)}`)
  return `mailto:${site.contacto.correo}${params.length ? '?' + params.join('&') : ''}`
}
