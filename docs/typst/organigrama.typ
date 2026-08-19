#import "plantilla.typ": *
#import "puestos.typ": todos, fecha-edicion

#set document(title: "Organigrama — Departamento de Redes", author: "NETWORK HUB TIC")
#set page(
  paper: "a4",
  flipped: true,
  margin: (top: 14mm, bottom: 12mm, left: 18mm, right: 18mm),
  fill: white,
  footer: context {
    set text(8pt, fill: muted, font: sans)
    line(length: 100%, stroke: 0.6pt + hair)
    v(2pt)
    grid(
      columns: (1fr, auto),
      align: (left + horizon, right + horizon),
      text(font: mono, size: 7.5pt)[NETWORK HUB TIC · DEPARTAMENTO DE TECNOLOGÍA · REDES],
      [Edición #fecha-edicion · Página #counter(page).display("1")],
    )
  },
)
#set text(font: sans, size: 10pt, fill: ink, lang: "es")
#set par(leading: 0.65em)

// ================= Encabezado =================
#block(width: 100%, below: 4mm)[
  #grid(
    columns: (1fr, auto),
    align: (left + horizon, right + bottom),
    [
      #text(font: mono, size: 8.5pt, fill: cyan, tracking: 2pt)[NETWORK HUB TIC]
      #v(2mm)
      #text(size: 26pt, weight: 700, fill: navy)[Organigrama del Departamento de Redes]
      #v(1.5mm)
      #text(size: 10.5pt, fill: muted)[Estructura jerárquica y funcional · Edición #fecha-edicion]
    ],
    box(
      inset: (x: 4mm, y: 3mm),
      radius: 1.5mm,
      fill: cyan-soft,
      stroke: 0.8pt + cyan,
    )[
      #align(center)[
        #text(font: mono, size: 7.5pt, fill: navy)[TOTAL DE PUESTOS] #linebreak()
        #text(size: 20pt, weight: 700, fill: navy)[4]
      ]
    ],
  )
  #v(3mm)
  #line(length: 100%, stroke: 1.4pt + cyan)
]

// ================= Nodos grandes =================
#let nodo-jefe(nombre, rol, codigo, w) = block(
  width: w,
  height: 30mm,
  radius: 3mm,
  fill: navy-deep,
  inset: (x: 6mm, y: 4mm),
)[
  #set par(justify: false, leading: 0.6em)
  #align(center + horizon)[
    #text(font: mono, size: 7.5pt, fill: cyan, tracking: 1.2pt)[#codigo]
    #v(1.6mm)
    #text(size: 13pt, weight: 700, fill: white)[#nombre]
    #v(1mm)
    #text(size: 10pt, fill: rgb("#9fc6db"))[#rol]
  ]
]

#let nodo-eq(nombre, rol, codigo, w) = block(
  width: w,
  height: 30mm,
  radius: 3mm,
  fill: white,
  stroke: 1pt + rgb("#c2d3dd"),
  inset: (x: 5mm, y: 4mm),
)[
  #set par(justify: false, leading: 0.6em)
  #place(top + left, dx: -5mm, dy: -4mm, rect(width: 2.2mm, height: 30mm, fill: cyan))
  #align(center + horizon)[
    #text(font: mono, size: 7.5pt, fill: cyan, tracking: 1.2pt)[#codigo]
    #v(1.6mm)
    #text(size: 12pt, weight: 700, fill: navy)[#nombre]
    #v(1mm)
    #text(size: 9.5pt, fill: muted)[#rol]
  ]
]

// Lienzo: ancho útil = 297 - 36 = 261mm
#let conector = 1.1pt + rgb("#8ea9b9")

#block(width: 100%, above: 5mm)[
  #box(width: 261mm, height: 80mm)[
    // línea vertical desde el jefe
    #place(top + left, dx: 130.5mm, dy: 30mm, line(end: (0mm, 9mm), stroke: conector))
    // barra horizontal
    #place(top + left, dx: 42mm, dy: 39mm, line(end: (177mm, 0mm), stroke: conector))
    // bajadas a cada hijo
    #place(top + left, dx: 42mm, dy: 39mm, line(end: (0mm, 11mm), stroke: conector))
    #place(top + left, dx: 130.5mm, dy: 39mm, line(end: (0mm, 11mm), stroke: conector))
    #place(top + left, dx: 219mm, dy: 39mm, line(end: (0mm, 11mm), stroke: conector))
    // puntas
    #place(top + left, dx: 40.6mm, dy: 48.4mm, polygon(fill: rgb("#8ea9b9"), (0mm, 0mm), (2.8mm, 0mm), (1.4mm, 2.4mm)))
    #place(top + left, dx: 129.1mm, dy: 48.4mm, polygon(fill: rgb("#8ea9b9"), (0mm, 0mm), (2.8mm, 0mm), (1.4mm, 2.4mm)))
    #place(top + left, dx: 217.6mm, dy: 48.4mm, polygon(fill: rgb("#8ea9b9"), (0mm, 0mm), (2.8mm, 0mm), (1.4mm, 2.4mm)))

    // nodo superior (centrado, 100mm)
    #place(top + left, dx: 80.5mm, dy: 0mm, nodo-jefe(
      "Oziel Rodman Ramos Torrez", "Scrum Master / Coordinador de Redes", "TIC-RED-001", 100mm,
    ))
    // nodos del equipo (3 × 79mm, gap 12mm → 261mm)
    #place(top + left, dx: 2.5mm, dy: 50mm, nodo-eq(
      "Rodny Gerald Siles Barrenechea", "Administrador de Redes", "TIC-RED-002", 79mm,
    ))
    #place(top + left, dx: 91mm, dy: 50mm, nodo-eq(
      "Luis Angel Paredes Torrez", "Especialista en Seguridad de Redes", "TIC-RED-003", 79mm,
    ))
    #place(top + left, dx: 179.5mm, dy: 50mm, nodo-eq(
      "Alvaro Ariel Torrez Calle", "Soporte y Monitoreo de Redes", "TIC-RED-004", 79mm,
    ))
  ]
]

// ================= Leyenda =================
#block(width: 100%, above: 4mm)[
  #line(length: 100%, stroke: 0.8pt + hair)
  #v(3mm)
  #grid(
    columns: (1fr, 1fr, 1fr, 1fr),
    column-gutter: 6mm,
    ..todos.map(p => block(
      width: 100%,
      inset: (x: 3.5mm, y: 3mm),
      fill: zebra,
      radius: 1.5mm,
      stroke: (left: 2pt + cyan),
    )[
      #set par(justify: false, leading: 0.6em)
      #text(font: mono, size: 7pt, fill: cyan)[#p.codigo]
      #v(1mm)
      #text(size: 9pt, weight: 700, fill: navy)[#p.denominacion]
      #v(1mm)
      #text(size: 8pt, fill: muted)[#p.categoria · #p.jornada]
    ])
  )
  #v(3mm)
  #text(size: 8pt, fill: muted, style: "italic")[
    Las líneas continuas representan dependencia jerárquica directa. Los tres puestos operativos
    reportan al Scrum Master / Coordinador de Redes y coordinan funcionalmente entre sí en la
    atención de incidentes y la aplicación de políticas de red.
  ]
]
