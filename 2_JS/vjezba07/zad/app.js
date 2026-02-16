
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {

  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;

  switch (zadatak) {
    case '1':
      // Zadatak 1. 
      // Za uneseni cijeli broj u polje A veći od 2 i manji od 10M ispiši da li je prim (prosti) broj ili ne.
      // rješavanje 1. zadatak

      const a1 = Number(a);

      if(!a1){
        rezultat.innerHTML = 'Nije unešen broj';
        return;
      }

      if(a1<2 || a1>10000000){
        rezultat.innerHTML = 'Unešeni broj mora biti između dva i deset milijuna';
        return;
      }

      let prim = true;
      let brojac = 1;

      for(let i=2; i<a1; i++){
        if(brojac++ % 1000 === 0){
          console.log(brojac, a1, ' % ', i, ' = ', a1 % i);
        }
      
        if(a1%i === 0){
          cjelobrojnoDjeljiv = i;
          prim = false;
          break;
        }
      }

      if(prim){
        rezultat.innerHTML = `${a1} je PRIM broj`;
      } else {
        rezultat.innerHTML = `(${brojac}) ${a1} nije PRIM broj jer je cjelobrojno djeljiv s ${cjelobrojnoDjeljiv}`;
      }


      // kraj rješavanje 1. zadatak
    break;
    case '2':
      // Zadatak 2. 
      // Za uneseni cijeli broj u polje B veći od 2 i manji od 1000 ispiši da li je savršen broj ili ne.
      // rješavanje 2. zadatak

      const b1 = Number(b);

      if(!b1){
        rezultat.innerHTML = 'Nije unešen broj';
        return;
      }

      if(b1<2 || b1>1000){
        rezultat.innerHTML = 'Unešeni broj mora biti između dva i tisuću';
        return;
      }

      let suma = 0;

      for(let i=1; i<b1; i++){
        if(b1%i === 0){
          suma += i;
        }
      }

      if(suma === b1){
        rezultat.innerHTML = `${b1} je savršen broj`;
      } else {
        rezultat.innerHTML = `${b1} nije savršen broj`;
      }

      // kraj rješavanje 2. zadatak
    break;
    case '3':
      // Zadatak 3. 
      // Za uneseni cijeli broj u polje B veći od 2 i manji od 100 ispiši da li je Armstrongov broj ili ne.
      // rješavanje 3. zadatak
      const b3 = Number(b)

      if(!b3){
        rezultat.innerHTML = 'Nije unešen broj';
        return;
      }
      
      if(b3<2 || b3>1000){
        rezultat.innerHTML = 'Unešeni broj mora biti između dva i sto';
        return;
      }

      let sumaCase3 = 0

      for(const broj of b){
        meduBroj = Number(broj);
        sumaCase3 = sumaCase3 + (meduBroj*meduBroj*meduBroj)
      }

      if(sumaCase3 === b3){
        rezultat.innerHTML = `${b3} je Armstrongov broj`;
      } else {
        rezultat.innerHTML = `${b3} nije Armstrongov broj`;
      }
  


      // kraj rješavanje 3. zadatak
    break;
    case '4':
      // Zadatak 4. 
      // Za unesenu riječ u polje A provjerite da li je palindrom ili ne
      // rješavanje 4. zadatak

      const unesenaRijec = String(a)

      if(!unesenaRijec){
        rezultat.innerHTML = 'Polje A je prazno, unesite riječ';
        return;
      } else if(Number(unesenaRijec)){
        rezultat.innerHTML = 'Unesen je broj, unesite riječ';
        return;
      }

      rijecNaopako = '';

      for(let i=unesenaRijec.length; i>0; i--){
        rijecNaopako += unesenaRijec[i-1];
        console.log(unesenaRijec[i-1])
      }

      console.log(unesenaRijec, rijecNaopako);

      if(rijecNaopako === unesenaRijec){
        rezultat.innerHTML = `${unesenaRijec} je palidrom`;
      } else {
        rezultat.innerHTML = `${unesenaRijec} nije palidrom`;
      }

      // kraj rješavanje 4. zadatak
    break;
    case '5':
      // Zadatak 5. 
      // Provjeri da li u nizu stopRijeci postoji riječ pronađena u polju B
      // rješavanje 5. zadatak

      const b5 = b.toLowerCase();
      pronasaoRijec = false;

      if(!b5){
        rezultat.innerHTML = 'Polje B je prazno, unesite riječ';
        return;
      }

      for(let i=0; i<stopRijeci.length; i++){
        if(b5 === stopRijeci[i]){
          pronasaoRijec = true;
          break;
        }
      }

      if(pronasaoRijec === true){
        rezultat.innerHTML = `Riječ '${b}' se nalazi u nizu stopRijeci`;
      } else {
        rezultat.innerHTML = `Riječ '${b}' se ne nalazi u nizu stopRijeci`;
      }


      // kraj rješavanje 5. zadatak
    break;
    case '6':
      // Zadatak 6.
      // Za unesenu riječ u polju A ispiši koliko ima samoglasnika i koliko suglasnika
      // rješavanje 6. zadatak
      const b6 = String(b).toLowerCase();

      const samoglasnici = ['a','e', 'i', 'o', 'u'];
      let brojSamoglasnika = 0

      if(!b6){
        rezultat.innerHTML = 'Polje B je prazno, unesite riječ';
        return;
      } else if(Number(b6)){
        rezultat.innerHTML = 'Unesen je broj, unesite riječ';
        return;
      }

      for(let i=0; i<b6.length; i++){
        for(let j=0; j<samoglasnici.length; j++){
          if(b6[i] === samoglasnici[j]){
            brojSamoglasnika++;
          }
        }
      }

      const brojSuglasnika = b6.length - brojSamoglasnika

      rezultat.innerHTML = `U riječi ${b6} ima ${brojSuglasnika} suglasnika i ${brojSamoglasnika} samoglasnika`;



      // kraj rješavanje 6. zadatak
    break;
    case '7':
      // Zadatak 7.
      // Ispiši sve brojeve odvojeno znakom tab (\t) između A i B ili B i A. (ako je broj A<B onda se ispisuje od A do B ++, a ako je A>B onda se ispisuje od A do B --)
      // rješavanje 7. zadatak
      a7 = Number(a);
      b7 = Number(b);

      if(!a7 && !b7){
        rezultat.innerHTML = 'U polje A i B nisu upisani brojevi.';
      } else if(!a7){
        rezultat.innerHTML = 'U polje A nije upisan broj.'
      } else if(!b7){
        rezultat.innerHTML = 'U polje B nije upisan broj.'
      } else if(a7 === b7){
        rezultat.innerHTML = 'U polja A i B unesite razlličite brojeve';
      }

      ispisBroja = '';

      if(a7<b7){
        for(let i=a7+1; i<b7; i++){
          ispisBroja += `${i} \t`;
        }
      } else if(b7<a7){
        for(let i=a7-1; i>b7; i--){
          ispisBroja += `${i} \t`;
        }
      }

      rezultat.innerHTML = ispisBroja

      // kraj rješavanje 7. zadatak
    break;

    default:
      rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
  }

});
const poveznica = document.getElementById('poveznica');
poveznica.href='https://enciklopedija.hr/clanak/primbrojevi';
document.getElementById('zadatak').addEventListener('change', (event) => {
   switch (event.target.value) {
    case '1':
      poveznica.href='https://enciklopedija.hr/clanak/primbrojevi';
    break;
    case '2':
      poveznica.href='https://www.enciklopedija.hr/clanak/savrseni-broj';
    break;
    case '3':
      poveznica.href='https://hafura.wordpress.com/2017/09/13/armstrongov-broj-ispitni-zadatak/';
    break;
    case '4':
      poveznica.href='https://www.enciklopedija.hr/clanak/palindrom';
    break;
    case '5':
      poveznica.href='https://www.coursera.org/articles/what-are-stop-words';
    break;
    case '6':
      poveznica.href='https://enciklopedija.hr/clanak/samoglasnik';
    break;
    case '7':
      poveznica.href='https://hjp.znanje.hr/index.php?show=search_by_id&id=d1ZlWhU%3D';
    break;
    default:
      poveznica.href='#';
  }
});



