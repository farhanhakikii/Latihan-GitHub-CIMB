// let arr = ['Mangga','Jeruk','Nanas','Apel','Durian']
// arr[0] = 1000
// arr[1] = 1000
// arr[2] = 1000
// arr[3] = 1000
// arr[4] = 1000

// console.log(arr[1]+arr[2])
// console.log(arr[2])

// let teks = 'polpolpolpopolpolpolpol   cwcec                 \n'
// console.log(teks.length)
// console.log(teks.trim().length)

// lenarr = arr.push('Ndase') // tambah isi array ==> tanpa 'lenarr =' // pake lenarr = push.arr() ==> nampilin jumlah isi array
// console.log(lenarr + ': ' + arr[1].toUpperCase())
//tambah isi array juga bisa masukin arr[i] yg dimana i yang belum ada isinya bisa juga arr[arr.length] = 'isi array baru'
//tambah isi array dg ngelewati beberapa angka maka akan ada yang kosong array nya

// arr[4] = 'sikil' // ganti isi array keempat
// console.log(arr)

// total = 0
// let arrNumber = [3,7,6,9,5]
// for (i = 0; i < arrNumber.length; i++){
//     total += arrNumber[i]
// }
// console.log('Jumlah dari ' + arrNumber + ' adalah : ' + total)
// //bisa juga
// arrNumber.forEach(function (val){
//     result += val
// })
// //bisa juga
// for(let i of arrNumber){
//     console.log(i)}
// //bisa juga 
// console.log(arrNumber.reduce((a,b) => a+b))

// let stringg = 'Halo halo banten'
// console.log(stringg.split(' '))

//splice hapus anggota array ==> splice(2,2) ==> member index ke dua sejumlah 2  //dari kiri
//                               splice(-2,2) ==> member index                   //dari kanan  

let arrbaru = ['Text', 'String', 'Tulisan', 'Doraemon']
console.log('Tulisan berada pada index ' + arrbaru.indexOf('Tulisan'))