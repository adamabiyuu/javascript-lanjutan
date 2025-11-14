const videos = Array.from(document.querySelectorAll('[data-duration]'));

let jsLanjut = videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

.map(items => items.dataset.duration)

.map(waktu => {
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
})

.reduce((total, detik) => total + detik);

const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;
console.log(jsLanjut )

const jmlVideo = videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} video`;

const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;