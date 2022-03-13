const fruits = ['Apple','Mango', 'Pineapple','Orange','Avocado'];

// //join = menghubungkan setiap elemen array
// console.log(fruits.join("-"));

// //push = menambahkan array pada elemen terakhir
// fruits.push('Guava');

// //pop = menghapus elemen paling akhir
// fruits.pop();
// console.log(fruits);

// for(let a=0; a<fruits.length; a++){
//     console.log(fruits[a]);
// }

// fruits.forEach((buah) => {
//     console.log(buah);
// })

const ages =[10,15,13,20];
const agesMultiple = ages.map((age) => {
    return age * 2;
});

console.log(ages);
console.log(agesMultiple);