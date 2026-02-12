// 10. puta jedno ispod drugog ispišite u konzoli Edunova
// loše riješenje
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");


console.log('----------------------------------');

for(let i=0; i<10; i++){
    console.log('Edunova');
}

console.log('----------------------------------');

for(let i=0; i<10;i++) console.log('Edunova');

console.log('----------------------------------');

for(let i=0;i<10;i++){
    console.log(`Vrijednost i je ${i}`);
}

console.log('----------------------------------');

let suma = 0;

for(let i=0;i<10;i++){
    console.log(`${suma} + ${i+1} = `)
    suma += i+1;
    console.log(suma);
    //debugger;
}

console.log('suma', suma);

console.log('----------------------------------');

for(let i=0;i<10;i++){
    if(i===3){
        continue;       
    }

    if(i===7){
        break;
    }

    console.log(i);
}

console.log('----------------------------------');

for(let i=0;i<10;i++){
    for(let j=0; j<10; j++){
        console.log( (i+1) * (j+1) );
    }
}

console.log('----------------------------------');
const niz = [2,3,45,5,6];

for(let i=0;i<niz.length;i++){
    console.log(niz[i]);
}

console.log('----------------------------------');
for(const broj of niz){
    console.log(broj);
}


console.log('----------------------------------');

const ime = 'Marko';
for(let i=0; i<ime.length;i++){
    console.log(ime[i]);
}

console.log('----------------------------------');
let broj = 0;
for(;;){
    console.log(broj++);
    if(broj>50){
      break;  
    }
}