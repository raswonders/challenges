const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')

function lastSurvivors(str) {
  // for each character in alphabet
    // consider is there any match?
      // if true
          // remove all of the occurences
          // consider is number of matches odd?
              // if true
                // add 1 same character to sub to correct for removal of more
                // add (no. matches - 1) of next character to sub 
              // elese
                // add (no. matches) of next character to sub
      // else -> continue iteration
  
  // if z was subed by a call function recursively
  
  let zHasTransformed = false;
  
  alphabet.forEach((c, i) => {
    let regex = new RegExp(c, 'gi') 
    let matches = str.match(regex) || [];
 
    if (i == 25 && matches.length > 1) zHasTransformed = true;
    
    str.replace(regex, '');
    str += c.repeat(matches.length & 1);
    str += alphabet[(i + 1) % alphabet.length].repeat(matches.length - (matches.length & 1))
  })
  
  return zHasTransformed ? lastSurvivors(str) : str;
}