

import React from 'react'
import { BsTwitterX } from "react-icons/bs"
import { FiGithub } from "react-icons/fi"
import { SlSocialLinkedin } from "react-icons/sl"
import { PiTelegramLogo } from "react-icons/pi"

const Footer = () => {
  return (
    <div className="w-full min-h-[50vh] bg-lWhite">
      <div className="w-full border-b-2 border-bBorder px-4 sm:px-6 md:px-10 py-6 flex flex-col items-center justify-start">
        <div className="w-full flex flex-col sm:flex-row items-start justify-start">
          {/* Social Media Buttons */}
          <div className="w-full sm:w-full md:w-[25%] mb-6 sm:mb-6 md:mb-0">
            <div className="w-full p-1 flex items-center justify-center sm:justify-start gap-3">
              {['twitter', 'github', 'linkedin', 'telegram'].map((platform, index) => (
                <button key={platform} className="rounded-full p-2 sm:p-2.5 border-2 border-bBorder flex items-center justify-between hover:scale-[1.1] transition-all duration-300 ease-linear">
                  {index === 0 && <BsTwitterX style={{ fontSize: 16 }} />}
                  {index === 1 && <FiGithub style={{ fontSize: 16 }} />}
                  {index === 2 && <SlSocialLinkedin style={{ fontSize: 16 }} />}
                  {index === 3 && <PiTelegramLogo style={{ fontSize: 16 }} />}
                </button>
              ))}
            </div>
          </div>

          {/* Footer Links and Information */}
          <div className="w-full sm:w-full md:w-[75%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-0">
            {['About Us', 'Features', 'Support', 'Legal'].map((section, index) => (
              <div key={section} className="w-full sm:w-full md:w-48 p-1 flex items-start justify-start gap-1 flex-col">
                <h3 className="font-ComicNeue font-semibold text-lg sm:text-xl mb-1">{section}</h3>
                {[1, 2, 3].map((item) => (
                  <h4 key={`${section}-${item}`} className="font-ComicNeue font-medium text-base sm:text-lg text-lGray-400">
                    {index === 0 && item === 1 && "Learn DSA interactively."}
                    {index === 0 && item === 2 && "Enhance your coding skills."}
                    {index === 0 && item === 3 && "Collaborate with peers."}
                    {index === 1 && item === 1 && "Interactive Roadmaps"}
                    {index === 1 && item === 2 && "Personalized Notes"}
                    {index === 1 && item === 3 && "Revision Plans"}
                    {index === 2 && item === 1 && "Help Center"}
                    {index === 2 && item === 2 && "FAQs"}
                    {index === 2 && item === 3 && "Contact Us"}
                    {index === 3 && item === 1 && "Privacy Policy"}
                    {index === 3 && item === 2 && "Terms of Service"}
                    {index === 3 && item === 3 && "Cookies Policy"}
                  </h4>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-6 flex flex-col sm:flex-col md:flex-row items-center md:items-center justify-between gap-4 sm:gap-3 md:gap-0">
        {/* Copyright Section */}
        <h2 className="text-xs font-Aeonik text-center md:text-left">© CODEX 2024. All rights reserved</h2>

        {/* Slogan */}
        <h2 className="text-sm font-Aeonik italic text-center">
          "Remember, every line of code brings you closer to mastery!"
        </h2>

        {/* Feedback or Social Responsibility */}
        <h2 className="text-sm font-Aeonik italic w-full sm:w-full md:w-72 text-center md:text-right">
          "CODEX's mission is to help every coder to master DSA through intuitive learning experiences. Be part of the journey!"
        </h2>
      </div>
    </div>
  )
}

export default Footer

