const rot13 = (str) => str.replace(/[a-zA-Z]/g, rot13Replacer);

function rot13Replacer(c) {
  const lowerCaseAlpha = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let alphabet = (c === c.toLowerCase()) 
                  ? lowerCaseAlpha 
                  : upperCaseAlpha;
                  
  let encodedChar = alphabet[(alphabet.indexOf(c) + 13) % 26];
  
  return encodedChar;
}

console.log(rot13("ROT13 example."));
// "EBG13 rknzcyr."
console.log(rot13("EBG13 rknzcyr."));
// "ROT13 example."
