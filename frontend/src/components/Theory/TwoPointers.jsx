import CodeBlock from "../utils/CodeBlock"

const TwoPointers = () => {


    return (
        <>
            <div className="w-full min-h-screen  font-ComicNeue bg-lBackground text-lWhite px-8 py-6">




                <h2 className="text-[47px] tracking-tight leading-[53px] ">Two-Pointer
                </h2>
                <div className="mt-10 border-l border-[#333333] px-4">
                    <h3 className="text-3xl font-light">What is Two-Pointer?</h3>
                    <p className="text-lg font-light mt-4 w-[84%] text-gray-300">The two-pointer approach is a powerful algorithmic technique used to solve a variety of problems efficiently. By leveraging two pointers that traverse an array or sequence from different positions, this approach offers a way to solve problems that involve searching, manipulation, or optimization. In this article, we will explore the two-pointer approach, its applications, and when it is most effective.</p>


                </div>
                <div className="mt-10 border-l border-[#333333] px-4">
                    <h3 className="text-3xl font-light">Understanding the Two-Pointer Approach:</h3>
                    <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                        The two-pointer approach involves using two pointers (indices or references) to traverse an array or sequence. The pointers typically move at different speeds or in different directions, allowing for efficient traversal and comparison. This technique is widely used in array-related problems, and it is often combined with sorting or searching algorithms.
                    </p>


                </div>




                <div className="mt-20  px-4">
                    <h3 className="text-4xl font-light">An Overview of Two-Pointer Problems:</h3>

                    <div className="grid grid-cols-3 grid-rows-1 px-4 py-10">

                        <div className="border-l border-[#333333] px-4 mb-12">
                            <h3 className="text-3xl font-light">1. Searching and Optimization Problems</h3>

                            <p className="text-base font-light mt-10 w-[84%] text-gray-300">The two-pointer approach is often employed in problems that involve searching for a specific element or optimizing a particular condition within an array. For example, finding pairs of elements that sum up to a target value, finding subarrays with a specific property, or optimizing a solution within a given constraint.</p>

                        </div>
                        <div className="border-l border-[#333333] px-4 mb-12">

                            <h3 className="text-3xl font-light">2. Sorting and Manipulation Problems</h3>

                            <p className="text-base font-light mt-10 w-[84%] text-gray-300">In sorting and manipulation problems, the two-pointer approach can be used to reorganize elements within an array, perform swaps, or modify the array based on specific conditions. These problems frequently involve a combination of pointers moving in different directions to rearrange or modify the array efficiently.</p>

                        </div>



                        <div className="border-l border-[#333333] px-4 mb-12">


                            <h3 className="text-3xl font-light">3. Intersection and Merge Problems</h3>

                            <p className="text-base font-light mt-10 w-[84%] text-gray-300">The two-pointer technique is particularly useful when dealing with two arrays or sequences and finding their intersection, merging the elements, or comparing the differences between them. This approach is often applied in problems where two sets of elements need to be compared and combined.</p>


                        </div>



                    </div>

                </div>

                <div className="mt-20 border-l border-[#333333] px-4">
                    <h3 className="text-3xl font-light">How to use the two pointer technique?</h3>

                    <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                        Before we begin, keep in mind that pointers in this technique represent either an index or an iteration attribute, such as the node's next.
                        <br />
                        Let's get started with a few of the most famous examples, which can be solved optimally using the two pointer technique:[i].

                    </p>

                    <div className=" mt-4">
                        <h4 className="text-lg w-[84%] text-gray-300">
                            <span className="font-semibold">Example 1: </span>Given a sorted array A ( sorted in ascending order ) and an integer target,find if there exists 2 integers A[i] and A[j] such that A[i] + A[j] = target, where i!=j.
                        </h4>
                        <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                            For a given array A, suppose the target value=6 : [1,2,3,4,6]
                        </p>
                    </div>

                    <div className="solution mt-4">
                        <h4 className="text-lg w-[84%] text-gray-300">
                            <span className="font-semibold">Solution: </span>
                        </h4>

                        <div className="mt-4 px-4 pb-5">
                            <p className="text-lg font-light w-[84%] text-gray-300">
                                Let's initialise two variables, pointer1 and pointer2, and consider them as our two pointers.
                            </p>

                            <ul className="mt-2 text-lg font-light px-8 list-disc">
                                <li>Set pointer1 to 0 index and pointer2 to len(A)-1</li>
                                <li>These correspond to the smallest and greatest integers, respectively, because the array is sorted.</li>
                                <li>Compute the sum of the two numbers pointed to at each step.</li>
                            </ul>
                            <p className="text-lg font-light mt-3 w-[84%] text-gray-300">
                                If the sum is greater than the target, we need to reduce the estimate by moving the right pointer, i.e. pointer2, to the left.
                            </p>

                            <div className="w-96 mt-8 overflow-hidden mx-20">
                                <img className="" src="https://files.codingninjas.in/article_images/what-is-a-two-pointer-technique-2-1661194233.webp" alt="" />
                            </div>

                            <p className="text-lg font-light mt-3 w-[84%] text-gray-300">
                                On the other hand, if the sum is less than the target, we need to increase the estimate by moving the left pointer, i.e. pointer1, to the right.
                            </p>

                            <div className="w-96 mt-8 overflow-hidden mx-20">
                                <img className="" src="https://files.codingninjas.in/article_images/what-is-a-two-pointer-technique-3-1661194234.webp" alt="" />
                            </div>

                            <p className="text-lg font-light mt-3 w-[84%] text-gray-300">
                                And how will it benefit?  The array is sorted, so as the index increases, the value on that index will also increase. Thus, this brings the estimate closer to the target value.
                                <br /><br />
                                We can break and return the answer if a solution is found. If there is no answer, the left and right pointers will finally point to the same number, indicating that all possibilities have been exhausted.
                            </p>

                            <div className="w-96 mt-8 overflow-hidden mx-20">
                                <img className="" src="https://files.codingninjas.in/article_images/what-is-a-two-pointer-technique-4-1661194234.webp" alt="" />
                            </div>

                            <p className="text-lg font-light mt-3 w-[84%] text-gray-300">
                              The fact that the list was sorted is why we are confident that we've explored all of the possibilities in linear runtime O(N).
                            </p>
                        </div>

                    </div>


                </div>



            </div>
        </>
    )
}
export default TwoPointers