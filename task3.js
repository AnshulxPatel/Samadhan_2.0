let studentName = "Anshul Patel";
let marks = [78, 92, 85, 67, 99];

let total = 0;
for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}

let average = total / marks.length;

console.log("Student:", studentName);
console.log("Total Marks:", total);
console.log("Average Marks:", average.toFixed(2));

let highest = marks[0];
let lowest = marks[0];

for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) highest = marks[i];
    if (marks[i] < lowest) lowest = marks[i];
}

console.log("Highest Marks:", highest);
console.log("Lowest Marks:", lowest);


/*
Output:
Student: Anshul Patel
Total Marks: 421
Average Marks: 84.20
Highest Marks: 99
Lowest Marks: 67
*/
