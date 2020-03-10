//arrow function
//const alphaValue = (param1,param2) => param1+param2
//sama dengan function alphavalue(param1,param2){return param1+param2}
// let a = new Date()
// let dd = a.getDay()
// let mm = a.getMonth()
// let yy = a.getFullYear()
// console.log(`${dd}/${mm}/${yy}`)

// const hanyaganjil = (param) => {
//     let kata = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     let temp = 0

//     for (i = 0; i < param.length; i+=2){
//         temp += (kata.indexOf(param[i])+1)
//     }return temp
// }

// console.log(hanyaganjil('abcde'))

// const tumpuk = (param) => {
//     let kata = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     let temp = ''

//     for (i = 0; i < param.length; i++){
//         temp += (kata.indexOf(param[i])+1)
//     }return temp
// }

// console.log(tumpuk('xyz'))

// class produk{
//     constructor(nama,harga){
//         this.nama = nama
//         this.harga = harga
//     }
// }
// let arr = [
//     new produk('apel',10000),
//     new produk('apple',1000),
//     new produk('bape',5000),
//     new produk('mangga',7000),
//     ]

// const cari = input =>{
//     let hasil = arr.filter((value) => value.nama.toLowerCase().includes(input.toLowerCase()))
//     return hasil
// }
let hasil1 = 0
let hasil2 = 0
const hasil = input =>{
    for(i = 0; i < input.length; i++){
        if(input[i] > 0){
            hasil1 += input[i]
        }else{
            hasil2 += input[i]
        }
    }
    let arrhasil = [hasil1,hasil2]
    return arrhasil
}
let arraii = [1,2,3,4,5,-1,-2,-3,-4,-5]
console.log(hasil(arraii))