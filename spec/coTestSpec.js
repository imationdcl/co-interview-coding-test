const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function() {

  it("should foo", function() {
    const coTest = new CarInsurance([ new Product("foo", 0, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("foo");
  });

  it("should 4", function(){
    const coTest = new CarInsurance([ new Product('Super Sale', 3, 6) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(4);
  });

  it("should 2", function(){
    const coTest = new CarInsurance([ new Product('Super Sale', 2, 4) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(2);
  });

  it("should 0", function(){
    const coTest = new CarInsurance([ new Product('Super Sale', 1, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(0);
  });

  it("should 0", function(){
    const coTest = new CarInsurance([ new Product('Super Sale', 0, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(0);
  });

});
