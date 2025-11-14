// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
// for
// const newAngka = [];

// for( let i = 0; i < angka.length; i++){
    //     if( angka[i] >= 3 ){
//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka);

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// filter
// const newAngka = angka.filter(function (a) {
    //   return a >= 3;
// });
// const newAngka = angka.filter((a) =>  a >= 3 );
// console.log(newAngka);

// map
// const newAngka = angka.map(a => a * 2); 

// reduce
// jumlahkan seluruh element pada array
// const newAngka = angka.reduce((accumulator, currentValue) =>
//     accumulator + currentValue, 0);
// // 0 itu nilai awal yang default kalo gada gapapa. Kalo mau ada ya ganti angka lain
// console.log(newAngka)

// Method Chaining 
// Cari angka > 5
// kalikan 3
// jumlahkan

const hasil = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((acc, cur) => acc + cur);
    console.log(hasil)