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






var listaParole = [];

// Riferimento all'elemento UL dove verrà stampata la lista
var stampaLista = document.getElementById('lista-es-1');

// Funzione che viene chiamata al click del bottone "Aggiungi"
function aggiungiItem() {
    // Ottenimento del valore dell'input
    var newItem = document.getElementById('text').value;
    // Verifica se l'input non è vuoto prima di aggiungere l'elemento alla lista
    if (newItem.trim() !== '') {
        // Aggiunta del nuovo elemento all'array
        listaParole.push(newItem);
        // Chiamata alla funzione per aggiornare la lista
        refreshLista();
        // Pulizia del campo di input
        document.getElementById('text').value = '';
        var risultato= palindromo(newItem);
        refreshLista(risultato);
        
    } else {
        // Avviso se l'utente cerca di aggiungere un elemento vuoto
        alert('Inserisci un elemento valido');
    }
}
function palindromo(newItem){
    var parolaInvertita = newItem.split('').reverse().join('');
    return newItem===parolaInvertita;
}
// Funzione per aggiornare la lista
function refreshLista() {
    var listaAggiornata = document.getElementById('lista-es-1');
    
    listaAggiornata.innerHTML = '';

    // Inizializzazione dell'indice per il ciclo while
    var i = 0;

    // Ciclo while per aggiornare la lista con gli elementi dell'array
    while (i < listaParole.length) {
        // Creazione di un nuovo elemento LI
        var listItem = document.createElement('li');
        listItem.textContent = listaParole[i] + ':' + (palindromo(listaParole[i])? 'palindromo': 'non palindromo');
        listaAggiornata.appendChild(listItem);

        i++;
    }
}

