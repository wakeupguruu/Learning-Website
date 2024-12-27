import CodeBlock from "../utils/CodeBlock"

const Hashing = () => {

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




                <h2 className="text-[47px] tracking-tight leading-[53px] ">Hashing
                </h2>
                <div className="mt-10 border-l border-[#333333] px-4">
                    <h3 className="text-3xl font-light">What is Hashing?</h3>
                    <p className="text-lg font-light mt-4 w-[84%] text-gray-300">Hashing in Data Structures refers to the process of transforming a given key to another value. It involves mapping data to a specific index in a hash table using a hash function that enables fast retrieval of information based on its key. The transformation of a key to the corresponding value is done using a Hash Function and the value obtained from the hash function is called Hash Code .</p>

                    <div className="w-[30rem] my-4 overflow-hidden mx-auto">
                        <img className="" src="https://media.geeksforgeeks.org/wp-content/uploads/20240807120551/Introduction-to-Hashing.webp" alt="" />
                    </div>
                </div>
                <div className="mt-10 border-l border-[#333333] px-4">
                    <h3 className="text-3xl font-light">Need for Hash data structure</h3>
                    <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                        Every day, the data on the internet is increasing multifold and it is always a struggle to store this data efficiently. In day-to-day programming, this amount of data might not be that big, but still, it needs to be stored, accessed, and processed easily and efficiently. A very common data structure that is used for such a purpose is the Array data structure.
                        <br /> <br />
                        Now the question arises if Array was already there, what was the need for a new data structure! The answer to this is in the word ” efficiency “. Though storing in Array takes O(1) time, searching in it takes at least O(log n) time. This time appears to be small, but for a large data set, it can cause a lot of problems and this, in turn, makes the Array data structure inefficient.
                        <br /> <br />
                        So now we are looking for a data structure that can store the data and search in it in constant time, i.e. in O(1) time. This is how Hashing data structure came into play. With the introduction of the Hash data structure, it is now possible to easily store data in constant time and retrieve them in constant time as well.
                    </p>


                </div>

                <div className="w-96 h-96 overflow-hidden mx-auto">
                    <img className="" src="https://media.geeksforgeeks.org/wp-content/uploads/20240405101013/Memory-Representation-of-Array-(1).webp" alt="" />
                </div>


                <div className="mt-20  px-4">
                    <h3 className="text-4xl font-light">Components of Hashing</h3>

                    <div className="grid grid-cols-3 grid-rows-1 px-4 py-10">

                        <div className="border-l border-[#333333] px-4 mb-12">
                            <h3 className="text-3xl font-light">1. Key: </h3>

                            <p className="text-base font-light mt-10 w-[84%] text-gray-300">A Key can be anything string or integer which is fed as input in the hash function the technique that determines an index or location for storage of an item in a data structure.</p>

                        </div>
                        <div className="border-l border-[#333333] px-4 mb-12">

                            <h3 className="text-3xl font-light">2. Hash Function: </h3>

                            <p className="text-base font-light mt-10 w-[84%] text-gray-300">The hash function receives the input key and returns the index of an element in an array called a hash table. The index is known as the hash index .</p>

                        </div>



                        <div className="border-l border-[#333333] px-4 mb-12">


                            <h3 className="text-3xl font-light">3. Hash Table:</h3>

                            <p className="text-base font-light mt-10 w-[84%] text-gray-300"> Hash table is a data structure that maps keys to values using a special function called a hash function. Hash stores the data in an associative manner in an array where each data value has its own unique index.</p>


                        </div>



                    </div>

                </div>

                <div className="mt-20 border-l border-[#333333] px-4">
                    <h3 className="text-3xl font-light">What is a Hash function?</h3>
                    <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                        The hash function creates a mapping between key and value, this is done through the use of mathematical formulas known as hash functions. The result of the hash function is referred to as a hash value or hash. The hash value is a representation of the original string of characters but usually smaller than the original.
                        <br /><br />
                        For example: Consider an array as a Map where the key is the index and the value is the value at that index. So for an array A if we have index i which will be treated as the key then we can find the value by simply looking at the value at A[i].

                    </p>

                <div className="mt-4  px-4">
                    <h3 className="text-4xl font-light">Types of Hash functions:</h3>

                    <div className="flex items-start justify-start flex-col px-4 py-6">
                        
                            <h3 className="text-2xl font-light">1. Division Method.</h3>

                        
                            <h3 className="text-2xl font-light">2. Mid Square Method</h3>

                        
                            <h3 className="text-2xl font-light">3. Folding Method.</h3>

                        
                            <h3 className="text-2xl font-light">4. Multiplication Method</h3>

                        
                    </div>

                </div>

                  

                </div>



            </div>
        </>
    )
}
export default Hashing