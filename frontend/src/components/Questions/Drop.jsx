import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function Drop({ title, items,selecte }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(title);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (item) => {
        setSelectedItem(item.label);
        selecte(item.value)
        setIsOpen(false);
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block " ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex justify-start items-center w-full py-2.5 px-0 text-sm text-[#F1F2F6] bg-transparent border-0  focus:outline-none "
            >
                {selectedItem}
                <span className="ml-2 text-[#F1F2F6]">
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute z-10 mt-2 w-32 bg-[#F1F2F6] rounded-lg shadow-lg"
                    >
                        <motion.ul
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                            }}
                            className="py-2 text-sm text-[#1D1A1D]"
                        >
                            {items.map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, x: -10 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                    className="border-b border-[#5CAB8C] last:border-0"
                                >
                                    <button
                                        onClick={() => handleSelect(item)}
                                        className="block w-full text-left px-4 py-2 hover:bg-[#5CAB8C] hover:text-white"
                                    >
                                        {item.label}
                                    </button>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Drop;
