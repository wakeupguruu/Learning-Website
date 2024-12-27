import CodeBlock from "../utils/CodeBlock"

const Stack = () => {

    const codeString = `
// This array will store integer type element
int arr[5];      

// This array will store char type element
char arr[10];   

// This array will store float type element
float arr[20];     
    `

    return (
        <>
            <div className="w-full min-h-screen  font-ComicNeue bg-lBackground text-lWhite px-8 py-6">




                <h2 className="text-[47px] tracking-tight leading-[53px] ">Stack
                </h2>
                <div className="mt-10 border-l border-[#333333] px-4">
                    <h3 className="text-3xl font-light">What is Stack Data Structure?</h3>
                    <p className="text-lg font-light mt-4 w-[84%] text-gray-300">Stack is a linear data structure based on LIFO(Last In First Out) principle in which the insertion of a new element and removal of an existing element takes place at the same end represented as the top of the stack.
                        <br /><br />
                        To implement the stack, it is required to maintain the pointer to the top of the stack , which is the last element to be inserted because we can access the elements only on the top of the stack.</p>

                </div>
                <div className="mt-10 border-l border-[#333333] px-4">
                    <h3 className="text-3xl font-light">LIFO(Last In First Out) Principle in Stack Data Structure:</h3>
                    <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                        This strategy states that the element that is inserted last will come out first. You can take a pile of plates kept on top of each other as a real-life example. The plate which we put last is on the top and since we remove the plate that is at the top, we can say that the plate that was put last comes out first.
                    </p>


                </div>

                <div className="mt-10 border-l border-[#333333] px-4 py-4">
                    <h3 className="text-3xl font-light">Representation of Stack Data Structure:</h3>
                    <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                        Stack follows LIFO (Last In First Out) Principle so the element which is pushed last is popped first.
                    </p>

                    <div className="w-96 mt-8 overflow-hidden mx-20">
                        <img className="" src="https://media.geeksforgeeks.org/wp-content/uploads/20240606180735/Stack-representation-in-Data-Structures-(1).webp" alt="" />
                    </div>

                </div>

                <div className="mt-20  px-4">
                    <h3 className="text-4xl font-light">Types of Stack Data Structure:</h3>

                    <div className="grid grid-cols-2 grid-rows-2 px-4 py-10">
                        <div className="border-l border-[#333333] px-4 mb-2">
                            <h3 className="text-3xl font-light">1. Fixed Size Stack:</h3>

                            <p className="text-base font-light mt-4 w-[84%] text-gray-300">As the name suggests, a fixed size stack has a fixed size and cannot grow or shrink dynamically. If the stack is full and an attempt is made to add an element to it, an overflow error occurs. If the stack is empty and an attempt is made to remove an element from it, an underflow error occurs.</p>

                        </div>
                        <div className="border-l border-[#333333] px-4 mb-2">
                            <h3 className="text-3xl font-light">2. Dynamic Size Stack:</h3>

                            <p className="text-base font-light mt-4 w-[84%] text-gray-300">A dynamic size stack can grow or shrink dynamically. When the stack is full, it automatically increases its size to accommodate the new element, and when the stack is empty, it decreases its size. This type of stack is implemented using a linked list, as it allows for easy resizing of the stack.</p>

                        </div>

                       
                      
                    </div>

                </div>


                <div className="px-4">
                    <h3 className="text-4xl font-light">Basic Operations on Stack Data Structure:</h3>

                    <div className="grid grid-cols-2 grid-rows-2 px-4 py-10">
                        <div className="border-l border-[#333333] px-4 mb-12">
                            <h3 className="text-3xl font-light">1. Push Operation in Stack:</h3>

                            <p className="text-base font-light mt-4 w-[84%] text-gray-300">Adds an item to the stack. If the stack is full, then it is said to be an Overflow condition.</p>

                        </div>

                        <div className="border-l border-[#333333] px-4 mb-12">
                            <h3 className="text-3xl font-light">2. Pop Operation in Stack:</h3>

                            <p className="text-base font-light mt-4 w-[84%] text-gray-300">Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition.</p>

                            
                        </div>

                        <div className="border-l border-[#333333] px-4 mb-12">
                            <h3 className="text-3xl font-light">3. Top or Peek Operation in Stack:</h3>

                            <p className="text-base font-light mt-4 w-[84%] text-gray-300">Returns the top element of the stack.</p>

                        </div>

                        <div className="border-l border-[#333333] px-4 mb-12">
                            <h3 className="text-3xl font-light">4. isEmpty Operation in Stack :</h3>

                            <p className="text-base font-light mt-4 w-[84%] text-gray-300">Returns true if the stack is empty, else false.</p>

                        </div>

                      
                        <div className="border-l border-[#333333] px-4 mb-12">
                            <h3 className="text-3xl font-light">5. isFull Operation in Stack :</h3>

                            <p className="text-base font-light mt-4 w-[84%] text-gray-300">Returns true if the stack is full, else false.</p>

                        </div>

                      
                    </div>

                </div>



            </div>
        </>
    )
}
export default Stack