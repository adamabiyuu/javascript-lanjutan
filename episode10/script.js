// callback
// synchronous callback
// function halo(nama){
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback){
//     const nama = prompt('tampilkan nama: ');
//     callback(nama);
// }

// tampilkanPesan(nama => {
//     alert(`Halo, ${nama}`);
// });

// const mhs = [
//     {
//         "nama": "adam",
//         "umur": "24",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "budi",
//         "umur": "22",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "canto",
//         "umur": "24",
//         "idDosenWali": 2
//     },
// ]

// console.log('mulai');
// mhs.forEach(m => {
//     for(let i = 0; i < 10000000; i++){
//         let date = new Date();
//     }
//     console.log(m.nama);
// });
// console.log('selesai');

// Asynchronous Callback

// vanilla javascript
// function getDataMahasiswa(url, success, error){
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function(){
//         if( xhr.readyState === 4){
//             if( xhr.status === 200 ){
//                 success(xhr.response);
//             } else if ( xhr.status === 404 ){
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('../episode10/data/mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {
    
// })
// console.log('done');

// jQuery
console.log('mulai');
$.ajax({
    url: '../episode10/data/mahasiswa.json',
    // gaperlu JSON.parse lagi kalo jQuery
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
})
console.log('selesai');
