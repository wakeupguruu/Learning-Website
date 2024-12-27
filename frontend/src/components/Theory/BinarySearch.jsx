const BinarySearch = () => {
    return (
        <>
            <div className="w-full min-h-screen  font-ComicNeue bg-lBackground text-lWhite px-8 pt-6">



                <h2 className="text-[47px] tracking-tight leading-[53px] ">Binary Search
                </h2>
                <div className="mt-10 border-l border-[#333333] px-4">
                    <h3 className="text-3xl font-light">What is Binary Search Algorithm?</h3>
                    <p className="text-lg font-light mt-4 w-[84%] text-gray-300">Binary search is a search algorithm used to find the position of a target value within a sorted array. It works by repeatedly dividing the search interval in half until the target value is found or the interval is empty. The search interval is halved by comparing the target element with the middle value of the search space.</p>

                </div>
                <div className="mt-10 border-l border-[#333333] px-4">
                    <h3 className="text-3xl font-light">Conditions to apply Binary Search Algorithm in a Data Structure:</h3>
                    <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    To apply Binary Search algorithm:
                    </p>

                    <ul className="mt-2 text-lg font-light px-8 list-disc">
                                <li>The data structure must be sorted.</li>
                                <li>Access to any element of the data structure should take constant time.</li>
                            </ul>


                </div>

                <div className="mt-10 border-l border-[#333333] px-4">
                    <h3 className="text-3xl font-light">Binary Search Algorithm:</h3>

                    <ul className="mt-2 text-lg font-light px-8 list-disc">
                                <li>Divide the search space into two halves by finding the middle index “mid”. </li>
                                <li>Compare the middle element of the search space with the key. </li>
                                <li>If the key is found at middle element, the process is terminated.</li>
                                <li>If the key is not found at middle element, choose which half will be used as the next search space.</li>
                                <ul className="mt-2 text-lg font-light px-8 list-decimal">
                                <li>If the key is smaller than the middle element, then the left side is used for next search.</li>
                                <li>If the key is larger than the middle element, then the right side is used for next search.</li>
                            </ul>

                                <li>This process is continued until the key is found or the total search space is exhausted. </li>
                            </ul>


                </div>


                <div className="mt-20  px-4">
                    <h3 className="text-4xl font-light">How to Implement Binary Search Algorithm?</h3>
                    <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    The Binary Search Algorithm can be implemented in the following two ways
                    </p>
                    
                    <div className="grid grid-cols-2 grid-rows-2 px-4 pt-10">
                        <div className="border-l border-[#333333] px-4 ">
                            <h3 className="text-3xl font-light">1. Iterative Binary Search Algorithm:</h3>

                            <p className="text-base font-light mt-4 w-[84%] text-gray-300">Here we use a while loop to continue the process of comparing the key and splitting the search space in two halves.</p>

                        </div>
                        <div className="border-l border-[#333333] px-4 ">
                            <h3 className="text-3xl font-light">2. Recursive Binary Search Algorithm:</h3>

                            <p className="text-base font-light mt-4 w-[84%] text-gray-300">Create a recursive function and compare the mid of the search space with the key. And based on the result either return the index where the key is found or call the recursive function for the next search space.</p>

                        </div>



                    </div>

                </div>


            </div>
        </>
    )
}
export default BinarySearch