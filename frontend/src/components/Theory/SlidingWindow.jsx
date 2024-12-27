const SlidingWindow = () => {
    return (
        <>
            <div className="w-full min-h-screen  font-ComicNeue bg-lBackground text-lWhite px-8 py-6">




                <h2 className="text-[47px] tracking-tight leading-[53px] ">Sliding Window
                </h2>
                <div className="mt-10 border-l border-[#333333] px-4">
                    <h3 className="text-3xl font-light">What is Sliding Window Technique?</h3>
                    <p className="text-lg font-light mt-4 w-[84%] text-gray-300">Sliding Window Technique is a method used to efficiently solve problems that involve defining a window or range in the input data (arrays or strings) and then moving that window across the data to perform some operation within the window. This technique is commonly used in algorithms like finding subarrays with a specific sum, finding the longest substring with unique characters, or solving problems that require a fixed-size window to process elements efficiently.</p>

                    <p className="text-lg font-light mt-4 w-[84%] text-gray-300">Let's take an example to understand this properly, say we have an array of size N and also an integer K. Now, we have to calculate the maximum sum of a subarray having size exactly K. Now how should we approach this problem?
                        <br /><br />
                        One way to do this by taking each subarray of size K from the array and find out the maximum sum of these subarrays. This can be done using Nested loops which will result into O(N2) Time Complexity.
                    </p>

                    <h4 className="text-lg font-semibold mt-4 w-[84%] text-gray-300">But can we optimize this approach?</h4>

                    <p className="text-lg font-light mt-4 w-[84%] text-gray-300">The answer is Yes, instead of taking each K sized subarray and calculating its sum, we can just take one K size subarray from 0 to K-1 index and calculate its sum now shift our range one by one along with the iterations and update the result, like in next iteration increase the left and right pointer and update the previous sum as shown in the below image:
                    </p>

                    <div className="w-[30rem] mt-8 overflow-hidden mx-20">
                        <img className="" src="https://media.geeksforgeeks.org/wp-content/uploads/20240306112433/sliding-window-1.webp" alt="" />
                    </div>

                    <h5 className="text-lg font-light mt-4 w-[84%] text-gray-300">Now follow this method for each iteration till we reach the end of the array:
                    </h5>

                    <div className="w-[30rem] mt-8 overflow-hidden mx-20">
                        <img className="" src="https://media.geeksforgeeks.org/wp-content/uploads/20240306112450/sliding-window-technique-2.webp" alt="" />
                    </div>

                    <p className="text-lg font-light mt-4 w-[84%] text-gray-300">So, we can see that instead of recalculating the sum of each K sized subarray we are using previous window of size K and using its results we update the sum and shift the window right by moving left and right pointers, this operation is optimal because it take O(1) time to shift the range instead of recalculating.
                    </p>

                    <h5 className="text-lg font-light mt-4 w-[84%] text-gray-300">This approach of shifting the pointers and calculating the results accordingly is known as Sliding window Technique.
                    </h5>

                </div>
            

                <div className="mt-20  px-4">
                    <h3 className="text-4xl font-light">How to use Sliding Window Technique?</h3>

                            <h4 className="text-base font-semibold mt-4 w-[84%] text-gray-300">There are basically two types of sliding window:</h4>

                    <div className="grid grid-cols-2 grid-rows-1 px-4">
                        <div className="border-l border-[#333333] px-4 ">
                            <h3 className="text-3xl font-light">1. Fixed Size Sliding Window:</h3>

                            <p className="text-base font-light mt-4 w-[84%] text-gray-300">The general steps to solve these questions by following below steps:</p>

                            <ul className="mt-2 text-lg font-light px-8 list-disc">
                                <li>Find the size of the window required, say K.</li>
                                <li>Compute the result for 1st window, i.e. include the first K elements of the data structure.</li>
                                <li>Then use a loop to slide the window by 1 and keep computing the result window by window.</li>
                            </ul>

                        </div>
                        <div className="border-l border-[#333333] px-4 ">
                            <h3 className="text-3xl font-light">2. Variable Size Sliding Window:</h3>

                            <p className="text-base font-light mt-4 w-[84%] text-gray-300">The general steps to solve these questions by following below steps:</p>

                            <ul className="mt-2 text-lg font-light px-8 list-disc">
                                <li>In this type of sliding window problem, we increase our right pointer one by one till our condition is true.</li>
                                <li>At any step if our condition does not match, we shrink the size of our window by increasing left pointer.</li>
                                <li>Again, when our condition satisfies, we start increasing the right pointer and follow step 1.</li>
                                <li>We follow these steps until we reach to the end of the array.</li>
                            </ul>

                        </div>



                    </div>

                </div>

                <div className=" mt-10 border-l border-[#333333] px-4">
                    <h3 className="text-3xl font-light">How to Identify Sliding Window Problems:</h3>
                    
                    <ul className="mt-2 text-lg font-light px-8 list-disc">
                                <li>These problems generally require Finding Maximum/Minimum Subarray, Substrings which satisfy some specific condition.</li>
                                <li>The size of the subarray or substring 'K' will be given in some of the problems.</li>
                                <li>These problems can easily be solved in O(N2) time complexity using nested loops, using sliding window we can solve these in O(n) Time Complexity.</li>
                                <li><span className="font-semibold" >Required Time Complexity: </span> O(N) or O(Nlog(N))</li>
                                <li><span className="font-semibold" >Constraints: </span>N {'<'}= 106 , If N is the size of the Array/String.</li>
                            </ul>

                </div>
            
           

            </div>
        </>
    )
}
export default SlidingWindow