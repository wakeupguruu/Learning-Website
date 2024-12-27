import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { ProblemContext } from "../context/useProblemContext";

const useGetProgress = () => {
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState([]);

    const {selectedTopic} = useContext(ProblemContext)

    useEffect(() => {
        const getProgress = async () => {
            setLoading(false);
            try {
                const token = JSON.parse(localStorage.getItem("codex-user"));

                
                const res = await fetch(`http://localhost:8000/api/profile/`, {
                // const res = await fetch(`http://localhost:8000/api/topics/Stack/progress/`, {
                    method: 'GET',
                    headers: {
                    	'Content-Type': 'application/json',
                    	'Authorization': `Bearer ${token.access}`
                    },
                    // body: JSON.stringify({ }),
                });

                const data = await res.json();
                // console.log(data);


                if (data.error) {
                    throw new Error(data.error);
                }

                setUserData(data);

            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        }

        getProgress();

    }, [selectedTopic])

    return { loading, userData };
}
export default useGetProgress