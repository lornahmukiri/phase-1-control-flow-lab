//WHIE LOOP

let i = 0
while (i < 3) {
    console.log ("Invalid Credentials! Please try again")
    i++
}

//DO WHILE LOOP : an operation will be executed first and then the condition will be checked later.
do {
    console.log("Invalid credentials")

}

//SWITCH STATEMENT
/*switch(key){
    case value:

        break;

    default:
        break;
}*/

//for example:

switch (new Date().getDay()){
    case 0:
        day = "Sunday"
        break; 
    case 1: 
        day: "Monday"
        break;
    case 2: "Tuesday"
        break;
    case 3: "Wednesday"
        break;
    case 4: "Thursday"
        break;
    case 5: "Friday"
        break;

}

//JAVASCRIPT FUNCTIONS.
//let us declare a function

function addNumbers(){
    console.log(2+3)
}
//let's run our function:
addNumbers()
