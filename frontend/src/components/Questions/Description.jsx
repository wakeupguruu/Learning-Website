import React from 'react';
import { motion } from 'framer-motion';

function Description({ title, content }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className=" h-full w-full"
        >
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-semibold uppercase">Description</h1>
            </div>
            <div className="w-full pb-10">
                <div className="w-full mb-6">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="text-sm mt-2">{content.description}</p>
                    {/* {content.examples.map((example, exIndex) => (
                        <div key={exIndex} className="w-full mt-4">
                            <h3 className="text-xl font-semibold">Example {exIndex + 1}:</h3>
                            <h4 className="mt-1 text-base font-semibold">
                                Input: <span className="text-gray-300 font-light">{example.input}</span>
                            </h4>
                            <h4 className="mt-1 text-base font-semibold">
                                Output: <span className="text-gray-300 font-light">{example.output}</span>
                            </h4>
                            <h4 className="mt-1 text-base font-semibold">
                                Explanation: <span className="text-gray-300 font-light">{example.explanation}</span>
                            </h4>
                        </div>
                    ))} */}
                </div>
            </div>
        </motion.div>
    );
}

export default Description;
