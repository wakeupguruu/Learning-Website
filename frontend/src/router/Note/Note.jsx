
import React, { useState, useContext, useRef } from "react";
import Calendar from "../../components/Notes/Calendar";
import Navbar from "../../components/Navbar/Navbar";
import { FiClock, FiEdit3 } from "react-icons/fi";
import { NoteContext } from "../../context/useNoteContent";
import useGetUserNotes from "../../hook/useGetUserNotes";
import { format } from "date-fns";
import { FaTimes } from 'react-icons/fa';
import updateToken from "../../utils/updateToken";

const Note = () => {

  updateToken()

    const { loading, notes } = useGetUserNotes();
    const { selectedDate ,updateNoteEdit,updateSelectedDate} = useContext(NoteContext);

    const [editNote, setEditNote] = useState(false);
    const [currentProblemId, setCurrentProblemId] = useState(null);


    const handelNoteClick = (index, title, problemId) => {
        noteTitleRef.current = title
        setCurrentProblemId(problemId);
        setEditNote(!editNote);
    }

    const noteTitleRef = useRef();
    const noteTextRef = useRef();

    const [activeTab, setActiveTab] = useState("Today");

    const getFilteredNotes = () => {
        if (!notes) return [];
        const selected = new Date(selectedDate);
        return notes.filter((note) => {
            const noteDate = new Date(note.updated_at);
            if (activeTab === "Today") {
                return format(noteDate, "yyyy-MM-dd") === format(selected, "yyyy-MM-dd");
            } else if (activeTab === "Week") {
                const startOfWeek = new Date(selected);
                startOfWeek.setDate(selected.getDate() - selected.getDay());
                const endOfWeek = new Date(startOfWeek);
                endOfWeek.setDate(startOfWeek.getDate() + 6);
                return noteDate >= startOfWeek && noteDate <= endOfWeek;
            } else if (activeTab === "Month") {
                return (
                    noteDate.getFullYear() === selected.getFullYear() &&
                    noteDate.getMonth() === selected.getMonth()
                );
            }
            return false;
        });
    };

    const filteredNotes = getFilteredNotes();


    const handelNoteSubmit = async (e) => {
        e.preventDefault();
        const title = noteTitleRef.current.value;
        const noteText = noteTextRef.current.value;
        const token = JSON.parse(localStorage.getItem('codex-user'))

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.access}`,
            },
            body: JSON.stringify({ note: noteText })
        };

        const response = await fetch(`http://localhost:8000/api/questions/${currentProblemId}/notes/`, requestOptions);
        const data = await response.text();
        setEditNote(false);

        if (data.error) {
            alert(data.error);
        }

        updateNoteEdit()
        updateSelectedDate(new Date())
        
    }

    return (
        <div className="w-full h-screen overflow-hidden bg-lBackground overflow-y-auto">
            <Navbar />
            <div className="flex flex-col lg:flex-row w-full h-full p-4 gap-4 font-ComicNeue relative">
                {/* Left Section */}
                <div className="flex-1 text-lWhite">
                    <div className="flex flex-col lg:flex-row items-start lg:items-start pt-3 justify-between w-full mb-6">
                        {/* Header */}
                        <div className="flex flex-col gap-2 lg:w-2/3">
                            <h2 className="text-2xl lg:text-[57px] tracking-tight leading-[2.5rem] lg:leading-[3.5rem]">
                                Hi, Check Your Notes
                            </h2>
                            {/* <h4 className="text-sm lg:text-base text-DGray-200">
                                Lorem ipsum dolor sit, amet consectetur adipisicing.
                            </h4> */}
                        </div>
                        {/* Calendar */}
                        <div className="w-full lg:w-[30%]">
                            <Calendar />
                        </div>
                    </div>

                    {/* Notes Section */}
                    <div className="w-full">
                        <h2 className="text-2xl lg:text-3xl tracking-tight leading-[2rem] lg:leading-[3rem] mb-4">
                            Your Notes
                        </h2>

                        {/* Tabs */}
                        <div className="flex items-center justify-start mb-6">
                            <div className="flex items-center bg-lGreen-500 rounded-full p-1">
                                {["Today", "Week", "Month"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-3 py-1.5 rounded-full transition-colors duration-300 ${activeTab === tab
                                            ? "bg-lBackground text-lWhite"
                                            : "text-lBackground"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Notes List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredNotes.length > 0 ? (
                                filteredNotes.map((usernote, index) => {
                                    const noteDate = new Date(usernote.updated_at);
                                    const formattedTime = format(noteDate, "hh:mm a"); // Format the time
                                    const formattedDay = format(noteDate, "EEEE"); // Format the day
                                    return (

                                        <div
                                            key={index}
                                            className="bg-lGreen-500 rounded-lg p-4 flex flex-col justify-between shadow-lg"
                                        >
                                            <div>
                                                <div className="text-xs mb-2">
                                                    {format(new Date(usernote.updated_at), "dd/MM/yyyy")}
                                                </div>
                                                <div className="flex items-center justify-between mb-2">
                                                    <h2 className="text-lg font-semibold">
                                                        {usernote.question_title}
                                                    </h2>
                                                    <FiEdit3 className="text-lWhite" onClick={(e) => {
                                                        e.preventDefault();
                                                        handelNoteClick(e, usernote.question_title, usernote.question)
                                                    }} />
                                                </div>
                                                <p className="text-sm">{usernote.note}</p>
                                            </div>
                                            <div className="flex items-center text-sm text-lWhite mt-4">
                                                <FiClock className="mr-2" />
                                                <span className="text-right pr-3">{formattedTime}</span>
                                                <span className="text-right italic">{formattedDay}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                <div className="text-lg text-lGray-500 col-span-full">
                                    No notes found for the selected period.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>


            {editNote &&
                <div className=' w-[60vw] fixed h-[60vh] bg-[#1A1A1A] top-1/2 left-1/2 rounded-2xl -translate-x-1/2 -translate-y-1/2'>
                    <div className="px-8 py-3 text-[#F1F2F6] flex items-center justify-between border-b border-gray-600">
                        <h2 className="text-2xl text-white font-semibold">Note</h2>
                        <div className="close">
                            <FaTimes onClick={handelNoteClick} />
                        </div>
                    </div>
                    <div className="px-8 py-3 text-[#F1F2F6]">
                        <form onSubmit={(e,) => {
                            handelNoteSubmit(e);
                        }}>
                            <input ref={noteTitleRef} type="text" disabled className="w-full resize-none bg-transparent border border-gray-600 rounded-lg p-4 cursor-text" placeholder="Title..." value={noteTitleRef.current} />

                            <textarea ref={noteTextRef} className="w-full h-48 mt-4 resize-none bg-transparent border border-gray-600 rounded-lg p-4 outline-none" placeholder="Write your note here..." />

                            <div className="flex items-center justify-end py-2">
                                <button type='submit' className="px-5 py-2 text-white font-semibold bg-[#5CAB8C] rounded-lg hover:bg-[#5cab8bc8]">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </div>
    );
};

export default Note;
