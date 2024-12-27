import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaPlus, FaStar } from 'react-icons/fa';
import { AiOutlineCode } from 'react-icons/ai';
import { HiDocumentText } from 'react-icons/hi';
import { ProblemContext } from '../../context/useProblemContext';

function NoteTable({ notes }) {

    const { selectProblem } = useContext(ProblemContext)





    return (
     <>
       {/* <motion.div className="rounded-xl overflow-hidden w-full">
                <div className="text-sm border-b-2 mb-2 border-lGreen-300 font-semibold text-DGray-200 flex px-4 py-2">
                    <h2 className="w-[10%] text-center">Status</h2>
                    <h2 className="w-[30%] text-left">Problem</h2>
                    <h2 className="w-[10%] text-center">Article</h2>
                    <h2 className="w-[10%] text-center">Solution</h2>
                    <h2 className="w-[10%] text-center">Practice</h2>
                    <h2 className="w-[10%] text-center">Note</h2>
                    <h2 className="w-[10%] text-center">Difficulty</h2>
                    <h2 className="w-[10%] text-center">Revision</h2>
                </div>

                <div className='w-full'>
                    {problems.map((problem, index) => (
                        <motion.div
                            key={problem.name}
                            onClick={() => selectProblem(problem)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="cursor-pointer hover:bg-lGreen-600  rounded-xl flex items-center px-4 py-2.5 border border-lGreen-500 mb-2"
                        >
                            <div className="w-[10%] flex items-center justify-center ">
                                <label
                                    className="relative flex cursor-pointer items-center rounded-full p-3"
                                    htmlFor="ripple-on"
                                    data-ripple-dark="true"
                                >
                                    <input onClick={(e) => {
                                        e.stopPropagation();
                                        handleCheckBoxClick(index, problem.name);
                                    }} type="checkbox" className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-slate-300 checked:bg-[#35775d64] checked:before:bg-[#35775d64] hover:before:opacity-10" />

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
                                {problem.name}
                            </div>

                            <div className="w-[10%] flex items-center justify-center">
                                <HiDocumentText className="text-DGray-200" />
                            </div>

                            <div className="w-[10%] flex items-center justify-center">
                                <FaYoutube className="text-red-500" onClick={(e) => {
                                    e.stopPropagation();
                                    handelSolClick(index);
                                }} />
                            </div>

                            <div className="w-[10%] flex items-center justify-center">
                                <AiOutlineCode className="text-blue-500" />
                            </div>

                            <div className="w-[10%] flex items-center justify-center">
                                <FaPlus className="text-green-500" onClick={(e) => {
                                    e.stopPropagation();
                                    handelNoteClick(index, problem.name);
                                }} />
                            </div>

                            <div className="w-[10%] flex items-center justify-center">
                                {problem.difficulty === "Easy" && <span className="text-[#018280]">Easy</span>}
                                {problem.difficulty === "Medium" && <span className="text-yellow-400">Medium</span>}
                                {problem.difficulty === "Hard" && <span className="text-red-500">Hard</span>}
                            </div>

                            <div className="w-[10%] flex items-center justify-center">
                                <FaStar
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleRevisionClick(index, problem.name);
                                    }}
                                    className={`cursor-pointer ${revisions[index] ? 'text-yellow-400' : 'text-gray-400'}`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
         */}
     </>
    );
}

export default NoteTable;
