export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)

  
}





console.log('Type Conversion');

//Type Conversion 





let str1= '12345';
console.log(typeof(str1));


let typeConversion= Number(str1);

console.log(typeof(typeConversion));

console.log("Heelo check ");


//check implicit 

let a='5';
let b= a+3;

console.log(b);
console.log(typeof(b));

let c='5';
let d= c*3;

console.log(d);
console.log(typeof(d));


//check Explicit 

let str=123;
let num= String(str);
console.log(typeof (str));
console.log(typeof (num));



let bol = true;

console.log(typeof (bol));


let chkbol = true +1;

console.log(typeof (chkbol));


console.log(chkbol);


//loose equality

 let chek= 5 == '5';

 console.log(chek);

 console.log(5 == 5);

 console.log(5 == '5');

 console.log( 5 == 6);

 //strict equality

 console.log(5===5);


 console.log(5==='5');

 console.log(9===10);


 //Expressions and Operators

 //Ternary Operator

 let age= 18;

 let vote =(age>=18)? "You Are Eligible For Vote " : "You are UnderAge "
 console.log(vote);


 //Even ODD With Ternary 

 let ab=8;

 let even= (ab%2==0)? "is even " : "Odd";
console.log(even);


// isLogges

let isLogged = false;

let message = isLogged? "Wellcome Back " : "Please Login ";

console.log(message);

 
//Grade check  Nested Ternary

let Marks = 50;

let grade =(Marks>=90)? "A Grade" : 
            (Marks>=80)? "B Grade": 
            (Marks>=60)? "C Grade": 
            (Marks>=50)? "D Grade":"Fail"
            
            console.log(grade);
            




let result =(2+7,3+2)
console.log(result);

 
 
let val=5;
console.log(val++);







let aa = "Age: ";
let bb = 25;

let result2 = aa + bb;

console.log(result2); 


 // convert Object To json
 
 let user ={
  name:'ali1',
  sec:'B',
  id :991,
  name1:'ali',
  sec1:'B2',
  id1 :992,
  name2:'ali',
  sec2:'B3',
  id2 :9922,
  name3:'ali3',
  sec3:'d',
  id3 :993,
  name4:'ali',
  sec4:'B',
  id4 :994,
  
 }

 console.log(user);
 

 let convertobtojson = JSON.stringify(user);

 console.log(convertobtojson);
 

 // convert json  To object 

 let jsontoobj= JSON.parse(convertobtojson)

 console.log(jsontoobj);
 



 //Comma operators

 let num1= (9*23 ,87-80)
 console.log(num1);



 let x = 10;
let y = (x += 5, x * 10);
console.log(y);



//Assignment Operators

let abb=10;
abb+=22;

console.log(abb);


let cc = 3;
cc *= 4; 
console.log(cc);



let f = 2;
f **= 3;  
console.log(f);


// Wallet Example 

let wallet =1000;

//intial value : 
console.log("Intial Value is :",wallet);


wallet -=200;
console.log(" 200 Buy T-short : Amount is :", wallet);

wallet-=100;
console.log(" 100 Buy Watch , Amount is : ",wallet);


wallet+=500;
console.log(' 500 Acoount Deposit : Amount is :',wallet);


wallet/=4;
console.log(" 25% Give Tax , Amount is :",wallet);


wallet**=2;
console.log("Profit of Inveset Amount : Amount is ", wallet);





let passingMarks = 50;
let studentScore = 65;


if (studentScore >= passingMarks) {
    console.log("Student pass ");
} else {
    console.log(" Student failed ");
}

//Food Bill

 
 let bill=2000;
 let bill2=3000;

 let tax=0.1;

 let TotalBill= bill + bill2;
console.log('Total Bill is ',TotalBill);

let withTax= TotalBill + (TotalBill*tax)
console.log("Bill with holding tax is",withTax);


withTax+=300;
console.log("Cashback is 300 after CashBack is :",withTax);

let eachper=withTax/2;
console.log('Each Person is PAy bill is  : ',eachper);




//Logical Operator 


let username = "admin";
let password = "12345";


if (username === "admin" && password === "12345") {
    console.log(" Login successful");
} else {
    console.log(" Invalid credentials");
};


//Loops 

for(let i=0; i<10; i++ ){
  console.log("Hello",+i);
  
};



let fruits = ["apple", "banana", "mango", "grapes"];

for (let i = 0; i < fruits.length; i++) {
    console.log("I like " + fruits[i]);
}





