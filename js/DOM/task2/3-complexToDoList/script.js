let add = document.querySelector("#add");
let input = document.querySelector("input");
let toDo = document.querySelector("#toDo");
let doing = document.querySelector("#doing");
let done = document.querySelector("#done");
let toDoToDoing = document.querySelector("#toDoToDoing");
let doingToToDo = document.querySelector("#doingToToDo");
let doingToDone = document.querySelector("#doingToDone");
let doneToDoing = document.querySelector("#doneToDoing");

add.addEventListener("click", function() {
    if(input.value.length > 0) {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(input.value));
        toDo.appendChild(option);
        input.value = "";
    }
})

function move(from, to) {
    let selected = Array.from(from.options).filter(option => option.selected);
    for(let i = 0; i < selected.length; i++) {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(selected[i].text));
        to.appendChild(option);
        selected[i].remove();
    }
}

toDoToDoing.addEventListener('click', () => move(toDo, doing));

doingToToDo.addEventListener('click', () => move(doing, toDo));

doingToDone.addEventListener('click', () => move(doing, done));

doneToDoing.addEventListener('click', () => move(done, doing));