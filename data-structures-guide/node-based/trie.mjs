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

  insert(word) {
    const currentNode = this.root;
    for (let char of word) {
      if (currentNode.children[char]) {
        currentNode = currentNode.children[char];
      } else {
        const newNode = new TrieNode();
        currentNode.children[char] = newNode;
        currentNode = newNode;
      }
    }
    currentNode.children["*"] = null;
  }
  collectAllWords(words, node = null, word = "") {
    const currentNode = node || this.root;
    for (let [key, childNode] of Object.entries(currentNode.children)) {
      if (key === "*") {
        words.push(word);
      } else {
        this.collectAllWords(words, childNode, word + key);
      }
    }

    return words;
  }

  autocomplete(prefix) {
    const currentNode = this.search(prefix);

    if (!currentNode) return null;

    return this.collectAllWords([], currentNode);
  }
}
