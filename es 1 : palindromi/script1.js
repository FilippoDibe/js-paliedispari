// form con un imput dove inserisci una parola con un bottone invia
//  1° funzione (parola) che fa : 
        // -ottiene la parola dall'input
        // -verifica che l'input e vuoto 
        // -inserisce la parola nell'array
        // -verfica se la parola e palindroma
        // pulisce l'input
        // inserisce la parola nell'array
// 2° funzione (addParola)
        //  -inserisce la parola nell'array
// 3° funzione (palindromo)
        // -confronta la parola e la sua conversione
        // true:se è palindromo
        // false:se non lo è
// 4° funzione (aggiurnaRisultato)
        // aggiorna il risultato nell html


var listaParole=[];
// 1°
function parola(){
    // ottieni la parola dall'input
    var newParola = document.getElementById('text').value;

    // -verifica che l'input e vuoto 
    if (newParola.trim() !==''){
        addParola(newParola);

        // verifca tramite la funzione se è palindromo 
        var risultato= palindromo(newParola);
        aggiornaRisultato(risultato);

        // pulizia del campo input 
        document.getElementById('text').value='';
    }else{
        // non accetta parole vuote
        alert('inserisci una parola vuota');
    }

}
// 2°
function addParola(newParola){
   
}
// 3°
function palindromo(){

}
// 4°
function aggiornaRisultato(){

}


