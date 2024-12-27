import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const updateToken = () => {
    const navigate = useNavigate()


    let token;
    const [authUser, setAuthUser] = useState(() => JSON.parse(localStorage?.getItem('codex-user'))
    );
    const [loading, setLoading] = useState(true);

    let updateToken = async () => {

        try {
            const response = await fetch('http://localhost:8000/api/referesh/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'refresh': ` ${authUser?.refresh}` })
            })
            const data = await response.json()
            

        
            if (response.status === 200){
                setAuthUser(data)
                localStorage.setItem('codex-user', JSON.stringify(data))
            }
            else {
                // alert('please login ')
                console.log(response);
                setAuthUser(localStorage.removeItem('codex-user'));
                navigate('/login')
            }
        } catch (error) {
            console.error(error)
        }
        finally {
            setLoading(false)
        }

        if (loading) {
            setLoading(false)
        }
    }


    useEffect(() => {

        if (loading) {
            updateToken()
        }

        let fourMinutes = 1000 * 60 * 4

        let interval = setInterval(() => {
            if (authUser) {
                updateToken()
            }
        }, fourMinutes)
        return () => clearInterval(interval)

    }, [authUser, loading])

    // return {}

}
export default updateToken