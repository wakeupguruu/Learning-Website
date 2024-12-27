import React from "react";

const Greedy = () => {
    return (
        <div className="w-full min-h-screen font-ComicNeue bg-lBackground text-lWhite px-8 py-6">
            <h2 className="text-[47px] tracking-tight leading-[53px]">Greedy Algorithm</h2>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">What is the Greedy Algorithm?</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    The Greedy Algorithm is a problem-solving paradigm where decisions are made step-by-step, choosing the option 
                    that looks most optimal at the current step. The hope is that these locally optimal solutions lead to a globally 
                    optimal solution.
                </p>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    This algorithm is particularly useful for problems where local optimization yields a global solution. Examples 
                    include scheduling, optimization, and some graph-related problems.
                </p>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Properties of a Greedy Algorithm</h3>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        **Greedy Choice Property:** A global solution can be arrived at by choosing the best local option.
                    </li>
                    <li>
                        **Optimal Substructure:** A problem has an optimal substructure if an optimal solution can be 
                        constructed efficiently from optimal solutions of its subproblems.
                    </li>
                </ul>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Common Problems Solved Using Greedy Algorithm</h3>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        **Activity Selection Problem:** Choosing the maximum number of activities that don’t overlap.
                    </li>
                    <li>
                        **Huffman Encoding:** Compressing data using variable-length encoding.
                    </li>
                    <li>
                        **Dijkstra’s Algorithm:** Finding the shortest path in a graph.
                    </li>
                    <li>
                        **Fractional Knapsack:** Maximizing the total value of items in a fractional knapsack.
                    </li>
                </ul>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Activity Selection Problem</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    The activity selection problem involves selecting the maximum number of activities that can be performed by 
                    a single person, assuming that a person can only work on a single activity at a time.
                </p>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    To solve this, we sort activities by their end times and iteratively select activities that start after 
                    the previous one finishes.
                </p>
                <div className="bg-[#4d4e50] text-white p-4 rounded-lg shadow-lg font-mono text-sm max-w-full overflow-auto">
                    <pre className="whitespace-pre-wrap">
{`function activitySelection(activities) {
    activities.sort((a, b) => a.end - b.end);
    const selected = [];
    let lastEnd = 0;

    for (const activity of activities) {
        if (activity.start >= lastEnd) {
            selected.push(activity);
            lastEnd = activity.end;
        }
    }

    return selected;
}`}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default Greedy;
