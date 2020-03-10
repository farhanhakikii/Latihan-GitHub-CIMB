function hitungkata(kalimat){
    let inputs = kalimat.split(' ')
    let maxWord = 1
    let count = 0
    let item
    for (i = 0; i < inputs.length; i++){
        for (let j = i; j < inputs.length; j++){
            if (inputs[i].toLowerCase() == inputs[j].toLowerCase()){
                count++
            }
        }
        if (maxWord < count){
            maxWord = count 
            item = inputs[i].toLowerCase()
        }
        count = 0
    }
    let output = `Kata yang paling sering muncul adalah '${item}' sebanyak ${maxWord} kata.`
    return output
}
let slogan = 'Halo halo bandung ibukota priangan halo halo bandung kota kenang kenangan bandung bandung bandung'
console.log(hitungkata(slogan))