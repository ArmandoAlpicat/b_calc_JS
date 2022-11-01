const prompt = require('prompt-sync')({sigint: true});
let cont=true
while (cont==true){
    let validOpp=false
    let operator = ""
    while (validOpp==false){
        operator = prompt("Select your operator (+, -, *, /) : ");
        if (operator =="+"||operator =="-"||operator =="*"||operator =="/"){
            validOpp=true
        }else{
            console.log("\n---Invalid Input---\n")
            continue
        }
    }


    let n1 = parseFloat(prompt("Fisrst number: "));
    let n2 = parseFloat(prompt("Fisrst number: "));

    switch (operator){
        case "+":
            calc = n1+n2
            break;
        case "-":
            calc = n1-n2
            break;
        case "*":
            calc = n1*n2
            break;
        case "/":
            calc = n1/n2
            break;
    }
    console.log("Result: ", calc)
    const selec= prompt("wish to continue? Y | N :  ");
    if (selec== "y"){
        cont=cont
    }else if(selec=="n"){
        cont=false;
        console.log("\n Good Bye! :)\n")
    }
    
    
}
    