let star='';
for(let i=0; i<=5; i++){
  let print= star+= "⭐"
  console.log(print);
  
}




let count = 0;
for (let i = 1; count < 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " is a common multiple of 3 & 5");
        count++;
    }
}


//Reverse

let strr = "javascript";
let reversed = "";

for (let i = strr.length - 1; i >= 0; i--) {
    reversed += strr[i];
}

console.log("Original:", strr);
console.log("Reversed:", reversed);

//while loop


// while (condition) {
//    code to run
// }


let i = 1;
while (i <= 3) {
  console.log("Number is", i);
  i++;
}




//do while loop
{
let i = 1;
do {
  console.log("Value is", i);
  i++;
} while (i <= 2);
}


//Functions 

function print(){
  console.log("Hello This Functions");
  
}

print();



function NamePrint(name){
  console.log("Hello", name + "!");
  
}

NamePrint("ali");
NamePrint("Hammad");
NamePrint("Bilal");


// function with 3 Names 

function NamePrint1(name,name2,name3,name4){
  console.log(" Name 1 is :",name,".",
               "Name 2 is :",name2,".",
               " Name 1 is :",name3,".",
                " Name 4 is :",name4, ".",
  );
  
}

console.log(NamePrint1("Afaq","Ali","Ahmad"));




//Functions with Return Value 

function Value(aa,bb){
  return aa+bb;
}

console.log(Value(8,2));



//function Expression

let AssignFun = function greet(name){
  console.log("Hello", name ,"!");
  
}

AssignFun('sajid');



//Regular function use with This 
const member = { name: 'Abbas', id : 55, city : "Lahore ", speak : function name(){
  console.log("hello", this.name);
  
}};

member.speak();




// const Arrmember = {name:"Haider", class : 8, fun:()=> console.log("Wellcome", this.class);
// }

// Arrmember.fun();






//Arrow Function

let add1 = (a1,b1)=>{
  return a1+b1;
}

console.log(add1(76,87));


let multi = (x,y) => x*y;

console.log(multi(5,5));




let numbers = [2,4,5,6]
let square = numbers.map(num =>(num*num))
console.log(square);


//find objects Lenghts

let classUser = {
  user1:{name1: "ali", Section : "A", city : "Lahore",
                 name2: "Ahmad", Section : "e", city : "Karchi",
                 name3: "Afaq", Section : "A", city : "Lahore"},

                 user2: {name: "Daniyal", Section : "d", city : "Islamabad",
                 name: "ali Shahbaz", Section : "A", city : "Narang",
                 name: "Rouf", Section : "b", city : "Lahore"
                } ,
                 user3:{
                  name: "ali", Section : "A", city : "Lahore",
                 name: "Ahmad", Section : "e", city : "Karchi",
                 name: "Afaq", Section : "A", city : "Lahore"},

                user4: {name: "Daniyal", Section : "d", city : "Islamabad",
                 name: "ali Shahbaz", Section : "A", city : "Narang",
                 name: "Rouf", Section : "b", city : "Swat"
                 }}

console.log(classUser.user1.name2);

let findLenght = Object.keys(classUser).length;



console.log(findLenght);



// Built in Functions

let NumVal= " This is String   ";

let numIntoString= parseInt(NumVal)

console.log(numIntoString);


console.log(isNaN(numIntoString));



console.log(typeof NumVal );

console.log(typeof numIntoString);

let valueNum = [8,9]

let roundValue = Math.max(valueNum);
console.log(roundValue);


// Total Sum using Arguments 



 function total(){


let sum=0;

for(let i=0; i<arguments.length; i++){
  sum +=arguments[i];
  
  console.log(arguments[0]);
}
console.log(sum);
}

console.log(total(1,2,3,4));





//Loop

let cars=['Gli','Honda','Civic','Grande' ]

for(let i=0; i<=cars.length; i++){
  if(cars[i]==='Civic')
  {
    console.log("Car Find ", cars[i]);

    break;
    
  }

}




//Loop Break 

// let input=prompt("Enter Password ");

// for(let i=0; i<3; i++){
//   if (input==="1234")
//   {

//     alert("Your Are Logged In Succesful")
//     console.log("Your Are Logged In Succesful");
//     break;
    
//   }

//   else{
//     input=prompt("Enter Password ");
//     alert("Please Enter Correct Password ")
//   }
// }





//loop Continue 

let numbers1 = [1, 0, 2, 0, 3];

