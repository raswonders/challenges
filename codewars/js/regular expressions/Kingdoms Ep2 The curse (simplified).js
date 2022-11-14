function translate(speech, vocabulary) {
  return speech.replace(/([*\w/]){3,}/g, wordBroken => {
    let wordHintRE = new RegExp(`^${wordBroken.replace(/\*/g, "\\w")}$`);
    let wordCorrect = vocabulary.find(word => wordHintRE.test(word))
    
    return wordCorrect ? wordCorrect : wordBroken;
  })
}