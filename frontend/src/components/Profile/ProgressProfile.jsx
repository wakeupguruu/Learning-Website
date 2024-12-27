import React, { useEffect, useState } from 'react';
import { BsArrowRepeat } from 'react-icons/bs'; // Example React Icon
import { gsap } from 'gsap';

const ProgressProfile = ({ progress }) => {
    const [percentagee, setPercentagee] = useState(0);

    useEffect(() => {
        if (progress && progress.solved_questions !== undefined && progress.total_questions !== undefined) {
            const calculatedPercentagee = Math.min(
                (progress.solved_questions / progress.total_questions) * 100,
                100
            );
            gsap.to('.progress-bar-filll', { width: `${calculatedPercentagee}%`, duration: 2, ease: "power2.out" });
            setPercentagee(calculatedPercentagee);
        }
    }, [progress]); // Ensure the effect reruns when progress changes

    if (!progress) {
        return (
            <div className="text-red-500">
                Progress data is missing!
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center space-y-2 text-[#111111] rounded-lg w-full">
            <div className="w-full h-4 bg-[#686d76] rounded-full relative overflow-hidden">
                <div
                    className="progress-bar-filll h-full bg-[#000000] rounded-full"
                    style={{ width: `${percentagee}%` }}
                ></div>
                <div className="absolute top-0 left-0 h-full text-center flex items-center justify-center font-bold text-xs w-full text-white">
                    {Math.round(percentagee)}%
                </div>
            </div>

            <div className="flex justify-between w-full text-sm pt-2">
                <div className="flex items-center">
                    <BsArrowRepeat className="mr-1" />
                    <span>Status: {percentagee === 100 ? "Complete" : "Incomplete"}</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressProfile;
