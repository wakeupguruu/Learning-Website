import { Children, createContext, useState } from 'react';

export const ProblemContext = createContext();

export const ProblemContextProvider = ({children}) => {
    const [selectedProblem, setSelectedProblem] = useState(null);

    const selectProblem = (problem) => {
        setSelectedProblem(problem);
    };

    const [problems, setProblems] = useState([])

    const setAllProblems = (problems) =>{
        setProblems(problems);
    }

    const [selectedTopic, setSelectedTopic] = useState('Arrays & Hasing');

    const setCurrentTopic = (topic) => {
        console.log(topic);
        
        setSelectedTopic(topic);
    }


    const [checkboxClicked, setCheckboxCLicked] = useState(null);
    const handelCheckBox = () =>{
        setCheckboxCLicked(!checkboxClicked);
        
    } 

    const [revisionClicked, setRevisionClicked] = useState(null);
    const RevisionClick = () => {
        setRevisionClicked(!revisionClicked);
    }

    return (
        <ProblemContext.Provider 
        value={{
            selectedProblem,
            selectProblem,
            problems,
            setAllProblems,
            selectedTopic,
            setCurrentTopic,
            checkboxClicked,
            handelCheckBox,
            revisionClicked,
            RevisionClick
        }}>
            {children}
        </ProblemContext.Provider>
    )
}