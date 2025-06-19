console.log("Functions");


let firstName = "Britney";
let lastName = "Philpot";

//concatenation
console.log("Hello " + firstName + " " + lastName + ", welcome");
console.log(`Hello ${firstName} ${lastName} ${1+1} ,welcome`);

// 1. function declaration (creating a funtion)

function sayHello(){
    //body of the function
    console.log("Hello Cohort 59");
}

//2. call the function (code, console, from the user)
sayHello();
sayHello();

//Example 2 with 1 parameter (inputs)
function greet(name){
    console.log(`Hello ${name}, welcome!`);
}

greet("Britney")
greet("Philpot")

//Example 3 with 2 parameter (inputs)
function greet(name1,name2){
    console.log(`Hello ${name1} and ${name2}, welcome`);
    
}

greet("Britney","Philpot");
greet("Philpot","Britney");

function doubleNumber(number){
   let total = number*2;
   console.log(total);
}

doubleNumber(5);


//Example 4, with prompt
function welcome(){
    let name2 = prompt("Enter your name");
    let age = prompt("Enter you age");

    console.log(`Welcome ${name2} - ${age}`);

}
welcome();


//Example 5 default parameters

function add(num1=0,num2=0){
    console.log(`The total is ${num1 + num2}`);
}

add(3,5);//8
add();
add(4)



function combineNames(firstName,lastName){
    console.log(firstName + " " + lastName);
    
}

combineNames(firstName,lastName);
combineNames(firstName);
combineNames();

function convertToSeconds(){
    let min=prompt("Enter minutes: ");
    document.getElementById("results").innerHTML += `<p> The conversion is: ${min *60} <p>`;
}



//create a btn on the HTML




