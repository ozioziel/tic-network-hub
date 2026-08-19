// =============================================================
//  NETWORK HUB TIC — Sistema de diseño para descripciones de puesto
//  Basado en la plantilla institucional (docs/ejemplo.docx)
// =============================================================

#let navy = rgb("#0f2a43")
#let navy-deep = rgb("#0a1d2f")
#let cyan = rgb("#1183a6")
#let cyan-soft = rgb("#e6f6fb")
#let ink = rgb("#12212b")
#let muted = rgb("#5b6f7c")
#let hair = rgb("#d3dee5")
#let zebra = rgb("#f4f8fa")

#let sans = ("Segoe UI", "Calibri", "Arial")
#let mono = ("Consolas", "DejaVu Sans Mono")

// ---------- Configuración global de página ----------
#let documento(titulo: "", subtitulo: "", doc) = {
  set document(title: titulo, author: "NETWORK HUB TIC")
  set page(
    paper: "a4",
    margin: (top: 26mm, bottom: 22mm, left: 20mm, right: 20mm),
    header: context {
      if counter(page).get().first() == 1 { return }
      set text(8pt, fill: muted, font: sans)
      grid(
        columns: (1fr, auto),
        align: (left + horizon, right + horizon),
        [#text(fill: navy, weight: 700)[NETWORK HUB TIC] #h(6pt) #text(fill: hair)[|] #h(6pt) Manual de Descripción de Puestos],
        text(font: mono, fill: cyan)[#subtitulo],
      )
      v(-4pt)
      line(length: 100%, stroke: 0.6pt + hair)
    },
    footer: context {
      set text(8pt, fill: muted, font: sans)
      line(length: 100%, stroke: 0.6pt + hair)
      v(2pt)
      grid(
        columns: (1fr, auto),
        align: (left + horizon, right + horizon),
        text(font: mono, size: 7.5pt)[DEPARTAMENTO DE TECNOLOGÍA · REDES],
        [Página #context counter(page).display("1") de #context counter(page).final().first()],
      )
    },
  )
  set text(font: sans, size: 10pt, fill: ink, lang: "es")
  set par(justify: true, leading: 0.68em, spacing: 0.95em)
  show link: set text(fill: cyan)
  doc
}

// ---------- Portada ----------
#let portada(titulo: "", subtitulo: "", puesto: "", titular: "", codigo: "", fecha: "") = {
  page(margin: 0pt, header: none, footer: none, fill: white)[
    #place(top + left, rect(width: 100%, height: 112mm, fill: navy-deep))
    // trama de puntos decorativa
    #place(top + left, dx: 0pt, dy: 0pt, box(width: 210mm, height: 112mm, clip: true)[
      #for i in range(0, 22) {
        for j in range(0, 12) {
          place(
            top + left,
            dx: 8mm + i * 9mm,
            dy: 8mm + j * 9mm,
            circle(radius: 0.5pt, fill: rgb("#ffffff").transparentize(78%)),
          )
        }
      }
    ])
    #place(top + left, dy: 112mm, rect(width: 100%, height: 2.4mm, fill: cyan))

    #place(top + left, dx: 20mm, dy: 22mm)[
      #text(font: mono, size: 9pt, fill: cyan, tracking: 2pt)[NETWORK HUB TIC]
      #v(2mm)
      #line(length: 26mm, stroke: 1.6pt + cyan)
    ]

    #place(top + left, dx: 20mm, dy: 46mm, box(width: 150mm)[
      #text(size: 12pt, fill: rgb("#8fb6cc"), weight: 500)[#titulo]
      #v(3mm)
      #text(size: 30pt, fill: white, weight: 700)[#puesto]
      #v(3mm)
      #text(size: 11pt, fill: rgb("#a9c8d8"))[#subtitulo]
    ])

    #place(top + left, dx: 20mm, dy: 130mm, box(width: 170mm)[
      #grid(
        columns: (32mm, 1fr),
        row-gutter: 4.5mm,
        text(font: mono, size: 8pt, fill: cyan)[TITULAR],
        text(size: 11pt, weight: 600)[#titular],
        text(font: mono, size: 8pt, fill: cyan)[CÓDIGO],
        text(size: 11pt, font: mono)[#codigo],
        text(font: mono, size: 8pt, fill: cyan)[DEPARTAMENTO],
        text(size: 11pt)[Tecnología · Redes],
        text(font: mono, size: 8pt, fill: cyan)[EDICIÓN],
        text(size: 11pt)[#fecha],
      )
    ])

    #place(bottom + left, dx: 20mm, dy: -20mm, box(width: 170mm)[
      #line(length: 100%, stroke: 0.8pt + hair)
      #v(3mm)
      #text(size: 8.5pt, fill: muted)[
        Documento interno de gestión del talento humano. La presente descripción define el propósito,
        las funciones y los requerimientos del puesto dentro de la estructura organizacional del
        departamento de Redes.
      ]
    ])
  ]
}

