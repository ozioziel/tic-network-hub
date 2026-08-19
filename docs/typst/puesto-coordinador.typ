#import "plantilla.typ": documento, describir-puesto
#import "puestos.typ": coordinador

#show: documento.with(
  titulo: "Descripción de Puesto — " + coordinador.denominacion,
  subtitulo: coordinador.denominacion,
)

#describir-puesto(coordinador)
