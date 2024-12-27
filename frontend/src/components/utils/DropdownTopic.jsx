
import React, { useState, useEffect, useRef, useContext } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { ProblemContext } from '../../context/useProblemContext';

// OptionsMenu component
const DropdownTopic = ({ options = [] }) => {
    const {selectedTopic,setCurrentTopic} = useContext(ProblemContext)
    const [isOpen, setIsOpen] = useState(false);
    

    const [selectedOption, setSelectedOption] = useState(selectedTopic);
    const menuRef = useRef(null);

    // Toggle options menu visibility
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close menu if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Handle option selection
    const handleSelectOption = (option) => {
        setSelectedOption(option.label); // Set the selected option
        setCurrentTopic(option.label);
        setIsOpen(false); // Close the menu after selection
    };

    return (
        <div className="relative inline-block text-left" ref={menuRef}>
            <button
                id="optionsMenuButton"
                onClick={toggleMenu}
                className="text-white bg-lGreen-500 border border-lGreen-500 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 flex items-center"
                type="button"
            >
                {selectedOption}
                {isOpen ? (
                    <FiChevronUp className="w-4 h-4 ml-2" />
                ) : (
                    <FiChevronDown className="w-4 h-4 ml-2" />
                )}
            </button>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute z-10 mt-2 w-80 divide-y divide-lGreen-500 rounded-lg shadow-lg bg-lWhite text-lBackground max-h-60 overflow-y-auto"
                >
                    <div className="flex flex-wrap p-3 gap-3">
                        {options.map((option, index) => (
                            <motion.button
                                key={index}
                                onClick={(e) => handleSelectOption(option)}
                                className={`px-3 py-1 rounded-3xl text-sm transition-colors ${
                                    selectedOption === option.label
                                        ? 'bg-lGreen-300 text-[#FFFFFF]'
                                        : 'bg-lGreen-500  text-white hover:bg-lGreen-300'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {option.label}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default DropdownTopic;
