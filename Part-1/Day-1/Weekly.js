// No.1
function hapusvokal(kata){
    var hv = kata.replace(/[aeiou]/g,'')
    console.log(hv)
  }

// No.2
function sortAZ(array){
    for(i = 0; i < array.length; i++){
        for(j = 0; j < array.length; j++){
            if(array[i] < array[j]){
                var tmp = array[i]
                array[i] = array[j]
                array[j] = tmp    
        }
        }
    }console.log(array)
}

function sortZA(array){
    for(i = 0; i < array.length; i++){
        for(j = 0; j < array.length; j++){
            if(array[i] > array[j]){
                var tmp = array[i]
                array[i] = array[j]
                array[j] = tmp    
        }
        }
    }console.log(array)
}

// No.3
function sort09(array){
    for(i = 0; i < array.length; i++){
        for(j = 0; j < array.length; j++){
            if(array[i] < array[j]){
                var tmp = array[i]
                array[i] = array[j]
                array[j] = tmp    
        }
        }
    }console.log(array)
}

function sort90(array){
    for(i = 0; i < array.length; i++){
        for(j = 0; j < array.length; j++){
            if(array[i] > array[j]){
                var tmp = array[i]
                array[i] = array[j]
                array[j] = tmp    
        }
        }
    }console.log(array)
}

// No.4
function angkaTerbesar(angka){
    var arr = angka.split(' ').map(Number)
    var temp = 0
for(i = 0;  i < arr.length; i++){
    if(temp < arr[i]){
        temp = arr[i]
    }else{
        temp += 0
    }
}console.log(temp)
}

//No.5
function filterString(input){
    var fs = input.replace(/[a-z]/gi,'')
    console.log(fs)
}

//No.6
function removechar(string){
    var potong = string.slice(1,str.length-1)
    console.log(potong)
}
