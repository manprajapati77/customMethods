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
console.log(round(0))
