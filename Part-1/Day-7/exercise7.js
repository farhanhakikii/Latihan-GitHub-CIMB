class item{
    constructor(nama, harga, stok, qty){
        this.nama = nama
        this.harga = harga
        this.stok = stok
        this.qty = 0
    }
}
class baju extends item{
    constructor(nama, harga, stok, qty, size){
        super(nama, harga, stok, qty)
        this.size = size
    }
}
class hape extends item{
    constructor(nama, harga, stok, qty, warranty){
        super(nama, harga, stok, qty)
        this.warranty = warranty
    }
}
class buah extends item{
    constructor(nama, harga, stok, qty, expdate){
        super(nama, harga, stok, qty)
        this.expdate = expdate
    }
}

let arrItem = [[new buah('Mangga', 5000, 500, 0, 2021),
               new buah('Nanas', 7000, 500, 0, 2021)],                  
               [new baju('Kemeja', 200000, 100, 0, 'L'),
               new baju('Kaos', 50000, 100, 0, 'L')],
               [new hape('AifonSebelas', 10000000, 250, 0, true),                    
               new hape('Siomay', 2000000, 250, 0, false)]                    
]
console.log(arrItem[0][0].nama)

