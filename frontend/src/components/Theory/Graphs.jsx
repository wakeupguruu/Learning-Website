import React from "react";

const Graphs = () => {
    return (
        <div className="w-full min-h-screen font-ComicNeue bg-lBackground text-lWhite px-8 py-6">
            <h2 className="text-[47px] tracking-tight leading-[53px]">Graphs</h2>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">What are Graphs?</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    A graph is a mathematical representation consisting of **vertices** (nodes) connected by **edges** (links). 
                    Graphs are used to represent relationships between objects and are widely used in computer science, 
                    social networks, transportation networks, and more.
                </p>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    Graphs can be categorized as **directed** (edges have direction) or **undirected** (edges do not have direction). 
                    They can also be **weighted** (edges have weights) or **unweighted**.
                </p>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Types of Graphs</h3>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        **Directed Graph (Digraph):** Each edge has a direction from one vertex to another.
                    </li>
                    <li>
                        **Undirected Graph:** Edges connect two vertices without direction.
                    </li>
                    <li>
                        **Weighted Graph:** Edges are assigned weights to represent distances, costs, or other values.
                    </li>
                    <li>
                        **Cyclic Graph:** A graph that contains at least one cycle.
                    </li>
                    <li>
                        **Acyclic Graph:** A graph without cycles.
                    </li>
                </ul>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Graph Representation</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    Graphs can be represented in multiple ways:
                </p>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        **Adjacency Matrix:** A 2D array where the cell `(i, j)` indicates the presence or weight of an edge between nodes `i` and `j`.
                    </li>
                    <li>
                        **Adjacency List:** A list where each vertex has an array of connected vertices.
                    </li>
                    <li>
                        **Edge List:** A list of all edges, each represented as a pair (or triplet for weighted graphs).
                    </li>
                </ul>
                <div className="bg-[#4d4e50] text-white p-4 rounded-lg shadow-lg font-mono text-sm max-w-full overflow-auto">
                    <pre className="whitespace-pre-wrap">
{`const graph = {
    0: [1, 3],
    1: [0, 2],
    2: [1, 3],
    3: [0, 2]
};`}
                    </pre>
                </div>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Graph Traversal Techniques</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    Graph traversal involves visiting all the nodes of a graph systematically. Two primary traversal techniques are:
                </p>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        **Breadth-First Search (BFS):** Explores all neighbors at the current depth before moving deeper.
                    </li>
                    <li>
                        **Depth-First Search (DFS):** Explores as far as possible along one branch before backtracking.
                    </li>
                </ul>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Applications of Graphs</h3>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        **Social Networks:** Representing connections between users.
                    </li>
                    <li>
                        **Web Crawling:** Representing links between web pages.
                    </li>
                    <li>
                        **Shortest Path Algorithms:** Dijkstra's and Bellman-Ford algorithms for navigation and routing.
                    </li>
                    <li>
                        **Scheduling:** Dependency resolution in task scheduling.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Graphs;
