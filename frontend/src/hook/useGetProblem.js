import { useContext, useEffect, useState } from "react";
import { ProblemContext } from "../context/useProblemContext";


const useGetProblem = () => {  


    // const problems = [
    //     {
    //         name: "Binary Search",
    //         difficulty: "Easy",
    //         description: "Binary Search is a search algorithm that finds the position of a target value within a sorted array.",
    //         examples: [
    //             {
    //                 input: "nums = [1,2,3,4,5,6,7], target = 5",
    //                 output: "4",
    //                 explanation: "Binary search finds 5 at index 4 in the sorted list."
    //             }
    //         ],
    //         revision: true,
    //     },
    //     {
    //         name: "Two Sum",
    //         difficulty: "Medium",
    //         description: "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    //         examples: [
    //             {
    //                 input: "nums = [2,7,11,15], target = 9",
    //                 output: "[0,1]",
    //                 explanation: "The numbers 2 and 7 add up to 9."
    //             }
    //         ],
    //         revision: false,
    //     },
    //     {
    //         name: "Valid Anagram",
    //         difficulty: "Easy",
    //         description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
    //         examples: [
    //             {
    //                 input: "s = \"anagram\", t = \"nagaram\"",
    //                 output: "true",
    //                 explanation: "The letters in s are sorted in the same order as the letters in t."
    //             },
    //             {
    //                 input: "s = \"rat\", t = \"car\"",
    //                 output: "false",
    //                 explanation: "The letters in s are not sorted in the same order as the letters in t."
    //             }
    //         ],
    //         revision: true,
    //     },
    //     {
    //         name: "Longest Substring Without Repeating Characters",
    //         difficulty: "Medium",
    //         description: "Given a string s, find the length of the longest substring without repeating characters.",
    //         examples: [
    //             {
    //                 input: "s = \"abcabcbb\"",
    //                 output: "3",
    //                 explanation: "The longest substring without repeating characters is \"abc\"."
    //             },
    //             {
    //                 input: "s = \"bbbbb\"",
    //                 output: "1",
    //                 explanation: "The longest substring without repeating characters is \"b\"."
    //             },
    //             {
    //                 input: "s = \"pwwkew\"",
    //                 output: "3",
    //                 explanation: "The longest substring without repeating characters is \"wke\"."
    //             }
    //         ],
    //         revision: false,
    //     },
    //     {
    //         name: "Merge Two Sorted Lists",
    //         difficulty: "Easy",
    //         description: "Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.",
    //         examples: [
    //             {
    //                 input: "l1 = [1,2,4], l2 = [1,3,4]",
    //                 output: "[1,1,2,3,4,4]",
    //                 explanation: "The merged list is [1,1,2,3,4,4]."
    //             },
    //             {
    //                 input: "l1 = [], l2 = [0]",
    //                 output: "[0]",
    //                 explanation: "The merged list is [0]."
    //             }
    //         ],
    //         revision: false
    //     },
    //     {
    //         name: "Maximum Subarray",
    //         difficulty: "Easy",
    //         description: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    //         examples: [
    //             {
    //                 input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    //                 output: "6",
    //                 explanation: "The contiguous subarray [4,-1,2,1] has the largest sum = 6."
    //             },
    //             {
    //                 input: "nums = [1]",
    //                 output: "1",
    //                 explanation: "The contiguous subarray [1] has the largest sum = 1."
    //             },
    //             {
    //                 input: "nums = []",
    //                 output: "0",
    //                 explanation: "The contiguous subarray [] has the largest sum = 0."
    //             }
    //         ],
    //         revision: false
    //     },
    //     {
    //         name: "Reverse String",
    //         difficulty: "Easy",
    //         description: "Write a function that reverses a string. The input string will only contain lowercase letters.",
    //         examples: [
    //             {
    //                 input: "hello",
    //                 output: "olleh",
    //                 explanation: "The reversed string is \"olleh\"."
    //             },
    //             {
    //                 input: "world",
    //                 output: "dlrow",
    //                 explanation: "The reversed string is \"dlrow\"."
    //             }
    //         ],
    //         revision: false
    //     },
    //     {
    //         name: "Longest Palindromic Substring",
    //         difficulty: "Medium",
    //         description: "Given a string s, find the longest palindromic substring in s. A palindromic substring is a substring that reads the same backward as forward.",
    //         examples: [
    //             {
    //                 input: "babad",
    //                 output: "bab",
    //                 explanation: "The longest palindromic substring is \"bab\"."
    //             },
    //             {
    //                 input: "cbbd",
    //                 output: "bb",
    //                 explanation: "The longest palindromic substring is \"bb\"."
    //             },
    //             {
    //                 input: "a",
    //                 output: "a",
    //                 explanation: "The longest palindromic substring is \"a\"."
    //             },
    //             {
    //                 input: "ac",
    //                 output: "a",
    //                 explanation: "The longest palindromic substring is \"a\"."
    //             }
    //         ],
    //         revision: true,
    //     },
    //     {
    //         name: "Valid Parentheses",
    //         difficulty: "Easy",
    //         description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. A valid string is defined as follows: Open brackets must be closed in the correct order, and no two consecutive opening brackets are valid.",
    //         examples: [
    //             {
    //                 input: "()[]{}",
    //                 output: true,
    //                 explanation: "The input string is valid."
    //             },
    //             {
    //                 input: "([)]",
    //                 output: false,
    //                 explanation: "The input string is not valid."
    //             },
    //             {
    //                 input: "{[()]}",
    //                 output: true,
    //                 explanation: "The input string is valid."
    //             },
    //             {
    //                 input: "]",
    //                 output: false,
    //                 explanation: "The input string is not valid."
    //             }
    //         ],
    //         revision: true,
    //     }

    // ];
    const [loading, setLoading] = useState(false);
    const [problem, setproblem] = useState([]);

    // setAllProblems(problem)
    const {selectedProblem,setAllProblems,selectedTopic,checkboxClicked,revisionClicked} = useContext(ProblemContext)
    useEffect(() => {
		const getProblems = async () => {
			setLoading(true);
            try {
                const token = JSON.parse(localStorage.getItem("codex-user"));
                // console.log(token.access);
                
                const queryParams = new URLSearchParams();
              
                    queryParams.append('topic', selectedTopic);
                
              
                
    
                const url = `http://localhost:8000/api/questions/${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    
    
                // Include token in the request header
                const res = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token.access}`
                    },
                    // body: JSON.stringify({selectedProblem})
                });
    
                const data = await res.json();
                // if(!res.ok){
                //     console.log('Error:', res.statusText);
                //     return;
                // }
                
                if (data.error) {
                    throw new Error(data.error);
                }
                setproblem(data);
                
                
            } catch (error) {
                console.error(error.message);
            } finally {
				setLoading(false);
			}
		};

		getProblems();
	}, [selectedTopic]);

	return { loading, problem };
    // return (problems);
}
export default useGetProblem