#import "plantilla.typ": documento, describir-puesto
#import "puestos.typ": administrador

#show: documento.with(
  titulo: "Descripción de Puesto — " + administrador.denominacion,
  subtitulo: administrador.denominacion,
)

#describir-puesto(administrador)
