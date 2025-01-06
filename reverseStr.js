function reverseString(str){
    let reverseStr= ""
    for(let i=str.length -1 ; i>=0;i--){
        reverseStr+=str[i]
    }
    return reverseStr
}

let result =reverseString("Mihir")
console.log(result);