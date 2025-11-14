// 1. HTML Fragment
// const mhs = {
//     nama: 'adam',
//     umur: 24,
//     nim: '210605110072',
//     email: 'advmabiyu@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nim}</span>
// </div>`;

// 2. Looping
// const mhs = [
//   {
//     nama: "adam",
//     email: "adam@gmail.com",
//   },
//   {
//     nama: "budi",
//     email: "budi@gmail.com",
//   },
//   ,
//   {
//     nama: "cocote",
//     email: "cocote@gmail.com",
//   },
// ];


// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//             <li>${m.nama}</li>
//             <li>${m.email}</li>
//         </ul>`).join('')}
// </div>`


// 3. conditional
// ternary
// const lagu = {
//     judul: 'tetap dalam jiwa',
//     penyanyi: 'isyana',
//     feat: 'laeli maino'
// }

// const el = `<div class="lagu">
//     <h2 class="">${lagu.judul}</h2>
//     <p class="">${lagu.penyanyi} ${lagu.feat ? `feat ${lagu.feat}` : ''}</p>
// </div>`

// 4. nested
// HTML Fragments bersarang
const mhs = {
    nama: 'adam',
    semester: 5,
    mataKuliah: [
        'oop',
        'games',
        'web',
        'rpl'
    ]
}

function cetakMataKuliah(mataKuliah){
    return `<ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>`
}

const el = `<div class="mhs">
<h2 class="nama">${mhs.nama}</h2>
<span class="semester">Semester: ${mhs.semester}</span>
<h4>Mata Kuliah:</h4>
${cetakMataKuliah(mhs.mataKuliah)}
</div>`
document.body.innerHTML  = el