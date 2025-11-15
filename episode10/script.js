// callback
// synchronous callback
// function halo(nama){
//     alert(`Halo, ${nama}`);
// }

function tampilkanPesan(callback){
    const nama = prompt('tampilkan nama: ');
    callback(nama);
}

tampilkanPesan(nama => {
    alert(`Halo, ${nama}`);
});