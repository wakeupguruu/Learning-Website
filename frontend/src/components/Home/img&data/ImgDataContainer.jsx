


import React from 'react';
import IMGWDATA from "./IMGWDATA";

const ImgDataContainer = () => {
  const data = [
    {
      imgg: "/Home/Roadmap.png",
      text: {
        h2: "Roadmap",
        h4: "Track Your Learning Journey",
        h6: "Plan your Data Structures and Algorithms (DSA) learning path effectively. The Roadmap feature guides you through beginner to advanced topics, ensuring steady progress towards your goals.",
      },
      buttonData: {
        text : 'Learn More',
        navigateTo: '/roadmap'
      }
    },
    {
      imgg: "/Home/questions.png",
      text: {
        h2: "Revision",
        h4: "Master What You've Learned",
        h6: "Solidify your knowledge with the Revision feature. Revisit key concepts, solve related problems, and ensure long-term retention with curated revision plans and interactive exercises.",
      },
      buttonData: {
        text : 'Learn More',
        navigateTo: '/revision'
      }
    },
    {
      imgg: "/Home/Notes.png",
      text: {
        h2: "Notes",
        h4: "Keep Important Insights Handy",
        h6: "Never lose track of important details with the Notes functionality. Create, edit, and organize your notes seamlessly while you learn, making it easier to review and understand key concepts.",
      },
      buttonData: {
        text : 'Learn More',
        navigateTo: '/notes'
      }
    },
  ];

  return (
    <div className="w-full min-h-screen md:h-[300vh] flex flex-col">
      {data.map((item, index) => (
        <div key={index} className="w-full min-h-screen flex items-center justify-center">
          <IMGWDATA imgSrc={item.imgg} text={item.text} buttonData={item.buttonData} />
        </div>
      ))}
    </div>
  );
};

export default ImgDataContainer;

