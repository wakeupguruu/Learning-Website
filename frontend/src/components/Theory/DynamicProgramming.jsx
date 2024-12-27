import React from "react";

const DynamicProgramming = () => {
    return (
        <div className="w-full min-h-screen font-ComicNeue bg-lBackground text-lWhite px-8 py-6">
            <h2 className="text-[47px] tracking-tight leading-[53px]">1-D and 2-D Dynamic Programming</h2>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">What is Dynamic Programming?</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    Dynamic Programming (DP) is an optimization technique used to solve problems by breaking them into overlapping 
                    subproblems. The solutions to these subproblems are stored to avoid redundant computations.
                </p>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    DP is particularly useful in solving problems involving decision-making, pathfinding, and optimization.
                </p>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">1-D Dynamic Programming</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    In 1-D DP, the state is represented using a one-dimensional array. Each state depends on previous states in the array.
                    Example problems include Fibonacci sequence, climbing stairs, and coin change.
                </p>
                <div className="bg-[#4d4e50] text-white p-4 rounded-lg shadow-lg font-mono text-sm max-w-full overflow-auto">
                    <pre className="whitespace-pre-wrap">
{`function climbStairs(n) {
    const dp = Array(n + 1).fill(0);
    dp[0] = dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}`}
                    </pre>
                </div>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">2-D Dynamic Programming</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    In 2-D DP, the state is represented using a two-dimensional array. These problems often involve grid-like structures 
                    or relationships between two sequences. Example problems include matrix pathfinding and LCS (Longest Common Subsequence).
                </p>
                <div className="bg-[#4d4e50] text-white p-4 rounded-lg shadow-lg font-mono text-sm max-w-full overflow-auto">
                    <pre className="whitespace-pre-wrap">
{`function uniquePaths(m, n) {
    const dp = Array(m).fill(0).map(() => Array(n).fill(1));
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
}`}
                    </pre>
                </div>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Applications of DP</h3>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        **Pathfinding:** Finding the shortest or optimal path in grids or graphs.
                    </li>
                    <li>
                        **Knapsack Problem:** Optimizing the selection of items for maximum value.
                    </li>
                    <li>
                        **String Matching:** Solving LCS and edit distance problems.
                    </li>
                    <li>
                        **Game Theory:** Evaluating optimal strategies in games.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DynamicProgramming;
