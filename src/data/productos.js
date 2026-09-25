/* ==========================================================================
   CATALOGO DE PRODUCTOS
   Cada objeto de este arreglo genera automaticamente:
     - su tarjeta en el inicio
     - su pagina completa en /productos/<slug>
     - su fila en /precios
   Para agregar un producto nuevo, copia un bloque completo y cambia los datos.
   Los precios estan marcados con TODO: son ejemplos, ponles tus cifras.
   ========================================================================== */

export const productos = [
  {
    slug: 'mkrcart',
    nombre: 'MkrCart',
    categoria: 'Punto de venta e inventario',
    tagline: 'Cobra, controla tu inventario y cierra tu caja sin depender de internet',
    // Acento de color del producto (el mismo que usa la app)
    color: '#6C5CE7',
    colorDark: '#4C3BCF',
    colorSoft: '#F2F0FE',
    mockup: 'cart',
    disponible: true,

    resumen:
      'MkrCart es el sistema de punto de venta que se instala en la computadora de tu negocio. Registra cada venta, descuenta el inventario en automatico, guarda a tus clientes y proveedores, y al final del dia te entrega el corte de caja. Toda la informacion se guarda en tu propio equipo, asi que sigue funcionando aunque se caiga el internet.',

    paraQuien: [
      'Tiendas y minisuper',
      'Abarrotes',
      'Ferreterias',
      'Papelerias',
      'Boutiques y tiendas de ropa',
      'Refaccionarias'
    ],

    highlights: [
      { icon: 'cart', texto: 'Venta en mostrador con busqueda rapida por nombre o codigo' },
      { icon: 'box', texto: 'Inventario que se descuenta solo con cada venta' },
      { icon: 'cash', texto: 'Corte de caja con entradas, salidas y diferencias' },
      { icon: 'chart', texto: 'Reportes de lo que se vende y lo que se queda parado' }
    ],

    modulos: [
      {
        icon: 'cart',
        nombre: 'Ventas',
        desc: 'Mostrador de venta con busqueda por nombre o codigo, varios productos por ticket, descuentos, cambio y ticket impreso.'
      },
      {
        icon: 'box',
        nombre: 'Productos',
        desc: 'Catalogo con precio de compra y de venta, codigo, categoria y existencias. Alta rapida sin salir de la venta.'
      },
      {
        icon: 'users',
        nombre: 'Clientes',
        desc: 'Registro de clientes con su historial de compras, para dar seguimiento y saber quien te compra mas.'
      },
      {
        icon: 'truck',
        nombre: 'Proveedores',
        desc: 'Directorio de proveedores ligado a las entradas de mercancia, con contacto y productos que te surten.'
      },
      {
        icon: 'cash',
        nombre: 'Salidas y cortes',
        desc: 'Registro de gastos y retiros de caja, y corte por turno con el efectivo esperado contra el contado.'
      },
      {
        icon: 'list',
        nombre: 'Inventario',
        desc: 'Entradas de mercancia, ajustes por merma y avisos de existencias bajas antes de quedarte sin producto.'
      },
      {
        icon: 'chart',
        nombre: 'Reportes',
        desc: 'Ventas por dia, producto y usuario, utilidad estimada y productos sin movimiento. Exportables a Excel o CSV.'
      },
      {
        icon: 'settings',
        nombre: 'Ajustes',
        desc: 'Datos y logo del negocio para el ticket, usuarios con permisos por rol, y respaldo y restauracion de la base.'
      }
    ],

    // TODO: precios de ejemplo, reemplaza las cifras
    precio: {
      licencia: '$8,900',
      licenciaNota: 'Pago unico por equipo, incluye instalacion y capacitacion',
      soporte: '$2,400 al ano',
      soporteNota: 'Opcional: soporte, ajustes menores y actualizaciones'
    },

    faq: [
      {
        p: 'Necesito internet para vender?',
        r: 'No. MkrCart trabaja completamente en la computadora del negocio y guarda todo en una base local, asi que puedes seguir cobrando aunque no haya internet.'
      },
      {
        p: 'Sirve con lector de codigo de barras e impresora de tickets?',
        r: 'Si. El lector funciona como teclado, se configura solo. Para el ticket se usa la impresora que ya tengas instalada en Windows, incluidas las termicas de 58 y 80 mm.'
      },
      {
        p: 'Puedo tener varias cajas?',
        r: 'Si. Se instala una licencia por equipo. Si necesitas que varias cajas compartan el mismo inventario en tiempo real, lo cotizamos como instalacion en red.'
      },
      {
        p: 'Que pasa si se estropea la computadora?',
        r: 'Desde Ajustes se genera un respaldo de toda la base en un solo archivo. Con ese archivo se restaura la informacion completa en el equipo nuevo.'
      },
      {
        p: 'Emite facturas del SAT?',
        r: 'MkrCart emite tickets de venta, no CFDI. Si necesitas facturacion electronica, se cotiza como modulo a la medida.'
      }
    ]
  },

  {
    slug: 'mkrmed',
    nombre: 'MkrMed',
    categoria: 'Sistema para consultorio medico',
    tagline: 'Agenda, expediente clinico y recetas en PDF, todo en la computadora del consultorio',
    color: '#147D8E',
    colorDark: '#0E5F6D',
    colorSoft: '#EEF7F9',
    mockup: 'med',
    disponible: true,

    resumen:
      'MkrMed organiza el consultorio de principio a fin: la agenda del dia, el expediente de cada paciente y la receta lista para imprimir. El expediente incluye signos vitales con IMC, padecimiento actual, exploracion, diagnostico con CIE-10 y plan de tratamiento. Las recetas y las notas se generan en PDF con el encabezado del consultorio y la cedula del medico que firma.',

    paraQuien: [
      'Consultorios de medicina general',
      'Especialistas con consulta privada',
      'Pediatria y ginecologia',
      'Nutricion y medicina interna',
      'Clinicas pequenas con varios medicos'
    ],

    highlights: [
      { icon: 'calendar', texto: 'Agenda del dia con avisos de traslape de horario' },
      { icon: 'folder', texto: 'Expediente clinico completo, consulta por consulta' },
      { icon: 'file', texto: 'Recetas y notas en PDF, listas para imprimir' },
      { icon: 'lock', texto: 'Permisos por rol: recepcion no ve el expediente clinico' }
    ],

    modulos: [
      {
        icon: 'calendar',
        nombre: 'Agenda',
        desc: 'Citas por dia con estados (programada, confirmada, atendida, cancelada, no asistio), aviso de traslape y salto directo a la consulta.'
      },
      {
        icon: 'users',
        nombre: 'Pacientes',
        desc: 'Alta con datos generales, alergias y antecedentes heredofamiliares, personales, quirurgicos y ginecoobstetricos. Folio de expediente automatico.'
      },
      {
        icon: 'folder',
        nombre: 'Expedientes',
        desc: 'Historial de consultas con signos vitales e IMC calculado, padecimiento actual, exploracion, diagnostico con CIE-10, plan, estudios y costo.'
      },
      {
        icon: 'file',
        nombre: 'Recetas',
        desc: 'Receta con varios medicamentos (dosis, via, frecuencia, duracion, cantidad e indicaciones), folio, PDF e impresion. Duplicado para pacientes cronicos.'
      },
      {
        icon: 'pill',
        nombre: 'Medicamentos',
        desc: 'Catalogo propio con sugerencias de dosis, frecuencia y duracion que alimentan el autocompletado de la receta.'
      },
      {
        icon: 'chart',
        nombre: 'Reportes',
        desc: 'Consultas, citas por estado, pacientes nuevos, recetas, ingresos y los diagnosticos y medicamentos mas frecuentes. Exportables a Excel o CSV.'
      },
      {
        icon: 'stethoscope',
        nombre: 'Personal y roles',
        desc: 'Cuentas para administrador, medico y recepcion. Recepcion solo ve la agenda y el alta de pacientes, nunca el expediente ni las recetas.'
      },
      {
        icon: 'settings',
        nombre: 'Ajustes',
        desc: 'Datos y logo del consultorio, pie de receta, tamano de receta (media carta o carta), horario de atencion y respaldos.'
      }
    ],

    // TODO: precios de ejemplo, reemplaza las cifras
    precio: {
      licencia: '$11,900',
      licenciaNota: 'Pago unico por equipo, incluye instalacion y capacitacion',
      soporte: '$2,900 al ano',
      soporteNota: 'Opcional: soporte, ajustes menores y actualizaciones'
    },

    faq: [
      {
        p: 'Donde se guarda la informacion de mis pacientes?',
        r: 'En una base de datos local, dentro de la computadora del consultorio. No se sube a ningun servidor ni a la nube, y el acceso requiere usuario y contrasena.'
      },
      {
        p: 'En que tamano se imprime la receta?',
        r: 'Media carta o carta, se elige en Ajustes. La receta lleva el encabezado del consultorio con logo, el nombre, especialidad y cedula del medico que firma, y el pie de pagina que tu configures.'
      },
      {
        p: 'Puede usarlo mas de un medico?',
        r: 'Si. Se dan de alta las cuentas del personal y cada consulta y receta queda firmada por el medico que la atendio.'
      },
      {
        p: 'Se puede llevar el expediente completo a otro formato?',
        r: 'Si. Se genera el PDF de una nota o del expediente completo del paciente, y los reportes se exportan a Excel o CSV.'
      },
      {
        p: 'Como se respalda?',
        r: 'Desde Ajustes se crea una copia consistente de toda la base en un archivo, que puedes guardar en un disco externo o en la nube que tu uses. Desde el mismo lugar se restaura.'
      }
    ]
  },

  {
    slug: 'mkrrh',
    nombre: 'MkrRH',
    categoria: 'Recursos humanos y nomina',
    tagline: 'Tu plantilla, las incidencias y la nomina calculada, en un solo sistema',
    color: '#0E8F6B',
    colorDark: '#0A6E52',
    colorSoft: '#E6F8F4',
    mockup: 'rh',
    disponible: true,

    resumen:
      'MkrRH lleva el expediente de tu personal y calcula la nomina periodo tras periodo. Registra a cada empleado con su contrato, su salario y sus documentos, controla la asistencia, las vacaciones conforme a la Ley Federal del Trabajo, las incapacidades y los permisos, y con esa informacion genera los recibos con ISR, cuota del IMSS, horas extra y descuentos de INFONAVIT, FONACOT o prestamos. Cuando alguien causa baja, calcula el finiquito antes de confirmarla.',

    paraQuien: [
      'Empresas de 10 a 200 empleados',
      'Restaurantes y cadenas con varias sucursales',
      'Talleres y plantas de produccion',
      'Comercios con varios turnos',
      'Despachos contables que llevan nomina',
      'Areas de recursos humanos que hoy usan Excel'
    ],

    highlights: [
      { icon: 'cash', texto: 'Nomina con ISR, IMSS, horas extra y descuentos ya calculados' },
      { icon: 'calendar', texto: 'Vacaciones conforme a la LFT, con el saldo de cada empleado al dia' },
      { icon: 'clock', texto: 'Asistencia, faltas, retardos y horas extra capturadas por dia' },
      { icon: 'file', texto: 'Recibos de nomina en PDF y reportes exportables a Excel' }
    ],

    modulos: [
      {
        icon: 'badge',
        nombre: 'Empleados',
        desc: 'Alta con datos personales, CURP, RFC y NSS, contrato, salario diario e integrado, jornada, dias de descanso, banco y CLABE. Numero de empleado automatico.'
      },
      {
        icon: 'clock',
        nombre: 'Asistencia',
        desc: 'Captura por dia o por lote de asistencia, falta, retardo, permiso, descanso y festivo, con las horas extra que despues se pagan en el recibo.'
      },
      {
        icon: 'calendar',
        nombre: 'Vacaciones',
        desc: 'Dias generados por antiguedad segun la tabla de la LFT, dias tomados, ajustes manuales y saldo disponible, con aviso de los periodos por vencer.'
      },
      {
        icon: 'firstAid',
        nombre: 'Incapacidades y permisos',
        desc: 'Incapacidades del IMSS por enfermedad, riesgo de trabajo o maternidad, y permisos con o sin goce de sueldo, que se descuentan solos en la nomina.'
      },
      {
        icon: 'cash',
        nombre: 'Nomina',
        desc: 'Periodos semanal, catorcenal, quincenal o mensual. Calcula ISR, cuota obrera del IMSS, horas extra, aguinaldo y prima vacacional, y cierra el periodo.'
      },
      {
        icon: 'exit',
        nombre: 'Bajas y finiquitos',
        desc: 'Calculo previo del finiquito con vacaciones pendientes, prima vacacional, aguinaldo proporcional y salarios devengados, antes de confirmar la baja.'
      },
      {
        icon: 'folder',
        nombre: 'Expediente digital',
        desc: 'Contrato, identificacion, comprobantes y demas papeles guardados por empleado, con aviso de los documentos vencidos o proximos a vencer.'
      },
      {
        icon: 'org',
        nombre: 'Organigrama',
        desc: 'Estructura por departamento y puesto con el jefe directo de cada persona, para ver de un vistazo como esta armada la plantilla.'
      },
      {
        icon: 'chart',
        nombre: 'Reportes',
        desc: 'Plantilla, saldos de vacaciones, incidencias, nomina por periodo, bajas y finiquitos, documentos por vencer e incapacidades. Exportables a Excel.'
      },
      {
        icon: 'settings',
        nombre: 'Ajustes y catalogos',
        desc: 'Datos de la empresa, departamentos y puestos, dias festivos, tabla de vacaciones, tarifa de ISR, UMA, usuarios por rol y respaldos de la base.'
      }
    ],

    // TODO: precios de ejemplo, reemplaza las cifras
    precio: {
      licencia: '$14,900',
      licenciaNota: 'Pago unico por equipo, incluye instalacion y capacitacion',
      soporte: '$3,600 al ano',
      soporteNota: 'Opcional: soporte, ajustes menores y actualizaciones'
    },

    faq: [
      {
        p: 'Calcula el ISR y las cuotas del IMSS?',
        r: 'Si. El recibo calcula el ISR con la tarifa del articulo 96 y la cuota obrera del IMSS a partir del salario base de cotizacion. La tarifa, la UMA y el subsidio quedan editables en Ajustes para que los actualices cuando cambien.'
      },
      {
        p: 'Timbra los recibos ante el SAT?',
        r: 'No. MkrRH genera el recibo en PDF con percepciones, deducciones y neto a pagar, pero no emite CFDI de nomina. Si necesitas el timbrado, se cotiza como modulo a la medida.'
      },
      {
        p: 'Como quedan las vacaciones con la reforma?',
        r: 'La tabla de dias por ano de antiguedad viene cargada con la vigente y se edita en Ajustes, asi que los saldos salen conforme a la LFT. Si la ley vuelve a cambiar, solo se actualiza la tabla.'
      },
      {
        p: 'Quien puede ver los sueldos?',
        r: 'Cada persona entra con su usuario y su rol. Consulta solo lee, supervisor captura incidencias, y recursos humanos y administrador operan todo, incluida la nomina.'
      },
      {
        p: 'Puedo llevar mas de una empresa?',
        r: 'Cada instalacion lleva una empresa con su propia base de datos. Si eres despacho y manejas varias, se instala una copia por empresa o lo cotizamos como version multiempresa.'
      },
      {
        p: 'Como cargo mi plantilla actual?',
        r: 'Nos pasas tu lista en Excel y la cargamos como parte de la instalacion. De ahi en adelante el alta y la baja de personal la haces tu desde el sistema.'
      }
    ]
  }
]

