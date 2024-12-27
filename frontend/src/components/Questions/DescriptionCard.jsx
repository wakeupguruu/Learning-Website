
import React, { useContext } from 'react';
import './DescriptionCardstyle.css';
import Description from './Description';
import { ProblemContext } from '../../context/useProblemContext';

const DescriptionCard = () => {
    const { selectedProblem } = useContext(ProblemContext);

    return (
        <div className="Descriptioncard sm:w-full md:w-[30%]">
            <div className="top-section">
                <div className="borderr"></div>
                <>
                    <div className="heading absolute top-1 right-4">
                        <h3 className="text-xl md:text-lg text-lWhite sm:text-sm">Description</h3>
                    </div>
                    <div className="w-full sm:h-auto md:h-[60vh] px-9 py-8 text-lWhite">
                        {selectedProblem ? (
                            <Description
                                title={selectedProblem.title}
                                content={{
                                    description: selectedProblem.question_discription,
                                }}
                            />
                        ) : (
                            <p>Select a problem to see the description.</p>
                        )}
                    </div>
                </>
            </div>
        </div>
    );
};

export default DescriptionCard;
