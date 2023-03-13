function parse(string) {
  const nodeValues = string.match(/\d+/g) || [];
  return buildList(nodeValues);
}

function buildList(arr) {
  return (arr.length === 0) 
    ? null 
    : new Node(Number(arr[0]), buildList(arr.slice(1)));
}