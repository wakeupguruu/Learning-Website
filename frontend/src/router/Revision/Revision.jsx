

import React, { useRef, useState, useContext } from 'react';
import RevisionTableCard from '../../components/Revision/RevisionTableCard'
import { FaTimes } from 'react-icons/fa';
import CodeBlock from '../../components/utils/CodeBlock';
import Navbar from '../../components/Navbar/Navbar';
import useGetProblem from '../../hook/useGetProblem';
import { ProblemContext } from '../../context/useProblemContext';
import DescriptionCard from '../../components/questions/DescriptionCard';
import updateToken from '../../utils/updateToken';

let codeString;
export default function Questions() {

    updateToken()

    const { loading, problem } = useGetProblem();
    const { setAllProblems, problems } = useContext(ProblemContext);
    setAllProblems(problem);

    const [currentProblemId, setCurrentProblemId] = useState(null);
    const noteTitleRef = useRef(null);
    const noteTextRef = useRef(null);
    const [note, setNote] = useState(false);
    const [sol, setSol] = useState(false);

    const handelNoteClick = (index, title, problemId) => {
        noteTitleRef.current = title;
        setCurrentProblemId(problemId);
        setNote(!note);
    };

    const handelSolClick = (soll) => {
        codeString = soll;
        setSol(!sol);
    };

    const handelNoteSubmit = async (e) => {
        e.preventDefault();
        const title = noteTitleRef.current.value;
        const noteText = noteTextRef.current.value;
        const token = JSON.parse(localStorage.getItem('codex-user'));

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token.access}`,
            },
            body: JSON.stringify({ note: noteText }),
        };

        const response = await fetch(
            `http://localhost:8000/api/questions/${currentProblemId}/notes/`,
            requestOptions
        );
        const data = await response.text();

        setNote(false);
        if (data.error) {
            alert(data.error);
        }
    };

    return (
        <>
            <div className="w-full h-screen overflow-hidden bg-lBackground overflow-y-auto">
                <Navbar />
                {loading && <div className="text-4xl">Loading...</div>}
                {!loading && (
                    <div className="w-full h-full flex flex-col p-6 font-ComicNeue text-lWhite relative space-y-6">
                        {/* Prerequisite Section */}
                        <div>

                            <h4 className="text-5xl sm:text-3xl text-lWhite tracking-tight leading-[53px]">
                                Revision
                            </h4>
                            
                        </div>

                        {/* Main Content */}
                        <div className="w-full flex flex-col lg:flex-row gap-6">
                            <div className="w-full lg:w-[65%]">
                                < RevisionTableCard handelNoteClick={handelNoteClick} handelSolClick={handelSolClick} />

                            </div>
                            <div className="w-full lg:w-[30%]">
                                < DescriptionCard />

                            </div>
                        </div>

                        {/* Note Modal */}
                        {note && (
                            <div className="fixed w-[90vw] sm:w-[80vw] px-16 py-14 bg-[#1A1A1A] top-1/2 left-1/2 rounded-2xl transform -translate-x-1/2 -translate-y-1/2 p-6">
                                <div className="flex items-center justify-between border-b border-gray-600 pb-3">
                                    <h2 className="text-xl sm:text-lg text-white font-semibold">
                                        Note
                                    </h2>
                                    <FaTimes
                                        onClick={() => setNote(false)}
                                        className="cursor-pointer"
                                    />
                                </div>
                                <form
                                    className="mt-4 space-y-4"
                                    onSubmit={(e) => handelNoteSubmit(e)}>
                                    <input
                                        ref={noteTitleRef}
                                        type="text"
                                        disabled
                                        className="w-full bg-transparent border border-gray-600 rounded-lg p-4 text-sm sm:text-xs"
                                        placeholder="Title..."
                                        value={noteTitleRef.current}
                                    />
                                    <textarea
                                        ref={noteTextRef}
                                        className="w-full h-32 resize-none bg-transparent border border-gray-600 rounded-lg p-4 text-sm sm:text-xs"
                                        placeholder="Write your note here..."
                                    />
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="px-6 py-2 text-white font-semibold bg-[#5CAB8C] rounded-lg hover:bg-[#5cab8bc8]">
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* Solution Modal */}
                        {sol && (
                            <div className="fixed w-[90vw] sm:w-[80vw] h-[92vh] bg-[#1A1A1A] top-1/2 left-1/2 rounded-2xl transform -translate-x-1/2 -translate-y-1/2 p-6 overflow-y-auto z-50">
                                <div className="flex items-center justify-between border-b border-gray-600 pb-3">
                                    <h2 className="text-xl sm:text-lg text-white font-semibold">
                                        Solution
                                    </h2>
                                    <FaTimes
                                        onClick={() => setSol(false)}
                                        className="cursor-pointer"
                                    />
                                </div>
                                <div className="mt-4">
                                    <CodeBlock code={codeString} />
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
