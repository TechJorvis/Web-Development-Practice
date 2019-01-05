var faker = require('faker');

var randomProduct;
var randomCost;

console.log("==================");
console.log("WELCOME TO MY SHOP");
console.log("==================");
for (let i = 0; i < 10; i++) {
    randomProduct = faker.commerce.productName();
    randomCost = faker.commerce.price(0, 1000, 2, "$");
    console.log(randomProduct + ' - ' + randomCost);
}