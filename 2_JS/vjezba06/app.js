const niz = [];
console.log(niz, niz.length);

const temperature = [-2, 2, 10, 15, 21, 26, 29, 31, 28, 19, 10, 4];
console.log(temperature.length);

console.log('Siječanj', temperature[0]);
const zadnji = temperature.length - 1;
console.log('Prosinac', temperature[zadnji])

console.log(temperature);

temperature[2] = 17;
console.log(temperature);

const ptp = [
    'string', 
    12,
    {ime: 'pero'},
    15n,
    [],
    true,
    null,
    undefined,
    Symbol('id')
];
console.log(ptp);

const tablica = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(tablica);

console.log(tablica[1][2]);

tablica[2][0] = 10;
console.log(tablica);