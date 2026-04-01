## Laboratorio: Presupuesto con Programación Orientada a Objetos

Este proyecto simula un sistema simple de presupuesto usando JavaScript. La idea es representar movimientos de dinero (ingresos y gastos) y calcular resultados como totales y balance.


### 1. Movimiento

Representa una operación de dinero.

- Tiene un nombre (ej: salario)
- Tiene un tipo (ingreso o gasto)
- Tiene un valor

También incluye métodos:

- `esIngreso()` → devuelve true si es ingreso  
- `esGasto()` → devuelve true si es gasto  
- `formatear()` → devuelve un texto como:  
  `Salario: +$3000` o `Comida: -$200`

---

### 2. Presupuesto

Es el sistema que guarda todos los movimientos.

Tiene un array donde se almacenan los movimientos y métodos para trabajar con ellos:

- `agregarMovimiento()` → agrega un movimiento al sistema  
- `obtenerTotalIngresos()` → suma todos los ingresos  
- `obtenerTotalGastos()` → suma todos los gastos  
- `calcularBalance()` → ingresos - gastos  
- `obtenerPromedioGastos()` → promedio de todos los gastos  

---

## ¿Qué hace el programa?

1. Se crea un presupuesto  
2. Se agregan varios movimientos (ingresos y gastos)  
3. Se calculan:
   - total de ingresos  
   - total de gastos  
   - balance final  
   - promedio de gastos  
4. Se imprime todo en consola  