/* --------------------------------------------------------------------------
   PROXIMOS PRODUCTOS
   Se muestran al final del inicio como "en desarrollo".
   TODO: reemplaza estos ejemplos por los tuyos, o deja el arreglo vacio []
   para que la seccion no aparezca.
   -------------------------------------------------------------------------- */
export const proximos = [
  {
    nombre: 'MkrRent',
    categoria: 'Control de rentas',
    desc: 'Contratos, cobros mensuales, recordatorios de pago y estado de cuenta por inquilino.',
    icon: 'tag',
    estado: 'En desarrollo'
  },
  {
    nombre: 'MkrTaller',
    categoria: 'Taller y servicio',
    desc: 'Ordenes de servicio, refacciones usadas, avance por tecnico y presupuesto para el cliente.',
    icon: 'settings',
    estado: 'En desarrollo'
  },
  {
    nombre: 'Tu sistema a la medida',
    categoria: 'Desarrollo propio',
    desc: 'Si tu operacion no cabe en un sistema de caja, lo construimos sobre la misma base: local, rapido y sin renta mensual.',
    icon: 'spark',
    estado: 'Por encargo'
  }
]

/* Ventajas comunes a todos los productos (seccion "Por que MKR" del inicio) */
export const ventajas = [
  {
    icon: 'wifiOff',
    titulo: 'Funciona sin internet',
    desc: 'El sistema corre en tu computadora. Si se cae la conexion, tu sigues trabajando igual.'
  },
  {
    icon: 'lock',
    titulo: 'Tus datos son tuyos',
    desc: 'La informacion se guarda en una base local en tu equipo, no en un servidor ajeno.'
  },
  {
    icon: 'tag',
    titulo: 'Sin renta obligatoria',
    desc: 'Pagas la licencia una vez. El soporte anual es opcional, no un candado para poder usarlo.'
  },
  {
    icon: 'print',
    titulo: 'Documentos listos para imprimir',
    desc: 'Tickets, recetas, notas y reportes salen en PDF con los datos de tu negocio o consultorio.'
  },
  {
    icon: 'shield',
    titulo: 'Respaldos en un clic',
    desc: 'Copia completa de la base en un solo archivo, y restauracion desde el mismo lugar.'
  },
  {
    icon: 'monitor',
    titulo: 'Rapido en equipos normales',
    desc: 'No necesitas comprar computadora nueva: funciona bien en el equipo que ya tienes.'
  }
]