const stopRijeci = [
  'a', 'ako', 'ali', 'bi', 'bih', 'bila', 'bili', 'bilo', 'bio', 'bismo', 
  'biste', 'biti', 'bumo', 'da', 'do', 'duž', 'ga', 'hoće', 'hoćemo', 'hoćete', 
  'hoćeš', 'hoću', 'i', 'iako', 'idemo', 'ideš', 'ide', 'iz', 'iza', 'iznad', 
  'ja', 'jako', 'jer', 'jesmo', 'jeste', 'jesu', 'je', 'kad', 'kada', 'kao', 
  'kroz', 'li', 'me', 'mene', 'meni', 'mi', 'mimo', 'mene', 'moj', 'moja', 
  'moje', 'mu', 'na', 'nad', 'nakon', 'nam', 'nama', 'nas', 'naš', 'naša', 
  'naše', 'našu', 'ne', 'nego', 'neka', 'neki', 'nekog', 'neko', 'nema', 'netko', 
  'neće', 'nećemo', 'nećete', 'nećeš', 'neću', 'ni', 'nije', 'nijedan', 'nikad', 
  'nismo', 'niste', 'nisu', 'njega', 'njegov', 'njegova', 'njegovo', 'njemu', 'njen', 
  'njena', 'njeno', 'njih', 'njihov', 'njihova', 'njihovo', 'njim', 'njima', 'njoj', 
  'nju', 'o', 'od', 'odmah', 'on', 'ona', 'onaj', 'onam', 'onamo', 'one', 
  'oni', 'ono', 'onolika', 'onoliko', 'onoliki', 'onoliku', 'ova', 'ovaj', 'ovdje', 
  'ove', 'ovi', 'ovo', 'ovuda', 'pa', 'pak', 'po', 'pod', 'pored', 'poslije', 
  'povrh', 'preko', 'pri', 'pred', 'prema', 'sa', 'sam', 'samo', 'se', 'sebe', 
  'sebi', 'si', 'smo', 'ste', 'su', 'sve', 'svi', 'svog', 'svoj', 'svoja', 
  'svoje', 'ta', 'taj', 'tako', 'tamo', 'te', 'tebe', 'tebi', 'ti', 'to', 
  'točno', 'u', 'uz', 'vam', 'vama', 'vas', 'vaš', 'vaša', 'vaše', 'već', 
  'vi', 'vrlo', 'za', 'zar', 'će', 'ćemo', 'ćete', 'ćeš', 'ću', 'što', 'the', 
  'and', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 
  'had', 'do', 'does', 'did', 'but', 'if', 'or', 'because', 'as', 'until', 
  'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 
  'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 
  'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 
  'further', 'then', 'once'
];