$(document).ready(function(){

/**
 * Descrizione
 * 1) Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
 * 2) Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
 * 3) Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2 e mostrare alla fine il contenuto dell'array.
 */

// Punto 1
var studenti = {
    nome : ['Pippo'],
    cognome : ['Perlusi'],
    età : [24]
}

for(var key in studenti) {
    console.log(studenti[key]);
}

// Punto 2

/*var studenti = {
    nome : ['Pippo', 'Paolo', 'Pierluigi', 'Sara'],
    cognome : ['Perlusi', 'Marchioni', 'DePino', 'Franzetti'],
    età : [24,28,30,25]
}*/

});