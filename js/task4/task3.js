var students = {
    student1: {
        name: "John",
        exam: true
    },
    student2: {
        name: "Jane",
        exam: false
    },
    student3: {
        name: "Joe",
        exam: true
    },
    student4: {
        name: "Jack",
        exam: false
    }
}

function removeFailedStudents(students) {
    return Object.keys(students).filter((key) => students[key].exam)
}

console.log(removeFailedStudents(students))