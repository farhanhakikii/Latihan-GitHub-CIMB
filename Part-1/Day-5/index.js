//orang punya nama umur kerja
//5 orang
//tampilkan nama umur kerja

// let arrNames = ['Farhan', 'Hakiki', 'Ikikah', 'Nahraf', 'Hanhan']
// let arrAges = ['20', '21', '22', '23', '24']
// let arrJobs = ['Student', 'CEO', 'Police', 'Teacher', 'Banker']
// let arrTelp = ['021111', '021221', ['021331', '021332'], '021441', ['021551', '021552']]
//let tampil = `No\tName\tAge\tJob\n`

// let tampil = ''
// let orang = [['Farhan', 30, 'PNS'], ['Hakiki', 35, 'CEO'], ['Ikikah', 40, 'Petani']]

// for(i = 0; i < orang.length; i++){
//         for(j = 0; j < orang.length; j++){
//         tampil += orang[i][j] + ' '
//             //tampil += `\n${i + 1}.\t${orang[i][j]}\t${orang[i][j+1]}\t${orang[i][j+2]}`
//         } tampil += '\n'
//     }
// console.log(tampil)

//bikin objek
let mobil = {
warna: 'Merah',
tahun: '2018',
merk: 'honda',
ban: {
    diameter: 20,
    tipe: 'offroed',
    brand: ['hankook', 'bridgestone']
}
} 
//tambah dan ganti isi objek
mobil.tipe = 'sedan' //sama juga dengan mobil['tipe'] = 'sedan'
mobil.warna = 'biru'
console.log(mobil.ban.brand[1])
//console.log(mobil.tipe) == console.log(mobil['tipe'])

//lanjutkan program kemaren dan ganti variabel dengan objek
//tambahkan fitur keranjang belanja

//weekend task fitur tambah item
//bikin function hapus huruf vokal,sort array string alphabetical,sort array integer,display angka terbesar,filter string hanya bisa integer,hapus huruf awal akhir,