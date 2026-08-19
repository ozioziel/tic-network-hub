#import "plantilla.typ": documento, describir-puesto
#import "puestos.typ": seguridad

#show: documento.with(
  titulo: "Descripción de Puesto — " + seguridad.denominacion,
  subtitulo: seguridad.denominacion,
)

#describir-puesto(seguridad)
