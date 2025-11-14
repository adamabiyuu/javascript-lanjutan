// Destructuring variable / Assigment
const perkenalan = ['Halo', 'nama', 'saya', 'adam'];

// const [salam, satu, dua, nama] = perkenalan;

// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(nama)

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba(){
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(b);

// Rest Parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);



// Destructuring Object
// const mhs = {
//     nama: 'adam',
//     umur: 24
// }

// const {nama, umur} = mhs;
// console.log(nama)

// Assignment tanpa dekslarasi object
// ({ nama, umur } = {
//   nama: "adam",
//   umur: 24,
// });
// console.log(nama);

// ganti nama variable
// const mhs = {
//     nama: 'adam',
//     umur: 24
// }
// const { nama: n, umur:u } = mhs;
// console.log(u)

// kasih default value
// const mhs = {
//   nama: "adam",
//   umur: 24,
// };
// const { nama, umur, email = 'default@gmail.com' } = mhs;
// console.log(email);

// kasih default value dan kasih nama variable baru
// const mhs = {
//   nama: "adam",
//   umur: 24,
//   email: 'adam@gmail.com'
// };
// const { nama: n, umur: u, email: e = "default@gmail.com" } = mhs;
// console.log(e);


// Rest Parameter
// const mhs = {
//   nama: "adam",
//   umur: 24,
//   email: "adam@gmail.com",
// };
// const { nama: n, ...values } = mhs;
// console.log(values);

// ngambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 123,
  nama: "adam",
  umur: 24,
  email: "adam@gmail.com",
};
function getIdMhs({id}){
    return id;
}
console.log(getIdMhs(mhs));
