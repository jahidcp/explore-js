const shoppingCarts = [
    {name: "Shoe", price:3200},
    {name: "pant", price:3700},
    {name: "Shirt", price:1800},
    {name: "Belt", price:1200},
]

function totalCoast(products){
    let totalSum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        totalSum = totalSum + product.price;
        // console.log(product);
    }
    return totalSum;
}

let expensiveCoast = totalCoast(shoppingCarts);
console.log("Total Expense Today: ", expensiveCoast);

// For Quantity shopping Cart

const shoppingCarts2 = [
    {name: "Shoe", price:3200, quantity: 2},
    {name: "pant", price:3700, quantity: 4},
    {name: "Shirt", price:1800, quantity: 5},
    {name: "Belt", price:1200, quantity: 2},
]

function totalCoast2(products2){
    let totalSum2 = 0;
    for(let i = 0; i < products2.length; i++){
        let product2 = products2[i];
        let totalProduct = product2.price * product2.quantity;
        totalSum2 = totalSum2 + totalProduct;
    }
    return totalSum2;
}

const totalProductBuy = totalCoast2(shoppingCarts2);
console.log(totalProductBuy);