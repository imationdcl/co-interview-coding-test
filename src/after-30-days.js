const coTest = require('./coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

// el precio de un producto nunca es mas de 50
// el precio de un producto nunca es negativo

const productsAtDayZero = [
    new Product('Medium Coverage', 10, 20),
    new Product('Full Coverage', 2, 0), // aunmenta precio cada vez que se vuelve mas viejo
    new Product('Low Coverage', 5, 7),
    new Product('Mega Coverage', 0, 80), // nunca se tiene que vender o se reduce el precio.
    new Product('Mega Coverage', -1, 80), // nunca se tiene que vender o se reduce el precio.
    new Product('Special Full Coverage', 15, 20), // el precio aumenta en 2 cuando hay 10 días o menos y en 3 cuando hay 5 días o menos, pero el precio baja a 0 cuando ya no quedan más días (y el producto ya no es válido).
    new Product('Special Full Coverage', 10, 49), // el precio aumenta en 2 cuando hay 10 días o menos y en 3 cuando hay 5 días o menos, pero el precio baja a 0 cuando ya no quedan más días (y el producto ya no es válido).
    new Product('Special Full Coverage', 5, 49), // el precio aumenta en 2 cuando hay 10 días o menos y en 3 cuando hay 5 días o menos, pero el precio baja a 0 cuando ya no quedan más días (y el producto ya no es válido).
    new Product('Super Sale', 3, 6), // se degradan en precio dos veces más rápido que los Productos normales.
  ];
  
  const carInsurance = new CarInsurance(productsAtDayZero);
  const productPrinter = function (product) {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
  };
  
  for (let i = 1; i <= 30; i += 1) {
    console.log(`Day ${i}`);
    console.log('name, sellIn, price');
    carInsurance.updatePrice().forEach(productPrinter);
    console.log('');
  }