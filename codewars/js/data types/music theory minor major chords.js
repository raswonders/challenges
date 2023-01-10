notes.getNoteIndex = function(note) {
  for (let i = 0; i < this.length; i++) {
    if (note === this[i]) return i;
    if (Array.isArray(this[i])) {
      for (let j = 0; j < this[i].length; j++) {
        if (note === this[i][j]) return i;
      }
    }
  }
  return -1;
}

function minorOrMajor(chordStr){
let chord = chordStr.split(' ');
if (!isTriad(chord)) return 'Not a chord';

let [first, second, third] = chord; 
let firstInterval = getInterval(first, second, notes.length);
let secondInterval = getInterval(second, third, notes.length);

if (firstInterval === 3 && secondInterval === 4) return 'Minor';
if (firstInterval === 4 && secondInterval === 3) return 'Major';
return 'Not a chord';
}

function getInterval(first, second, length) {
let firstIndex = notes.getNoteIndex(first);
let secondIndex = notes.getNoteIndex(second);

let distance = secondIndex - firstIndex;
let distanceWrapped = length - (firstIndex - secondIndex);
let distanceUsed = firstIndex > secondIndex ? distanceWrapped : distance;

return (length + distanceUsed) % length;
}

function isTriad(chord) {
if (chord.length === 3) return true;
return false;
}