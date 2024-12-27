import CodeBlock from "../utils/CodeBlock"

const Array = () => {

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
            <div className="w-full min-h-screen  font-ComicNeue bg-lBackground px-8 py-6 text-lWhite">




                <h2 className="text-[47px] tracking-tight leading-[53px] ">Array</h2>
                <div className="mt-10 border-l border-[#333333] px-4">
                    <h3 className="text-3xl font-light">Array: What is Array?</h3>
                    <p className="text-lg font-light mt-4 w-[84%] text-gray-300">Array is a collection of items of the same variable type that are stored at contiguous memory locations. It is one of the most popular and simple data structures used in programming</p>

                    <h4 className="text-lg font-light mt-4 w-[84%] text-gray-300">Below are some examples of strings:</h4>

                    <div className="bg-[#85878e] text-white p-4 rounded-lg shadow-lg font-mono text-sm max-w-full overflow-auto">

                        <pre className="whitespace-pre-wrap">
                            “geeks” , “for”, “geeks”, “GeeksforGeeks”, “Geeks for Geeks”, “123Geeks”, “@123 Geeks”
                        </pre>
                    </div>
                </div>
                <div className="mt-10 border-l border-[#333333] px-4">
                    <h3 className="text-3xl font-light">Array: Basic terminologies</h3>
                    <p className="text-lg font-light mt-4 w-[84%] text-gray-300">Array is a collection of items of the same variable type that are stored at contiguous memory locations. It is one of the most popular and simple data structures used in programming</p>

                    <h3 className="text-2xl font-light">Declaration of Array</h3>
                    {/* <div className="px-4 py-4 h-[40vh]">
                        <CodeBlock code={codeString} />
                    </div> */}

                </div>

                <div className="mt-20 border-l border-[#333333] px-4">
                    <h3 className="text-3xl font-light">String: How Array is represented in Memory?</h3>
                    <p className="text-lg font-light mt-4 w-[84%] text-gray-300">In an array, all the elements are stored in contiguous memory locations. So, if we initialize an array, the elements will be allocated sequentially in memory. This allows for efficient access and manipulation of elements.</p>

                    <h4 className="text-lg font-light mt-4 w-[84%] text-gray-300">Below are some examples of strings:</h4>


                </div>
                <div className="w-96 h-96 overflow-hidden mx-auto">
                    <img className="" src="https://media.geeksforgeeks.org/wp-content/uploads/20240405101013/Memory-Representation-of-Array-(1).webp" alt="" />
                </div>


                <div className="mt-20  px-4">
                    <h3 className="text-4xl font-light">Types of Arrays on the basis of Dimensions:</h3>

                    <div className="grid grid-cols-3 grid-rows-1 px-4 py-10">

                        <div className="border-l border-[#333333] px-4 mb-12">
                            <div className="h-36">
                                <h3 className="text-3xl font-light">1. One-dimensional Array:</h3>

                                <p className="text-base font-light mt-10 w-[84%] text-gray-300">You can imagine a 1d array as a row, where elements are stored one after another.</p>

                            </div>
                            <div className="w-96 mb-6 mt-16 overflow-hidden mx-auto">
                                <img className="" src="https://media.geeksforgeeks.org/wp-content/uploads/20240405101013/Memory-Representation-of-Array-(1).webp" alt="" />
                            </div>

                        </div>
                        <div className="border-l border-[#333333] px-4 mb-12">
                            <div className="h-36">

                                <h3 className="text-3xl font-light">2. Two-dimensional Array:</h3>

                                <p className="text-base font-light mt-10 w-[84%] text-gray-300">2-D Multidimensional arrays can be considered as an array of arrays or as a matrix consisting of rows and columns.</p>
                            </div>

                            <div className="w-96 mb-6 mt-16 overflow-hidden mx-auto">
                                <img className="" src="https://media.geeksforgeeks.org/wp-content/uploads/20240408165401/Two-Dimensional-Array(2-D-Array-or-Matrix).webp" alt="" />
                            </div>

                        </div>



                        <div className="border-l border-[#333333] px-4 mb-12">
                            <div className="h-36">


                                <h3 className="text-3xl font-light">3. Multi-dimensional Array:</h3>

                                <p className="text-base font-light mt-10 w-[84%] text-gray-300">A multi-dimensional array is an array with more than one dimension. We can use multidimensional array to store complex data in the form of tables, etc. We can have 2-D arrays, 3-D arrays, 4-D arrays and so on.</p>
                            </div>
                            <div className="w-96 mb-6 mt-16 overflow-hidden mx-auto ">
                                <img className="" src="https://media.geeksforgeeks.org/wp-content/uploads/20240408165421/Three-Dimensional-Array(3-D-Array).webp" alt="" />
                            </div>

                        </div>



                    </div>

                </div>


                <div className="mt-20  px-4">
                    <h3 className="text-4xl font-light">General Operations performed on String:</h3>

                    <div className="grid grid-cols-2 grid-rows-2 px-4 py-10">
                        <div className="border-l border-[#333333] px-4 mb-12">
                            <h3 className="text-3xl font-light">1. Array Traversal:</h3>

                            <p className="text-base font-light mt-4 w-[84%] text-gray-300">Array traversal involves visiting all the elements of the array once. Below is the implementation of Array traversal in different Languages:</p>

                        </div>

                        <div className="border-l border-[#333333] px-4 mb-12">
                            <h3 className="text-3xl font-light">2. Insertion in Array:</h3>

                            <p className="text-base font-light mt-4 w-[84%] text-gray-300">We can insert one or multiple elements at any position in the array. Below is the implementation of Insertion in Array in different languages:</p>

                            
                        </div>

                        <div className="border-l border-[#333333] px-4 mb-12">
                            <h3 className="text-3xl font-light">3. Deletion in Array:</h3>

                            <p className="text-base font-light mt-4 w-[84%] text-gray-300">We can delete an element at any index in an array. Below is the implementation of Deletion of element in an array:</p>

                        </div>

                        <div className="border-l border-[#333333] px-4 mb-12">
                            <h3 className="text-3xl font-light">4. Searching in Array:</h3>

                            <p className="text-base font-light mt-4 w-[84%] text-gray-300">We can traverse over an array and search for an element. Below is the implementation of Searching of element in an array:</p>

                        </div>

                      
                    </div>

                </div>



            </div>
        </>
    )
}
export default Array