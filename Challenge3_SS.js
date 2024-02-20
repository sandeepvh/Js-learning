// Create the text "My name is: as a string. 
var sentence="My name is:"

// Create your name as a string (for eg: "Simon")
var name="Sandeep";

// Using Concatenation, add the 2 strings from 1st qos and 2nd qos together to create the text: 'My name is ___' (replace ___ with you name).
console.log(sentence+" "+name);
console.log("Type of sentence is ",typeof(sentence));
console.log("Type of name is ",typeof(name));
// At a restaurant, you order 1 coffee (rs-5) and 1 bagel(rss-3). Using math, calculate the total cost, and 
//using concatenation, create the text: 'Total cost: $___' (replace ___ with the total you calculated).
let coffee=5;
let bagel=3;
totalCost=coffee+bagel;
console.log("Total cost: Rs."+totalCost);

// Do the same thins as 4th qos, but use a template string and interpolation. 
console.log(`Total cost is Rs. ${totalCost} using String Interpolation`);

// Display the text from 5th qos in a popup using alert(...);
//alert(`Total cost is Rs. ${totalCost} using String Interpolation as alert`);

// You order 1 coffee ($5.99) and 1 bagel($2.95). Using math, calculate the total cost
// using concatenation, create the text: 'Total cost: $____' (hint: calculate in cents to avoid inaccuracies)
let cof=5.99;
let bag=2.95;
console.log("Total cost: $",cof+bag);
