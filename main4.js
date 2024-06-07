function isBigger(num1, num2){
    if (num1 > num2){
        console.log('num1 больше')
    } else if (num1 == num2){
        console.log("равны")
    } else {
        console.log('num2 больше')
    }
}

// isBigger(2, 2);

function isSmaller(num1, num2){
    if (num1 < num2){
        console.log("num1 меньше")
    } else if (num1 == num2) {
        console.log("числа равны")
    } else {
        console.log("num2 меньше")
    }
}

// isSmaller(10,10);

function isEquale(num1,num2){
    if (num1 == num2){
        console.log("равен")
    }else{
        console.log("не равен")
    }
}

// isEquale(10,0);

function kalkulator(num1,num2,operation){
    // operation - + * /
    if(operation == "+"){
        console.log(num1+num2);
    } else if (operation == "-") {
        console.log(num1-num2);
    } else if (operation == "*"){
        console.log(num1*num2);
    } else if (operation == "/"){
        console.log(num1/num2);
    } else{
        console.log("error");
    }
}

kalkulator(10,23,"*");

kalkulator(20,20,"-");

kalkulator(40,0,"/");

kalkulator(2,2,"+");

kalkulator(2,2,"&");
// console.log(kalkulator(10,23,"*"));