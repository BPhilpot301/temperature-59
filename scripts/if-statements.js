console.log("Conditonals");

//if-statement (condition = y/n?)
//if(conditon){
// code to be executed if the conditon is true

if(3<5){
    console.log("This is true");
}

let student1 = 45;
let student2 = 45;

if(student1==student2){
    console.log("The values are the same");
}


//if-else statement
//if(condition){
//code to be executed if the condition is true
//}else{
// code to run if the conditon is false

let isTrue = false;

if(isTrue == true){
    console.log("Yes");
}else{
    console.log("No");
}

let waterTemp = 102;

if(waterTemp >= 100){
    console.log("The water is boiling");
}else{
    console.log("The water is NOT boitling");
}


let age = 25;

if(age >= 21){
    console.log("You are an adult");
}else{
    console.log("You are underage")
}



//else-if statement
//if(condition){
//code to be executed if the condition is true
//}else if{
// code to run if the conditon is false
//}else{
// code to run if conditons were false
//}




//let light = prompt("Traffic light color");

//if(light=="green"){
 //   console.log("Go!");
//}else if(light=="yellow"){
 //   console.log("Slow down");
//}else if(light=="red"){
 //   console.log("Stop");
//}else{
 //   console.log("Invalid color!")
//}


age = prompt("Age for ticket price");

if(age <= 12){
    console.log("Ticket price $5");
}else if(age <=18){
    console.log("Ticket price $8");
}else if(age >=18){
    console.log("Ticket price $10");
}

function ticketCalculator(){
    let age = prompt("Enter your age");
    let price =0;
    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    }else{
        price=10;
    }

    return "Your ticket price is" + price;
}

document.write(ticketCalculator());

function weatherOutfit(){
    let tmp = prompt("Enter temperature");
    let outfit="";
    let p = document.getElementById("outfit")

if(tmp<15){
    outfit="Wear a jacket";
}else if(tmp<25){
    outfit="Sweater";
}else{
    outfit="Wear a T-shirt";
}

    p.innerHTML="You should wear:" + outfit;
}

//Switch-case
// use it for checking one single variable or expression

let action = prompt("Choose an action: jump, run, attack, punch, scream, or defense");

switch(action){
    case "jump":
        console.log("You jumped over and obstacle");
        break;
    case "run":
        console.log("You are running really fast");
        break;
    case "attack":
        console.log("You are attacking an enemy");
        break;
    case "defend":
        console.log("You blocked the attack");
        break;
    case "punch":
        console.log("You throw a punch");
        break;
    case "scream":
        console.log("You scream really loud");
        break;
    default:
        console.log("Unknown action. Try again");    
}

