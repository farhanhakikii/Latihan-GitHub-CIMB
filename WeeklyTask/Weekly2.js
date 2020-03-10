const caesarCipher = (string, number) => {
    let pisah = string.split('')
    let indeks = 0
    let temp = ''
    for(i = 0; i < pisah.length; i++){
        indeks = pisah[i].charCodeAt()+number
        if(indeks > 122){
            temp += String.fromCharCode(indeks-26)
        }else{
            temp += String.fromCharCode(indeks)
        }
    }return temp
}
console.log(caesarCipher('xyz',3))

const plusMinus = (array) => {
    let hasil = array[0]
    for(i = 1; i < array.length; i++){
        let temp = array[i]
        if(i%2 == 1){
            hasil += temp
        }else{
            hasil -= temp
        }
    }return hasil
}
let inputs = [1,2,3,4]
console.log(plusMinus(inputs))

const isPalindrome = (str) => {
    let input = str.split('')
    for(i = 0; i < input.length/2; i++){
        if(input[i].toLowerCase() !== input[input.length-1-i].toLowerCase()){
            return false
        }
    }return true
}
let inputt = isPalindrome('ngakak')
console.log(inputt)