
//1. Math.round()

/*
function round(number){
    const int = parseInt(number)
    const decimalNum = number - int

    if (decimalNum >= 0.5){
        return int + 1;
        }
        
    else {
        return int
    }
}
console.log(round(0))*/


//2. Math.abs()

function create_abs_method(num1){
    if (num1 < 0){
        return -num1
    }
    else {
        return num1
    }
}
console.log(create_abs_method(1.0054))