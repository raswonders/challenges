const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  class TreeNode {
    constructor(name, size, parent = null) {
      this.name = name;
      this.parent = parent;
      this.size = size;
      this.children = [];
    }
  }

  class Tree {
    constructor(rootName) {
      this.root = new TreeNode(rootName, 0);
    }

    *preOrderTraversal(node = this.root) {
      yield node;
      if (node.children.length) {
        for (let child of node.children) {
          yield* this.preOrderTraversal(child);
        }
      }
    }

    getDirectories(max) {
      let dirs = [];
      for (let node of this.preOrderTraversal()) {
        if (node.children.length) {
          dirs.push([node.name, this.getDirSize(node)])
        }
      }

      if (max) {
        dirs = dirs.filter(dir => dir[1] <= max)
      }

      return dirs;
    }

    getDirSize(dir) {
      return [...this.preOrderTraversal(dir)]
        .map(node => node.size)
        .reduce((curr, acc) => (acc += curr));
    }

    insert(parentName, childName, size = 0) {
      for (let node of this.preOrderTraversal()) {
        if (node.name === parentName) {
          node.children.push(new TreeNode(childName, size, parentName));
          return true;
        }
      }
      return false;
    }

    find(name) {
      for (let node of this.preOrderTraversal()) {
        if (node.name === name) return node;
      }
      return undefined;
    }

    findChild(parent, childName) {
      for (let node of parent.children) {
        if (node.name === childName) return node;
      }

      throw (`${childName} wasn't found`)
    }

    appendChild(parent, childName, size) {
      parent.children.push(new TreeNode(childName, size, parent));
    }

  }

  function isCommand(str) {
    return str[0] === "$";
  }

  // File tree building routine
  let input = data.split("\n");
  const tree = new Tree("/");

  // intial working dir is '/' hence input line cd '/' was removed
  let workingDir = tree.root;
  for (line of input) {
    if (isCommand(line)) {
      let commRegExp = /^[$]\s+(?<name>cd)\s+((?<arg>\w+|\.\.|\/))$/;
      let comm = line.match(commRegExp) ? line.match(commRegExp).groups : {};

      if (comm.name == "cd") {
        let dir = comm.arg;

        if (dir === "..") {
          workingDir = workingDir.parent;
        } else {
          workingDir = tree.findChild(workingDir, dir);
        }
      } else {
        // ignore other command than cd
        continue;
      }
    } else {
      let fileRegExp = /^((?<size>\d+)|dir)\s+(?<name>[\w.-_]+)$/;
      let file = line.match(fileRegExp) ? line.match(fileRegExp).groups : {};
      file.size = file.size ? file.size : 0;
      tree.appendChild(workingDir, file.name, Number(file.size))
    }
  }

  let dirs = tree.getDirectories(100000);
  let sizes = dirs.map(item => item[1])
  let sum = sizes.reduce((curr, acc) => acc += curr)

  console.log(sum)
});