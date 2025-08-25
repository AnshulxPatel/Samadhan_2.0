let marks = [78, 92, 85, 67, 99, 88];
let highest = marks[0];

for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
        highest = marks[i];
    }
}

console.log(highest);

// Output: 99
