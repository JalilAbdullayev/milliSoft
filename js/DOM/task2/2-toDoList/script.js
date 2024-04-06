let add = document.querySelector("#add");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

add.addEventListener("click", function() {
    if(input.value.length > 0) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        li.addEventListener('click', doneItem);

        let deleteButton = document.createElement("button");
        deleteButton.className = "delete";

        let icon = document.createElement("i");
        icon.className = "fas fa-trash-can";
        deleteButton.appendChild(icon);

        li.appendChild(deleteButton);
        deleteButton.addEventListener("click", deleteItem);
        input.value = "";
    }
})

function deleteItem() {
    this.parentNode.remove();
}

function doneItem() {
    if(this.style.textDecoration != "line-through") {
        this.style.textDecoration = "line-through";
    } else {
        this.style.textDecoration = "none";
    }
}