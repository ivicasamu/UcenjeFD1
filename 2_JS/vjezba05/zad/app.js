
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
        if(a === 'start' || a === 'stop' ||a === 'pause'){
          rezultat.innerHTML = `Program ${a}ed`;
        }

        return;
      // kraj rješavanje 1. zadatak
    break;
    case '2':
      // 2. zadatak
      // Napiši program koji prima ocjenu ("A", "B", "C", "D", "F") i ispisuje:
      // "Položio" za "A", "B", "C"
      // "Nije položio" za "D" i "F"

      // rješavanje 2. zadatak
        if(a === "A" || a === "B" || a === "C"){
          rezultat.innerHTML = 'Položio';
        } else if(a === "D" || a === "E" || a === "F"){
          rezultat.innerHTML = 'Nije položio';
        } 
        return;
      // kraj rješavanje 2. zadatak
    break;
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

      // kraj rješavanje 3. zadatak
    break;

    case '4':
      rezultat.innerHTML=a.length
  
      break

    default:
      rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
  }

});


// Zadaci







