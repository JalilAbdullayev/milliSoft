let modalButtons = document.querySelector('#modal-buttons');
let modal = document.querySelector('#modal');
let tbody = document.querySelector('tbody');
let thead = document.querySelector('thead');
let close = document.querySelector('#close');

for(let i = 0; i <= 10; i++) {
    let color = i <= 4 ? "red" : i <= 7 ? "yellow" : "green";
    modalButtons.innerHTML += `<button class="modal-button ${color}" onclick="changeGrade(${i})">${i}</button>`;
}

modalButtons.innerHTML += `<button class="modal-button blue" onclick="changeGrade('b.')">b.</button>
<button class="th-button blue" onclick="changeGrade('i/e')">i/e</button>
<button class="th-button red" onclick="changeGrade('q/b')">q/b</button>`;

let people = ['John', 'Jane', 'Max', 'Alex', 'Kate'];

let tableHead = `<tr>`;
for(let i = 0; i < 3; i++) {
    tableHead += `<th class="${i}"><button class="blue ieqb" onclick="allIe(${i})">i/e</button></th>`
}
tableHead += `</tr><tr>`;

for(let i = 0; i < 3; i++) {
    tableHead += `<th class="${i}"><button class="red ieqb" onclick="allQb(${i})">q/b</button></th>`;
}

tableHead += `</tr>`;
thead.innerHTML += tableHead;
people.forEach((person, index) => {
    let tableRow = `<tr>
        <td>${index + 1}</td>
        <td>${person}</td>`;

    for(let i = 0; i < 3; i++) {
        tableRow += `<td class="${i}">
            <button class="td-button de" onClick="openModal(${index}, ${i})">
                d/e
            </button>
        </td>`;
    }

    tableRow += `</tr>`;
    tbody.innerHTML += tableRow;
});

function openModal(index, cell) {
    modal.className = index;
    modal.setAttribute('cell', cell);
    modal.style.display = 'flex';
}

function changeGrade(i) {
    let tr = document.querySelectorAll('tbody tr')[modal.className];
    let gradeButton = tr.querySelectorAll('.td-button')[modal.getAttribute('cell')];

    let color = i <= 4 ? 'red' : i <= 7 ? 'yellow' : 'green';

    if(i === 'b.' || i === 'i/e') {
        color = 'blue';
    } else if(i === 'q/b') {
        color = 'red';
    }

    gradeButton.className = `td-button ${color}`;
    gradeButton.textContent = i;
    gradeButton.disabled = true;
    gradeButton.removeAttribute('onClick');

    modal.style.display = 'none';
}

close.addEventListener('click', () => {
    modal.style.display = 'none';
})

function allIe(index) {
    let tdButtons = document.querySelectorAll('.td-button');
    tdButtons.forEach((tdButton, i) => {
        if(tdButton.parentElement.className == index) {
            if(tdButton.className == 'td-button de') {
                tdButton.className = 'td-button blue';
                tdButton.textContent = 'i/e';
                tdButton.disabled = true;
                tdButton.removeAttribute('onClick');
            }
        }
    })
}

function allQb(index) {
    let tdButtons = document.querySelectorAll('.td-button');
    tdButtons.forEach((tdButton, i) => {
        if(tdButton.parentElement.className == index) {
            if(tdButton.className == 'td-button de') {
                tdButton.className = 'td-button red';
                tdButton.textContent = 'q/b';
                tdButton.disabled = true;
                tdButton.removeAttribute('onClick');
            }
        }
    })
}