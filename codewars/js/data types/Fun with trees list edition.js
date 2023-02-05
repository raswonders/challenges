function flatten(root) {
  values = flattenTree(root)
    .map(head => flattenList(head))
    .flat();
  
  valuesUnique = [...new Set(values)];
  valuesUniqueSorted = valuesUnique.sort((a, b) => a - b); 
  
  return buildList(valuesUniqueSorted);
};

function flattenTree(node) {
  return node
    ? [node.value].concat(flattenTree(node.left)).concat(flattenTree(node.right))
    : [];
}

function flattenList(node) {
  return node
    ? [node.data].concat(flattenList(node.next))
    : [];
}

function buildList(values) {
  return values.length > 0
    ? new ListNode(values.shift(), buildList(values))
    : null;
}