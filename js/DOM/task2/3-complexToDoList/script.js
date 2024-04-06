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
    }
})


toDoToDoing.addEventListener('click', function() {
    let selected = Array.from(toDo.options).filter(option => option.selected);
    for(let i = 0; i < selected.length; i++) {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(selected[i].text));
        doing.appendChild(option);
        selected[i].remove();
    }
})

doingToToDo.addEventListener('click', function() {
    let selected = Array.from(doing.options).filter(option => option.selected);
    for(let i = 0; i < selected.length; i++) {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(selected[i].text));
        toDo.appendChild(option);
        selected[i].remove();
    }
})

doingToDone.addEventListener('click', function() {
    let selected = Array.from(doing.options).filter(option => option.selected);
    for(let i = 0; i < selected.length; i++) {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(selected[i].text));
        done.appendChild(option);
        selected[i].remove();
    }
})

doneToDoing.addEventListener('click', function() {
    let selected = Array.from(done.options).filter(option => option.selected);
    for(let i = 0; i < selected.length; i++) {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(selected[i].text));
        doing.appendChild(option);
        selected[i].remove();
    }
})