// Generate random sorted unique set numbers of array.
function generateArray() {
  const sort = (a, b) => a - b;
  const randomArray = Array.from({length: 20}, () => Math.floor(Math.random() * 40));
  const uniq = [...new Set(randomArray)];
  return uniq.sort();
}

class Node {
    constructor(data, leftNode = null, rightNode = null) {
        this.data = data;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
}

class Tree {
    constructor(array) {
        this.root = this.buildTree(array, 0, array.length - 1);
    }
    buildTree(array) {
        if (array.length === 1) return new Node(array[0]);
        if (array.length === 0) return null;

        let mid = Math.floor(array.length / 2);
        let root = new Node(array[mid]);

        root.leftNode = this.buildTree(array.slice(0, mid));
        root.rightNode = this.buildTree(array.slice(mid + 1, array.length - 1));

        return root;
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.rightNode !== null) {
      prettyPrint(node.rightNode, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.leftNode !== null) {
      prettyPrint(node.leftNode, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  };
const sortedArray = generateArray();
const tree = new Tree(sortedArray);
prettyPrint(tree.root);