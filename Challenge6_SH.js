
// Get current time in hours using Date object
const now = new Date();
const currentHour = now.getHours(); // Returns hour between 0 to 23

if (currentHour >= 6 && currentHour < 12) {
    console.log("Good morning");
} else if (currentHour >= 13 && currentHour <= 17) {
    console.log("Good afternoon");
} else if (currentHour > 17) {
    console.log("Good night");
}

// Store your name as a string
let name = "Sandeep";
console.log(`${(currentHour >= 6 && currentHour < 12 ? "Good morning " : "") +
            (currentHour >= 13 && currentHour <= 17 ? "Good afternoon " : "") +
            (currentHour > 17 ? "Good night " : "")}${name}`);
            
// Variables for age and holiday status
let age = 8; // Example age, can be changed to test different scenarios
let isHoliday = true; // Example holiday status, can be changed to test different scenarios

// Check for discount based on age and holiday status
if ((age <= 6 || age >= 65) && !isHoliday) {
    console.log("Discount available");
} else {
    console.log("No discount");
}
