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
];

function getData(array) {
    let htmlContent = '';
    array.forEach((person, index) => {
        htmlContent += `<tr>
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
    </tr>`;
    });
    $('tbody').html(htmlContent);
}

getData(people)

$('#search').on('input', (e) => {
    let value = e.target.value;
    $('tbody').html('');
    let filterPeople = people.filter((person) => {
        return person.name.toLowerCase().includes(value.toLowerCase()) ||
            person.surname.toLowerCase().includes(value.toLowerCase());
    });
    getData(filterPeople);
})
if($('#search').val('')) {
    $('tbody').html('');
    getData(people);
}

$('#add').click(() => {
    $('#addModal').css('display', 'flex');
});

$('#addBtn').click(() => {
    let name = $('#addName');
    let surname = $('#addSurname');
    let age = $('#addAge');
    people.push({
        name: name.val(),
        surname: surname.val(),
        age: age.val()
    });
    $('tbody').html('');
    getData(people)
    name.val('');
    surname.val('');
    age.val('');
    $('#addModal').hide();
});

function remove(index) {
    people.splice(index, 1);
    $('tbody').html('');
    getData(people);
}

let lastEditedIndex = -1;

function edit(index) {
    function fill(person) {
        $('#editName').val(person.name);
        $('#editSurname').val(person.surname);
        $('#editAge').val(person.age);
    }

    function update(person, newName, newSurname, newAge) {
        person.name = newName;
        person.surname = newSurname;
        person.age = newAge;
        $('tbody').html('');
        getData(people);
    }

    $('#editModal').css('display', 'flex');
    let person = people[index];
    fill(person);

    $('#editBtn').off().click(() => {
        let newName = $('#editName').val();
        let newSurname = $('#editSurname').val();
        let newAge = $('#editAge').val();

        update(person, newName, newSurname, newAge);

        $('#editName').val('');
        $('#editSurname').val('');
        $('#editAge').val('');
        $('#editModal').hide();
    });
}

$('.close').click(() => {
    $('#addModal').hide();
    $('#editModal').hide();
});