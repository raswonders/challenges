const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let firstPacket = getStartOfPacket(data);
  let firstMessage = getStartOfMessage(data);

  console.log(`Packet marker recognized after ${firstPacket} characters`);
  console.log(`Message marker recognized after ${firstMessage} characters`);
});

function getStartOfPacket(signal) {
  let start = 0;
  let end = 4;
  let slice;

  while ((slice = signal.slice(start, end))) {
    if (isMarker(slice)) return end;

    start++;
    end++;
  }
}

function getStartOfMessage(signal) {
  let start = 0;
  let end = 14;
  let slice;

  while ((slice = signal.slice(start, end))) {
    if (isMarker(slice, 14)) return end;

    start++;
    end++;
  }
}

function isMarker(slice, size=4) {
  if (slice.length !== size) return false;

  let chars = slice.split("");

  for (c of chars) {
    if (c === "^" || c === "-") c = `\${c}`;
    let regex = new RegExp(`[${c}]`, "g");
    let matches = slice.match(regex) || [];

    if (matches.length > 1) return false;
  }

  return true;
}