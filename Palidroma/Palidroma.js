function checkPalindrome(userWord){
    const wordArray = userWord.split('');
    const reverseWordArray = wordArray.reverse();
    const backToString = reverseWordArray.join('');

    if( userWord === backToString){
        console.log('Affascinante… la parola si specchia e resta identica. Che equilibrio perfetto')
        alert('Affascinante… la parola si specchia e resta identica. Che equilibrio perfetto')
    }
    else {
        console.log('Ah… peccato. Questa parola non ha il coraggio di guardarsi allo specchio')
        alert('Ah… peccato. Questa parola non ha il coraggio di guardarsi allo specchio')
    }
}

const userWord = prompt('Inserisci una parola… vediamo se saprà riflettersi da sola')
console.log(`${userWord}... scelta audace`)

checkPalindrome(userWord);