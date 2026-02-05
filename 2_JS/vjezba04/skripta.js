const uvijet = true;

if(uvijet){
    console.log("Uvijet je true");   
}

if(uvijet){
    console.log("Uvijet je true");
}else{
    console.log("Uvijet je false"); 
}

const ocijena = 2;

if(ocijena === 1){
    console.log("nedovoljan");
}else if(ocijena===2){
    console.log("dovoljan");
}else if(ocijena===3){
    console.log("dobar");
}else{
    console.log("ocijena nije 1, 2 ili 3");
}

if(uvijet){
    if(ocijena>1){
        console.log('Oba uvjeta su zadovoljeni');
    }
}

if(uvijet && ocijena>1){
    console.log('Kraći način - Oba uvjeta su zadovoljeni');
}

if(ocijena >= 2){
    console.log('Pozitivna');
}else{
    console.log('Negativna');
}

console.log(ocijena>2 ? 'Pozitivna' : 'Negativna');

const ime = 'Pero';

if(ime){
    console.log('Ime je postavljeno');
}

const b=0;
let objekt = null;
let nedefinirano;

const broj = Number('aaa')