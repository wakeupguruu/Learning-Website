import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/useAuthContext";
import { NoteContext } from "../context/useNoteContent";

const useGetUserNotes = () => {
    const [loading, setLoading] = useState(false);
    
    const [notes, setNotes] = useState(null)
    const { NoteEdit} = useContext(NoteContext);

    
    useEffect(() => {
		const getNotes = async () => {
			setLoading(true);
            try {
                const token = JSON.parse(localStorage.getItem("codex-user"));
                // console.log(token.access);
              
    
                const url = 'http://localhost:8000/api/notes/';
    
    
                // Include token in the request header
                const res = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token.access}`
                    },
                });
 
                
    
                const data = await res.json();


                if(!res.ok){
                    console.log('Error:', res.statusText);
                    return;
                }
                // console.log(data);
                
                if (data.error) {
                    throw new Error(data.error);
                }
                setNotes(data);
                
                
            } catch (error) {
                console.error(error.message);
            } finally {
				setLoading(false);
			}
		};

		getNotes();
	}, [NoteEdit]);

	return { loading, notes };

}
export default useGetUserNotes