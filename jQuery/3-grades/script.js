let modal = $('#modal');

let colorButtons = '';
for(let i = 0; i <= 10; i++) {
    let color = i <= 4 ? "red" : i <= 7 ? "yellow" : "green";
    colorButtons += `<button class="modal-button ${color}" onclick="changeGrade(${i})">${i}</button>`
}
$('#modal-buttons').html(colorButtons);

let letButtons = `<button class="modal-button blue" onclick="changeGrade('b.')">b.</button>
<button class="th-button blue" onclick="changeGrade('i/e')">i/e</button>
<button class="th-button red" onclick="changeGrade('q/b')">q/b</button>`;
$('#modal-buttons').append(letButtons);

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
$('thead').append(tableHead);
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
    $('tbody').append(tableRow);
});

function openModal(index, cell) {
    modal.attr('class', index)
        .attr('cell', cell)
        .css('display', 'flex');
}

function changeGrade(i) {
    let tr = $('tbody tr').eq(modal.attr('class'));
    let gradeButton = tr.find('.td-button').eq(modal.attr('cell'));

    let color = i <= 4 ? 'red' : i <= 7 ? 'yellow' : 'green';

    if(i === 'b.' || i === 'i/e') {
        color = 'blue';
    } else if(i === 'q/b') {
        color = 'red';
    }

    $(gradeButton).removeClass('de')
        .addClass(`${color}`)
        .text(i)
        .prop('disabled', true)
        .removeAttr('onClick');

    modal.hide();
}

$('#close').click(() => {
    modal.hide();
})

function ieQb(index, newClass, newText) {
    $('.td-button').each(function() {
        if($(this).parent().attr('class') == index && $(this).hasClass('td-button de')) {
            $(this).removeClass('de')
                .addClass(newClass)
                .text(newText)
                .prop('disabled', true)
                .removeAttr('onClick');
        }
    });
}

function allIe(index) {
    ieQb(index, 'blue', 'i/e',);
}

function allQb(index) {
    ieQb(index, 'red', 'q/b',);
}