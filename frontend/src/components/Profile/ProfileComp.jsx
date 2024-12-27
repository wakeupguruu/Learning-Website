import { FaEllipsisH } from "react-icons/fa";
import ProgressProfileall from "./ProgressProfileall";
import RightProfile from "./RightProfile";
import { title } from "framer-motion/client";
import useGetProgress from "../../hook/useGetProgress";

const ProfileComp = () => {
    const topicCovered = [
        { title: "Arrays & Hashing" },
        { title: "Two Pointers" },
        { title: "Stack" },
        { title: "Binary Search" },
        { title: "Sliding Window" },
        { title: "Linked List" },
        { title: "Trees" },
        { title: "Tries" },
        { title: "Heap / Priority Queue" },
        { title: "Backtracking" },
        { title: "Intervals" },
        { title: "Greedy" },
        { title: "Graphs" },
        { title: "Advanced Graphs" },
        { title: "1-D DP" },
        { title: "2-D DP" },
        { title: "Math & Geometry" },
    ];

    const { loading, userData } = useGetProgress();

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="w-full h-full flex flex-col justify-between lg:flex-row gap-4 p-4 font-ComicNeue z-0">
                    {/* Left Section */}
                    <div className="w-full lg:w-2/3 text-[#F1F2F6]">
                        {/* Header */}
                        <div className="w-full flex flex-col md:flex-row items-center justify-between mb-6">
                            <h2 className="text-3xl lg:text-[57px] mb-6 tracking-tight leading-[2rem] lg:leading-[3.5rem] w-full md:w-2/3">
                                {`Hi, ${userData.username}. Check Your Progress`}
                            </h2>
                           
                        </div>

                        {/* Main Content */}
                        <div className="flex flex-col lg:flex-row gap-4">
                            {/* Progress Section */}
                            <div className="bg-[#242525] w-full lg:w-1/2 shadow-lg rounded-3xl p-6">
                                <h3 className="text-xl font-semibold uppercase mb-4">Progress</h3>
                                <ProgressProfileall />
                            </div>

                            {/* Topic Section */}
                            <div className="bg-[#242525] w-full lg:w-1/2 shadow-lg rounded-3xl p-6">
                                <h3 className="text-xl font-semibold uppercase mb-4">Topics Covered</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {topicCovered.map((topic) => (
                                        <button
                                            key={topic.title}
                                            className="bg-[#5CAB8C] py-2 px-3 rounded-lg w-full text-center"
                                        >
                                            {topic.title}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <RightProfile userData={userData} />
                </div>
            )}
        </>
    );
};

export default ProfileComp;