// ---------- Encabezado de sección numerado ----------
#let seccion(n, titulo) = {
  block(above: 9mm, below: 3.5mm, breakable: false)[
    #grid(
      columns: (9mm, 1fr),
      align: (left + horizon, left + horizon),
      box(
        width: 7mm,
        height: 7mm,
        radius: 1.5mm,
        fill: navy,
        align(center + horizon, text(font: mono, size: 8.5pt, fill: white, weight: 700)[#n]),
      ),
      [
        #text(size: 12pt, weight: 700, fill: navy)[#upper(titulo)]
      ],
    )
    #v(-1.5mm)
    #line(length: 100%, stroke: 0.8pt + hair)
  ]
}

// ---------- Lista con viñetas de marca ----------
#let vinetas(items) = {
  set text(size: 10pt)
  for it in items {
    block(below: 2.6mm)[
      #grid(
        columns: (5mm, 1fr),
        align: (left + top, left + top),
        box(inset: (top: 3.4pt), circle(radius: 1.5pt, fill: cyan)),
        it,
      )
    ]
  }
}

// ---------- Tabla de identificación del puesto ----------
#let ficha-identificacion(denominacion, categoria, departamento, titulares, jornada) = {
  let th(c) = block(
    width: 100%,
    fill: navy,
    inset: (x: 3mm, y: 2.4mm),
    text(size: 8.5pt, fill: white, weight: 600, font: mono)[#upper(c)],
  )
  let td(c) = block(
    width: 100%,
    inset: (x: 3mm, y: 3mm),
    text(size: 10pt, weight: 500)[#c],
  )
  block(
    width: 100%,
    stroke: 0.8pt + hair,
    radius: 1.5mm,
    clip: true,
    breakable: false,
  )[
    #grid(
      columns: (1fr, 1fr),
      th("Denominación del puesto"), th("Categoría laboral"),
      td(denominacion), td(categoria),
    )
    #grid(
      columns: (1fr, 1fr, 1fr),
      th("Departamento"), th("N° de titulares"), th("Jornada laboral"),
      td(departamento), td(titulares), td(jornada),
    )
  ]
}

// ---------- Mini organigrama contextual ----------
#let nodo(txt, rol, activo: false, w: 52mm) = block(
  width: w,
  height: 17mm,
  radius: 1.5mm,
  fill: if activo { cyan-soft } else { white },
  stroke: if activo { 1.2pt + cyan } else { 0.8pt + hair },
  inset: (x: 3mm, y: 2.6mm),
)[
  #set par(justify: false, leading: 0.5em)
  #align(center + horizon)[
    #text(size: 8pt, weight: 700, fill: if activo { navy } else { ink })[#txt]
    #linebreak()
    #text(size: 7pt, fill: if activo { cyan } else { muted })[#rol]
  ]
]

