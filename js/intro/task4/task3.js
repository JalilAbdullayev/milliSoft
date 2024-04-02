var students = [
    {
        name: "John",
        enter: 42,
        exit: 16
    },
    {
        name: "Jane",
        enter: 45,
        exit: 45
    },
    {
        name: "Joe",
        enter: 45,
        exit: 17
    },
    {
        name: "Jack",
        enter: 45,
        exit: 45
    }
]

for(let i = 0; i <= students.length - 1; i++) {
    if(students[i].enter + students[i].exit < 51 || students[i].exit <= 17) {
        students.splice(i, 1)
        i--
    }
}

console.log(students)