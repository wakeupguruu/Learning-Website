import React from "react";

const Backtracking = () => {
    return (
        <div className="w-full min-h-screen font-ComicNeue bg-lBackground text-lWhite px-8 py-6">
            <h2 className="text-[47px] tracking-tight leading-[53px]">Backtracking</h2>
            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Introduction</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    Backtracking is a general algorithmic technique for solving recursive problems by exploring all possible solutions. 
                    If a solution is found to be invalid, the algorithm backtracks to try a different path.
                </p>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    It is commonly used for problems involving decision trees, such as puzzles, permutations, and combinatorial problems.
                </p>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Key Concepts</h3>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        <strong>Recursive Exploration:</strong> Explore all possible options using recursion.
                    </li>
                    <li>
                        <strong>Backtrack:</strong> Undo the last step if the current solution is invalid.
                    </li>
                    <li>
                        <strong>Pruning:</strong> Stop exploring paths that cannot possibly lead to a solution.
                    </li>
                </ul>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Applications of Backtracking</h3>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        <strong>N-Queens Problem:</strong> Placing N queens on an N×N chessboard so that no two queens threaten each other.
                    </li>
                    <li>
                        <strong>Sudoku Solver:</strong> Filling in a Sudoku grid.
                    </li>
                    <li>
                        <strong>Knapsack Problem:</strong> Optimizing item selection for maximum profit.
                    </li>
                    <li>
                        <strong>Graph Coloring:</strong> Assigning colors to graph vertices.
                    </li>
                </ul>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Example Implementation</h3>
                <div className="bg-[#4d4e50] text-white p-4 rounded-lg shadow-lg font-mono text-sm max-w-full overflow-auto">
                    <pre className="whitespace-pre-wrap">
{`function solveNQueens(n) {
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    const result = [];

    function isSafe(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
            if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
            if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
        }
        return true;
    }

    function backtrack(row = 0) {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (!isSafe(row, col)) continue;
            board[row][col] = 'Q';
            backtrack(row + 1);
            board[row][col] = '.';
        }
    }

    backtrack();
    return result;
}`}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default Backtracking;
