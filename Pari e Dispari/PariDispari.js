//Scelta utente
let userChoice = prompt('Ti senti fortunato, o stai solo bluffando? Dimmi… pari o dispari?');

while (userChoice != 'pari' && userChoice != 'dispari') {
    
    for (let i = 0; i < 3; i++) {
        userChoice = prompt('Non barare, scegli fra pari o dispari');
        
        if (i === 2) {
            alert('Tempo scaduta... la tua puntata sarà dispari');
            userChoice = 'dispari';
        }
    }
    
}
console.log(`Hai puntato su: ${userChoice}`);