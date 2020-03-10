//constructor ==> parameter
//super ==> merujuk ke class induk 
// class Person{
//     constructor(nama, tahunlahir, asal){
//         this.nama = nama
//         this.tahunlahir = tahunlahir
//         this.asal = asal
//     }
// }

// let arr
// class Developer extends Person{
//     constructor(nama, tahunlahir, asal, specialty, pengalaman){
//         super(nama, tahunlahir, asal)
//         this.specialty = specialty
//         this.pengalaman = pengalaman
//         //bisa juga buat kayak dibawah ini
//         this.usia = '49'
//     }
// }
// let a = new Person('Pajok','1997','Muasal')
// let b = new Person('NKRI','1945','Tanah Air Beta')

// arr=[a,b]
// arr.push(new Person('Harri','1991','Padang'))
// console.log(arr)

//tugas
//clothing  size S-M-L
//HP    Warranty Y-N
//Buah  Expired DD-MM-YYYY
//method get date hari ini - sesuai mesin
//method newdate()
// jika expired gabisa beli
//HP gaada garansi alert

// function selisihmaxmin(array){
//     let temp = 0
//     var small = array[0]
//     for(i = 0; i < array.length; i++){
//             if(array[i] > temp){
//                 temp = array[i]
//             }
//     }
//     for(i = 1; i < array.length; i++){
//         if(array[i] < small){
//             small = array[i]
//         }
// } return (temp - small)
// }
// let arei = [1, 3, 5, 6, 2, 9, 10, 11, 12]
// console.log(selisihmaxmin(arei))
// function sort09(array){
//     for(i = 0; i < array.length; i++){
//         for(j = 0; j < array.length; j++){
//             if(array[i] < array[j]){
//                 var tmp = array[i]
//                 array[i] = array[j]
//                 array[j] = tmp    
//         }
//         }
//     }return(array)
// }

// function mediann(array){
//     sort09(array)
//     if((array.length%2) == 1){
//         return array[((array.length-1)/2)]
//     }else{
//         return (array[array.length/2]+array[(array.length/2)-1])/2
//     }   
// }
// let aharai = [1,3,2,5,4,7,6,9,8]
// console.log(mediann(aharai))

// let output = 0
// function indeksarray(input){
//     for(i = 0; i < input.length; i++){
//         output += i+1
//     }return(output)
// }
// let arhai = ['a','b','c','d','e','f','g','h']
// console.log(indeksarray(arhai))

//BACKUP DARI TUGAS 7
// function menuJenis(){
//     do{
//     menutipe = prompt(`Jenis Barang:\n1.Buah\n2.Baju\n3.Hape`)
//     index = menutipe - 1
//     menuitem = ''
//     if(menutipe == 1 || menutipe.toLowerCase == 'buah'){
//         menuitem += 'Daftar Buah:\n'
//         for(i = 0; i < arrItem[index]; i++){
//             menuitem += `${i+1}. ${arrItem[index][i].nama}\tRp.${arrItem[index][i].harga}\tStok tersedia ${arrItem[index][i].stok} Kadaluarsa: ${arrItem[index][i].expdate}\n`
//         }
//         ulang = false
//     }else if(menutipe == 2 || menutipe.toLowerCase == 'baju'){
//         menuitem += 'Daftar Baju:\n'
//         for(i = 0; i < arrItem[index]; i++){
//             menuitem += `${i+1}. ${arrItem[index][i].nama}\tRp.${arrItem[index][i].harga}\tStok tersedia ${arrItem[index][i].stok} Ukuran: ${arrItem[index][i].size}\n`
//         }
//         ulang = false
//     }else if(menutipe == 3 || menutipe.toLowerCase == 'hape'){
//         menuitem += 'Daftar HP:\n'
//         for(i = 0; i < arrItem[index]; i++){
//             menuitem += `${i+1}. ${arrItem[index][i].nama}\tRp.${arrItem[index][i].harga}\tStok tersedia ${arrItem[index][i].stok} Garansi: ${arrItem[index][i].warranty}\n`
//         }
//         ulang = false
//     }else{
//         alert('Input error')
//         ulang = true
//     }
//     }while(ulang)
//     menubarang = prompt(menuitem)
// }

// function menuBuah(){
//     menuitem += 'Daftar Buah:\n'
//     for(i = 0; i < arrItem[index].length; i++){
//         menuitem += `${i+1}. ${arrItem[index][i].nama}\tRp.${arrItem[index][i].harga}\tStok tersedia ${arrItem[index][i].stok} Kadaluarsa: ${arrItem[index][i].expdate}\n`
//         menubarang = prompt(menuitem)
//     }
// }
// function menuBaju(){
//     menuitem += 'Daftar Baju:\n'
//     for(i = 0; i < arrItem[index].length; i++){
//         menuitem += `${i+1}. ${arrItem[index][i].nama}\tRp.${arrItem[index][i].harga}\tStok tersedia ${arrItem[index][i].stok} Ukuran: ${arrItem[index][i].size}\n`
//         menubarang = prompt(menuitem)
//     }
// }
// function menuHape(){
//     menuitem += 'Daftar HP:\n'
//     for(i = 0; i < arrItem[index].length; i++){
//         menuitem += `${i+1}. ${arrItem[index][i].nama}\tRp.${arrItem[index][i].harga}\tStok tersedia ${arrItem[index][i].stok} Garansi: ${arrItem[index][i].warranty}\n`
//         menubarang = prompt(menuitem)
//     }
// }

// for(i = 0; i < arrItem[index].length; i++){
//     if(menubarang == i){
//         buyItem()
//     }else{
//         menuJenis()
//     }
// }

let tanggul = new Date()
// let dd = tanggal.getDay()
// let mm = tanggal.getMonth()
// let yy = tanggal.getFullYear()
// let curdate = [dd,mm,yy]

console.log(tanggul)
// let tempdate = dateexp.split('/')

// console.log(tgl)
// console.log(month)
// console.log(tahun)

// let hasil = new Date(tahun,month,tgl)
// console.log(hasil)
// let tahun = string(tanggal.getDay()'/'tanggal.getMonth()'/'tanggal.getFullYear())
// console.log(tahun)