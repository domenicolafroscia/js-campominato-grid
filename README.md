### ESERCIZIO
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

### SOLUZIONE 

**Dati**
1. Creare la struttura html e css
2. Creare un bottone con un eventlistener che al click fa apparire la cella

**Logica**
1. Con una funzione generare i numeri da 1 a 100
2. Con un'altra funzione creare l'ordine sparso dei numeri generati da 1 a 100
3. Sempre con una funzione generare le celle della griglia in modo da inserirci all'interno i numeri generati e collegarla alla griglia dell'html
4. Infine sempre con una funzione creare il click sulle caselle in modo che quando si preme su queste ultime il colore della casella diventi azzurro e stampi in console il numero della casella cliccato.
5. Invocare le funzioni