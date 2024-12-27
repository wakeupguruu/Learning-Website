import React from "react";

const Trees = () => {
    return (
        <div className="w-full min-h-screen font-ComicNeue bg-lBackground text-lWhite px-8 py-6">
            <h2 className="text-[47px] tracking-tight leading-[53px]">Trees</h2>
            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Introduction to Trees</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    A tree is a widely used data structure that simulates a hierarchical tree structure, 
                    with a root value and subtrees of children, represented as a set of linked nodes. 
                    It is a non-linear data structure used for searching, sorting, and hierarchical representation.
                </p>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    Trees are particularly useful in scenarios such as file systems, databases, and network routing. 
                    They are a versatile and efficient way to model relationships and organize data.
                </p>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Basic Terminologies</h3>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        <strong>Root:</strong> The topmost node of a tree, which has no parent.
                    </li>
                    <li>
                        <strong>Child:</strong> A node directly connected to another node moving away from the root.
                    </li>
                    <li>
                        <strong>Parent:</strong> A node that has one or more child nodes.
                    </li>
                    <li>
                        <strong>Leaf:</strong> A node with no children.
                    </li>
                    <li>
                        <strong>Height:</strong> The length of the longest path from the root to any leaf.
                    </li>
                    <li>
                        <strong>Depth:</strong> The length of the path from the root to a particular node.
                    </li>
                </ul>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Types of Trees</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#4d4e50] text-white p-4 rounded-lg">
                        <h4 className="text-2xl font-light">1. Binary Tree</h4>
                        <p className="text-lg font-light mt-2">
                            A binary tree is a tree structure where each node has at most two children, 
                            referred to as the left child and the right child.
                        </p>
                    </div>
                    <div className="bg-[#4d4e50] text-white p-4 rounded-lg">
                        <h4 className="text-2xl font-light">2. Binary Search Tree</h4>
                        <p className="text-lg font-light mt-2">
                            A binary search tree is a binary tree with the property that the left subtree of a 
                            node contains only nodes with keys less than the node’s key, 
                            and the right subtree contains only nodes with keys greater than the node’s key.
                        </p>
                    </div>
                    <div className="bg-[#4d4e50] text-white p-4 rounded-lg">
                        <h4 className="text-2xl font-light">3. AVL Tree</h4>
                        <p className="text-lg font-light mt-2">
                            An AVL tree is a self-balancing binary search tree where the difference 
                            between the heights of the left and right subtrees cannot be more than one for all nodes.
                        </p>
                    </div>
                    <div className="bg-[#4d4e50] text-white p-4 rounded-lg">
                        <h4 className="text-2xl font-light">4. B-Tree</h4>
                        <p className="text-lg font-light mt-2">
                            A B-tree is a self-balancing search tree where nodes can have multiple children. 
                            It is optimized for systems that read and write large blocks of data.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Tree Traversals</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    Tree traversal refers to the process of visiting each node in a tree data structure. 
                    Traversals are categorized into the following types:
                </p>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        <strong>Inorder:</strong> Traverse the left subtree, visit the root, and then traverse the right subtree.
                    </li>
                    <li>
                        <strong>Preorder:</strong> Visit the root, traverse the left subtree, and then traverse the right subtree.
                    </li>
                    <li>
                        <strong>Postorder:</strong> Traverse the left subtree, traverse the right subtree, and then visit the root.
                    </li>
                    <li>
                        <strong>Level Order:</strong> Traverse nodes level by level from top to bottom.
                    </li>
                </ul>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Applications of Trees</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    Trees have numerous applications in computer science and beyond:
                </p>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        <strong>File Systems:</strong> Representing hierarchical structures of files and directories.
                    </li>
                    <li>
                        <strong>Databases:</strong> Implementing indexing and search operations using B-trees.
                    </li>
                    <li>
                        <strong>Network Routing:</strong> Representing paths and hierarchies in network protocols.
                    </li>
                    <li>
                        <strong>Artificial Intelligence:</strong> Decision trees in machine learning.
                    </li>
                </ul>
            </div>

            <div className="w-96 h-96 overflow-hidden mx-auto mt-10">
                <img
                    className=""
                    src="https://media.geeksforgeeks.org/wp-content/uploads/binary-tree-to-bst.webp"
                    alt="Tree Illustration"
                />
            </div>
        </div>
    );
};

export default Trees;
