import Auto from './Auto.js';

var auto1 = new Auto('Ford', 2000, 'rojo', 100);
var auto2 = new Auto('Nissan', 2018, 'blanco');
var auto3 = new Auto('WV', 2010);

console.log(`Color ${auto1.color}`);
console.log(`Color ${auto2.color}`);
auto1.color = 'Amarillo';
auto2.color = 'Negro;'
auto1.modelo = 1990;

auto2.encender();
auto3.encender();

auto1.mostrarEstado();
auto1.encender();
auto1.avanzar(50, 2);
auto1.apagar();
auto1.avanzar(20, 1);
