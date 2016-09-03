/** *@fileName:BinarySearchTree.js
 *@createBy:Habeeb
 *@date:
 *@purpose:To Show Standatd Coding Convention */
/**
 *@constructor
 *@param{number}-data number passing to the function
 *@this{number}-data
 */
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
};
/**
 *@to create btree prototype
 *@constructor
 */
function btree() {
    this.root = null;
};
/**
*@adding the number into binarySearchTree
*@constructor
*@param{number}-data passing the value into function
*checking the condition for root is null or not
*/
btree.prototype = {
    add: function(data) {
        var node = new Node(data);
        if (this.root === null) {
            this.root = node;
            console.log("root " + this.root.data + " node");
        } else {
            var currentNode = this.root;
            var parentNode = null;
            while (currentNode) {
                if (data < currentNode.data) {
                    if (currentNode.left === null) {
                        currentNode.left = node;
                        console.log("left " + currentNode.left.data + " node");
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else {
                    if (data > currentNode.data) {
                        if (currentNode.right === null) {
                            currentNode.right = node;
                            console.log("right" + currentNode.right.data + " node");
                            break;
                        } else {
                            currentNode = currentNode.right;
                        }
                    }
                }
            }
        }
    },
/**
*@inorderTraversal function to print elements left,root,right
*@constructor
*@param{object}-node passing the node into the function
*/
    inorderTraversal: function() {
        function inorder(node) {
            if (node) {
                inorder(node.left);
                console.log(node.data);
                inorder(node.right);
            }
        }
        inorder(this.root);
    },
		/**
		*@preorderTraversal function to print elements root,left,right
		*@constructor
		*@param{object}-node passing the node into the function
		*/
    preorderTraversal: function() {
        function preorder(node) {
            if (node) {
                console.log(node.data);
                preorder(node.left);
                preorder(node.right);
            }
        }
        preorder(this.root);
    },
		/**
		*@postorderTraversal function to print elements left,right,root
		*@constructor
		*param{object}-node passing the node into the function
		*/
    postorderTraversal: function(node) {
        if (node) {
            this.postorderTraversal(node.left);
            this.postorderTraversal(node.right);
            console.log(node.data);
        }
    },
/**
*@searchValueTree function to search the element is found or not
*@constructor
*@param{object}-node passing the object into the function
*@param{number}-value passing the number into the function
*/
    searchValueTree: function(node, value) {
        if (node === null) {
            return null;
        } else if (node.data === value) {
            console.log("value is found " + node.data);
        } else if (value < node.data) {
            this.searchValueTree(node.left, value);
        } else if (value > node.data) {
            this.searchValueTree(node.right, value);
        }
    },
		/**
		*@minValuetree function is to find the minvalue of tree
		*@constructor
		*@param{object}-node passing the node into the function
		*/
    minValuetree: function(node) {
        if (node) {
            currentNode = node;
        }
        while (currentNode.left != null) {
            currentNode = currentNode.left;
        }
        console.log("the minimum value of binary tree is: " + currentNode.data);
    },
		/**
		*@maxValuetree function is to find the maxvalue of tree
		*@constructor
		*@param{object}-node passing the node into the function
		*/
    maxValuetree: function(node) {
        if (node) {
            currentNode = node;
        }
        while (currentNode.right != null) {
            currentNode = currentNode.right;
        }
        console.log("the maxmimum value of binary tree is: " + currentNode.data);
    },
		/**
		*@deleteNodetree function is delete the node from binarySearchTree
		*@constructor
		*@param{object}-node passing node into the function
		*@param{number}-value passing value into the function
		*/
    deleteNodetree: function(node, value) {
        if (node === null) {
            return node;
        }
        if (value < node.data) {
            node.left = this.deleteNodetree(node.left, value);
        } else if (value > node.data) {
            node.right = this.deleteNodetree(node.right, value);
        } else {
            if (node.left == null && node.right == null) {
                console.log("deleted node is " + node.data);
                node = null;
            } else if (node.left == null) {
                var current = node;
                console.log("deleted node is " + node.data);
                node = node.right;
                current = null;
            } else if (node.right == null) {
                var current = node;
                console.log("deleted node is " + node.data);
                node = node.left;
                current = null;
            } else {
                var current = minValuetree(node.right);
                node.data = current;
                node.right = deleteNodetree(node.right, current);
            }
        }
        return node;
    }
};
var temp = new btree();
console.log("...............................");
console.log("BinaryTree:");
temp.add(5);
temp.add(10);
temp.add(49);
temp.add(20);
temp.add(2);
temp.add(3);
temp.add(1);
console.log("...............................");
console.log("InorderTravels");
temp.inorderTraversal();
console.log("PreorderTravels");
temp.preorderTraversal();
console.log("PostorderTraversal");
temp.postorderTraversal(temp.root);
temp.searchValueTree(temp.root, 10);
temp.minValuetree(temp.root);
temp.maxValuetree(temp.root);
temp.deleteNodetree(temp.root, 20);
temp.inorderTraversal();
