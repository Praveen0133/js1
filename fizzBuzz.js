function fizzB(num){
    if(num%5==0 && num%3==0){
        return "FizzBuzz"
    }else if(num%5==0){
        return "Buzz"
    }else if(num%3==0){
        return "Fizz"
    }
}

console.log(fizzB(15))