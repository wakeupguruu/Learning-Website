import React from "react";

const BitManipulation = () => {
    return (
        <div className="w-full min-h-screen font-ComicNeue bg-lBackground text-lWhite px-8 py-6">
            <h2 className="text-[47px] tracking-tight leading-[53px]">Bit Manipulation</h2>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">What is Bit Manipulation?</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    Bit Manipulation is the process of performing operations on binary representations of numbers. 
                    It involves directly working with bits using bitwise operators such as AND, OR, XOR, NOT, left shift, and right shift.
                </p>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    Bit manipulation is highly efficient and often used in scenarios requiring low-level operations, 
                    optimization, or direct hardware communication.
                </p>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Common Bitwise Operators</h3>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        **AND (`&`):** Compares each bit of two numbers and returns `1` if both bits are `1`.
                    </li>
                    <li>
                        **OR (`|`):** Compares each bit of two numbers and returns `1` if at least one bit is `1`.
                    </li>
                    <li>
                        **XOR (`^`):** Compares each bit of two numbers and returns `1` if the bits are different.
                    </li>
                    <li>
                        **NOT (`~`):** Flips all bits of the number.
                    </li>
                    <li>
                        **Left Shift ({`<<`}):** Shifts bits to the left by a specified number of positions.
                    </li>
                    <li>
                        **Right Shift ({`>>`}):** Shifts bits to the right by a specified number of positions.
                    </li>
                </ul>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Applications of Bit Manipulation</h3>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        **Checking Odd or Even:** Determine if a number is odd or even using `n & 1`.
                    </li>
                    <li>
                        **Swapping Numbers:** Swap two numbers without using a temporary variable.
                    </li>
                    <li>
                        **Finding Unique Numbers:** Solve problems where every number appears twice except one.
                    </li>
                    <li>
                        **Efficient Calculations:** Speed up multiplications or divisions by powers of 2 using bit shifts.
                    </li>
                </ul>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Example Problem: Find the Single Number</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    Given an array of integers where every element appears twice except for one, find that single number. 
                    We can use the XOR operation to solve this efficiently, as `x ^ x = 0` and `x ^ 0 = x`.
                </p>
                <div className="bg-[#4d4e50] text-white p-4 rounded-lg shadow-lg font-mono text-sm max-w-full overflow-auto">
                    <pre className="whitespace-pre-wrap">
{`function findSingleNumber(nums) {
    let result = 0;
    for (const num of nums) {
        result ^= num;
    }
    return result;
}`}
                    </pre>
                </div>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Advanced Topics in Bit Manipulation</h3>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        **Bitmasking:** Represent subsets or states using binary numbers for problems involving constraints.
                    </li>
                    <li>
                        **Hamming Distance:** Count differing bits between two integers.
                    </li>
                    <li>
                        **Gray Code:** Generate sequences where consecutive numbers differ by only one bit.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BitManipulation;
