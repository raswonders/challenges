const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, signal) => {
  if (err) {
    console.error(err);
    return;
  }

  let start = 0;
  let end = 4;
  let slice;
  while ((slice = signal.slice(start, end))) {
    if (isMarker(slice)) {
      console.log(`Marker recognized after ${end} characters`);
      break;
    }

    start++;
    end++;
  }
});

function isMarker(slice) {
  if (slice.length !== 4) return false;

  let chars = slice.split('');

  for (c of chars) {
    if (c === '^' || c === '-') c = `\${c}`;
    let regex = new RegExp(`[${c}]`, 'g');
    let matches = slice.match(regex) || [];

    if (matches.length > 1) return false;
  }

  return true;
}
