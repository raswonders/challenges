function wordsToHex(str) {
  words = str.split(" ");
  
  return words.map(word => {
    let hexColor = "#";
    for(let i = 0; i < 3; i++) {
      hexColor += word[i] ? 
        word.charCodeAt(i).toString(16) : 
        "00";
    }
    return hexColor;
  })
}

console.log(wordsToHex("Hello, my name is Gary and I like cheese.")) 
// ['#48656c', '#6d7900', '#6e616d','#697300','#476172','#616e64','#490000','#6c696b','#636865']

