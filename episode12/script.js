// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=ec3ea753&s=avengers",
//   success: movies => console.log(movies)
// });

// fetch("http://www.omdbapi.com/?apikey=ec3ea753&s=avengers")
// .then(response => response.json())
// .then(response => console.log(response));

// Promise
// Object yang mempresentasikan keberhasilan / kegagalan sebuah 
// event yang asynchronous di masa yang akan datang
// janji (terpenuji / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// biasanya promise dipakai untuk request api
// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if( ditepati ){
//     resolve('ditepati');
//   } else {
//     reject('ingkar')
//   }
// });

// janji1
//   .then(response => console.log('ok : ' + response))
//   .catch(response => console.log('not ok : ' + response))

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if(ditepati){
//     setTimeout(() => {
//       resolve('ditepati setelah beberapa waktu');
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("ditepati setelah beberapa waktu");
//     }, 2000);
//   }
// });

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log('selesai menunggu'))
//   .then(response => console.log('ok : ' + response))
//   .catch(response => console.log('not ok : ' + response))
// console.log('selesai');

// Promise.all
const film = new Promise( resolve => {
  setTimeout(() => {
    resolve([{
      judul : 'hehe',
      sutradara: 'adam',
      aktor: 'abiyu'
    }])
  }, 1000);
})

const cuaca = new Promise( resolve => {
  setTimeout(() => {
    resolve([{
      kota: 'bandung',
      temp: 26,
      kondisi: 'cerah berawan'
    }])
  }, 500);
})

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
  .then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  })