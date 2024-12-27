import CodeBlock from "../utils/CodeBlock";

// Linked List Component

const LinkedList = () => {
    
  
    return (
      <div className="w-full min-h-screen font-ComicNeue bg-lBackground text-lWhite px-8 py-6">
        <h2 className="text-[47px] tracking-tight leading-[53px]">Linked List</h2>
  
        <div className="mt-10 border-l border-[#333333] px-4">
          <h3 className="text-3xl font-light">What is a Linked List?</h3>
          <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
            A Linked List is a linear data structure where elements are stored in nodes connected by pointers. Unlike arrays, linked lists allow efficient insertion and deletion as they don't require contiguous memory allocation. Each node in a linked list contains:
          </p>
          <ul className="mt-2 text-lg font-light px-8 list-disc">
            <li>
              <span className="font-semibold">Data:</span> The value stored in the node.
            </li>
            <li>
              <span className="font-semibold">Pointer:</span> A reference to the next node in the sequence.
            </li>
          </ul>
        </div>
  
        <div className="mt-10 border-l border-[#333333] px-4">
          <h3 className="text-3xl font-light">Advantages of Linked Lists</h3>
          <ul className="mt-2 text-lg font-light px-8 list-disc">
            <li>Dynamic size: Can grow or shrink as needed.</li>
            <li>Efficient insertions and deletions without shifting elements.</li>
            <li>
              Memory utilization: Only allocates memory when needed, avoiding
              wastage.
            </li>
          </ul>
        </div>
  
        <div className="mt-10 border-l border-[#333333] px-4">
          <h3 className="text-3xl font-light">Drawbacks of Linked Lists</h3>
          <ul className="mt-2 text-lg font-light px-8 list-disc">
            <li>
              Higher memory usage: Each node stores an additional pointer.
            </li>
            <li>
              Sequential access: Slower lookups compared to arrays, as elements
              are accessed sequentially.
            </li>
          </ul>
        </div>
  
        <div className="mt-10 border-l border-[#333333] px-4">
          <h3 className="text-3xl font-light">Types of Linked Lists</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="border-l border-[#333333] px-4">
              <h4 className="text-2xl font-light">1. Singly Linked List</h4>
              <p className="text-base font-light mt-4 w-[84%] text-gray-300">
                A singly linked list allows traversal in only one direction, with
                each node pointing to the next.
              </p>
            </div>
            <div className="border-l border-[#333333] px-4">
              <h4 className="text-2xl font-light">2. Doubly Linked List</h4>
              <p className="text-base font-light mt-4 w-[84%] text-gray-300">
                A doubly linked list allows traversal in both directions, as each
                node contains pointers to both the previous and next nodes.
              </p>
            </div>
            <div className="border-l border-[#333333] px-4">
              <h4 className="text-2xl font-light">3. Circular Linked List</h4>
              <p className="text-base font-light mt-4 w-[84%] text-gray-300">
                In a circular linked list, the last node points back to the first,
                forming a loop.
              </p>
            </div>
          </div>
        </div>
  
        <div className="mt-10 border-l border-[#333333] px-4">
          <h3 className="text-3xl font-light">Operations on Linked List</h3>
          <ul className="mt-2 text-lg font-light px-8 list-disc">
            <li>
              <span className="font-semibold">Traversal:</span> Visiting each node
              sequentially.
            </li>
            <li>
              <span className="font-semibold">Insertion:</span> Adding a new node
              at the beginning, end, or a specific position.
            </li>
            <li>
              <span className="font-semibold">Deletion:</span> Removing a node
              from the beginning, end, or a specific position.
            </li>
            <li>
              <span className="font-semibold">Searching:</span> Locating a
              specific value within the list.
            </li>
          </ul>
        </div>
  
        <div className="mt-10 border-l border-[#333333] px-4">
          <h3 className="text-3xl font-light">Memory Representation</h3>
          <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
            In a linked list, nodes are stored in non-contiguous memory locations.
            Each node is dynamically allocated and contains a pointer to the next
            node.
          </p>
          <div className="w-[30rem] mt-8 mx-auto">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20200922123429/Singly-Linkedlist.png"
              alt="Linked List Representation"
            />
          </div>
        </div>
  
        
      </div>
    );
  };
  
  export default LinkedList;