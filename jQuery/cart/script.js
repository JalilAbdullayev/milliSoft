let products = [{
    name: "Orange",
    image: 'image/orange.png',
    price: 3,
    quantity: 1
}, {
    name: "Banana",
    image: 'image/banana.jpeg',
    price: 2,
    quantity: 1
}, {
    name: "Lemon",
    image: 'image/lemon.png',
    price: 5,
    quantity: 1
}];

let htmlContent = "";

products.forEach((product) => {
    htmlContent += `<div class="card">
        <div class="card-img">
            <img src="${product.image}" alt="${product.name}"/>
        </div>
        <div class="card-text">
            <h1><strong>${product.name}</strong></h1>
            <p>Price: <i class="fa-solid fa-dollar-sign"></i><span>${product.price}</span></p>
            <button class="card-button" onclick="add(this)">Add to Cart</button>
        </div>
        </div>`;
});

$('main').html(htmlContent)

$('#showCart').click(() => {
    $('#cart-container').show();
})

$('#close').click(() => {
    $('#cart-container').hide();
})

function total() {
    $('#total').html(`<i class="fa-solid fa-dollar-sign"></i>` + inCart.reduce((acc, item) => acc + item.price, 0));
}

let inCart = [];

function add(button) {
    let card = $(button).closest('.card');
    let img = $(card).find("img").attr('src');
    let name = $(card).find("h1").text();
    let price = parseInt($(card).find("span").text());
    let found = inCart.find(product => product.name === name);
    if(found) {
        found.quantity++;
        inCart.price = found.price += price;
        total();
    } else {
        inCart.push({
            img: img,
            name: name,
            price: price,
            quantity: products.find(p => p.name === name).quantity,
            pricePerQuantity: price
        });
        total();
    }

    $('#showCart span').text("(" + inCart.length + ")");
    $('tbody').html('');
    inCart.forEach((product) => {
        let newRow = '';
        newRow += `
        <tr><td><img src="${product.img}" alt="${product.name}"/></td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td><button onclick="decrement(this)">
            <i class="fa-solid fa-minus"></i>
        </button>
            <span>${product.quantity}</span>
        <button onclick="increment(this)">
            <i class="fa-solid fa-plus"></i>
        </button></td>
        <td><button id="removeCell" onclick="removeCell(this)"><i class="fa-solid fa-xmark"></i></button></td></tr>`;

        $('tbody').append(newRow);
    })
}

function removeCell(button){
    let card = $(button).closest('tr');
    let name = $(card).find("td:nth-child(2)").text();
    for(let i = 0; i < inCart.length; i++) {
        if(inCart[i].name === name) {
            inCart.splice(i, 1);
            total();
            break;
        }
    }
    $('#showCart span').text("(" + inCart.length + ")");
    card.remove();
}

$('#clearCart').click(() => {
    inCart = [];
    $('#total').text('');
    $('tbody').html('');
    $('#showCart span').text("(" + 0 + ")");
})

function decrement(button) {
    let row = $(button).closest('tr');
    let name = $(row).find("td:nth-child(2)").text();
    let foundProduct = inCart.find(product => product.name === name);
    if(foundProduct) {
        if(foundProduct.quantity > 1) {
            foundProduct.quantity--;
            foundProduct.price -= foundProduct.pricePerQuantity;

            $(row).find("td:nth-child(3)").text(foundProduct.price);
            $(row).find("td:nth-child(4) span").text(foundProduct.quantity);
            total();
        } else {
            for(let i = 0; i < inCart.length; i++) {
                if(inCart[i].name === name) {
                    inCart.splice(i, 1);
                    break;
                }
            }
            total();
            $('#showCart span').text("(" + inCart.length + ")");
            row.remove();
        }
    }
}

function increment(button) {
    let row = $(button).closest('tr');
    let name = $(row).find("td:nth-child(2)").text();
    let foundProduct = inCart.find(product => product.name === name);
    if(foundProduct) {
        foundProduct.quantity++;
        foundProduct.price += foundProduct.pricePerQuantity;

        $(row).find("td:nth-child(3)").text(foundProduct.price);
        $(row).find("td:nth-child(4) span").text(foundProduct.quantity);
        total();
    }
}