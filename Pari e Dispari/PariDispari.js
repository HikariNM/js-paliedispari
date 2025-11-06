// funzione per generare un numero random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// funzione per determinare se la somma è pari o dispari
function evenOrOdd(num1, num2){
    if ((num1 + num2) % 2 === 0){
        return 'pari';
    }
    return 'dispari';
}

// funzione scelta random tra pari o dispari
function userRandomChoice() {
    const randomChoice = ['pari', 'dispari']
    let i = Math.floor(Math.random() * randomChoice.length)
    return randomChoice[i]
}

//Scelta utente tra pari o dispari
let userChoice = prompt('Ti senti fortunato, o stai solo bluffando? Dimmi… pari o dispari?');

while (userChoice != 'pari' && userChoice != 'dispari') {
    for (let i = 0; i < 3; i++) {
        userChoice = prompt('Non barare, scegli fra pari o dispari');

        if (userChoice === 'pari' || userChoice === 'dispari'){
            break;
        } else if(i === 2) {
            alert('Tempo scaduto... la tua puntata sarà dispari');
            userChoice = userRandomChoice();
        }
    }
}
console.log(`Hai puntato su: ${userChoice}`);

// utente sceglie il suo numero
let userNumber = parseInt(prompt('Il rischio è la vera essenza del piacere… è arrivato il momento di scegliere un numero tra 1 e 5'));

while (userNumber > 5 || userNumber < 1 || isNaN(userNumber) || userNumber === '') {
    for (let i = 0; i < 3; i++) {
        userNumber = parseInt(prompt('Le opzioni sono poche, ma il rischio è infinito. Sfruttalo bene'));

        if (userNumber > 0 && userNumber <= 5){
            break
        } else if (i === 2) {
            alert('Tempo scaduto... il banco ha deciso al posto tuo');
            userNumber = getRandomNumber(1,5);
        }
    }
}

console.log(`Stai puntando tutto sul numero ${userNumber}`);

// scelta numero computer
let computerNumber = getRandomNumber(1, 5);
console.log(`Il banco rivela la sua puntata ${computerNumber}`);

// somma numeri scelti e controllo
let somma = evenOrOdd(userNumber, computerNumber);
if (somma === userChoice) {
    alert(`Sembra che la fortuna ti abbia sorriso... questa volta. Vince ${somma}`)
    console.log(`Sembra che la fortuna ti abbia sorriso... questa volta. Vince ${somma}`)
} else {
    alert(`Oh… che delusione. Il banco sorride, e tu… hai perso. Vince ${somma}`)
    console.log(`Oh… che delusione. Il banco sorride, e tu… hai perso. Vince ${somma}`)
}