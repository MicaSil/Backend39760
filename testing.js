const ProductManager = require("./clase 2/desafio1")

const productSystem = new ProductManager()

const productList = productSystem.getProducts()
console.log(productList)

productSystem.addProduct("Producto de prueba")

console.log(productList)

productSystem.addProduct("Producto de prueba")

let ProductById = productSystem.getProductById(1)
console.log(ProductById)

ProductById = productSystem.getProductById(5)
console.log(ProductById)