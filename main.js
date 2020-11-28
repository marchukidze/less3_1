
A = new Array(8);
B = new Array(10);
C =[];

for (i = 0; i < A.length; i++) {
    A[i] = Math.floor(Math.random() * 80);
}

for (i = 0; i < B.length; i++) {
    B[i] = Math.floor(Math.random() * 80);
}

for (i = 0; i < A.length; i++) {

    for (j = 0; j < B.length; j++) {        
        if (B[j] == A[i]) {
           C.push(B[j]);
        }
    }
}

console.log(A);
console.log(B);
console.log(C);