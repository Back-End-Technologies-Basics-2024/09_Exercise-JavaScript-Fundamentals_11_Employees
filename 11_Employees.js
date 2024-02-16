function assignPersonalNumbers(employeeNames) {
    'use strict';

    let personalNumbers = {};

    // Assign personal numbers based on the length of each name
    for (let name of employeeNames) {
        let length = name.length;
        personalNumbers[name] = length;
    }

    // Print the list of employees with their personal numbers
    for (let [name, personalNum] of Object.entries(personalNumbers)) {
        console.log(`Name: ${name} -- Personal Number: ${personalNum}`);
    }
}

// Example usage:
let employees = ["John Doe", "Jane Smith", "Alice Johnson"];
assignPersonalNumbers(employees);