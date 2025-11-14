// spread operator
// memecah iterables menjadi single element

// const mhs = ['adam', 'abiyu', 'febrisyam'];
// console.log(...mhs[0])

// menggabungkan dua Array
// const mhs = ['adam', 'abiyu', 'febrisyam'];
// const dosen = ['sandhika', 'galih', 'hehe'];

// const orang = [...mhs, 'abdul', ...dosen];
// console.log(orang)

// meng-copy array

// const mhs = ['adam', 'abiyu', 'febrisyam'];
// const mhs1 = [...mhs];
// mhs1[0] = 'hehe'
// console.log(mhs1);

// const liMhs = document.querySelectorAll('li');
// // // const mhs = [];
// // // for(let i = 0; i < liMhs.length; i++){
// // //   mhs.push(liMhs[i].textContent)
// // // }
// // // console.log(mhs);


// const mhs = [...liMhs].map(m => m.textContent);

// console.log(liMhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;
