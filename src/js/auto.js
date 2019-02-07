class Auto {
  constructor (marca, modelo, color, kilometraje) {
    this.marca = marca
    this.modelo = modelo
    this.color = color
    this.kilometraje = kilometraje
    this.estado = 'apagado'
  }

  encender () {
    this.estado = 'encendido'
  }

  apagar () {
    this.estado = 'apagado'
  }
}
