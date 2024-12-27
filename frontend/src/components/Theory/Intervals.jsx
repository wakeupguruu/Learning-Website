import React from "react";

const Intervals = () => {
    return (
        <div className="w-full min-h-screen font-ComicNeue bg-lBackground text-lWhite px-8 py-6">
            <h2 className="text-[47px] tracking-tight leading-[53px]">Intervals</h2>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">What are Intervals?</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    In mathematics and computer science, **intervals** represent ranges of numbers, typically bounded by a start and end value. 
                    Intervals are extensively used in algorithms involving scheduling, merging overlapping intervals, and determining the maximum intervals 
                    that can coexist without overlap.
                </p>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    Intervals can either be inclusive (including the boundary values) or exclusive (excluding the boundary values). For example:
                </p>
                <div className="bg-[#4d4e50] text-white p-4 rounded-lg shadow-lg font-mono text-sm max-w-full overflow-auto">
                    <pre className="whitespace-pre-wrap">
                        Inclusive: [1, 5] → Includes 1 and 5<br />
                        Exclusive: (1, 5) → Excludes 1 and 5<br />
                        Mixed: [1, 5) → Includes 1 but excludes 5
                    </pre>
                </div>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Key Operations with Intervals</h3>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        **Merging Intervals:** Combining overlapping intervals into a single interval.
                    </li>
                    <li>
                        **Intersection of Intervals:** Finding common ranges between two or more intervals.
                    </li>
                    <li>
                        **Union of Intervals:** Creating a set that includes all the ranges of given intervals.
                    </li>
                    <li>
                        **Difference of Intervals:** Removing overlapping portions of intervals.
                    </li>
                </ul>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Merging Overlapping Intervals</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    One of the most common problems involving intervals is merging overlapping intervals. 
                    For example, if given intervals are [[1,3], [2,6], [8,10], [15,18]], the merged intervals would be [[1,6], [8,10], [15,18]].
                </p>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    This is achieved by sorting intervals by their start times and merging intervals as we traverse through them.
                </p>
                <div className="bg-[#4d4e50] text-white p-4 rounded-lg shadow-lg font-mono text-sm max-w-full overflow-auto">
                    <pre className="whitespace-pre-wrap">
{`function mergeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [];
    for (const [start, end] of intervals) {
        if (!merged.length || merged[merged.length - 1][1] < start) {
            merged.push([start, end]);
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], end);
        }
    }
    return merged;
}`}
                    </pre>
                </div>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Applications of Intervals</h3>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        **Meeting Scheduling:** Determining the maximum number of meetings that can be scheduled in non-overlapping intervals.
                    </li>
                    <li>
                        **Resource Allocation:** Allocating resources based on time intervals.
                    </li>
                    <li>
                        **Genomic Data Analysis:** Identifying overlaps in DNA sequencing.
                    </li>
                    <li>
                        **Computer Graphics:** Handling ranges for graphical operations.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Intervals;
