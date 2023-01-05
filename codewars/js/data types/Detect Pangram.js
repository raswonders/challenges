function isPangram(sentence) {
  let sentenceLow = sentence.toLowerCase();
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every(letter => sentenceLow.includes(letter))
}