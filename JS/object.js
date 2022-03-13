// const mhs1 = ['hilmi', 20, ['mancing', 'ibadah']];
// const mhs = {
//     nama: 'Hilmi',
//     usia: 20,
//     hobi: ['mancing perkara', 'rebahan'],

//     perkenalan: function(){
//         return "Halo Namaku " + this.nama + " usiaku " + this.usia;
//     }
// };

const mhs = {
    nama: 'Hilmi',
    usia: 20,
    hobi: ['mancing perkara', 'rebahan'],

    perkenalan: function(){
        return `halo, kenalin namaku $(this.nama) usiaku $(this.usia)`
    }
};

mhs.gender = 'lakik';
console.log(mhs.perkenalan());

