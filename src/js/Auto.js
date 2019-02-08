export default class Auto {
  constructor (marca, modelo, color = 'negro', kilometraje = 0) {
    this._marca = marca;
    this._modelo = modelo;
    this._color = color;
    this._kilometraje = kilometraje;
    this._estado = 'Apagado';
  }

  encender () {
    this._estado = 'Encendido';
    this.mostrarEstado();
  }

  apagar () {
    this._estado = 'Apagado';
    this.mostrarEstado();
  }

  mostrarEstado () {
    console.log(`El auto ${this._marca} ${this._color} del año ${this._modelo} tiene un kilometraje de ${this._kilometraje} km y esta ${this._estado}`);
  }

  avanzar (velocidad, tiempo) {
    if(this._estado === 'Apagado')
    {
      console.log('El auto esta apagado')
    } else {
      let distancia = velocidad * tiempo;
      this._kilometraje += distancia;
      this.mostrarEstado();
    }
  }

  get color () {
    return this._color;
  }

  set color (color) {
    this._color = color;
  }

}
