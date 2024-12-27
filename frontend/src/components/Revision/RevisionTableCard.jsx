

import React, { useState,useContext } from 'react';
import RevisionTable from './RevisionTable';
import Dropdown from '../utils/Dropdown';
import DropdownTopic from '../utils/DropdownTopic';
import { FiSearch } from 'react-icons/fi';
import { ProblemContext } from '../../context/useProblemContext';


const RevisionTableCard = ({ handelNoteClick, handelSolClick}) => {
    const [activeTab, setActiveTab] = useState('details'); // Set initial tab here
    let { problems } = useContext(ProblemContext);
 

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
        },
        {
            title: 'Difficulty',
            items: [
                { label: 'All', href: '#' },
                { label: 'Easy', href: '#' },
                { label: 'Medium', href: '#' },
                { label: 'Hard', href: '#' },
            ],
        },
        {
            title: 'Status',
            items: [
                { label: 'All', href: '#' },
                { label: 'Incomplete', href: '#' },
                { label: 'Complete', href: '#' },
            ],
        },
    ];

    const [difficulty, setDifficulty] = useState('All')
    const [status, setStatus] = useState('All')
   

    if(difficulty === 'All'){
        problems = problems.filter(problem => problem.difficulty_level)
    } else {
        problems = problems.filter(problem => problem.difficulty_level === difficulty)
    }


    if (status === 'Incomplete'){
        problems = problems.filter(problem => problem.completed === false)
    } else if (status === 'Complete'){
        problems = problems.filter(problem => problem.completed === true)
    } else {
        problems = problems
    }


    return (
        <div className="Tablecard mb-8">
            <div className="top-section">
                <div className="borderr"></div>



                {activeTab == 'details' &&
                    <>

                        <div className="heading absolute top-1 left-4">
                            <h3 className='text-xl text-lWhite'>Questions</h3>
                        </div>
                        <div className="no-scrollbar w-full h-[90vh] overflow-y-auto px-9 py-8 text-lWhite">

                            <div className="flex items-center justify-between gap-14">
                                {dropdownData.map((dropdown, index) => (
                                    dropdown.title === 'Topic' &&  (
                                        <DropdownTopic key={index} options={dropdown.items}  />
                                    )     
                                ))}
                                {dropdownData.map((dropdown, index) => (
                                    dropdown.title === 'Difficulty' &&  (
                                        <Dropdown key={index} title={dropdown.title} items={dropdown.items} setDiSt={setDifficulty} />
                                    )     
                                ))}
                                {dropdownData.map((dropdown, index) => (
                                    dropdown.title === 'Status' &&  (
                                        <Dropdown key={index} title={dropdown.title} items={dropdown.items} setDiSt={setStatus}/>
                                    )     
                                ))}

                                {/* <div className="relative w-full max-w-xs">

                                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-DGray-200" />


                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="bg-[#F1F2F6] text-[#1D1A1D] rounded-3xl pl-10 pr-4 py-1.5 focus:outline-none focus:ring-1 focus:ring-DGray-200 placeholder-DGray-200"
                                    />
                                </div> */}
                            </div>

                            <RevisionTable   handelNoteClick={handelNoteClick} handelSolClick={handelSolClick}
                            problems={problems} difficulty={difficulty}/>
                        </div>
                    </>
                }

            </div>

        </div>
    );
};

export default RevisionTableCard;
