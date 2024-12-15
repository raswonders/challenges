import { deleteNode, insert, TreeNode } from "./tree.mjs";
import assert from "node:assert";
const sample = [47, 4, 0, 82, 92, 42, 52, 93, 86, 68];
const root = new TreeNode(50);
for (let val of sample) {
  insert(val, root);
}

console.log(root);
deleteNode(0, root);
console.log(root);
