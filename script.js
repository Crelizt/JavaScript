//Object Literals
const cart = document.getElementById("cart")

//ES5
function addProduct(name, category,price){
    return{
        name: name,
        category: category,
        productPrice: price
    }
}

var getProduct = addProduct("iPhone 12", "Smartphone", 100000);
console.log(getProduct)

cart.innerHTML = `Product 1: ${getProduct.name}, category ${getProduct.category}, price ${getProduct.productPrice}`



//ES6

function addProduct(name, category, price){
    return{name, category, productPrice:price};
}

var getProduct = addProduct("iPhone 12", "Smartphone", 100000);
console.log(getProduct)

cart.innerHTML = `Product 1: ${getProduct.name}, category ${getProduct.category}, price ${getProduct.productPrice}}`