// rest paramater

// function myFunct(){
//     // return myArgs;
//     // return Array.from(arguments);
//     // return [...arguments];
// }

// console.log(myFunct(1,2,3,4,5));

// function jumlahkan(...angka){
//     // let total = 0;
//     // for(const a of angka ){
//     //     total += a;
//     // }
//     // return total;
//     return angka.reduce((a, i) => a + i);
// }

// console.log(jumlahkan(1,2,3,4,5));


//  array destructuring
// const kelompok1 = ['adam', 'abiyu', 'febri', 'syam', 'hehe'];
// const [ketua, wakil, ...anggota] = kelompok1;

// console.log(ketua);

// object destructuring
// const team = {
//     pm: 'adam',
//     frontEnd1: 'abiyu',
//     frontEnd2: 'febrisyam',
//     backEnd: 'budi',
//     ux: 'hendra',
//     devOps: 'abdul',
// };

// const {pm, ...myTeam} = team;
// console.log(myTeam)

// filtering
function filterBy(type, ...values){
    return values.filter(v => typeof v === type);
}

console.log(filterBy('number', 1, 2, 'adam', false, 10, true, 'abiyu'));