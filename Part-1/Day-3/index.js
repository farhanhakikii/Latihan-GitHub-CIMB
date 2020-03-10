// var a = 0;
// for (i = 1; i <= 50; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     //continue;
//     console.log("FizzBuzz");
//     a += 1;
//     if (a == 2) {
//       continue;
//     }
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
a = 1
b = 5
var temp = ''
for(i = 0; i < a; i++){
    for(j = 0; j < b; j++){
        temp += '*'
        console.log(temp)
    }
}
for(i = 0; i < a; i++){
    for(j = 0; j < b; j++){
        console.log(temp)       
        temp -= '*'
    }
}
