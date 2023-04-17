const charMap = {
  "a": 0,
  "b": 0,
  "c": 0,
  "d": 0,
  "e": 0,
  "f": 0,
  "g": 0,
  "h": 0,
  "i": 0,
  "j": 0,
  "k": 0,
  "l": 0,
  "m": 0,
  "n": 0,
  "o": 0,
  "p": 0,
  "q": 0,
  "r": 0,
  "s": 0,
  "t": 0,
  "u": 0,
  "v": 0,
  "w": 0,
  "x": 0,
  "y": 0,
  "z": 0
}

function isAnagram(s,t) {
  if (s.length !== t.length) return false;

  return getCharMapString(s) === getCharMapString(t);
}

function getCharMapString(str) {
  const instances = { ...charMap };
  for (let i = 0; i < str.length; i++) {
    instances[str[i]]++;
  }
  return JSON.stringify(instances) 
}

// EXAMPLES
console.log(isAnagram("anagram", "nagaram"));
// true

console.log(isAnagram("rat", "car"));
// false

console.log(isAnagram("aacc", "ccac"));
// false
