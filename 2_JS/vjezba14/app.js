function* brojevniGenerator(){
    console.log("Početak rada generatora.");

    yield 1;
    yield 2;
    yield 3;

    return 'Gotov';
}

const generator = brojevniGenerator();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

let g;

do{
    g = generator.next();
    console.log(g);
} while(!g.done);


function* sljedeciId(){
    let id=1;
    while(true){
        yield `ID_${id++}`;
    }
}

const id = sljedeciId();

console.log(`Sljedeći id: ${id.next().value}`);

for(let i=0;i<10;i++){
    console.log(`Sljedeći id u petlji: ${id.next().value}`);
}


function* razgovor(){
    let odgovor;
    while(true){
        odgovor = yield 'Kako se zoveš?';
        console.log(`Generator kaže: Drago mi je, ${odgovor}`);
    }
}

const chat = razgovor();

let pitanje = chat.next().value;
console.log(pitanje);

pitanje = chat.next('Marko').value;
console.log(pitanje);

console.log(chat.next('Marija').value);