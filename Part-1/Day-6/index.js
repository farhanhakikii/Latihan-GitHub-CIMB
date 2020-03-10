//return ==> untuk mengembalikan / mengubah function yang dipanggil menjadi nilai didalam function
//misalnya 
//function tambah(a,b){return a-b} ==> maka saat dilakukan >> namafunction(3,2), sudah berubah jadi 5
//console.log(namafunction(1,2)+5) maka hasilnya adalah 10
//jika tidak return maka akan menghasilkan NaN karena tetap dihitung sebagai function
//default parameter = saat parameter tdk diisi saat manggil function maka digunakan parameter default yang sbuat saat dideklarasikan,
//contoh function tambah(a=5,b=4){return a+b}, saat console.log(tambah()) ==> out = 9
//jika ingin ganti a saja dengan 2  maka console.log(2), b saja dengan 2 maka console.log(undefined,2) 
//function bisa ditambung dlm var
// let add = function(a,b){
//     return a + b
// }
// console.log(add(5,2))

// function calculateGrade(marek){
//     let marks = calculateAverage(marek)
//     if(marks >= 100){
//         return 'Not Valid'
//     }else if(marks >= 90){
//         return 'A'
//     }else if(marks >= 80){
//         return 'B'
//     }else if(marks >= 70){
//         return 'C'
//     }else if(marks >= 60){
//         return 'D'
//     }else{
//         return 'E'
//     }
// }
// function calculateAverage(arrey){
//     let nilai = 0
//     for(let i = 0; i < arrey.length; i++){
//         nilai += arrey[i]
//     }
//     return nilai/arrey.length
// }

// let hallo = [100, 90, 80]
// console.log(calculateGrade(hallo))

//challenge
function start () {
    return function () {

      return [1,2,[
        {
          nama: 'Doraemon',
          pekerjaan: 'Manjain orang'
        },
        {
          nama: 'Seto',
          kontak: {
            rumah: 'BSD',
            telfon: ['081234', '432108']
          }
        }
      ],4,5]
    }
  }
console.log(start()()[2][1].kontak.telfon[0]) //start()() buat panggil 2 kali function

//SPEK TUGAS
//Admin & User & Exit
//admin cuma nambah item & exit
//user tampilan yang ini
//Menu jadi function
//opsi tambah item jadi function
//opsi hitung pake function
//proses pembayaran pake function
//tambah item

//challenge sebelum jumat jam 4
//cari kata yang paling sering muncul dan jumlah kemunculannya
//jika ada yang sama maka kata yang duluan ditulis munculkan