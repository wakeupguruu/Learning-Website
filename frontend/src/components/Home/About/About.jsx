// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";

// import AnimatedTitle from "./AnimatedTitle";

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   useGSAP(() => {
//     const clipAnimation = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#clip",
//         start: "center center",
//         end: "+=800 center",
//         scrub: 0.5,
//         pin: true,
//         pinSpacing: true,
//       },
//     });

//     clipAnimation.to(".mask-clip-path", {
//       width: "100vw",
//       height: "100vh",
//       borderRadius: 0,
//     });
//   });

//   return (
//     <div id="about" className="min-h-screen w-screen">
//       <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
//         <p className=" text-sm uppercase md:text-[10px]">
//           Welcome to Zentry
//         </p>

        
//         <AnimatedTitle
//           title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
//           containerClass="mt-5 text-center text-black"
//         />

//         <div className="about-subtext font-ComicNeue">
//           <p>The Game of Games begins—your life, now an epic MMORPG</p>
//           <p className="text-gray-500">
//             Zentry unites every player from countless games and platforms, both
//             digital and physical, into a unified Play Economy
//           </p>
//         </div>
//       </div>

//       <div className="h-dvh w-screen  " id="clip">
//         <div className="mask-clip-path about-image">
//           <img
//             src="Home/about.webp"
//             alt="Background"
//             className="absolute left-0 top-0 size-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation
      .to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
      })
     
  }, []);

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        {/* Tagline */}
        <p className="text-sm uppercase md:text-[10px]">Welcome to Codex</p>

        {/* Title */}
        <AnimatedTitle
          title="Empower<b>ing</b> Your <br /> DSA <b>Jo</b>urney"
          containerClass="mt-5 text-center text-black"
        />

        {/* Description */}
        <div className="about-subtext font-ComicNeue opacity-100 transition-opacity duration-500">
          <p>
            Master the art of **Data Structures and Algorithms** with Codex—a
            platform built to simplify learning and sharpen problem-solving
            skills.
          </p>
          <p className="text-lGray-200">
            Designed for aspiring programmers and seasoned developers alike,
            Codex brings resources, challenges, and tools to your fingertips.
          </p>
          <p>
            Whether you're preparing for competitive programming or cracking
            technical interviews, Codex has you covered.
          </p>
        </div>
      </div>

      {/* Animated Image Section */}
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="https://d3sujgifhk94se.cloudfront.net/wp-content/uploads/2022/11/10155449/websites_to_learn_coding.png"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
