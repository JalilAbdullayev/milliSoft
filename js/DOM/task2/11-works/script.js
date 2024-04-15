let input = document.querySelector("input[type='number']");
let submit = document.querySelector("input[type='submit']");
let modal = document.querySelector('#modal');
let modalButtons = document.querySelector('#modal-buttons');
let close = document.querySelector('#close');
let table = document.querySelector('table');
let thead = document.querySelector('thead');
let tbody = document.querySelector('tbody');

modalButtons.innerHTML += `<button class="modal-button green" onclick="changeGrade(1)">Tam</button>
<button class="modal-button yellow" onclick="changeGrade(0.5)">Natamam</button>
<button class="modal-button red" onclick="changeGrade(0)">0</button>`;

let people = [{
    name: 'Jack',
    result: 0
}, {
    name: 'John',
    result: 0
}, {
    name: 'Jane',
    result: 0
}, {
    name: 'Jill',
    result: 0
}];

submit.addEventListener("click", function() {
    let theadIn = `<tr>
                            <th>No</th>
                            <th>SAA</th>`
    for(let i = 1; i <= input.value; i++) {
        theadIn += `<th>İş No ${i}</th>`
    }
    theadIn += `<th>Nəticə</th>
</tr>`;

    input.style.display = "none";
    submit.style.display = "none";
    thead.innerHTML += theadIn;

    people.forEach((person, index) => {
        let tbodyIn = `<tr class="${index}">
                            <td>${index + 1}</td>
                            <td>${person.name}</td>`

        for(let i = 1; i <= input.value; i++) {
            tbodyIn += `<td class="${i}">
                        <button class="td-button de" onclick="openModal(${index}, ${i})">
                            d/e
                        </button>
                    </td>`
        }

        tbodyIn += `<td>${person.result}</td>`;
        tbody.innerHTML += tbodyIn;
    })
    table.style.display = "table";
})

function openModal(index, cell) {
    modal.className = index;
    modal.setAttribute('cell', cell);
    modal.style.display = 'flex';
}

close.addEventListener('click', () => {
    modal.style.display = 'none';
})

function changeGrade(i) {
    let tr = document.querySelectorAll('tbody tr')[modal.className];
    let gradeButton = tr.querySelectorAll('.td-button')[modal.getAttribute('cell') - 1];
    let trLastChild = tr.lastElementChild;

    let color = i === 0 ? 'red' : i === 0.5 ? 'yellow' : 'green';
    let text = i === 0 ? 0 : i === 0.5 ? 'Natamam' : 'Tam';

    gradeButton.className = `td-button ${color}`;
    gradeButton.textContent = text;
    gradeButton.disabled = true;
    gradeButton.removeAttribute('onClick');

    let kesr = 10 / input.value;
    let currentPerson = people[modal.className];

    if(i === 1) {
        currentPerson.result += kesr;
    } else if(i === 0.5) {
        currentPerson.result += kesr / 2;
    } else {
        currentPerson.result += 0;
    }

    trLastChild.textContent = currentPerson.result;
    modal.style.display = 'none';
}