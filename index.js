// If, else if, else:
// 1. 
// Checking Age for Different Ticket Prices 
// - Child ticket: $5 (below 12 years)
// - "Teen ticket: $7" (below 18 years)
// - "Senior ticket"

let age = 15; 

if (age < 12) {
    console.log("Child ticket: $5");
} else if (age > 12 && age < 18){
    console.log("Teen ticket: $7");
} else{
    console.log("SSenior ticket");
}

// $10 (between 18 and 60)
// - "Adult ticket: $10" (over 60years)

let ages = 55; 

if (ages >= 18 && ages < 60){
    console.log ("Adult ticket is $8");
} else if (ages < 18) {
    console.log ("Ticket is $5");
} else {
    console.log ("Senior ticket is $10");
}

