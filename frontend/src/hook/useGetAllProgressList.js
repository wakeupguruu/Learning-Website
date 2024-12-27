import { useEffect, useState,useContext } from "react";
import { ProblemContext } from "../context/useProblemContext";

const useGetAllProgressList = () => {

    const [loading, setLoading] = useState(false);
    const [topicProgress, setTopicProgress] = useState(null);

    const {selectedTopic } = useContext(ProblemContext)

    const token = JSON.parse(localStorage.getItem('codex-user'))

    useEffect(() => {
        const getTopicProgress = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:8000/api/topics/progress/`,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token.access}`,
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch topic progress');
                }
                const data = await response.json();
                setTopicProgress(data);
                
            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        }
        getTopicProgress()
    }, [selectedTopic])

    return {loading, topicProgress}
}
export default useGetAllProgressList