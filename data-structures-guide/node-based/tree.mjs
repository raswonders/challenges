export class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export function search(searchValue, node) {
  if (!node || node.value === searchValue) {
    return node;
  }

  if (node.value < searchValue) {
    return search(searchValue, node.right);
  } else if (node.value > searchValue) {
    return search(searchValue, node.left);
  }
}

export function insert(value, node) {
  if (value < node.value) {
    if (!node.left) {
      node.left = new TreeNode(value);
    } else {
      insert(value, node.left);
    }
  } else {
    if (!node.right) {
      node.right = new TreeNode(value);
    } else {
      insert(value, node.right);
    }
  }
}

export function deleteNode(value, rootNode) {
  let currNode = rootNode;
  let targetNode = null;
  let parentNode = null;

  while (currNode) {
    if (currNode.value === value) {
      targetNode = currNode;
      break;
    } else if (value < currNode.value) {
      parentNode = currNode;
      currNode = currNode.left;
    } else if (value > currNode.value) {
      parentNode = currNode;
      currNode = currNode.right;
    }
  }

  // value not found
  if (!targetNode) return null;

  const childrenCount = (targetNode.left ? 1 : 0) + (targetNode.right ? 1 : 0);
  switch (childrenCount) {
    case 0:
      if (!parentNode) {
        targetNode = null;
      } else if (targetNode === parentNode.left) {
        parentNode.left = null;
      } else if (targetNode === parentNode.right) {
        parentNode.right = null;
      }
      return targetNode;
    case 1:
      const targetChild = targetNode.left || targetNode.right;
      if (!parentNode) {
        targetNode.value = targetChild.value;
        targetNode.left = targetChild.left;
        targetNode.right = targetChild.right;
      } else if (targetNode === parentNode.left) {
        parentNode.left = targetChild;
      } else if (targetNode === parentNode.right) {
        parentNode.right = targetChild;
      }
      return targetChild;
    case 2:
      return replaceWithSucc(targetNode);
  }
}

function replaceWithSucc(node) {
  const succNode = node.right;
  const parentNode = node;

  if (!succNode.left) {
    node.value = succNode.value;
    node.right = succNode.right;
  }

  while (succNode.left) {
    parentNode = succNode;
    succNode = succNode.left;
  }

  if (succNode.right) {
    parentNode.left = succNode.right;
  } else {
    parentNode.left = null;
  }

  node.value = succNode.value;
  return succNode;
}

export function traverse(node, variant = "inorder") {
  if (!node) return;

  variant === "preorder" && console.log(node.value);
  traverse(node.left, variant);
  variant === "inorder" && console.log(node.value);
  traverse(node.right, variant);
  variant === "postorder" && console.log(node.value);
}
