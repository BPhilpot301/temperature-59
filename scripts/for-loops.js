//for(let i=1; i<=10; i++){
    //document.writeln("My for is working, value-"+i)
//}

function multiTable(){
    let num = prompt("Enter the number: ");
    for( let i=1; i<11; i++)
        document.writeln(`<p> ${num} x ${i} = ${num*i} </p>`);
}

multiTable();


//While loop
// start, stop, increment

let i=0;
while(i<=10){
    console.log(i);
    i++;
}

//do-while
//start, stop, increment

console.log("------Do-While")
let j=0;//start point

do{
    console.log(j);
    j++; // increment

}while(j<=10)


//while function
function startCountDown(){
    let seconds = 10;
    let results = ""
    while(seconds>0){
     results += `<p> Launching in ... ${seconds} </p>`;
     seconds--;
    }

    document.getElementById("results").innerHTML=results;
}  


//do while function

function passPrompt(){
    let correctPass = "1234";
    let userInput;
    let results="Simulation password input";

    do{
      userInput = prompt("Enter the password: ");
      results += "<p> User input was: " + userInput + "</p>";
    }while(userInput !== correctPass)

    results+= "<p> Welcome to the system</p>";
    document.getElementById("results").innerHTML=results;    
}

//loop function
function showProducts(){
     let products =["laptop", "display", "camera", "speaker"]; // array
     let results="";

     for(let i=0; i<products.length; i++){
        results += `<li> ${products[i]}</li>`;
     }
     document.getElementById("results").innerHTML=results;
}


