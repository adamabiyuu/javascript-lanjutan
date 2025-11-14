// for .. of
// array
// const mhs = ['adam', 'abiyu', 'febrisyam'];

// for(let i = 0; i < mhs.length; i++){
  //   console.log(mhs[i])
  // }
  
  // mhs.forEach(m => console.log(m))
  
  // for(const m of mhs){
    //   console.log(m)
    // }
    
    
// string
// const nama = 'adam';

// for(const n of nama){
//   console.log(n);
// }

// const mhs = ['adam', 'abiyu', 'febrisyam'];

// // mhs.forEach((m, i) => {
// //   console.log(`${m} adalah orang ke-${i + 1}`);
// // });

// for( const [i,m] of mhs.entries() ){
//   console.log(`${m} adalah orang ke-${i + 1}`);
//   // console.log(m)
// }

// NodeList
// const liNama = document.querySelectorAll('.nama');
// // console.log(liNama);

// // liNama.forEach(n => console.log(n.innerHTML));
// for( n of liNama ){
//   // console.log(n.innerHTML)
//   console.log(n.innerHTML)
// }


// arguments
// function jumlahkanAngka(){
//   // return arguments.reduce((a, i) => a + i);
//   // arguments.forEach(a => jumlah += a);

//   let jumlah = 0;
//   for( a of arguments ){
//     jumlah += a;
//   }
//   return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));


// for .. in
const mhs = {
  nama: 'adam',
  umur: 24,
  email: 'adam@gmail.com'
}

for( m in mhs ){
  console.log(`${m}: ${mhs[m]}`);
}