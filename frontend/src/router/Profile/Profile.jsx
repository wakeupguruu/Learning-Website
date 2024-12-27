import MouseTrail from "../../components/Home/Mouse/MouseTrail";
import Navbar from "../../components/Navbar/Navbar";
import ProfileComp from "../../components/Profile/ProfileComp";
import { useContext } from 'react';
import useGetProgress from "../../hook/useGetProgress";
import updateToken from "../../utils/updateToken";


const Profile = () => {

    updateToken()
    

    return (
        <>
            <div className="profile w-full min-h-[100vh] overflow-hidden  bg-[#111111]">
                <Navbar />
                {/* <MouseTrail /> */}
                < ProfileComp />



            </div>
        </>
    )
}
export default Profile