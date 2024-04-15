let main = document.querySelector("main");
let cart = document.querySelector("header button:first-child");
let cartCount = document.querySelector("header button:first-child span");
let clearCart = document.querySelector("header button:last-child");
let cartModal = document.querySelector("#cart-container");
let tbody = document.querySelector("table tbody");
let close = document.querySelector("#close");
let total = document.querySelector("#total");

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

products.forEach((product) => {
    main.innerHTML += `<div class="card">
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

cart.addEventListener("click", () => {
    cartModal.style.display = "block";
})

close.addEventListener("click", () => {
    cartModal.style.display = "none";
})

let inCart = [];

function add(button) {
    let card = button.parentElement.parentElement;
    let img = card.querySelector("img").src;
    let name = card.querySelector("h1").innerText;
    let price = parseInt(card.querySelector("span").innerText);
    let found = inCart.find(product => product.name === name);
    if(found) {
        found.quantity++;
        inCart.price = found.price += price;
        total.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>` + inCart.reduce((acc, item) => acc + item.price, 0);
    } else {
        inCart.push({
            img: img,
            name: name,
            price: price,
            quantity: products.find(p => p.name === name).quantity,
            pricePerQuantity: price
        });
        total.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>` + inCart.reduce((acc, item) => acc + item.price, 0);
    }

    cartCount.innerText = "(" + inCart.length + ")";
    tbody.innerHTML = "";
    inCart.forEach((product) => {
        let newRow = document.createElement("tr");
        let imageCell = document.createElement("td");
        let image = new Image();
        image.src = product.img;
        image.alt = product.name;
        imageCell.appendChild(image);

        let nameCell = document.createElement("td");
        nameCell.innerText = product.name;

        let priceCell = document.createElement("td");
        priceCell.innerText = product.price;

        let quantityCell = document.createElement("td");
        quantityCell.innerHTML = `
        <button onclick="decrement(this)">
            <i class="fa-solid fa-minus"></i>
        </button>
            <span>${product.quantity}</span>
        <button onclick="increment(this)">
            <i class="fa-solid fa-plus"></i>
        </button>
`;

        let removeCell = document.createElement("td");
        let removeButton = document.createElement("button");
        removeButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        removeButton.onclick = () => {
            let card = removeButton.parentElement.parentElement;
            let name = card.querySelector("td:nth-child(2)").innerText;
            for(let i = 0; i < inCart.length; i++) {
                if(inCart[i].name === name) {
                    inCart.splice(i, 1);
                    total.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>` + inCart.reduce((acc, item) => acc + item.price, 0);
                    break;
                }
            }
            cartCount.innerText = "(" + inCart.length + ")";
            removeButton.parentElement.parentElement.remove();
        };
        removeCell.appendChild(removeButton);

        newRow.appendChild(imageCell);
        newRow.appendChild(nameCell);
        newRow.appendChild(priceCell);
        newRow.appendChild(quantityCell);
        newRow.appendChild(removeCell);

        tbody.appendChild(newRow);
    })
}

clearCart.addEventListener("click", () => {
    inCart = [];
    total.innerText = "";
    tbody.innerHTML = "";
    cartCount.innerText = "(" + 0 + ")";
})

function decrement(button) {
    let row = button.parentElement.parentElement;
    let name = row.querySelector("td:nth-child(2)").innerText;
    let foundProduct = inCart.find(product => product.name === name);
    if(foundProduct) {
        if(foundProduct.quantity > 1) {
            foundProduct.quantity--;
            foundProduct.price -= foundProduct.pricePerQuantity;

            row.querySelector("td:nth-child(3)").innerText = foundProduct.price;
            row.querySelector("td:nth-child(4) span").innerText = foundProduct.quantity;
            total.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>` + inCart.reduce((acc, item) => acc + item.price, 0);
        } else {
            for(let i = 0; i < inCart.length; i++) {
                if(inCart[i].name === name) {
                    inCart.splice(i, 1);
                    break;
                }
            }
            total.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>` + inCart.reduce((acc, item) => acc + item.price, 0);
            cartCount.innerText = "(" + inCart.length + ")";
            row.remove();
        }
    }
}

function increment(button) {
    let row = button.parentElement.parentElement;
    let name = row.querySelector("td:nth-child(2)").innerText;
    let foundProduct = inCart.find(product => product.name === name);
    if(foundProduct) {
        foundProduct.quantity++;
        foundProduct.price += foundProduct.pricePerQuantity;

        row.querySelector("td:nth-child(3)").innerText = foundProduct.price;
        row.querySelector("td:nth-child(4) span").innerText = foundProduct.quantity;
        total.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>` + inCart.reduce((acc, item) => acc + (item.price), 0);
    }
}