/* Como trabajamos (seccion de pasos del inicio) */
export const pasos = [
  {
    n: '01',
    titulo: 'Demostracion sin costo',
    desc: 'Te mostramos el sistema funcionando, con tus casos reales, y aclaramos que si hace y que no.'
  },
  {
    n: '02',
    titulo: 'Instalacion y configuracion',
    desc: 'Lo instalamos en tu equipo, cargamos tu catalogo o tus datos iniciales y dejamos todo listo para operar.'
  },
  {
    n: '03',
    titulo: 'Capacitacion y soporte',
    desc: 'Entrenamos a tu personal y quedamos disponibles para dudas, ajustes y actualizaciones.'
  }
]

export function getProducto(slug) {
  return productos.find((p) => p.slug === slug)
}

/* --------------------------------------------------------------------------
   FICHA TECNICA (igual para todos los productos)
   Se muestra en la pagina de cada producto. TODO: ajusta si cambia algo.
   -------------------------------------------------------------------------- */
export const fichaTecnica = [
  { icon: 'monitor', titulo: 'Sistema', valor: 'Windows 10 y 11 (64 bits). Tambien compilamos para macOS.' },
  { icon: 'box', titulo: 'Equipo minimo', valor: '4 GB de RAM y 500 MB libres de disco. Funciona en equipos de oficina.' },
  { icon: 'lock', titulo: 'Datos', valor: 'Base de datos local en el equipo, con acceso por usuario y contrasena.' },
  { icon: 'print', titulo: 'Documentos', valor: 'PDF e impresion directa, sin programas adicionales.' },
  { icon: 'download', titulo: 'Exportacion', valor: 'Reportes a Excel (.xlsx) y CSV.' },
  { icon: 'refresh', titulo: 'Respaldos', valor: 'Respaldo y restauracion de toda la base desde el propio sistema.' }
]
