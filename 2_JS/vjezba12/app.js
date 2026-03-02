const korisnici = [
    {id: 1, ime: 'Ana', prezime: 'Kartek', godina: 25, admin: false},
    {id: 2, ime: 'Karlo', prezime: 'Kotig', godina: 29, admin: true},
    {id: 3, ime: 'Marko', prezime: 'Čutić', godina: 45, admin: true},
    {id: 4, ime: 'Nikolina', prezime: 'Čutić', godina: 46, admin: true},
    {id: 5, ime: 'Žana', prezime: 'Đitko', godina: 30, admin: false}
];


for(let i = 0; i<korisnici.length; i++){
    console.log(korisnici[i].ime);
}

console.log('***********************');

korisnici.forEach(korisnik => console.log(korisnik.ime));

console.log('***********************');

korisnici.forEach(o=>console.log(`${o.ime} ${o.prezime}`));

console.log('***********************');

korisnici.forEach(o =>{
    let poruka = 'Poštovan'
    if(!o.ime.endsWith('a')){
        poruka += 'i gospodine';
    }else {
        poruka += 'a gospođo';
    }
    // poruka += o.ime.endsWith('a') ? 'a gospođo' : 'i gospodine';
    console.log(`${poruka} ${o.ime} ${o.prezime}`);
});

console.log('***********************');

const samoImena = korisnici.map(o=>o.ime);
console.log(samoImena);

console.log('***********************');

const maliNiz = korisnici.map(({id, ime, prezime}) => ({sifra: id, imeOsobe: ime + ' ' + prezime }));
console.log(maliNiz);

console.log('***********************');

const pronaden = korisnici.find(o => o.id === 10);
console.log(pronaden);

console.log('***********************');

console.log(korisnici.findIndex(o=>o.ime==='Žana'));

console.log('***********************');

