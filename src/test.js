var a;
let b;
const c = 10;




console.log(x);  // 👉 undefined (hoisted)
var x = 5;

console.log(y);  // ❌ ReferenceError
let y = 10;



let userName = "Ali";     // ✅ valid
let _score = 100;         // ✅ valid
let 2user = "Ahmed";      // ❌ invalid
let let = "value";        // ❌ invalid (reserved word)



let name = "Ali"; // global
function greet() {
  console.log(name); // 👉 accessible
}


function test() {
  var a = 5;
  console.log(a); // 👉 accessible here
}
// console.log(a); // ❌ not accessible outside


{
  let x = 10;
  console.log(x); // 👉 accessible inside block
}
// console.log(x); // ❌ not accessible outside



const age = 18;
const message = (age >= 18) ? "You are an adult." : "You are a minor.";
console.log(message); // Output: You are an adult.





let y1 = 'hello';
console.log(y1);

console.log(Number(y1));

hello



let fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits); // 👉 ["apple", "banana", "mango"]



let fruits = ["apple", "banana", "mango"];
fruits.pop();
console.log(fruits); // 👉 ["apple", "banana"]


let fruits = ["banana", "mango"];
fruits.unshift("apple");
console.log(fruits); // 👉 ["apple", "banana", "mango"]


let fruits = ["apple", "banana", "mango"];
fruits.shift();
console.log(fruits); // 👉 ["banana", "mango"]


let fruits = ["apple", "banana", "mango"];
console.log(fruits.indexOf("banana")); // 👉 1
console.log(fruits.indexOf("grape"));  // 👉 -1


let fruits = ["apple", "banana", "mango"];
console.log(fruits.includes("banana")); // 👉 true
console.log(fruits.includes("grape"));  // 👉 false


let fruits = ["apple", "banana", "mango"];
let result = fruits.join(", ");
console.log(result); // 👉 "apple, banana, mango"

//for 
let i = 0;

do {
  console.log("Value is:", i);
  i++;
} while (i < 5);


//while 
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

let str = "123";
let num = parseInt(str);
console.log(num); // 👉 123 (number)





let str = "12.34";
let num = parseFloat(str);
console.log(num); // 👉 12.34


console.log(isNaN("abc"));     // 👉 true (not a number)
console.log(isNaN(123));       // 👉 false (this is a number)
console.log(isNaN("123"));     // 👉 false (can be converted to number)
console.log(isNaN(NaN));       // 👉 true
console.log(isNaN(undefined)); // 👉 true



let price = "100";
let tax = "15";
let total = Number(price) + Number(tax);  // 👉 115



console.log(String(123));         // 👉 "123"
console.log(String(true));        // 👉 "true"
console.log(String(false));       // 👉 "false"
console.log(String(null));        // 👉 "null"
console.log(String(undefined));   // 👉 "undefined"
console.log(String([1, 2, 3]));   // 👉 "1,2,3"


let x = 10;

x += 5;   // x = x + 5 → 15
x -= 3;   // x = x - 3 → 12
x *= 2;   // x = x * 2 → 24
x /= 4;   // x = x / 4 → 6
x %= 4;   // x = x % 4 → 2

console.log(x); // 👉 2



let a = 10;
let b = "10";

console.log(a == b);   // 👉 true
console.log(a === b);  // 👉 false
console.log(a != 5);   // 👉 true
console.log(a > 5);    // 👉 true
console.log(a < 5);    // 👉 false


let age = 20;

// AND (&&)
console.log(age > 18 && age < 30); // 👉 true

// OR (||)
console.log(age < 18 || age > 25); // 👉 true (because 20 < 18 is false but 20 > 25 is false too)

// NOT (!)
let isAdult = true;
console.log(!isAdult);  // 👉 false


function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Ali"); // 👉 Hello, Ali!



const greet = function(name) {
  console.log("Hello, " + name);
};

greet("Sara"); // 👉 Hello, Sara


const greet = (name) => {
  console.log("Hello, " + name);
};

greet("Ahmed"); // 👉 Hello, Ahmed



let a = 10;
let b = 3;

console.log(a + b);  // 👉 13 (Addition)
console.log(a - b);  // 👉 7  (Subtraction)
console.log(a * b);  // 👉 30 (Multiplication)
console.log(a / b);  // 👉 3.33... (Division)
console.log(a % b);  // 👉 1  (Remainder)
console.log(2 ** 4); // 👉 16 (Power)

let x = 5;
x++;
console.log(x);     // 👉 6 (Increment)

x--;
console.log(x);     // 👉 5 (Decrement)



let value1=true
console.log(!value1);



let arr2=[mushaid, ahmad, Taha, Rehman]

let check=arr2.join(" ");

console.log(check);
