let tbody = document.querySelector('tbody');
let search = document.querySelector('input[type=search]');
let add = document.querySelector('button#add');
let addBtn = document.querySelector('button#addBtn');
let close = document.querySelectorAll('button.close');
let people = [
    {
        name: 'John',
        surname: 'Doe',
        age: 30
    },
    {
        name: 'Jane',
        surname: 'Doe',
        age: 25
    },
    {
        name: 'Jim',
        surname: 'Carrey',
        age: 35
    },
    {
        name: 'Kate',
        surname: 'Winslet',
        age: 30
    }
]

function getData(array) {
    array.forEach((person, index) => {
        tbody.innerHTML += `<tr>
        <td>
            ${index + 1}
        </td>
        <td>
            ${person.name}
        </td>
        <td>
            ${person.surname}
        </td>
        <td>
            ${person.age}
        </td>
        <td>
            <button class="edit" onclick="edit(${index})">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
        </td>
        <td>
            <button class="remove" onclick="remove(${index})">
                <i class="fa-solid fa-trash"></i>
            </button>
        </td>
    </tr>`
    })
}

getData(people)

search.addEventListener('input', (e) => {
    let value = e.target.value
    tbody.innerHTML = ''
    let filterPeople = people.filter((person) => {
        return person.name.toLowerCase().includes(value.toLowerCase()) ||
            person.surname.toLowerCase().includes(value.toLowerCase())
    })
    getData(filterPeople)
})
if(search.value === '') {
    tbody.innerHTML = ''
    getData(people)
}

add.addEventListener('click', () => {
    document.querySelector('#addModal').style.display = 'flex';
})

addBtn.addEventListener('click', () => {
    let name = document.querySelector('#addName');
    let surname = document.querySelector('#addSurname');
    let age = document.querySelector('#addAge');
    people.push({
        name: name.value,
        surname: surname.value,
        age: age.value
    })
    tbody.innerHTML = ''
    getData(people)
    name.value = ''
    surname.value = ''
    age.value = ''
    document.querySelector('#addModal').style.display = 'none';
})

function remove(index) {
    people.splice(index, 1)
    tbody.innerHTML = ''
    getData(people)
}

function edit(index) {
    document.querySelector('#editModal').style.display = 'flex';
    let name = document.querySelector('#editName');
    let surname = document.querySelector('#editSurname');
    let age = document.querySelector('#editAge');
    name.value = people[index].name
    surname.value = people[index].surname
    age.value = people[index].age
    document.querySelector('#editBtn').addEventListener('click', () => {
        people[index].name = name.value
        people[index].surname = surname.value
        people[index].age = age.value
        tbody.innerHTML = ''
        getData(people)
        name.value = ''
        surname.value = ''
        age.value = ''
        document.querySelector('#editModal').style.display = 'none';
    })
}

close.forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelector('#addModal').style.display = 'none';
        document.querySelector('#editModal').style.display = 'none';
    })
})