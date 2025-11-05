// funzione numero random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let computerNumber = getRandomNumber(1, 5);

//Scelta utente tra pari o dispari
let userChoice = prompt('Ti senti fortunato, o stai solo bluffando? Dimmi… pari o dispari?');

while (userChoice != 'pari' && userChoice != 'dispari') {
    for (let i = 0; i < 3; i++) {
        userChoice = prompt('Non barare, scegli fra pari o dispari');

        if (userChoice === 'pari' || userChoice === 'dispari'){
            break;
        } else if(i === 2) {
            alert('Tempo scaduta... la tua puntata sarà dispari');
            userChoice = 'dispari';
        }
    }
}
console.log(`Hai puntato su: ${userChoice}`);

// utente sceglie il numero
let userNumber = parseInt(prompt('Il rischio è la vera essenza del piacere… è arrivato il momento di scegliere un numero tra 1 e 5'))

while (userNumber > 5 || userNumber < 1 || isNaN(userNumber)) {
    for (let i = 0; i < 3; i++) {
        userNumber = prompt('Le opzioni sono poche, ma il rischio è infinito. Sfruttalo bene');

        if (userNumber > 0 || userNumber <= 5){
            break
        } else if (i === 2) {
            alert('Tempo scaduto... il banco ha deciso al posto tuo');
            userNumber = getRandomNumber(1,5);
        }
    }
}

console.log(`Stai puntando tutto sul numero ${userNumber}`)
console.log(`Il banco rivela la sua puntata ${computerNumber}`)