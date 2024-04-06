let input = document.querySelector('input');

function insert(value) {
    input.value += value;
}

function equal() {
    if(input.value !== "") {
        let numbers = [];
        let operators = [];

        let currentNum = "";
        for(let i = 0; i < input.value.length; i++) {
            if(input.value[i] === "/" || input.value[i] === "*" || input.value[i] === "+" || input.value[i] === "-") {
                numbers.push(Number(currentNum));
                currentNum = "";
                operators.push(input.value[i]);
            } else {
                currentNum += input.value[i];
            }
        }
        numbers.push(Number(currentNum));

        let result = numbers[0];
        for(let i = 0; i < operators.length; i++) {
            if(operators[i] === "+") {
                result += numbers[i + 1];
            } else if(operators[i] === "-") {
                result -= numbers[i + 1];
            } else if(operators[i] === "*") {
                result *= numbers[i + 1];
            } else if(operators[i] === "/") {
                result /= numbers[i + 1];
            }
        }

        input.value = result;
    }
}

function clean() {
    input.value = '';
}

function backspace() {
    input.value = input.value.slice(0, -1);
}