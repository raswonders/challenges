function incrementString(str) {
  return str.replace(/([0-8]|\d?9+)?$/, suffix => suffix ? +suffix + 1 : 1);
}