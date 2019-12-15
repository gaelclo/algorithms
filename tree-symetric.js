class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.leftNode = null;
    this.rightNode = null;
  }
}

function symetric(root) {
  return !root || validate(root.leftNode, root.rightNode);
}

function validate(leftNode, rightNode) {
  if(!leftNode && !rightNode) {
    return true;
  }
  else if(leftNode && rightNode) {
    return leftNode.value==rightNode.value 
      && validate(leftNode.leftNode, rightNode.rightNode) 
      && validate(leftNode.rightNode, rightNode.leftNode);  
  }
  return false;
}

const n1 = new BinaryTreeNode('v1');
const n2 = new BinaryTreeNode('v2');
const n3 = new BinaryTreeNode('v2');
const n4 = new BinaryTreeNode('v3');
const n5 = new BinaryTreeNode('v4');
const n6 = new BinaryTreeNode('v4');
const n7 = new BinaryTreeNode('v3');

n1.leftNode = n2;
n1.rightNode = n3;
n2.leftNode = n4;
n2.rightNode = n5;
n3.leftNode = n6;
n3.rightNode = n7;

console.log('Tree', n1);
console.log('symetric', symetric(n1));
n6.value = null;
console.log('symetric', symetric(n1));