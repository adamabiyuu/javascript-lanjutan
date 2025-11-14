// function init(){
//     // let nama = 'adamabiyu';
//     return function(){
//         console.log(nama);
//     }
// }

// let panggilNama = init();
// panggilNama('adamabiyu');










// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Adam')




























let add = (function(){
    let counter = 0;
    return function(){
        return ++counter;
    }
})();

console.log(add());
















































