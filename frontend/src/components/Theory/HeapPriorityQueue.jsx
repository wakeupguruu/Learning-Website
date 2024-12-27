import React from "react";

const HeapPriorityQueue = () => {
    return (
        <div className="w-full min-h-screen font-ComicNeue bg-lBackground text-lWhite px-8 py-6">
            <h2 className="text-[47px] tracking-tight leading-[53px]">Heap and Priority Queue</h2>
            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Introduction</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    A Heap is a specialized binary tree-based data structure that satisfies the heap property. 
                    In a max heap, the key of each node is greater than or equal to the keys of its children. 
                    In a min heap, the key of each node is less than or equal to its children.
                </p>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    A Priority Queue is an abstract data type similar to a queue where each element is associated with a priority. 
                    Elements with higher priority are dequeued before elements with lower priority.
                </p>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Types of Heaps</h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-[#4d4e50] text-white p-4 rounded-lg">
                        <h4 className="text-2xl font-light">1. Max Heap</h4>
                        <p className="text-lg font-light mt-2">
                            In a max heap, the parent node has a value greater than or equal to its child nodes. 
                            This property is recursively true for all nodes.
                        </p>
                    </div>
                    <div className="bg-[#4d4e50] text-white p-4 rounded-lg">
                        <h4 className="text-2xl font-light">2. Min Heap</h4>
                        <p className="text-lg font-light mt-2">
                            In a min heap, the parent node has a value less than or equal to its child nodes. 
                            This property is recursively true for all nodes.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Operations on Heaps</h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-[#4d4e50] text-white p-4 rounded-lg">
                        <h4 className="text-2xl font-light">1. Insertion</h4>
                        <p className="text-lg font-light mt-2">
                            Insert the element at the end of the heap and "heapify up" by comparing with its parent until the heap property is restored.
                        </p>
                    </div>
                    <div className="bg-[#4d4e50] text-white p-4 rounded-lg">
                        <h4 className="text-2xl font-light">2. Deletion</h4>
                        <p className="text-lg font-light mt-2">
                            Remove the root node (max/min value), replace it with the last node, and "heapify down" to restore the heap property.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Applications of Heaps</h3>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        <strong>Priority Queue:</strong> Used in scheduling algorithms, such as job scheduling.
                    </li>
                    <li>
                        <strong>Heap Sort:</strong> Efficient sorting algorithm with O(n log n) complexity.
                    </li>
                    <li>
                        <strong>Dijkstra's Algorithm:</strong> Finding the shortest path in a graph.
                    </li>
                    <li>
                        <strong>Median Finder:</strong> Maintaining the median in streaming data.
                    </li>
                </ul>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Example Implementation</h3>
                <div className="bg-[#4d4e50] text-white p-4 rounded-lg shadow-lg font-mono text-sm max-w-full overflow-auto">
                    <pre className="whitespace-pre-wrap">
{`class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        let currentIndex = this.heap.length - 1;

        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[currentIndex]) break;
            [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
            currentIndex = parentIndex;
        }
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapify(0);
        return max;
    }

    heapify(index) {
        let largest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;

        if (left < this.heap.length && this.heap[left] > this.heap[largest]) largest = left;
        if (right < this.heap.length && this.heap[right] > this.heap[largest]) largest = right;

        if (largest !== index) {
            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
            this.heapify(largest);
        }
    }
}`}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default HeapPriorityQueue;
