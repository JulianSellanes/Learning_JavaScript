// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
/*let base = parseFloat(prompt(`Enter base`));
let height = parseFloat(prompt(`Enter height`));
let area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);*/

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
/*let sideA = parseFloat(prompt(`Enter side a`));
let sideB = parseFloat(prompt(`Enter side b`));
let sideC = parseFloat(prompt(`Enter side c`));
let perimeter = sideA + sideB + sideC;
console.log(`The perimeter of the triangle is ${perimeter}`);*/

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
/*let length = parseFloat(prompt(`Enter length`));
let width = parseFloat(prompt(`Enter width`));
let area = length * width;
let perimeter = 2 * (length + width);
console.log(`The area of the rectangle is ${area} and the perimeter of the rectangle is ${perimeter}`);*/

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
/*let radius = parseFloat(prompt(`Enter radius`));
let area = Math.PI * (radius ** 2);
let circumference = 2 * Math.PI * radius;
console.log(`The area of the circle is ${area} and the circumference of the circle is ${circumference}`);*/

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
/*let x = 1;
let y = -2;
let slope1 = 2;*/

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
/*let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
let slope2 = (y2-y1) / (x2-x1);*/

// Compare the slope of above two questions.

/*slope1 > slope2
    ? console.log(`Slope1 is bigger`)
    : console.log(`Slope2 is bigger`)*/

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
/*let a = 1;
let b = 6
let c = 9;
let sqrt = Math.sqrt((b**2) - (4*a*c));
let result1 = (-b + sqrt) / (2*a);
let result2 = (-b - sqrt) / (2*a);
console.log(result1, result2);
let x = -3;
let y = (x**2) + (6*x) + 9;
console.log(y);*/

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
/*let hours = parseFloat(prompt(`Enter hours`));
let ratePerHour = parseFloat(prompt(`Enter rate per hour`));
let pay = hours * ratePerHour;
console.log(`Your weekly earning is ${pay}`);*/

// If the length of your name is greater than 7 say, your name is long else say your name is short.
/*`Noa`.length > 7
    ? console.log(`Your name is long`)
    : console.log(`Your name is short`)*/

// Compare your first name length and your family name length and you should get this output.
/*let firstName = `Noa`;
let lastName = `Allen`;

firstName.length > lastName.length
    ? console.log(`Your first name, ${firstName} is longer than your last name, ${lastName}`)
    : console.log(`Your first name, ${firstName} is shorter than your last name, ${lastName}`)*/

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
/*let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you`);*/

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
/*let birthYear = parseFloat(prompt(`Enter birth year`));
let age = 2020 - birthYear;

age >= 18
    ? console.log(`You are ${age}. You are old enough to drive`)
    : console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years`)*/

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
/*let years = parseFloat(prompt(`Enter number of years you live`));
console.log(`You lived ${years * 31536000} seconds`);*/

// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

/*const now = new Date();
let day = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();
let hour = now.getHours();
let min = now.getMinutes();

console.log(`${year}-${month}-${day} ${hour}:${min}`);
console.log(`${day}-${month}-${year} ${hour}:${min}`);
console.log(`${day}/${month}/${year} ${hour}:${min}`);*/