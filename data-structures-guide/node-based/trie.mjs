export class TrieNode {
  constructor() {
    this.children = {};
  }
}

export class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  search(word) {
    let currentNode = this.root;
    for (let char of word) {
      if (currentNode.children[char]) {
        currentNode = currentNode.children[char];
      } else {
        return null;
      }
    }
    return currentNode;
  }
}
