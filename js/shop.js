var products = [
    {
         id: 1,
         name: 'cooking oil',
         price: 10.5,
         type: 'grocery',
         offer: {
             number: 3,
             percent: 20
         }
     },
     {
         id: 2,
         name: 'Pasta',
         price: 6.25,
         type: 'grocery'
     },
     {
         id: 3,
         name: 'Instant cupcake mixture',
         price: 5,
         type: 'grocery',
         offer: {
             number: 10,
             percent: 30
         }
     },
     {
         id: 4,
         name: 'All-in-one',
         price: 260,
         type: 'beauty'
     },
     {
         id: 5,
         name: 'Zero Make-up Kit',
         price: 20.5,
         type: 'beauty'
     },
     {
         id: 6,
         name: 'Lip Tints',
         price: 12.75,
         type: 'beauty'
     },
     {
         id: 7,
         name: 'Lawn Dress',
         price: 15,
         type: 'clothes'
     },
     {
         id: 8,
         name: 'Lawn-Chiffon Combo',
         price: 19.99,
         type: 'clothes'
     },
     {
         id: 9,
         name: 'Toddler Frock',
         price: 9.99,
         type: 'clothes'
     }
 ]

// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cartList array
for (let i = 0; i < products.length; i++) {
   if (id === products[i].id) {
    cartList.push(products[i])
   }
  } document.getElementById('count_product').innerHTML = cartList.length
    console.log(cartList) 
    
    calculateTotal()
}

// Exercise 2
function cleanCart() {
   
   cartList = []
    cart = []
    total = 0
    cartList.splice(0, cartList.length)
    cart.splice(0, cart.length)
    console.log(cartList)
    console.log(cart)
    document.getElementById('cart_list').innerHTML = cartList.length
    document.getElementById('count_product').innerHTML = cartList.length   
    document.getElementById('total_price').innerHTML = cart.length
    printCart()
}

// Exercise 3
// Calculate total price of the cart using the "cartList" array
function calculateTotal() {
    total = 0
    for (let i = 0; i < cartList.length; i++) {  
        total = cartList[i].price + total 
    }
    document.getElementById('total_price').innerHTML = total;
} 
// Exercise 4
// Using the "cartlist" array that contains all the items in the shopping cart, 
// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
function generateCart() {
    cart = []
    quantities = [];
    cartList.forEach(function(product){
        if(quantities[product.id]){
            quantities[product.id] += 1;
        }
        else{
            quantities[product.id] = 1;
        }
    })
    quantities.forEach(function(quantity, id){
        products.forEach(function(product){
            if(product.id == id){
                cart.push(product);
                cart[cart.length - 1].quantity = quantity;
                console.log(cart)
            }
        })
    }) 
    
  applyPromotionsCart(cart)
} 

// Exercise 5
// Apply promotions to each item in the array "cart"
function applyPromotionsCart() {
    cart.forEach(function(product){
        if(product.offer && product.quantity >= product.offer.number){
            var discount = product.price * (product.offer.percent / 100);
            var discount = Number(discount.toFixed(2));
            product.subtotalWithDiscount = ((product.price - discount) * product.quantity);
        }
    })

    console.log(cart)
}
  
// Exercise 6
// Fill the shopping cart modal manipulating the shopping cart dom
function printCart() {
    generateCart()
    calculateTotal()
    applyPromotionsCart()
    var total = 0
    
   var htmlCartList = cart.length == 0 ? "<tr><th scope='row'>Empty</th><td></td><td></td><td></td></tr>" : ""
     cart.forEach(function(product){
       htmlCartList += "<tr>"
       htmlCartList += "<th scope='row'>" + product.name + "</th><td>$" + product.price + "</td><td>" + product.quantity + "</td><td>"
       if(product.subtotalWithDiscount){
           htmlCartList += "$"+ product.subtotalWithDiscount.toFixed(2) + " (-" + product.offer.percent+"%)</td>"
           total += product.subtotalWithDiscount
       }
       else{
           htmlCartList += "$" + product.quantity * product.price + "</td>"
           total += (product.quantity * product.price)
       }
       htmlCartList += "</tr>"
    })
    document.getElementById('cart_list').innerHTML = htmlCartList
    document.getElementById('total_price').innerHTML = total.toFixed(2)
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}


// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal")
	printCart()

}