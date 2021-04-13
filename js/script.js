$(document).ready(function(){

/**
 * Descrizione
 * 1) Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
 * 2) Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
 * 3) Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2 e mostrare alla fine il contenuto dell'array.
 */

// Punto 1

/*var studenti = {
    nome : ['Pippo'],
    cognome : ['Perlusi'],
    età : [24]
}

for(var key in studenti) {
    console.log(studenti[key]);
}*/

// Punto 2

/*var studenti = [
    {
        nome: 'Pippo',
        cognome: 'Perlusi',
        età: 24,
    },
    {
        nome: 'Paolo',
        cognome: 'Marchioni',
        età: 28,
    },
    {
        nome: 'Pierluigi',
        cognome: 'DePino',
        età: 30,
    },
    {
        nome: 'Sara',
        cognome: 'Franzetti',
        età: 25,
    },
];

for (var i = 0; i < studenti.length; i++) {
    var studente = studenti[i];

        console.log( studente.nome + ' ' + studente.cognome );
}*/

// Punto 3
    
var studenti = [
    {
        nome: 'Pippo',
        cognome: 'Perlusi',
        età: 24,
    },
    {
        nome: 'Paolo',
        cognome: 'Marchioni',
        età: 28,
    },
    {
        nome: 'Pierluigi',
        cognome: 'DePino',
        età: 30,
    },
    {
        nome: 'Sara',
        cognome: 'Franzetti',
        età: 25,
    },
];

var newStudents = 
    {
        nome: prompt('Inserisci il nome dello studente: '),
        cognome: prompt('Inserisci il tuo cognome: '),
        età: parseInt(prompt('Inserisci la tua età: ')),
    };

console.log(studenti);
studenti.push(newStudents);
console.log(studenti);

for (var i = 0; i < studenti.length; i++) {
    var studente = studenti[i];

    console.log( studente.nome + ' ' + studente.cognome + ' ' + studente.età);
}

});