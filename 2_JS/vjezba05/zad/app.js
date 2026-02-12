
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const zadatak = document.getElementById('zadatak').value;


  switch (zadatak) {
    case '1':
      // 1. zadatak
      // Napiši program koji prima string komandu ("start", "stop", "pauza") i ispisuje odgovarajuću poruku.
      // Primjer ulaza: "pause"
      // Ispis: "Pauza programa"

      // rješavanje 1. zadatak
        // if(a === 'start' || a === 'stop' ||a === 'pause'){
        //   rezultat.innerHTML = `Program ${a}ed`;
        // }

        // return;

        switch(true){
          case a === 'start':
            rezultat.innerHTML = 'Start programa';
            return;

          case a === 'stop':
            rezultat.innerHTML = 'Zaustavljanje programa';
            return;
          
          case a === 'pause':
            rezultat.innerHTML = 'Pauziranje programa';
            return;
          
          default:
            rezultat.innerHTML = 'Nepoznata naredba';
            return;
        }
      // kraj rješavanje 1. zadatak
    break;
    case '2':
      // 2. zadatak
      // Napiši program koji prima ocjenu ("A", "B", "C", "D", "F") i ispisuje:
      // "Položio" za "A", "B", "C"
      // "Nije položio" za "D" i "F"

      // rješavanje 2. zadatak
        // if(a === "A" || a === "B" || a === "C"){
        //   rezultat.innerHTML = 'Položio';
        // } else if(a === "D" || a === "E" || a === "F"){
        //   rezultat.innerHTML = 'Nije položio';
        // } 
        // return;

        switch(a){
          case "A":
          case "B":
          case "C":
            rezultat.innerHTML = 'Položio';
            return;

          case "D":
          case "E":
          case "F":
            rezultat.innerHTML = 'Nije položio';
          
          default:
            rezultat.innerHTML = 'Nevažeća vrijednost bodova';
            return;
        }
        break;
      // kraj rješavanje 2. zadatak
    
    case '3':
      // 3. zadatak
      // Napiši program koji prima broj bodova (0–100) i ispisuje ocjenu:
      // < 50 → "Nedovoljan"
      // 50–64 → "Dovoljan"
      // 65–79 → "Dobar"
      // 80–89 → "Vrlo dobar"
      // 90–100 → "Odličan"
      // Napomena: koristi switch(true).

      // rješavanje 3. zadatak

      switch (true) {
        case a > 0 && a <= 49:
          console.log(a);
          rezultat.innerHTML = 'Nedovoljan';
          return;
          
        case a >= 50 && a <= 64:
          rezultat.innerHTML = 'Dovoljan';
          return;

        case a >= 65 && a <= 79:
          rezultat.innerHTML = 'Dobar';
          return;

        case a >= 80 && a <= 89:
          rezultat.innerHTML = 'Vrlo dobar';
          return;

        case a >= 90 && a <= 100:
          rezultat.innerHTML = 'Odličan';
          return;
        
        default:
          console.log(a)
          rezultat.innerHTML = 'Bodovi moraju biti 0-100'
          return;
      }
      break;
      // kraj rješavanje 3. zadatak

    case '4':
    // rješavanje 4. zadatak
      rezultat.innerHTML=a.length
      return;

    break;
    // kraj rješavanje 4. zadatak

    case '5':
      // 5. zadatak
      // Za upisani decimalni broj ispiši samo decimalni dio
      // rješavanje 5. zadatak
      const x = parseFloat(a)
      if(!x){
        rezultat.innerHTML = 'Niste unijeli dobru vrijednost';
        return;
      }

      const cijeliBroj = parseInt(a);
      rezultat.innerHTML = parseInt((x - cijeliBroj) * 100);

    break;
      // kraj rješavanje 5. zadatak


    case '6':
      // Zadatak 6. 
      // Za uneseni broj ispiši da li je broj para/neparan
      // rješavanje 6. zadatak
      const y = Number(a);
      if(!y){
        rezultat.innerHTML = 'Niste unijeli broj';
        return;
      }if(y%2 === 0){
        rezultat.innerHTML = 'Unešeni broj je paran';
      } else {
        rezultat.innerHTML = 'Unešeni broj je neparan';
      }

      // kraj rješavanje 6. zadatak
    break;

    case '7':
      // Zadatak 7.
      // Za uneseno ime namjernice ispiši dali je voće
      // rješavanje 6. zadatak
      switch(a.toLowerCase()){
        case 'jabuka':
        case 'kruška':
        case 'banana':
          rezultat.innerHTML = 'Voće je';
          break;
        
        default:
          rezultat.innerHTML = 'Ne mogu odrediti da li je voće';
      }


      // kraj rješavanje 6. zadatak
    break;

    case '8':
      // Zadatak 8.
      // Za unešeni broj ispiši sve brojeve od 1 do tog broja odvojeno zarezom
      // rješavanje 8. zadatak
      const doBroja = Number(a);

      if(!doBroja){
        rezultat.innerHTML = 'Nije unešen broj.'
        return;
      }

      let s = ''

      for(let i=1; i<=doBroja; i++){
        console.log(i + ',');
        if(i===doBroja){
          s += i;
        }else{
          s += i + ', ';
        }
      }
      rezultat.innerHTML = s;

      

    break;

    default:
      rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
  }

});


// Zadaci







