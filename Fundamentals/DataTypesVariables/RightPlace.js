function replaceAndCkeck(word, char, wordToBeEqualTo) {

    let wordAfterReplace = word.replace("_", char);
    let isMatching = wordAfterReplace === wordToBeEqualTo ? "Matched" : "Not Matched";

    console.log(isMatching);
}

replaceAndCkeck('Str_ng', 'I', 'Strong');