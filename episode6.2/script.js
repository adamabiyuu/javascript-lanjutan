// Destructuring

// function kalkulasi(a, b){
//   return [a + b, a -b,  a * b, a / b];
// }

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah)
// console.log(kali)

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 3);
// console.log(bagi)
// kalo array, urutan sangat ngaruh

// function kalkulasi(a, b){
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b
//   }
// }

// const {bagi, tambah, kali, kurang} = kalkulasi(2, 3);
// console.log(kurang)

// Destructuring function arguments
const mhs1 = {
  nama: 'adam',
  umur: 24,
  email: 'adam@gmail.com',
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 90
  }
}

// function cetakMhs(mhs){
//   return `halo nama saya ${mhs.nama}, umur ${mhs.umur} tahun`;
// }

// console.log(cetakMhs(mhs1))

function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}) {
  return `halo nama saya ${nama}, umur ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));