// import React, { useContext, useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaYoutube, FaPlus, FaStar } from 'react-icons/fa';
// import { AiOutlineCode } from 'react-icons/ai';
// import { HiDocumentText } from 'react-icons/hi';
// import { ProblemContext } from '../../context/useProblemContext';
// import useGetProblem from '../../hook/useGetProblem';

// function RevisionTable({ handelNoteClick, handelSolClick }) {

//     const {selectProblem} = useContext(ProblemContext)

//     const problems = useGetProblem()

//     const filteredProblems = problems.filter((problem) => problem.revision);

//     const [revisions, setRevisions] = useState(filteredProblems);

//     const handleRevisionClick = (index) => {
//         const newRevisions = [...revisions];
//         newRevisions[index] = !newRevisions[index];
//         setRevisions(newRevisions);
//     };




//     return (
//         <>
//         <motion.div className="rounded-xl overflow-hidden w-full">
//             <div className="text-sm border-b-2 mb-2 border-[#35775d] font-semibold text-gray-500 flex px-4 py-2">
//                 <h2 className="w-[10%] text-center">Status</h2>
//                 <h2 className="w-[30%] text-left">Problem</h2>
//                 <h2 className="w-[10%] text-center">Article</h2>
//                 <h2 className="w-[10%] text-center">Solution</h2>
//                 <h2 className="w-[10%] text-center">Practice</h2>
//                 <h2 className="w-[10%] text-center">Note</h2>
//                 <h2 className="w-[10%] text-center">Difficulty</h2>
//                 <h2 className="w-[10%] text-center">Revision</h2>
//             </div>

//             <div className='w-full'>
//                 {filteredProblems.map((problem, index) => (
//                     <motion.div
//                         key={problem.name}
//                         onClick={() => selectProblem(problem)}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.3, delay: index * 0.05 }}
//                         className="cursor-pointer hover:bg-[#35775d64]  rounded-xl flex items-center px-4 py-2.5 border border-[#5CAB8C] mb-2"
//                     >
//                         <div className="w-[10%] flex items-center justify-center ">
//                             <label
//                                 className="relative flex cursor-pointer items-center rounded-full p-3"
//                                 htmlFor="ripple-on"
//                                 data-ripple-dark="true"
//                             >
//                                 <input type="checkbox" className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-slate-300 checked:bg-[#35775d64] checked:before:bg-[#35775d64] hover:before:opacity-10" />

//                                 <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="h-3.5 w-3.5"
//                                         viewBox="0 0 20 20"
//                                         fill="currentColor"
//                                         stroke="currentColor"
//                                         strokeWidth="1"
//                                     >
//                                         <path
//                                             fillRule="evenodd"
//                                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                                             clipRule="evenodd"
//                                         ></path>
//                                     </svg>
//                                 </span>
//                             </label>

//                         </div>

//                         <div className="w-[30%] text-left whitespace-normal break-words">
//                             {problem.name}
//                         </div>

//                         <div className="w-[10%] flex items-center justify-center">
//                             <HiDocumentText className="text-gray-500" />
//                         </div>

//                         <div className="w-[10%] flex items-center justify-center">
//                             <FaYoutube className="text-red-500" onClick={(e) => {
//                                 e.stopPropagation();
//                                 handelSolClick(index);
//                             }} />
//                         </div>

//                         <div className="w-[10%] flex items-center justify-center">
//                             <AiOutlineCode className="text-blue-500" />
//                         </div>

//                         <div className="w-[10%] flex items-center justify-center">
//                             <FaPlus className="text-green-500" onClick={(e) => {
//                                 e.stopPropagation();
//                                 handelNoteClick(index);
//                             }} />
//                         </div>

//                         <div className="w-[10%] flex items-center justify-center">
//                             {problem.difficulty === "Easy" && <span className="text-[#018280]">Easy</span>}
//                             {problem.difficulty === "Medium" && <span className="text-yellow-400">Medium</span>}
//                             {problem.difficulty === "Hard" && <span className="text-red-500">Hard</span>}
//                         </div>

//                         <div className="w-[10%] flex items-center justify-center">
//                             <FaStar
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     handleRevisionClick(index);
//                                 }}
//                                 className={`cursor-pointer ${revisions[index] ? 'text-yellow-400' : 'text-gray-400'}`}
//                             />
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>
//         </motion.div>
//         </>
//     );
// }

// export default RevisionTable;



import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaPlus, FaStar } from 'react-icons/fa';
import { AiOutlineCode } from 'react-icons/ai';
import { HiDocumentText } from 'react-icons/hi';
import { ProblemContext } from '../../context/useProblemContext';
import { FiCode } from 'react-icons/fi';


