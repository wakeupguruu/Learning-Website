


import React, { useState, useContext } from 'react';
import './TableCardstyle.css';
import ProblemTable from './ProblemTable';
import Dropdown from '../utils/Dropdown';
import DropdownTopic from '../utils/DropdownTopic';
import { FiSearch } from 'react-icons/fi';
import { ProblemContext } from '../../context/useProblemContext';

const TableCard = ({ handelNoteClick, handelSolClick }) => {
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

    const [difficulty, setDifficulty] = useState('All');
    const [status, setStatus] = useState('All');

    if (difficulty !== 'All') {
        problems = problems.filter(problem => problem.difficulty_level === difficulty);
    }

    if (status === 'Incomplete') {
        problems = problems.filter(problem => !problem.completed);
    } else if (status === 'Complete') {
        problems = problems.filter(problem => problem.completed);
    }

    return (
        <div className="Tablecard mb-8 sm:mb-4 sm:w-full md:w-[68%]">
            <div className="top-section">
                <div className="borderr"></div>
                {activeTab === 'details' && (
                    <>
                        <div className="heading absolute top-1 left-4">
                            <h3 className="text-xl text-lWhite md:text-base sm:text-sm">Questions</h3>
                        </div>
                        <div className="no-scrollbar w-full h-[90vh] sm:h-auto overflow-y-auto px-9 py-8 text-lWhite">
                            <div className="flex flex-wrap items-center justify-between gap-6">
                                {dropdownData.map((dropdown, index) =>
                                    dropdown.title === 'Topic' ? (
                                        <DropdownTopic key={index} options={dropdown.items} />
                                    ) : dropdown.title === 'Difficulty' ? (
                                        <Dropdown
                                            key={index}
                                            title={dropdown.title}
                                            items={dropdown.items}
                                            setDiSt={setDifficulty}
                                        />
                                    ) : dropdown.title === 'Status' ? (
                                        <Dropdown
                                            key={index}
                                            title={dropdown.title}
                                            items={dropdown.items}
                                            setDiSt={setStatus}
                                        />
                                    ) : null
                                )}
                            </div>
                            <ProblemTable
                                handelNoteClick={handelNoteClick}
                                handelSolClick={handelSolClick}
                                problems={problems}
                                difficulty={difficulty}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default TableCard;
