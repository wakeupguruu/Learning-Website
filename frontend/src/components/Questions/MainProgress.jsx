import React, { useEffect, useState } from 'react';
import { BsArrowRepeat } from 'react-icons/bs'; // Example React Icon
import { gsap } from 'gsap';

const MainProgress = ({ solvedd, totall }) => {
    const [percentagee, setPercentagee] = useState(0);

    useEffect(() => {
        const calculatedPercentagee = Math.min((solvedd / totall) * 100, 100);
        gsap.to('.progress-bar-filll', { width: `${calculatedPercentagee}%`, duration: 2, ease: "power2.out" });
        setPercentagee(calculatedPercentagee);
    }, [solvedd, totall]);

    return (
        <>
            <div className="flex flex-col items-center space-y-2  text-[#F1F2F6] rounded-lg w-full">

                    <div className="flex items-center mx-auto">
                        <span className='font-semibold text-xl'>({solvedd} / {totall})</span>
                    </div>

                <div className="w-full h-4 bg-[#cdd1d6] rounded-full relative overflow-hidden">
                    <div
                        className="progress-bar-filll h-full bg-[#5CAB8C] rounded-full"
                        style={{ width: `${percentagee}%` }}
                    ></div>
                    {/* <div className="absolute top-0 left-0 h-full text-center flex items-center justify-center font-bold text-xs w-full text-white">
                        {Math.round(percentagee)}%
                    </div> */}
                </div>


                {/* <div className="flex justify-between w-full text-sm pt-2">
                    <div className="flex items-center">
                        <BsArrowRepeat className="mr-1" />
                        <span>Status: incomplete</span>
                    </div>
                    <span>Total: {totall}</span>
                </div>
                <div className="flex justify-between w-full text-sm">
                    <span>Remaining: {totall - solvedd}</span>
                    <span>Solved: {solvedd}</span>
                </div> */}

            </div>
        </>
    )
}
export default MainProgress