for(let i=0; i<numbers1.length; i++){
  if(numbers1[i]===0) continue;
  console.log("Number is : ",numbers1[i]);
  
}



//Recursion CountDown

function countDown(n){
  if((n==0) ||(n==1)){
    console.log("Done");
    return;
    
  } 
  console.log("CountDown No :",n);

  countDown(n-1);
}


countDown(5);



//Factorial

function recur(n){
  if(n==0 || n==1)
    return 1;

  else
  {
       return n*recur(n-1);
    
  }
}


console.log(recur(5));



function Numb(n){
  if(n>1){
    console.log("Number is :",n);
    Numb(n-1)
    
  }
}

Numb(9);


//Lexical Scoping 


function outer() {
    let name = "Ali";

    function inner() {
      
        console.log(name); 
       
        
    }

    inner();
    
    
}

outer();





//Closures

 function outer1(){
  let city = "Lahore";

     function inner(){
      console.log("Your City is : ",city);

    
     }
     inner();
 }

 outer1();





function outer2(){
  let counter = 0;

  function inner(){
    counter++;
    console.log("Your Counter Is : ", counter);
  }

  return inner; 
}

let myFunc = outer2();  

myFunc(); 
myFunc(); 
myFunc(); 



let fruits1 = ["apple", "banana", "mango"];

console.log(fruits1);

console.log(fruits1.join(", "));
 






let y1 = '767';


// console.log(Boolean(y1));

console.log(typeof(y1));

console.log(Number(y1));


let chk = Number(y1)

console.log(typeof(chk));


console.log(chk);


// console.log(parseInt(y1));

console.log(typeof(y1));


let floot = '57.98hg';

console.log(Number(floot));
console.log(parseInt(floot));

console.log(parseFloat(floot));



//map 

const array = [1,2,3,4,5,6,767,]
const name =['lahore','iSlamabad','quetta'];

let mult=array.map(x=>x*2)

console.log(name.join(","));


console.log(name.indexOf("quettaa"));


let capitalName = name.map(i=>i.toLocaleUpperCase())
console.log(capitalName);



let multiple4 = array.filter(i=> i%3===0 || i%5===0 )

console.log("3 and 5 Multiple is : ",multiple4);

console.log(mult);


let cityName = name.forEach(name=>{console.log("Hello this my City : ",name);
})

console.log(cityName);







let age1 = 25;
let message1 = "You are " + (age1) + " years old.";
console.log(message1); // 👉 "You are 25 years old."



let chkName = "Dell Laptop ";
let changeParse = parseInt(chkName);

console.log(changeParse);

console.log(typeof(changeParse));




// alert("Hello this is alert")

// prompt("Enter A Name : ")

let array1 = [2,-76,6,7,8,98,77,33,1,9,2,7,0]

let filerVAL =array1.filter(i=>i<10).map(i=>i*2)
console.log(filerVAL);


let arraySort = array1.sort()
console.log(arraySort);
console.log(Math.max(...array1));
console.log(Math.min(...array1));



let a1 = 10;
let b1 = 3;

console.log(a1 + b1-b1*2);


let agee = 20;
console.log(agee < 18 || agee > 25);






let x1 = 5;
++x1;
console.log(x1);     // 👉 6 (Increment)

x1--;
console.log(x1);     // 👉 5 (Decrement)






let age2 = 20;

// AND (&&)
console.log(age2 > 18 && (age2 < 18 || age2 > 25)); // 👉 true

// OR (||)
console.log(age2 < 18 || age2 > 25); // 👉 false (because 20 < 18 is false but 20 > 25 is false too)

// NOT (!)
let isAdult = true;
console.log(!isAdult);  // 👉 false



let sumFun =function getSum(a, b) {
  return a + b;
}

// let total1 = getSum(3, 7); // total = 10

// total1(8,5);

console.log(sumFun(10,10));



//Arrow Function 

const plus=(a,b) =>{
return a+b;
}


console.log(plus(2,2));


console.log(parseInt("0076ab08"));


let chkName1 = "Dell Laptop ";
let changeParse1 = parseInt(chkName1);

console.log(changeParse1);

console.log(typeof(changeParse1));




//recursive 




let arr2=["mushaid", "ahmad", "Taha", "Rehman"]

let check=arr2.join(" ");

console.log(check);

let arr3 = [2,4,6,8,9]

let arrayMap= arr3.map((num, index));
console.log(arrayMap);


let arrayIndex= arr3.map([i])


console.log(arrayMap);