function ProblemTable({ handelNoteClick, handelSolClick, problems }) {
    const { selectProblem, setProblems, handelCheckBox,RevisionClick } = useContext(ProblemContext);
    // const [revisions, setRevisions] = useState(problems.map((problem) => problem.for_revision));
    // console.log(problems)
    const filteredProblems = problems.filter((problem) => problem.for_revision);

    const [revisions, setRevisions] = useState(filteredProblems);

    // const handleRevisionClick = (index) => {
    //     const newRevisions = [...revisions];
    //     newRevisions[index] = !newRevisions[index];
    //     setRevisions(newRevisions);
    // };

    const handleRevisionClick = async (index, problemId) => {

        const token = JSON.parse(localStorage.getItem('codex-user'))
        // console.log(token.access);
        console.log(problemId);
        // const user = jwtDecode(token.access);


        try {
            const response = await fetch(`http://localhost:8000/api/questions/${problemId}/toggle-revision/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token.access}`
                },
                body: JSON.stringify({ token: token.access }),

            });

            if (!response.ok) {
                throw new Error('Failed to toggle revision status');
            }
            console.log('added revision');
            const data = await response.json()

            RevisionClick()

        } catch (error) {
            console.error('Error toggling revision:', error);
        }
    };

    const handleCheckBoxClick = async (index, problemId) => {
        const token = JSON.parse(localStorage.getItem('codex-user'))
        // console.log(token.access);
        try {
            const response = await fetch(`http://localhost:8000/api/questions/${problemId}/toggle-completion/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token.access}`
                },
                body: JSON.stringify({ token: token.access }),
            });

            if (!response.ok) {
                throw new Error('Failed to toggle completion status');
            }
            console.log('done', response);



            handelCheckBox()
        } catch (error) {
            console.error('Error toggling completion:', error);
        }
    };

    return (
        <>
            <motion.div className="rounded-xl overflow-hidden w-full">
                <div className="text-sm border-b-2 mb-2 border-lGreen-300 font-semibold text-DGray-200 flex px-4 py-2">
                    <h2 className="w-[10%] text-center">Status</h2>
                    <h2 className="w-[30%] text-left">Problem</h2>
                    <h2 className="w-[10%] text-center">Article</h2>
                    <h2 className="w-[10%] text-center">Solution</h2>
                    <h2 className="w-[10%] text-center">Code Solution</h2>
                    <h2 className="w-[10%] text-center">Practice</h2>
                    <h2 className="w-[10%] text-center">Note</h2>
                    <h2 className="w-[10%] text-center">Difficulty</h2>
                    <h2 className="w-[10%] text-center">Revision</h2>
                </div>

                <div className='w-full'>
                    {filteredProblems.map((problem, index) => (
                        <motion.div
                            key={problem.id}
                            onClick={() => selectProblem(problem)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="cursor-pointer hover:bg-lGreen-600 rounded-xl flex items-center px-4 py-2.5 border border-lGreen-500 mb-2"
                        >
                            <div className="w-[10%] flex items-center justify-center">
                                <label
                                    className="relative flex cursor-pointer items-center rounded-full p-3"
                                    htmlFor={`checkbox-${problem.id}`}
                                    data-ripple-dark="true"
                                >
                                    <input
                                        id={`checkbox-${problem.id}`}
                                        checked={problem.completed}
                                        onChange={(e) => {
                                            problem.completed = !problem.completed;
                                            e.stopPropagation();
                                            handleCheckBoxClick(index, problem.id);
                                        }}
                                        type="checkbox"
                                        className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-slate-300 checked:bg-[#35775d64] checked:before:bg-[#35775d64] hover:before:opacity-10"
                                    />
                                    <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3.5 w-3.5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                </label>
                            </div>

                            <div className="w-[30%] text-left whitespace-normal break-words">
                                {problem.title}
                            </div>

                            <div className="w-[10%] flex items-center justify-center">
                                <a
                                    href={problem.pseudocode_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <HiDocumentText className="text-DGray-200 hover:text-DGray-400" />
                                </a>
                            </div>

                            <div className="w-[10%] flex items-center justify-center">
                                <a
                                    href={problem.video_solution_url}
                                    target="_blank"
                                    rel="noopener noreferrer"

                                >
                                    <FaYoutube className="text-red-500 hover:text-red-600" />
                                </a>
                            </div>
                            {/* New Code Solution Column */}
                            <div className="w-[10%] flex items-center justify-center">
                                <a
                                    href={problem.code_solution_url}  // Assuming 'code_solution_url' is part of problem object
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handelSolClick(problem.code_solution);
                                    }}
                                >
                                    <FiCode className="text-purple-500 hover:text-purple-600" />
                                </a>
                            </div>

                            <div className="w-[10%] flex items-center justify-center">
                                <a
                                    href={problem.practice_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <AiOutlineCode className="text-blue-500 hover:text-blue-600" />
                                </a>
                            </div>

                            <div className="w-[10%] flex items-center justify-center">
                                <FaPlus
                                    className="text-green-500 hover:text-green-600"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handelNoteClick(index, problem.title, problem.id);
                                    }}
                                />
                            </div>

                            <div className="w-[10%] flex items-center justify-center">
                                {problem.difficulty_level === "Easy" && <span className="text-[#018280]">Easy</span>}
                                {problem.difficulty_level === "Medium" && <span className="text-yellow-400">Medium</span>}
                                {problem.difficulty_level === "Hard" && <span className="text-red-500">Hard</span>}
                            </div>

                            <div className="w-[10%] flex items-center justify-center">
                                <FaStar
                                    onClick={(e) => {
                                        problem.for_revision = !problem.for_revision;
                                        e.stopPropagation();
                                        handleRevisionClick(index, problem.id);
                                    }}
                                    className={`cursor-pointer ${problem.for_revision ? 'text-yellow-400' : 'text-gray-400'}`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </>
    );
}

export default ProblemTable;