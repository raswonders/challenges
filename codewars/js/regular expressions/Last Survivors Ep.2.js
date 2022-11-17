const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')

function lastSurvivors(str) {  
  let zHasTransformed = false;
  
  alphabet.forEach((c, i) => {
    let regex = new RegExp(c, 'gi') 
    let matches = str.match(regex) || [];
 
    if (i == 25 && matches.length > 1) zHasTransformed = true;
    
    str = str.replace(regex, '');
    str += c.repeat(matches.length & 1);
    str += alphabet[(i + 1) % alphabet.length].repeat(Math.floor(matches.length / 2))
  })
  
  return zHasTransformed ? lastSurvivors(str) : str;
}