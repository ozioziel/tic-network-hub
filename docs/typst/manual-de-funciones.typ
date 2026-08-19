#import "plantilla.typ": *
#import "puestos.typ": todos, fecha-edicion

#show: documento.with(
  titulo: "Manual de Descripción de Puestos — Departamento de Redes",
  subtitulo: "Departamento de Redes",
)

// ---------------- Portada del manual ----------------
#page(margin: 0pt, header: none, footer: none)[
  #place(top + left, rect(width: 100%, height: 297mm, fill: navy-deep))
  #place(top + left, box(width: 210mm, height: 297mm, clip: true)[
    #for i in range(0, 24) {
      for j in range(0, 34) {
        place(
          top + left,
          dx: 6mm + i * 9mm,
          dy: 6mm + j * 9mm,
          circle(radius: 0.5pt, fill: rgb("#ffffff").transparentize(80%)),
        )
      }
    }
  ])
  #place(top + left, dx: 20mm, dy: 34mm)[
    #text(font: mono, size: 9pt, fill: cyan, tracking: 2.5pt)[NETWORK HUB TIC]
    #v(3mm)
    #line(length: 30mm, stroke: 1.8pt + cyan)
  ]
  #place(top + left, dx: 20mm, dy: 96mm, box(width: 160mm)[
    #text(size: 13pt, fill: rgb("#8fb6cc"), weight: 500)[Departamento de Tecnología · Redes]
    #v(4mm)
    #text(size: 38pt, fill: white, weight: 700)[Manual de Descripción de Puestos]
    #v(5mm)
    #text(size: 12pt, fill: rgb("#a9c8d8"))[
      Finalidad, funciones, relaciones, responsabilidades y requerimientos
      de los cuatro puestos que conforman el área de Redes.
    ]
  ])
  #place(bottom + left, dx: 20mm, dy: -26mm, box(width: 170mm)[
    #line(length: 100%, stroke: 0.8pt + rgb("#2c4a63"))
    #v(4mm)
    #grid(
      columns: (1fr, 1fr, 1fr),
      text(size: 9pt, fill: rgb("#8fb6cc"))[
        #text(font: mono, size: 7.5pt, fill: cyan)[EDICIÓN] #linebreak() #fecha-edicion
      ],
      text(size: 9pt, fill: rgb("#8fb6cc"))[
        #text(font: mono, size: 7.5pt, fill: cyan)[ALCANCE] #linebreak() 4 puestos
      ],
      text(size: 9pt, fill: rgb("#8fb6cc"))[
        #text(font: mono, size: 7.5pt, fill: cyan)[USO] #linebreak() Documento interno
      ],
    )
  ])
]

// ---------------- Índice ----------------
#page[
  #v(6mm)
  #text(size: 22pt, weight: 700, fill: navy)[Contenido]
  #v(2mm)
  #line(length: 100%, stroke: 1.2pt + cyan)
  #v(8mm)

  #for (i, p) in todos.enumerate() {
    block(
      width: 100%,
      inset: (x: 5mm, y: 4.5mm),
      fill: if calc.even(i) { zebra } else { white },
      radius: 1.5mm,
      below: 2mm,
    )[
      #grid(
        columns: (10mm, 1fr, 28mm),
        align: (left + horizon, left + horizon, right + horizon),
        text(font: mono, size: 13pt, fill: cyan, weight: 700)[#(i + 1)],
        [
          #text(size: 12pt, weight: 600, fill: navy)[#p.denominacion]
          #linebreak()
          #text(size: 9pt, fill: muted)[#p.titular · #p.categoria]
        ],
        text(font: mono, size: 8.5pt, fill: muted)[#p.codigo],
      )
    ]
  }

  #v(10mm)
  #block(
    width: 100%,
    inset: (x: 5mm, y: 4mm),
    stroke: (left: 2.5pt + cyan),
    fill: cyan-soft,
  )[
    #text(size: 9pt)[
      *Estructura de cada descripción.* Identificación del puesto · Finalidad · Organigrama ·
      Áreas de eficiencia y resultado · Funciones específicas del cargo · Relaciones ·
      Responsabilidad · Condiciones de trabajo · Riesgos potenciales · Requerimientos del puesto ·
      Competencias profesionales.
    ]
  ]
]

// ---------------- Descripciones ----------------
#for p in todos {
  describir-puesto(p, con-portada: false)
}
