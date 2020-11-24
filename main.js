
A = new Array(15);
B = new Array(20);
C = [];

for (i = 0; i < A.length; i++) {
    A[i] = Math.floor(Math.random() * 9);
}

for (i = 0; i < B.length; i++) {
    B[i] = Math.floor(Math.random() * 11);
}
 
B.forEach(function (e) {
    if (A.indexOf(e) !== -1) {
        C.push(e);
    }
});

console.log(A);
console.log(B);
console.log(Array.from(new Set(C))); //повторяющиеся элементы в массивах А и B


// 2) 
// A = new Array(15);
// B = new Array(20);
// C = [];

// for (i = 0; i < A.length; i++) {
//     A[i] = Math.floor(Math.random() * 12);


// for (j = 0; j < B.length; j++) {
//     B[j] = Math.floor(Math.random() * 8);

//     if (A[i] == B[j]) {
//         C.push(A[i]);
//     } 
// }
// }


// console.log(A);
// console.log(B);
// console.log(Array.from(new Set(C)));