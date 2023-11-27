// form con un imput dove inserisci una newItem con un bottone invia
//  1° funzione (aggiungiItem) che fa : 
        // -ottiene la parola dall'input
        // -verifica che l'input e vuoto 
        // -inserisce la parola nell'array
        // -verfica se la parola e palindroma
        // pulisce l'input
        // inserisce la parola nell'array
// 3° funzione (palindromo)
        // -confronta la parola e la sua conversione
        // true:se è palindromo
        // false:se non lo è
// 4° funzione (refreshLista)
        // aggiorna il risultato nell html
            // creando dei li da mettere in una lista che gia era nel html
            // e nei li inserire il risultato se e palindormo o no 



//////////////////////////////////////////////////////////////////////
//                                                                  //
//                  ESERCIZIO 1 PALINDROMO O NO PALINDROMO          //
//                                                                  //
//////////////////////////////////////////////////////////////////////

let listaParole = [];

// Riferimento all'elemento UL dove verrà stampata la lista
let stampaLista = document.getElementById('lista-es-1');

// Funzione che viene chiamata al click del bottone "Aggiungi"
function aggiungiItem() {
    // Ottenimento del valore dell'input
    let newItem = document.getElementById('text').value;
    // Verifica se l'input non è vuoto prima di aggiungere l'elemento alla lista
    if (newItem.trim() !== '') {
        // Aggiunta del nuovo elemento all'array
        listaParole.push(newItem);
        // Chiamata alla funzione per aggiornare la lista
        refreshLista();
        // Pulizia del campo di input
        document.getElementById('text').value = '';
        let risultato= palindromo(newItem);
        refreshLista(risultato);
        
    } else {
        // Avviso se l'utente cerca di aggiungere un elemento vuoto
        alert('Inserisci un elemento valido');
    }
}
function palindromo(newItem){
    let parolaInvertita = newItem.split('').reverse().join('');
    return newItem===parolaInvertita;
}
// Funzione per aggiornare la lista
function refreshLista() {
    let listaAggiornata = document.getElementById('lista-es-1');
    
    listaAggiornata.innerHTML = '';

    // Inizializzazione dell'indice per il ciclo while
    let i = 0;

    // Ciclo while per aggiornare la lista con gli elementi dell'array
    while (i < listaParole.length) {
        // Creazione di un nuovo elemento LI
        let listItem = document.createElement('li');
        listItem.textContent = listaParole[i] + ':' + (palindromo(listaParole[i])? 'palindromo': 'non palindromo');
        listaAggiornata.appendChild(listItem);

        i++;
    }
}

//////////////////////////////////////////////////////////////////////
//                                                                  //
//                  ESERCIZIO 2 PARI O DISPARI                      //
//                                                                  //
//////////////////////////////////////////////////////////////////////



// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// funzione che genera il numero del pc 
function pcCasuale() {
    let numeroCasuale= Math.floor(Math.random() * 5) + 1;
    return numeroCasuale;
}

// funzione gioca
function gioca (){
    let selezioneUtente= document.querySelector('input[name="opzioni"]:checked');
    // prendiamo il valore inseirito dall'utente 
    let numeroUtente = parseInt(document.getElementById('numeroUtente').value, 10);

    // il numero causle del pc 

    let numeroPcCasuale= pcCasuale();

    // calcolo somma
    let somma= numeroUtente + numeroPcCasuale;

    // pari o dispari 
    let risultato = (somma % 2 ===0)?'pari': 'dispari'

    // dichiariamo il vincitore 
    let finalResult = (risultato===selezioneUtente)? 'hai vinto': 'il computer ha vinto'

    document.getElementById('user-number').textContent = numeroUtente;
    document.getElementById('pc-number').textContent = numeroPcCasuale;
    document.getElementById('risultato').textContent = risultato;
    alert(finalResult);
}
