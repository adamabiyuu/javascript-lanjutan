// function expression

// const tampilNama = function(nama) {
//     return `halo, ${nama}`;
// }

// console.log(tampilNama('adam'));

// arrow function
// const tampilNama = (nama) => {
//     return `halo ${nama}`;
// }

// console.log(tampilNama('adam'));


// const tampilNama = (nama, waktu) => {
//   return `selamat ${waktu}, ${nama}`;
// };

// console.log(tampilNama("adam", "malam"));

// const tampilNama = nama => `halo ${nama}`;
// console.log(tampilNama('adam'));

// const tampilNama = () => `halo dunia`;
// console.log(tampilNama());

// let mahasiswa = ['adam', 'abiyu', 'febrisyam'];

// // let jumlahHuruf = mahasiswa.map(function(nama) {
// //     return nama.length;
// // });
// // console.log(jumlahHuruf);


// // let jumlahHuruf = mahasiswa.map( nama => nama.length);
// // console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map( nama => ({ nama: nama, jmlHuruf: nama.length }));
// console.table(jumlahHuruf);





// Konsep this pada Arrow Function

// Constructor Function
// const Mahasiswa = function() {
//     this.nama = "adam",
//     this.umur = 24,
//     this.sayHello = function() {
//         console.log(`halo, my name is ${this.nama}, dan saya ${this.umur} tahun`)
//     }
// }

// const adam = new Mahasiswa();

// Arrow Function
// const Mahasiswa = function () {
//   this.nama = "adam",
//     this.umur = 24,
//     this.sayHello = () => {
//       console.log(`halo, my name is ${this.nama}, dan saya ${this.umur} tahun`);
//     };
// };

// const adam = new Mahasiswa();


// object literal
// const mhs1 = {
//     nama: 'Adam',
//     umur: 24,
//      arrow function tidak ada konsep this, yang bawah ini loh
//     sayHello: () => {
//         console.log(`halo, my name is ${this.nama}, dan saya ${this.umur} tahun`);
//         console.log(this)
//     }
// }


// const Mahasiswa = function () {
//   this.nama = "adam",
//     this.umur = 24,
//     this.sayHello = function() {
//       console.log(`halo, my name is ${this.nama}, dan saya ${this.umur} tahun`);
//     }
//     // kalo function expression yang di atas disimpan dalam variabel maka function nya ga kena hoisting di dalemnya
//     // dan function expression ada konsep this
    
//     // kalo function declaration kena hoisting, cari didalem function nya gada maka cari di global, 
//     // makanya waktu this.umur nya cek di global
//     // setInterval(function() {
//     //     console.log(this.umur++);
//     // }, 500);

//     // solusi nya make arrow function, karna arrow function ga ada konsep this
//     // maka mencari ke lexical scope nya
//     setInterval(() => {
//       console.log(this.umur++);
//     }, 500);
// };

// const mhsAja = new Mahasiswa();
// mhsAja.sayHello();






const box = document.querySelector('.box');

box.addEventListener('click', function(){
    let satu = 'size';
    let dua = "caption";

    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }
    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
})

// inget-inget closure hehe
// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`Halo ${nama}, selamat ${waktu}`)
//     }
// }

// let selamatMalam = ucapkanSalam('malam');
// console.log(selamatMalam('adamabiyu'))

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// function repeatLog(n){
//     for(let i = 0; i < n; i++){
//         console.log(i)
//     }
// }
// repeatLog(10);

function repeat(n, action){
    for(let i = 0; i < n; i++){
        action(i);
    }
}

repeat(10, alert);
repeat(10, console.log);










