#let mini-organigrama(activo: "") = {
  let e(n) = n == activo
  block(width: 100%, breakable: false)[
    #box(width: 170mm, height: 56mm)[
      // conectores
      #place(top + left, dx: 85mm, dy: 17mm, line(end: (0mm, 8mm), stroke: 0.9pt + rgb("#9fb4c1")))
      #place(top + left, dx: 26mm, dy: 25mm, line(end: (118mm, 0mm), stroke: 0.9pt + rgb("#9fb4c1")))
      #place(top + left, dx: 26mm, dy: 25mm, line(end: (0mm, 10.4mm), stroke: 0.9pt + rgb("#9fb4c1")))
      #place(top + left, dx: 85mm, dy: 25mm, line(end: (0mm, 10.4mm), stroke: 0.9pt + rgb("#9fb4c1")))
      #place(top + left, dx: 144mm, dy: 25mm, line(end: (0mm, 10.4mm), stroke: 0.9pt + rgb("#9fb4c1")))
      // nodos
      #place(top + left, dx: 50mm, dy: 0mm, nodo(
        "Oziel Rodman Ramos Torrez", "Scrum Master / Coordinador de Redes",
        activo: e("coordinador"), w: 70mm,
      ))
      #place(top + left, dx: 0mm, dy: 35mm, nodo(
        "Rodny Gerald Siles Barrenechea", "Administrador de Redes", activo: e("administrador"),
      ))
      #place(top + left, dx: 59mm, dy: 35mm, nodo(
        "Luis Angel Paredes Torrez", "Especialista en Seguridad de Redes", activo: e("seguridad"),
      ))
      #place(top + left, dx: 118mm, dy: 35mm, nodo(
        "Alvaro Ariel Torrez Calle", "Soporte y Monitoreo de Redes", activo: e("soporte"),
      ))
    ]
    #v(1mm)
    #text(size: 7.5pt, fill: muted, style: "italic")[
      Ubicación del puesto dentro de la estructura del departamento de Redes (resaltado en color).
    ]
  ]
}

// ---------- Bloque de relaciones ----------
#let relaciones(jerarquicas, funcionales) = {
  let fila(etiqueta, contenido) = block(
    width: 100%,
    inset: (x: 4mm, y: 3.2mm),
    fill: zebra,
    radius: 1.5mm,
  )[
    #grid(
      columns: (34mm, 1fr),
      align: (left + top, left + top),
      text(size: 8.5pt, font: mono, fill: navy, weight: 600)[#upper(etiqueta)],
      text(size: 10pt)[#contenido],
    )
  ]
  fila("Jerárquicas", jerarquicas)
  v(2.2mm)
  fila("Funcionales", funcionales)
}

// ---------- Renderizado completo de un puesto ----------
#let describir-puesto(p, con-portada: true) = {
  if con-portada {
    portada(
      titulo: "Manual de Descripción de Puestos",
      subtitulo: p.subtitulo,
      puesto: p.denominacion,
      titular: p.titular,
      codigo: p.codigo,
      fecha: p.fecha,
    )
  } else {
    // separador de puesto dentro del manual completo
    pagebreak(weak: true)
    block(
      width: 100%,
      fill: navy-deep,
      radius: 2mm,
      inset: (x: 6mm, y: 5mm),
      below: 7mm,
    )[
      #text(font: mono, size: 8pt, fill: cyan, tracking: 1.5pt)[#p.codigo]
      #v(1.5mm)
      #text(size: 19pt, weight: 700, fill: white)[#p.denominacion]
      #v(1mm)
      #text(size: 9.5pt, fill: rgb("#a9c8d8"))[#p.titular · #p.subtitulo]
    ]
  }

  seccion(1, "Identificación del puesto")
  ficha-identificacion(p.denominacion, p.categoria, p.departamento, p.titulares, p.jornada)

  seccion(2, "Finalidad")
  vinetas(p.finalidad)

  seccion(3, "Organigrama")
  mini-organigrama(activo: p.clave)

  seccion(4, "Áreas de eficiencia / resultado")
  vinetas(p.areas)

  seccion(5, "Funciones específicas del cargo")
  vinetas(p.funciones)

  seccion(6, "Relaciones")
  relaciones(p.rel-jerarquicas, p.rel-funcionales)

  seccion(7, "Responsabilidad")
  vinetas(p.responsabilidad)

  seccion(8, "Condiciones de trabajo")
  vinetas(p.condiciones)

  seccion(9, "Riesgos potenciales")
  vinetas(p.riesgos)

  seccion(10, "Requerimientos del puesto")
  vinetas(p.requerimientos)

  seccion(11, "Competencias profesionales")
  vinetas(p.competencias)
}
