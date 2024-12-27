import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function DropDownProfile() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate(); // Initialize navigate function

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleAction = (action) => {
        setIsOpen(false); // Close the dropdown after an action
        if (action === "signout") {
            // Perform sign-out action
            localStorage.removeItem("codex-user");
            setIsLoggedIn(false);
            console.log("User signed out");
            // You can navigate to a public page after logout (e.g., Home or Login)
            navigate("/login");
        } else if (action === "profile") {
            // Navigate to the profile page
            navigate("/profile");
        } else if (action === "login") {
            // Navigate to login or sign-in page
            navigate(`/login`);
        }
        //  else if (action === "signin") {
        //     // Navigate to login or sign-in page
        //     navigate(`/register`);
        // }
    };

    // Check for the presence of a token to determine login status
    useEffect(() => {
        const token = localStorage.getItem("codex-user");
        setIsLoggedIn(!!token);
    }, []);

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const menuItems = isLoggedIn
        ? [
              { label: "Profile", action: "profile" },
              { label: "Sign Out", action: "signout" },
          ]
        : [
              { label: "Login", action: "login" },
            //   { label: "Sign In", action: "signin" },
          ];

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            {/* Icon Trigger */}
            <button
                onClick={toggleDropdown}
                className="flex items-center p-2 text-[#F1F2F6] bg-transparent border-none hover:text-[#5CAB8C]"
            >
                <CgProfile style={{ fontSize: 24 }} />
                {/* <span className="ml-2 text-sm">
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </span> */}
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute right-0 mt-2 w-48 bg-[#F1F2F6] rounded-lg shadow-lg"
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
                            {menuItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, x: -10 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <button
                                        onClick={() => handleAction(item.action)}
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

export default DropDownProfile;
