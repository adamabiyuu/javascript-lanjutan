// const nama = 'adam';
// const umur = 24;

// // function coba(strings, ...values){
// //     // let result = '';
// //     // strings.forEach((str, i) => {
// //     //     result += `${str}${values[i] || ''}`;
// //     // });
// //     // return result;

// // }


// function coba(strings, ...values){
//     return strings.reduce((result, str, i) => `${result}${str}<span class='hl'>${values[i] || ""}</span>`, "");
// }

// const str = coba`Halo nama saya ${nama}, umur ${umur} tahun`;

// // console.log(str);
// document.body.innerHTML = str;








const nama = 'adam';
const umur = 24;
const email = 'adam@gmail.com';

function coba(strings, ...values){
    return strings.reduce((result, strings, i) => `${result}${strings}<span class='hl'>${values[i] || ""}</span>`, "");
}

const str = coba`nama saya ${nama}, email: ${email}, umur ${umur} tahun`;
document.body.innerHTML = str;