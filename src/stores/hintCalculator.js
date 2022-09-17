const hintCalculator = (targetWord, currentWord) => {
    console.log('LOGGING FROM hintCalculator');
    console.log(targetWord);
    console.log(currentWord);

    const targetWordArray = targetWord.split('');
    const currentWordArray = currentWord.split('');

    let placedCount = 0;
    let wellPlacedCount = 0;

    for (let pos = 0; pos <= 4; pos++) {

        if (targetWordArray.includes(currentWordArray[pos])) {
            placedCount++;
        }

        if (targetWordArray[pos] === currentWord[pos]) {
            wellPlacedCount++;
        }

    }

    return [placedCount, wellPlacedCount];
}

export default hintCalculator;
