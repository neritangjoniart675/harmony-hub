/*
Filename: SophisticatedCode.js

Description: This code is a complex Javascript implementation of a custom data structure called "SpireTree". It combines various algorithms and data manipulation techniques to provide efficient insertion, deletion, and retrieval operations. The tree is built using a key-value pair structure, where the key is an integer, and the value can be any data type.

*/

class SpireNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class SpireTree {
    constructor() {
        this.root = null;
    }

    insert(key, value) {
        if (this.root === null) {
            this.root = new SpireNode(key, value);
        } else {
            this._insertNode(this.root, key, value);
        }
    }

    _insertNode(node, key, value) {
        if (key < node.key) {
            if (node.left === null) {
                node.left = new SpireNode(key, value);
                node.left.parent = node;
            } else {
                this._insertNode(node.left, key, value);
            }
        } else if (key > node.key) {
            if (node.right === null) {
                node.right = new SpireNode(key, value);
                node.right.parent = node;
            } else {
                this._insertNode(node.right, key, value);
            }
        }
    }

    delete(key) {
        if (this.root !== null) {
            this._deleteNode(this.root, key);
        }
    }

    _deleteNode(node, key) {
        if (node === null) {
            return null;
        } else if (key < node.key) {
            node.left = this._deleteNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = this._deleteNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            const minValueNode = this._findMinValueNode(node.right);
            node.key = minValueNode.key;
            node.value = minValueNode.value;
            node.right = this._deleteNode(node.right, minValueNode.key);
            return node;
        }
    }

    _findMinValueNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this._findMinValueNode(node.left);
        }
    }

    search(key) {
        return this._searchNode(this.root, key);
    }

    _searchNode(node, key) {
        if (node === null) {
            return null;
        } else if (key < node.key) {
            return this._searchNode(node.left, key);
        } else if (key > node.key) {
            return this._searchNode(node.right, key);
        } else {
            return node.value;
        }
    }
}

// Usage example:

const tree = new SpireTree();

tree.insert(5, "Value 5");
tree.insert(2, "Value 2");
tree.insert(7, "Value 7");
tree.insert(1, "Value 1");
tree.insert(3, "Value 3");

console.log(tree.search(2));  // Output: "Value 2"

tree.delete(2);
console.log(tree.search(2));  // Output: null