const fs = require("fs");

const parseSeeds = (data) => {
  let firstLine = data[0];
  if (firstLine.includes("seeds")) {
    return firstLine
      .split(":")[1]
      .trim()
      .split(" ")
      .map((seed) => parseInt(seed));
  }
};

const parseMaps = (data) => {
  const maps = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].includes("map")) {
      currMap = [];
      for (let j = i + 1; j < data.length; j++) {
        if (data[j].length > 0) {
          const range = data[j].split(" ").map((value) => parseInt(value));
          currMap.push(range);
        } else {
          break;
        }
      }
      currMap.sort((a, b) => a[1] - b[1]);
      maps.push(currMap);
    }
  }

  return maps;
};

const seedResolver = (seed, maps) => {
  let value = seed;

  outer: for (let map of maps) {
    let low = 0,
      high = map.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let [destStart, sourceStart, length] = map[mid];
      if (sourceStart <= value && value < sourceStart + length) {
        value = destStart + (value - sourceStart);
        continue outer;
      } else if (sourceStart + length <= value) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return value;
};

// const data = fs
//   .readFileSync("examples.txt", "utf8")
//   .split("\n")
//   .map((line) => line.trim());

const data = fs
  .readFileSync("input.txt", "utf8")
  .split("\n")
  .map((line) => line.trim());

const task1 = (data) => {
  const seeds = parseSeeds(data);
  const maps = parseMaps(data);
  const locations = seeds.map((seed) => seedResolver(seed, maps));

  return Math.min(...locations);
};

const task2 = (data) => {
  const seeds = [];
  const seedRanges = parseSeeds(data);
  const maps = parseMaps(data);

  function* seedGenerator(seedRanges) {
    for (let i = 0; i < seedRanges.length - 1; i += 2) {
      console.log("current seed range", seedRanges[i], seedRanges[i + 1])
      for (let j = 0; j < seedRanges[i + 1]; j++) {
        yield seedRanges[i] + j;
      }
    }
  }

  let lowestLocation = Infinity;
  for (let seed of seedGenerator(seedRanges)) {
    let location = seedResolver(seed, maps);
    if (location < lowestLocation) {
      lowestLocation = location;
    }
  }

  return lowestLocation;
};

console.log(task1(data));
console.log(task2(data));
