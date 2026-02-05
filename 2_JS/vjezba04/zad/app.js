
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML='';
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const c = document.getElementById('c').value;
  const d = document.getElementById('d').value;
  const zadatak = document.getElementById('zadatak').value;

  // 4. zadatak
  //    Provjera punoljetnosti: 
  //  Korisnik unosi godinu rođenja u polje A. 
  //  Izračunaj njegovu dob u odnosu na tekuću godinu i ispiši je li punoljetan ili nije.
  if(zadatak === '4'){
    const trenutnaGodina = 2026
    const x = Number(a);
    if(!x){
      rezultat.innerHTML='A nije broj';
      return;
    }

    ukupnoGodina = trenutnaGodina - x

    if(ukupnoGodina >= 18){
      rezultat.innerHTML = 'Osoba je punoljetna'
    } else {
      rezultat.innerHTML = 'Osoba je maloljetna'
    }

    return;
  }
  /*
  [ZADATAK 5]
 Pozitivan, negativan ili nula: 
 Za uneseni broj u polju A ispiši poruku je li on pozitivan, negativan ili je nula.
 ----------------------------------------------------------------*/

  if(zadatak === '5'){
    const x = Number(a);
    if(!x && x!=0){
      rezultat.innerHTML='A nije broj';
      return;
    }

    if(x > 0){
      rezultat.innerHTML='A je pozitivan';
    } else if(x < 0){
      rezultat.innerHTML='A je negativan';
    } else {
      rezultat.innerHTML='A je 0';
    }

    return
  }

 /*[ZADATAK 6]
 Parnost broja: 
 Provjeri je li uneseni broj u polju A paran ili neparan koristeći modulo operator (%).

 ----------------------------------------------------------------*/
 
   if(zadatak === '6'){
    const x = Number(a);
    if(!x){
      rezultat.innerHTML='A nije broj';
      return;
    }
    if(x%2 === 0){
      rezultat.innerHTML = 'A je paran broj';
    } else {
      rezultat.innerHTML = 'A je neparan broj';
    }


    return
  }

 /*[ZADATAK 7]
 Ocjenjivanje: 
 Na temelju unesenog broja bodova (0-100) u polje A, ispiši ocjenu:
 90-100: Odličan, 80-89: Vrlo dobar, 70-79: Dobar, 60-69: Dovoljan, <60: Nedovoljan.

 ----------------------------------------------------------------*/

   if(zadatak === '7'){
    const x = Number(a);
    if(!x){
      rezultat.innerHTML='A nije broj';
      return;
    }

    if(x>0 && x<100){
      if(x<60){
        rezultat.innerHTML='Nedovoljan';
      }else if(x<70){
        rezultat.innerHTML='Dovoljan';
      }else if(x<80){
        rezultat.innerHTML='Dobar';
      }else if(x<90){
        rezultat.innerHTML='Vrlo dobar';
      }else if(x<100){
        rezultat.innerHTML='Odličan';
      }
    }else{
      rezultat.innerHTML='Broj bodova mora biti 0-100';
    }

    return
  }
 /*[ZADATAK 8]
 Djeljivost: 
 Provjeri je li broj u polju A djeljiv s brojem u polju B bez ostatka. 
 Ispiši "Djeljiv je" ili "Nije djeljiv".  */

   if(zadatak === '8'){
    const x = Number(a);
    if(!x){
      rezultat.innerHTML='B nije broj';
      return;
    }

    const y = Number(a);
    if(!y){
      rezultat.innerHTML='B nije broj';
      return;
    }

    rezDjeljanja = a%b
    if(rezDjeljanja === 0){
      rezultat.innerHTML='Djeljiv je';
    } else{
      rezultat.innerHTML='Nije djeljiv';
    }
    


    return
  }

  if(zadatak === '3'){
    const x = Number(a);
    if(!x){
      rezultat.innerHTML='A nije broj';
      return;
    }

    const y = Number(b);
    if(!y){
      rezultat.innerHTML='B nije broj';
      return;
    }

    const z = Number(c);
    if(!z){
      rezultat.innerHTML='C nije broj';
      return;
    }
    
    const t = Number(d);
    if(!t){
      rezultat.innerHTML='D nije broj';
      return;
    }

    rezultat.innerHTML = x + y + z + t;

    return;
  }

  if(zadatak==='2'){
    const x = Number(a);
    if(!x){
      rezultat.innerHTML='A nije broj';
      return;
    }

    const y = Number(b);
    if(!y){
      rezultat.innerHTML='B nije broj';
      return;
    }

    const z = Number(c);
    if(!z){
      rezultat.innerHTML='C nije broj';
      return;
    }

    if(x<y && x<z){
      rezultat.innerHTML = x;
    } else if(y<x && y<z){
      rezultat.innerHTML = y;
    }else{
      rezultat.innerHTML = z;
    }

    return;
  }

  if(zadatak==='1'){
    // console.log('1. zadatak');
    // console.log(a);

    const x = Number(a);
    if(!x){
      rezultat.innerHTML='A nije broj';
      return;
    }

    const y = Number(b);
    if(!y){
      rezultat.innerHTML='B nije broj';
      return;
    }

   if(x>y){
    rezultat.innerHTML=x;
   }else if(x<y){
    rezultat.innerHTML=y;
   }else{
    rezultat.innerHTML='A i B su isti';
   }

    return;
  }
  // ovo će se ispisati ako u HTML dodatke option za zadatak a ovdje ga ne obradite
  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});



