
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;


  switch (zadatak) {
    case '1':
    // ZADATAK 1 — Prvi i zadnji element
    //    - niz se gradi od  i B (plus dva fiksna elementa radi smisla)
    //    Ulaz primjer: [A, 20, 30, B]
    //    Izlaz: Prvi: A, Zadnji: B
      // početak rješenja p1.  zadatak

      if(!a && !b){
        rezultat.innerHTML = 'Polja A i B su prazna';
        return;
      } else if(!a){
        rezultat.innerHTML = 'Polja A je prazno';
        return;
      } else if(!b){
        rezultat.innerHTML = 'Polje B je prazno';
        return;
      }

      const nizZad1 = [null, 20, 30, null];
      nizZad1[0] = a.toUpperCase();
      nizZad1[3] = b.toUpperCase();
      
      rezultat.innerHTML = `Prvi: ${nizZad1[0]}, Zadnji: ${nizZad1[3]}`;

      console.log(nizZad1);

      // kraj rješavanje 1. zadatak
    break;

    case '2':
    // ZADATAK 2 — Siguran pristup elementu
    //    - indeks se računa iz B:
    //      ako je B broj → index = A
    //      inače → index = duljina stringa A
    //    - niz je ["a", A, "c"]
      // početak rješenja 2. zadatka

      let index = null;
      const nizZad2 = ["a", null, "b"];
      nizZad2[1] = a.toUpperCase();

      const x = Number(b);
      if(x){
        rezultat.innerHTML = `B je broj, index = ${nizZad2[1]}`;
        return;
      } else {
        rezultat.innerHTML = `B nije broj, index je dužine ${nizZad2[1].length}`;
        return;
      }

      // kraj rješavanje 2. zadatka
    break;
    

    case '3':
    // ZADATAK 3 — Zamjena prva dva elementa
    //    - niz: [A, B, 3]
    //    - ako ima barem 2 elementa (ima), zamijeni prva dva
      // početak rješenja 3. zadatka

      const nizZad3 = [10, 30, 3];
      // const nizZad3 = [1];
      
      if(nizZad3.length >= 2){
        nizZad3[0] = a.toUpperCase();
        nizZad3[1] = b.toUpperCase();

        rezultat.innerHTML = `Niz je promjenjen: [${nizZad3}]`;
        console.log(nizZad3);
        return;
      } else {
        rezultat.innerHTML = `Niz ima manje od 2 elementa, nije bilo promjene : [${nizZad3}]`
        console.log(nizZad3);
        return;
      }

      // kraj rješavanje 3. zadatka
    break;


    case '4':
    // ZADATAK 4 — Dodavanje elementa prema duljini
    //    - niz: [A, B]
    //    - ako je A string i duljina(A) < 3 → dodaj "X" na kraj
    //    inače → dodaj "Y" na početak
      // početak rješenja 4. zadatka

      const nizZad4 = [a, b];
      const y = Number(a)

      if(isNaN(y)){
        nizZad4[nizZad4.length] = "X";
        rezultat.innerHTML = nizZad4;
        return;

      } else {
        nizZad4[nizZad4.length] = "Y";
        rezultat.innerHTML = nizZad4;
        return;
      }

      // kraj rješavanje 4. zadatka
    break;


    case '5':
    // ZADATAK 5 — Provjera tipa prvog elementa
    //    - prvi element je A
    //    - switch prema typeof A
      // početak rješenja 5. zadatka

      const nizZad5 = [null, b, 10 , 30];
      const z = Number(a);

      if(!isNaN(z)){
        nizZad5[0] = Number(a);
        console.log(typeof nizZad5[0]);
      } else {
        nizZad5[0] = String(a);
        console.log(typeof nizZad5[0]);
      }   
      
      switch (typeof nizZad5[0]){
        case 'number':
          rezultat.innerHTML = `A je broj. Niz glasi [${nizZad5}]`;
        break;

        case 'string':
          rezultat.innerHTML = `A je string. Niz glasi [${nizZad5}]`;
        break;

        default:
          rezultat.innerHTML = 'Nije moguće odrediti tip podatka'
      }

      // kraj rješavanje 5. zadatka
    break;


    case '6':
    // ZADATAK 6 — Ukloni zadnji element bez pop()
    //    - niz: [A, B, "KRAJ"]
    //    - ukloni zadnji preko length
      // početak rješenja 6. zadatka
      const nizZad6 = [a, b, "KRAJ"];
      nizZad6.length = nizZad6.length - 1

      rezultat.innerHTML = `Stari niz: [${a}, ${b}, "KRAJ]. Novi niz: [${nizZad6}]`;

      // kraj rješavanje 6. zadatka
    break;


    case '7':
    // ZADATAK 7 — Spoji dva niza bez concat()
    //    - niz1: [A, 2]
    //    - niz2: [B, 4]
    //    - spajanje spreadom
      // početak rješenja 7. zadatka
      const niz1Zad7 = [a, 2];
      const niz2Zad7 = [b, 2];

      rezultat.innerHTML = `Niz 1:[${niz1Zad7}]. Niz 2:[${niz2Zad7}]. Spojeni nizovi [${[...niz1Zad7, ...niz2Zad7]}]`;

      // kraj rješavanje 7. zadatka
    break;


    case '8':
    // ZADATAK 8 — Provjera rupe u nizu
    //    - napravimo niz sa "rupom" na indeksu 1:
    //      z8[0]=A, z8[2]=B
    //    - provjerimo indeks 1
      // početak rješenja 8. zadatka
      const nizZad8 = [];
      nizZad8[0] = a;
      //nizZad8[1] = a;
      nizZad8[2] = b;

      const imaRupe = nizZad8.length !== Object.keys(nizZad8).length;

      if(imaRupe === true){
        rezultat.innerHTML = 'U nizu ima rupe';
      } else {
        rezultat.innerHTML = 'U nizu nema rupe';
      }

      // kraj rješavanje 8. zadatka
    break;


    case '9':
    // ZADATAK 9 — Razdvajanje prvog i ostatka
    //    - niz: [A, B, 7, 6]
    //    - destructuring [first, ...rest]
      // početak rješenja 9.  zadatka

      const nizZad9 = [a.toUpperCase(), b.toUpperCase(), 7, 6];
      const [first, ...rest] = nizZad9;
      
      rezultat.innerHTML = `Niz je [${nizZad9}]. Prvi je [${first}], a ostatak je [${rest}]`;

      // kraj rješavanje 9. zadatka
    break;


    case '10':
    // ZADATAK 10 — Switch prema duljini niza
    //    - duljinu određujemo prema A i B:
    //      Ako je A prazan string ili B prazan string → niz = []
    //      Inače ako A === B → niz = [A]
    //      Inače ako je B broj i B === 2 → niz = [A, B]
    //      Inače → niz = [A, B, "x"]
      // početak rješenja 10.  zadatka
      let nizZad10 = [];
      
      if(!a || !b){
        nizZad10 = []
      } else if(a === b){
        nizZad10 = [a];
      } else if(!isNaN(Number(b)) && Number(b) === 2){
        nizZad10 = [a, b];
      } else {
        nizZad10 = [a,b, "x"];
      }

      rezultat.innerHTML = `Niz je [${nizZad10}]`;

      // kraj rješavanje 10. zadatka
    break;

    default:
      rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;

    break;
  }

});


// Zadaci







