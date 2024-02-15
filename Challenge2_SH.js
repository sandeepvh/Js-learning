//Challenge 2:
//1.. At a restaurant, you order 1 soup of Rs-10, 3 burgers for Rs-8 each, and 1 ice-cream for Rs-5. 
//    Use JavaScript to calculate the cost of the order
//deifne the prices 
let soupprice=10;
let burgerprice=8;
let iceCreamprice=5;
var totalCost=soupprice+(3*burgerprice)+iceCreamprice;
console.log("1. The total cost of the order is Rs-", totalCost);
// You're at a restaurant with 2 friends (3 people in total) and make the same order as above 
// Calculate how much each person pays.
console.log("2. The cost per person for above is Rs-", totalCost/3);

//Calculate the total cost of a toaster (Rs-18.50) and 2 Shirts (7.50 each). 
let toasterprice=18.50;
let shirtprice=7.50;
let totalprice=toasterprice+(2*shirtprice);
console.log("3. The total cost is Rs-", totalprice);

// Calculate a 10% tax for the total in above (qos-3).
var tax10=totalprice*(10/100);
console.log("4. The 10% tax of the totalprice is Rs-", tax10);

//// The temperature is 25 degree Celcius. Calculate the temperature in Fahrenheit.
const celcius=25;
const fahrenheit=(celcius*1.8)+32;
console.log("5. Answer: "+celcius+" degree Celcius is equal to "+fahrenheit+ " degree Fahrenheit");


