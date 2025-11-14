// cara untuk membuat Object pada JS
// 1. Object Literal
// Problem : tidak efektif untuk objek yang banyak
// let mahasiswa = {
//     nama: 'adam abiyuu',
//     energi: 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, itadakimasu`);
//     }
// }

// 2. function Declaration
// const methodMahasiswa = {
//       makan : function(porsi){
//           this.energi += porsi;
//           console.log(`halo ${this.nama}, itadakimasu`);
//       },
//       main : function(jam){
//           this.energi -= jam;
//           console.log(`halo ${this.nama}, selamat main`);
//       }
// };

// function Mahasiswa(nama, energi){
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
    
//     return mahasiswa;
// }

// let adamabiyuu = Mahasiswa('adam', 10);
// let budi = Mahasiswa('budi');


// function Mahasiswa(nama, energi){
//     // let this = Object.create(Mahasiswa.prototype);
//     this.nama = nama;
//     this.energi = energi;

//     // return this;
// }

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan`;
// }

// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat main`;
// }

// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur`;
// }

// let adam = new Mahasiswa('adam', 20)


// versi class
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }

//   makan(porsi) {
//     this.energi += porsi;
//     return `halo ${this.nama}, selamat makan`;
//   }
//   main(jam) {
//     this.energi -= jam;
//     return `halo ${this.nama}, selamat main`;
//   }
//   tidur(jam) {
//     this.energi += jam * 2;
//     return `halo ${this.nama}, selamat tidur`;
//   }
// }

// let angka = [];

// let angka = new Array;

// function Array(){
//     let this = Object.create(Array.prototype);
// }







// 3. Constructor Function
// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, itadakimasu`);
//     }
//     this.main = function(jam){
//         this.energi -= jam;
//         console.log(`halo ${this.nama}, selamat main`);
//     }
// }

// let adamabiyuu = new Mahasiswa('adam', 10);