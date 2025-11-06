function checkPalindrome(string){
    const backToString = userWord.split('').reverse().join('');

    if( userWord === backToString){
        console.log('Affascinante… la parola si specchia e resta identica. Che equilibrio perfetto')
        return 'Affascinante… la parola si specchia e resta identica. Che equilibrio perfetto'
    }
    else {
        console.log('Ah… peccato. Questa parola non ha il coraggio di guardarsi allo specchio')
        return 'Ah… peccato. Questa parola non ha il coraggio di guardarsi allo specchio'
    }
}

const userWord = prompt('Inserisci una parola… vediamo se saprà riflettersi da sola')
console.log(`${userWord}... scelta audace`)
alert(checkPalindrome(userWord));



function checkPalindromeWithLoop(string){
    const len = string.length;
    
    for (let i = 0; i < len / 2; i++) {
        
        if (string[i] !== string[len - 1 - i]) {
            return 'Ah… peccato. Questa parola non ha il coraggio di guardarsi allo specchio'
        }
        
    } return 'Affascinante… la parola si specchia e resta identica. Che equilibrio perfetto'
}

const userWord = prompt('Inserisci una parola… vediamo se saprà riflettersi da sola')
console.log(`${userWord}... scelta audace`)
alert(checkPalindromeWithLoop(userWord));