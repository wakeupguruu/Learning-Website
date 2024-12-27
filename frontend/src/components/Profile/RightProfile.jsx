import { useContext, useEffect, useState } from "react";
import ProgressProfile from "./ProgressProfile";
import { AuthContext } from "../../context/useAuthContext";
import { FaQuestion, FaCheckCircle, FaHourglassHalf, FaClipboardList } from "react-icons/fa"; // Example icons

const RightProfile = ({ userData }) => {
  const totalquestion = userData.progress?.total_questions;
  const solvedquestion = userData.progress?.solved_questions;
  const remaingquestion = userData.progress?.remaining_questions;

  const [topiccomplted, settopiccomplted] = useState(null);

  const getProgress = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("codex-user"));

      const res = await fetch(`http://localhost:8000/api/topics/completed/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.access}`,
        },
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      settopiccomplted(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProgress();
  }, []);

  // Map text to specific icons
  const icons = {
    "Total Questions": <FaQuestion className="text-lg md:text-xl text-[#111111]" />,
    Solved: <FaCheckCircle className="text-lg md:text-xl text-[#111111]" />,
    Remaining: <FaHourglassHalf className="text-lg md:text-xl text-[#111111]" />,
    "Topic Complete": <FaClipboardList className="text-lg md:text-xl text-[#111111]" />,
  };

  return (
    <>
      <div className="w-full md:w-[30%] lg:w-[25.5%] h-full bg-[#5CAB8C] rounded-3xl z-0 text-[#F1F2F6] flex flex-col items-center p-6 pb-20">
        {/* Profile Section */}
        <div className="flex flex-col items-center justify-center mb-6">
          <img
            className="w-20 h-20 md:w-24 md:h-24 rounded-2xl"
            src={`${userData.profile_picture}`}
            alt="profile-pic"
          />
          <div className="text-lg md:text-xl font-semibold mt-2">
            {userData.username}
          </div>
          <div className="text-gray-200 text-sm md:text-base font-semibold -mt-1">
            {userData.email}
          </div>
        </div>

        {/* Progress Bar Section */}
        <div className="w-full px-4 text-[#111111] mb-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-medium">Progress</h3>
            <h6 className="text-sm">icon</h6>
          </div>
          <div className="mt-4">
            <ProgressProfile progress={userData.progress} />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 gap-4 text-[#211112] w-full">
          <StatCard
            title="Total Questions"
            value={totalquestion ? totalquestion : "Loading..."}
            icon={icons["Total Questions"]}
          />
          <StatCard
            title="Solved"
            value={solvedquestion ? solvedquestion : "Loading..."}
            icon={icons["Solved"]}
          />
          <StatCard
            title="Remaining"
            value={remaingquestion ? remaingquestion : "Loading..."}
            icon={icons["Remaining"]}
          />
          <StatCard
            title="Topic Complete"
            value={`${topiccomplted?.completed_topics.length || 0}/18`}
            icon={icons["Topic Complete"]}
          />
        </div>
      </div>
    </>
  );
};

const StatCard = ({ title, value, icon }) => (
  <div className="bg-[#80b7a1] relative min-w-[100px] min-h-[100px] rounded-3xl flex flex-col items-center justify-center p-3 text-center">
    <div className="absolute top-2 left-3">{icon}</div>
    <div className="text-xs md:text-sm">{title}</div>
    <div className="text-lg md:text-xl font-semibold">{value}</div>
  </div>
);

export default RightProfile;
