#import "plantilla.typ": documento, describir-puesto
#import "puestos.typ": soporte

#show: documento.with(
  titulo: "Descripción de Puesto — " + soporte.denominacion,
  subtitulo: soporte.denominacion,
)

#describir-puesto(soporte)
