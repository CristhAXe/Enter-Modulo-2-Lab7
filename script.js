function Movimiento(nombre, tipo, valor) {
  this.nombre = nombre;
  this.tipo = tipo;
  this.valor = valor;

  this.esIngreso = function() {
    return this.tipo === "ingreso";
  };

  this.esGasto = function() {
    return this.tipo === "gasto";
  };

  this.formatear = function() {
    const signo = this.esIngreso() ? "+" : "-";
    return `${this.nombre}: ${signo}$${this.valor}`;
  };
}

function Presupuesto() {
  this.movimientos = [];

  this.agregarMovimiento = function(mov) {
    this.movimientos.push(mov);
  };

  this.obtenerTotalIngresos = function() {
    return this.movimientos
      .filter(m => m.esIngreso())
      .reduce((acc, m) => acc + m.valor, 0);
  };

  this.obtenerTotalGastos = function() {
    return this.movimientos
      .filter(m => m.esGasto())
      .reduce((acc, m) => acc + m.valor, 0);
  };

  this.calcularBalance = function() {
    return this.obtenerTotalIngresos() - this.obtenerTotalGastos();
  };

  this.obtenerPromedioGastos = function() {
    const gastos = this.movimientos.filter(m => m.esGasto());
    if (gastos.length === 0) return 0;
    const total = gastos.reduce((acc, m) => acc + m.valor, 0);
    return total / gastos.length;
  };
}

const presupuesto = new Presupuesto();

const movimiento1 = new Movimiento("Salario", "ingreso", 3000);
const movimiento2 = new Movimiento("Freelance", "ingreso", 500);
const movimiento3 = new Movimiento("Comida", "gasto", 200);
const movimiento4 = new Movimiento("Transporte", "gasto", 150);

presupuesto.agregarMovimiento(movimiento1);
presupuesto.agregarMovimiento(movimiento2);
presupuesto.agregarMovimiento(movimiento3);
presupuesto.agregarMovimiento(movimiento4);

const totalIngresos = presupuesto.obtenerTotalIngresos();
const totalGastos = presupuesto.obtenerTotalGastos();
const balance = presupuesto.calcularBalance();
const promedioGastos = presupuesto.obtenerPromedioGastos();

console.log("Movimientos:");
presupuesto.movimientos.forEach(m => {
  console.log(m.formatear());
});

console.log("Total ingresos:", totalIngresos);
console.log("Total gastos:", totalGastos);
console.log("Balance:", balance);
console.log("Promedio gastos:", promedioGastos);