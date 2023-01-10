function minorOrMajor(chordStr){
  const chord = chordStr.split(' ');
  const isTriad = chord.length === 3;
  if (!isTriad) return 'Not a chord';
  
  let [first, second, third] = chord; 
  let firstInterval = getInterval(first, second);
  let secondInterval = getInterval(second, third);
  
  if (firstInterval === 3 && secondInterval === 4) return 'Minor';
  if (firstInterval === 4 && secondInterval === 3) return 'Major';
  return 'Not a chord';
}

function getInterval(first, second) {
  let notes = {'C':0,'C#':1,'Db':1,'D':2,'D#':3,'Eb':3,'E':4,'F':5,'F#':6,'Gb':6,'G':7,'G#':8,'Ab':8,'A':9,'A#':10,'Bb':10,'B':11};
  const scaleSize = 12;
  return (scaleSize + notes[second] - notes[first]) % scaleSize;
}