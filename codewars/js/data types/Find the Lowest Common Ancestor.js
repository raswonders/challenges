// assumes node IDs are unique
function LCA(nodeA, nodeB) {
  let pathA = getPath(nodeA);
  let pathB = getPath(nodeB);
  let pathCommon = pathA.filter(node => pathB.includes(node));
  let leastCommonAncestor = pathCommon[0];
  
  return leastCommonAncestor;
}

function getPath(node) {
  return node
    ? [node.id].concat(getPath(node.up))
    : [];
}