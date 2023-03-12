function getInterval(note1, note2) {
  const notes = ["A0", "B0", "C1", "D1", "E1", "F1", "G1", "A1", "B1", "C2", "D2", "E2", "F2", "G2", "A2", "B2", "C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "B5", "C6", "D6", "E6", "F6", "G6", "A6", "B6", "C7", "D7", "E7", "F7", "G7", "A7", "B7", "C8"];
  return Math.abs(notes.indexOf(note1) - notes.indexOf(note2)) + 1;
}

console.log(getInterval('F4', 'B4'))
//4

console.log(getInterval('G3', 'G4'))
//8

console.log(getInterval('A7', 'B6'))
//7