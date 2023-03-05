//Write a JavaScript function that reverse a number
function rev(){
    let a= [10,14,475,45]
    let b=a.reverse()
    console.log(b)
}
rev()
//Write a JavaScript function that returns a passed string with letters in alphabetical order.
function sortLetters(str){
    return console.log(str.split("").sort().join(""))
}
sortLetters("webapplication")