import React, { useEffect, useState } from 'react';
import { BsArrowRepeat } from 'react-icons/bs';
import { gsap } from 'gsap';
import DropdownTopic from '../utils/DropdownTopic';
import useGetTopicProgress from '../../hook/useGetTopicProgress';

const ProgressProfileall = () => {

    const [percentage, setPercentage] = useState(0);
     
    const {loading,topicProgress} = useGetTopicProgress();
    

    useEffect(() => {
        const calculatedPercentage = Math.min((topicProgress?.solved_questions / topicProgress?.total_questions) * 100, 100);
        gsap.to('.progress-bar-fill', { width: `${calculatedPercentage}%`, duration: 2, ease: "power2.out" });

        setPercentage(calculatedPercentage);
    }, [topicProgress?.solved_questions,topicProgress?.total_questions]);

   
    const dropdownData = [
        {
            title: 'Topic',
            items: [
                { label: 'Arrays & Hasing' },
                { label: 'Two Pointers' },
                { label: 'Stack' },
                { label: 'Binary Search' },
                { label: 'Sliding Window' },
                { label: 'Linked List' },
                { label: 'Trees' },
                { label: 'Tries' },
                { label: 'Heap / Priority Queue' },
                { label: 'Backtracking' },
                { label: 'Intervals' },
                { label: 'Greedy' },
                { label: 'Graphs' },
                { label: 'Advanced Graphs' },
                { label: '1-D Dynamic Programming' },
                { label: '2-D Dynamic Programming' },
                { label: 'Bit Manipulation' },
                { label: 'Math & Geometry' },
            ],
        }
    ];

    return (
        <div className="flex flex-col items-center space-y-2 text-[#F1F2F6] rounded-lg w-full">
            {/* Dropdown Menu for Topics */}
            {/* <select 
                onChange={handleTopicChange}
                value={selectedTopic.name}
                className="bg-[#111111] text-[#F1F2F6] p-2  rounded-md w-full mb-4"
            >
                {topics.map(topic => (
                    <option key={topic.name} value={topic.name} >
                        {topic.name}
                    </option>
                ))}
            </select> */}

            <div className='w-full mt-2 mb-4'>
                {dropdownData.map((dropdown, index) => (
                    <DropdownTopic key={index} options={dropdown.items}/>
                ))}
            </div>



            {/* Progress Bar */}
            <div className="w-full h-4 bg-[#858282] rounded-full relative ">
                <div
                    className="progress-bar-fill h-full bg-[#111111] rounded-full"
                    style={{ width: `${percentage}%` }}
                ></div>
                <div className="absolute top-0 left-0 h-full text-center flex items-center justify-center font-bold text-xs w-full text-[#F1F2F6]">
                    {Math.round(percentage)}%
                </div>
            </div>

            {/* Additional Info */}
            <div className="flex justify-between w-full text-sm pt-2">
                <div className="flex items-center">
                    <BsArrowRepeat className="mr-1 " />
                    <span>Status: {topicProgress?.solved_questions === topicProgress?.total_questions ? "Complete" : "Incomplete"}</span>
                </div>
                <span>Total: {topicProgress?.total_questions}</span>
            </div>

            {/* Remaining and Solved Info */}
            <div className="flex justify-between w-full text-sm">
                <span>Remaining: {topicProgress?.total_questions - topicProgress?.solved_questions}</span>
                <span>Solved: {topicProgress?.solved_questions}</span>
            </div>
        </div>
    );
};

export default ProgressProfileall;
