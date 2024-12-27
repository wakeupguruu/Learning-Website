import React from "react";

const Tries = () => {
    return (
        <div className="w-full min-h-screen font-ComicNeue bg-lBackground text-lWhite px-8 py-6">
            <h2 className="text-[47px] tracking-tight leading-[53px]">Tries</h2>
            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Introduction to Tries</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    A Trie (pronounced as "try") is a tree-like data structure that stores strings in a way that facilitates fast retrieval. 
                    It is commonly used for autocomplete features, dictionary implementations, and searching word prefixes in a dataset.
                </p>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    Unlike other data structures like hash tables, tries provide efficient and organized storage of strings with shared prefixes.
                </p>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Key Features of Tries</h3>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        <strong>Prefix Search:</strong> Tries allow searching for strings by their prefixes in O(L) time, where L is the length of the string.
                    </li>
                    <li>
                        <strong>Efficient Storage:</strong> Strings with common prefixes share nodes, reducing memory usage.
                    </li>
                    <li>
                        <strong>Insert and Delete:</strong> Tries provide efficient operations for insertion and deletion of words.
                    </li>
                    <li>
                        <strong>Lexicographical Ordering:</strong> The natural hierarchical structure allows retrieval of sorted data.
                    </li>
                </ul>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Structure of a Trie</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    A Trie consists of nodes and edges. Each node represents a character of a string, and edges connect nodes to form strings. 
                    Nodes also contain a boolean flag indicating if they mark the end of a valid word.
                </p>
                <div className="w-96 h-96 overflow-hidden mx-auto mt-8">
                    <img
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20200609175210/trie1.png"
                        alt="Trie Example"
                    />
                </div>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Operations on Tries</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#4d4e50] text-white p-4 rounded-lg">
                        <h4 className="text-2xl font-light">1. Insertion</h4>
                        <p className="text-lg font-light mt-2">
                            To insert a word into a Trie, traverse from the root node while creating child nodes for each character 
                            if they do not exist. Mark the last node as the end of the word.
                        </p>
                    </div>
                    <div className="bg-[#4d4e50] text-white p-4 rounded-lg">
                        <h4 className="text-2xl font-light">2. Search</h4>
                        <p className="text-lg font-light mt-2">
                            To search for a word or prefix, traverse the Trie following the characters of the string. 
                            If the traversal completes and the end flag is set, the word exists in the Trie.
                        </p>
                    </div>
                    <div className="bg-[#4d4e50] text-white p-4 rounded-lg">
                        <h4 className="text-2xl font-light">3. Deletion</h4>
                        <p className="text-lg font-light mt-2">
                            Deleting a word involves traversing the Trie to unmark the end flag for the word. 
                            Nodes can be removed if they do not lead to other words.
                        </p>
                    </div>
                    <div className="bg-[#4d4e50] text-white p-4 rounded-lg">
                        <h4 className="text-2xl font-light">4. Prefix Matching</h4>
                        <p className="text-lg font-light mt-2">
                            Tries are ideal for finding all words with a given prefix. Start from the root and follow the prefix 
                            characters, then recursively traverse all branches.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Applications of Tries</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    Tries are used in many real-world scenarios:
                </p>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        <strong>Autocomplete:</strong> Suggesting words based on a given prefix in search engines and text editors.
                    </li>
                    <li>
                        <strong>Spell Checkers:</strong> Verifying words against a dictionary.
                    </li>
                    <li>
                        <strong>IP Routing:</strong> Implementing prefix-based routing tables.
                    </li>
                    <li>
                        <strong>DNA Sequencing:</strong> Storing and searching genetic sequences efficiently.
                    </li>
                </ul>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Example Implementation</h3>
                <div className="bg-[#4d4e50] text-white p-4 rounded-lg shadow-lg font-mono text-sm max-w-full overflow-auto">
                    <pre className="whitespace-pre-wrap">
{`class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }
}`}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default Tries;
