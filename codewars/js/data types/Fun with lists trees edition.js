function flatten(head) {
  return constructTree(
    [...new Set(flattenList(head))]
    .sort((x, y)=> x - y)
  );
}

function constructTree(values, i=0){
  return values[i] == undefined
    ? values[i]
    : new TreeNode(
        values[i],
        constructTree(values, i*2+1),
        constructTree(values, i*2+2)
      );  
}

function flattenList(head){
  return head
    ? flattenTree(head.data)
      .concat(flattenList(head.next))
    : [];
}

function flattenTree(root){
  return root 
    ? [root.value]
      .concat(flattenTree(root.left))
      .concat(flattenTree(root.right))    
    : [];  
}