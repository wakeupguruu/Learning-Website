

import React, { useEffect, useRef } from 'react';
import Button from '../utils/Button';
import { TiLocationArrow } from 'react-icons/ti';

export default function AnimatedLanding() {
  
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    if (text) {
      text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }
  }, []);

  return (
    <div className="w-full min-h-screen text-lWhite relative font-PPFragment overflow-hidden">
      {/* Main Content */}
      <div className="absolute top-1/2 md:top-[60%] -translate-y-1/2 w-full p-4 sm:p-6 md:p-8">
        <div className=" flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 md:gap-20 w-full">
          {/* Left side - Large Text */}
          <div className="space-y-6 w-full md:w-auto">
            <h1 ref={textRef} className="text-[15vw] sm:text-[12vw] md:text-[18vw] font-medium leading-none tracking-tight animated-text text-center md:text-left">
              CODEX
            </h1>
          </div>

          {/* Right side - Description */}
          <div className="space-y-4 w-full md:w-auto max-w-[23rem]">
            <div className="text-xl sm:text-2xl mt-4 md:mt-10 text-center md:text-left">codex</div>
            <p className="text-lWhite font-ComicNeue text-center md:text-left text-sm sm:text-base">
              Welcome to <b>Codex</b>, your ultimate destination for mastering Data Structures and Algorithms (DSA). Whether you're a beginner or an experienced coder, Codex makes solving problems easy, intuitive, and even fun.  
              Start small, build big, and watch your skills grow as you tackle challenges crafted to teach and test every concept.  
            </p>
            <div className="flex justify-center md:justify-start">
              <Button
                id="get-started"
                title="Start Solving"
                navigateTo="/questions"
                leftIcon={<TiLocationArrow />}
                containerClass="bg-lWhite flex justify-center items-center gap-1 z-[40] px-4 py-2 text-sm sm:text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

  