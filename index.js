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

// 2. Checking Day of the Week
// - Monday - Start of the work week!
// - Wednesday - Midweek!
// - Friday - Almost weekend!
// - Other day - Just another day.

let dayWeek = prompt("Enter day of the week");

if (dayWeek === "Monday") {
    console.log ("Start of the work week");
} else if (dayWeek === "Wednesday") {
    console.log ("Midweek!");
} else if (dayWeek === "Friday") {
    console.log("Almost weekend");
} else {
    console.log("Just another day!");
}

// 3. Determining Weather Advice
// - sunny - Wear sunglasses!
// - rainy - Take an umbrella!
// - snowy - Wear a warm coat!
// - any other - Check the weather forecast for more details.

let weather = prompt("Enter weather conditions"); 

if (weather === "sunny"){
    console.log ("Wear sunglasses");
} else if (weather === "rainy"){
    console.log("Take an umbrella");
} else if (weather === "snowy"){
    console.log("Wear a warm coat");
} else {
    console.log("Check the weather forecast for more details");
}

// 4. Simple Login System ( if the credentials match) 
// - username: admin, pass: adminpass - Welcome, admin!- username: user123 , pass: password123 - Welcome, user123!
// - missmatch -  Invalid username or password.

let username = "admin";
let pass = "adminpass"; 

if (username === "admin" && pass === "adminpass"){
    console.log("Welcome, admin!")
} else if (username === "user123" && pass === "password123"){
    console.log("Welcome, user123!");
} else{
    console.log("Invalid usename or password");
}

