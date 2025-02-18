const students = [
    { name: "Ali", age: 22, marks: 85 },
    { name: "Ayesha", age: 20, marks: 92 },
    { name: "Bilal", age: 23, marks: 78 },
    { name: "Ibrahim", age: 22, marks: 76 },
    { name: "Usama", age: 21, marks: 80 }
];

// Sort students by marks in descending order
function sortByMarksDescending(arr) {
    let studentsCopy = [];
    for (let i = 0; i < arr.length; i++) {
        studentsCopy[i] = arr[i];
    }

    for (let i = 0; i < studentsCopy.length - 1; i++) {
        for (let j = 0; j < studentsCopy.length - i - 1; j++) {
            if (studentsCopy[j].marks < studentsCopy[j + 1].marks) {
                let temp = studentsCopy[j];
                studentsCopy[j] = studentsCopy[j + 1];
                studentsCopy[j + 1] = temp;
            }
        }
    }
    return studentsCopy;
}

// Return student names with marks greater than 80
function getHighScorers(arr) {
    let highScorers = [];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].marks > 80) {
            highScorers[index] = arr[i].name;
            index++;
        }
    }
    return highScorers;
}

// Return students older than 21
function getOlderStudents(arr) {
    let olderStudents = [];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > 21) {
            olderStudents[index] = arr[i];
            index++;
        }
    }
    return olderStudents;
}

console.log("Sorted by marks:", sortByMarksDescending(students));
console.log("Students with marks > 80:", getHighScorers(students));
console.log("Students older than 21:", getOlderStudents(students));
