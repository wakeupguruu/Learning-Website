

// import { useEffect, useRef, useState } from 'react'
// import { Dna, Gauge, Play, ChevronLeft, ChevronRight, Rocket, Star, Zap, Shield, Users, Cog, Globe, Book, Headphones, Briefcase, Leaf, Handshake } from 'lucide-react'
// import gsap from 'gsap'
// import { useNavigate } from 'react-router-dom'
// import Button from '../../components/utils/Button'
// import { TiLocationArrow } from 'react-icons/ti'
// import updateToken from '../../utils/updateToken'
// import Navbar from '../../components/Navbar/Navbar'

// export default function Theory() {


//     const navigate = useNavigate()

//   updateToken()


//     const [activeIndex, setActiveIndex] = useState(0)
//     const [selectedPanel, setSelectedPanel] = useState(null)
//     const containerRef = useRef(null)
//     const [canGoNext, setCanGoNext] = useState(true)
//     const [canGoPrev, setCanGoPrev] = useState(false)
//     const [visibleColumns, setVisibleColumns] = useState(3)

//     const data = [
//         {
//             id: "01", title: "String", icon: <Dna className="w-6 h-6" />, subtitle: "WATCH VIDEO", description: "Discover our revolutionary product", buttonText: "Enter", NavigateTO: '/theory/string'
//         },

//         { id: "02", title: "Array", icon: <Gauge className="w-6 h-6" />, subtitle: "OUR RESULTS", description: "See our benchmark results", buttonText: "View", NavigateTO: '/theory/array' },

//         { id: "03", title: "Hashing", icon: <Play className="w-6 h-6" />, subtitle: "SHOW MORE", description: "Browse our media gallery", buttonText: "Play", NavigateTO: '/theory/hashing' },


//         { id: "04", title: "Two Pointers", icon: <Star className="w-6 h-6" />, subtitle: "EXPLORE", description: "Discover key features", buttonText: "Learn", NavigateTO: '/theory/twopointers' },

//         { id: "05", title: "Stack", icon: <Rocket className="w-6 h-6" />, subtitle: "GET STARTED", description: "Begin your journey", buttonText: "Start", NavigateTO: '/theory/stack' },

//         { id: "06", title: "Binary Search", icon: <Headphones className="w-6 h-6" />, subtitle: "HELP CENTER", description: "Get assistance and resources", buttonText: "Contact", NavigateTO: '/theory/binarysearch' },

//         { id: "07", title: "Sliding Window", icon: <Users className="w-6 h-6" />, subtitle: "JOIN US", description: "Connect with other users", buttonText: "Engage", NavigateTO: '/theory/slidingwindow' },

//         { id: "08", title: "Linked List", icon: <Zap className="w-6 h-6" />, subtitle: "WHAT'S NEW", description: "Explore our latest innovations", buttonText: "Discover", NavigateTO: '/theory/linkedlist' },

//         { id: "09", title: "Trees", icon: <Shield className="w-6 h-6" />, subtitle: "STAY SAFE", description: "Learn about our security measures", buttonText: "Secure", NavigateTO: '/theory/trees' },

//         { id: "10", title: "Graphs", icon: <Cog className="w-6 h-6" />, subtitle: "CONNECT", description: "Explore our integration options", buttonText: "Connect", NavigateTO: '/theory/graphs' },

//         { id: "11", title: "Tries", icon: <Globe className="w-6 h-6" />, subtitle: "WORLDWIDE", description: "Our global presence and impact", buttonText: "Explore", NavigateTO: '/theory/tries' },

//         { id: "12", title: "Heap Priority Queue", icon: <Book className="w-6 h-6" />, subtitle: "EDUCATE", description: "Access our learning resources", buttonText: "Learn", NavigateTO: '/theory/heappriorityqueue' },

//         { id: "13", title: "Backtracking", icon: <Briefcase className="w-6 h-6" />, subtitle: "JOIN TEAM", description: "Explore career opportunities", buttonText: "Apply", NavigateTO: '/theory/backtracking' },

//         { id: "14", title: "Intervals", icon: <Leaf className="w-6 h-6" />, subtitle: "ECO-FRIENDLY", description: "Our commitment to sustainability", buttonText: "Discover", NavigateTO: '/theory/intervals' },

//         { id: "15", title: "Greedy", icon: <Handshake className="w-6 h-6" />, subtitle: "COLLABORATE", description: "Partner with us for success", buttonText: "Partner", NavigateTO: '/theory/greedy' },

//         { id: "16", title: "Dynamic Programming", icon: <Handshake className="w-6 h-6" />, subtitle: "COLLABORATE", description: "Partner with us for success", buttonText: "Partner", NavigateTO: '/theory/dynamicprogramming' },

//         { id: "17", title: "Bit Manipulation", icon: <Handshake className="w-6 h-6" />, subtitle: "COLLABORATE", description: "Partner with us for success", buttonText: "Partner", NavigateTO: '/theory/bitmanipulation' },

//         { id: "18", title: "Math & Geometry", icon: <Handshake className="w-6 h-6" />, subtitle: "COLLABORATE", description: "Partner with us for success", buttonText: "Partner", NavigateTO: '/theory/mathgeometry' },

//     ]

//     const handleNavigation = (direction) => {
//         const newIndex = direction === 'next'
//             ? Math.min(activeIndex + 1, data.length - visibleColumns)
//             : Math.max(activeIndex - 1, 0)

//         gsap.to(containerRef.current, {
//             x: `-${newIndex * (105 / visibleColumns)}%`,
//             duration: 0.4,
//             ease: "power3.out",
//             onComplete: () => {
//                 setActiveIndex(newIndex)
//                 setCanGoPrev(newIndex > 0)
//                 setCanGoNext(newIndex < data.length - visibleColumns)
//             }
//         })
//     }

//     useEffect(() => {
//         const updateLayout = () => {
//             const containerWidth = containerRef.current?.offsetWidth || 0
//             const newVisibleColumns = Math.max(1, Math.min(5, Math.floor(containerWidth / 240))) // Decreased column width
//             setVisibleColumns(newVisibleColumns)
//             setActiveIndex(0)
//             setCanGoPrev(false)
//             setCanGoNext(data.length > newVisibleColumns)

//             gsap.to(containerRef.current, {
//                 x: '0%',
//                 duration: 0.3,
//                 ease: "power2.out"
//             })
//         }

//         updateLayout()
//         window.addEventListener('resize', updateLayout)
//         return () => window.removeEventListener('resize', updateLayout)
//     }, [data.length])

//     const handlePanelClick = (id) => {
//         if (selectedPanel === id) {
//             setSelectedPanel(null)
//             animatePanel(id, false)
//         } else {
//             if (selectedPanel) {
//                 animatePanel(selectedPanel, false)
//             }
//             setSelectedPanel(id)
//             animatePanel(id, true)
//         }
//     }

//     const animatePanel = (id, isSelected) => {
//         gsap.to(`#panel-${id}`, {
//             backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
//             backdropFilter: `blur(${isSelected ? 10 : 0}px)`,
//             boxShadow: isSelected ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
//             border: isSelected ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
//             duration: 0.3,
//             ease: "power2.inOut"
//         })

//         gsap.to(`#line-${id}`, {
//             width: isSelected ? '15%' : '7.6%',
//             duration: 0.3,
//             ease: "power2.inOut"
//         })

//         gsap.to(`#content-${id}`, {
//             opacity: isSelected ? 1 : 0,
//             y: isSelected ? 0 : 20,
//             duration: 0.3,
//             ease: "power2.inOut"
//         })

//         // Animate other panels
//         data.forEach((item) => {
//             if (item.id !== id) {
//                 gsap.to(`#panel-${item.id}`, {
//                     opacity: isSelected ? 0.5 : 1,
//                     duration: 0.3,
//                     ease: "power2.inOut"
//                 })
//             }
//         })
//     }

//     return (
//         <div className="w-full h-screen overflow-hidden relative bg-lBackground text-lWhite">
    

//             <div className="absolute inset-0 overflow-hidden">
//                 {/* Navigation */}
//                 <div className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
//                     <button
//                         onClick={() => canGoPrev && handleNavigation('prev')}
//                         className={`w-8 h-8 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${canGoPrev
//                             ? 'border-blue-500/30 hover:bg-green-900/10 text-lGreen-500 '
//                             : 'border-gray-700 text-gray-700 cursor-not-allowed'
//                             }`}
//                         disabled={!canGoPrev}
//                         aria-label="Previous panel"
//                     >
//                         <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
//                     </button>
//                     <button
//                         onClick={() => canGoNext && handleNavigation('next')}
//                         className={`w-8 h-8 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${canGoNext
//                             ? 'border-blue-500/30 hover:bg-green-900/10 text-lGreen-500 '
//                             : 'border-gray-700 text-gray-700 cursor-not-allowed'
//                             }`}
//                         disabled={!canGoNext}
//                         aria-label="Next panel"
//                     >
//                         <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
//                     </button>
//                 </div>

//                 {/* Panels */}
//                 <div
//                     ref={containerRef}
//                     className="h-full flex transition-transform duration-500 ease-out"
//                     style={{ width: `${(data.length / visibleColumns) * 30}%` }}
//                 >
//                     {data.map((item) => (
//                         <div
//                             key={item.id}
//                             id={`panel-${item.id}`}
//                             className="h-full flex-shrink-0 border-r border-DGray-400 px-3 md:px-6 py-6 md:py-10 relative transition-all duration-300 cursor-pointer overflow-hidden bg-lBackground backdrop-blur-sm"
//                             style={{ width: `${100 / visibleColumns}%` }}
//                             onClick={() => handlePanelClick(item.id)}
//                         >
//                             {/* Number */}
//                             <div className="relative z-10">
//                                 <span className="text-white/60 font-mono text-xs md:text-sm">{item.id}</span>
//                                 <div id={`line-${item.id}`} className="line w-[7.6%] h-0.5 bg-lGreen-500 mt-2 md:mt-4 rounded-full transition-all duration-300" />
//                             </div>

//                             {/* Icon and Title */}
//                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full z-10">
//                                 <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center mx-auto mb-3 md:mb-6 text-white bg-white/10">
//                                     {item.icon}
//                                 </div>
//                                 <h2 className="text-lg md:text-xl text-white font-light mb-1 md:mb-2">{item.title}</h2>
//                                 <p className="text-lGreen-500  text-xs tracking-wider uppercase">
//                                     {item.subtitle}
//                                 </p>

//                                 {/* Click Content */}
//                                 <div
//                                     id={`content-${item.id}`}
//                                     className="panel-content absolute left-0 right-0 mt-3 md:mt-4 transition-all duration-300 opacity-0 px-2 md:px-4"
//                                 >
//                                     <p className="text-white/70 text-xs mb-3 md:mb-4">
//                                         {item.description}
//                                     </p>
//                                     <button
//                                         onClick={(e) => {
//                                             e.stopPropagation();
//                                             console.log(e);

//                                             navigate(`${item.NavigateTO}`)
//                                         }} className="px-4 py-1 md:px-6 md:py-2 bg-lGreen-500  text-white text-xs rounded-sm hover:bg-lGreen-300  transition-colors">
//                                         {item.buttonText}
//                                     </button>

//                                     <div
//                                      onClick={(e) => {
//                                         e.stopPropagation();
//                                         console.log(e);

//                                         navigate(`${item.NavigateTO}`)
//                                     }} 
//                                     className="mx-auto w-full mt-4 flex justify-center">
//                                         <Button
//                                             id={item.id}
//                                             title= {item.buttonText}
//                                             leftIcon={<TiLocationArrow />}
//                                             containerClass="bg-lWhite flex justify-center items-center gap-1 z-[40]"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }


import { useEffect, useRef, useState, useCallback } from 'react'
import { Dna, Gauge, Play, ChevronLeft, ChevronRight, Rocket, Star, Zap, Shield, Users, Cog, Globe, Book, Headphones, Briefcase, Leaf, Handshake, List, Hash, ArrowLeftRight, Layers, Search, Move, Link, GitBranch, Network, TreePine, BarChart, Undo2, SplitSquareHorizontal, Grab, Puzzle, Binary, Calculator } from 'lucide-react'
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/utils/Button'
import { TiLocationArrow } from 'react-icons/ti'
import updateToken from '../../utils/updateToken'
import Navbar from '../../components/Navbar/Navbar'

export default function Theory() {
    const navigate = useNavigate()
    updateToken()

    const [selectedPanel, setSelectedPanel] = useState(null)
    const containerRef = useRef(null)
    const [visibleColumns, setVisibleColumns] = useState(3)
    const [isMobile, setIsMobile] = useState(false)

    const isDragging = useRef(false)
    const startY = useRef(0)
    const scrollLeft = useRef(0)

    const data = [
        { id: "01", title: "String", icon: <Dna className="w-6 h-6" />, subtitle: "Learn More", description: "Explore string manipulation techniques and algorithms", buttonText: "Enter", NavigateTO: '/theory/string' },
        { id: "02", title: "Array", icon: <List className="w-6 h-6" />, subtitle: "OUR RESULTS", description: "Master array operations and data structures", buttonText: "View", NavigateTO: '/theory/array' },
        { id: "03", title: "Hashing", icon: <Hash className="w-6 h-6" />, subtitle: "SHOW MORE", description: "Understand hash functions and their applications", buttonText: "Play", NavigateTO: '/theory/hashing' },
        { id: "04", title: "Two Pointers", icon: <ArrowLeftRight className="w-6 h-6" />, subtitle: "EXPLORE", description: "Learn efficient two-pointer algorithms", buttonText: "Learn", NavigateTO: '/theory/twopointers' },
        { id: "05", title: "Stack", icon: <Layers className="w-6 h-6" />, subtitle: "GET STARTED", description: "Dive into stack data structure and its uses", buttonText: "Start", NavigateTO: '/theory/stack' },
        { id: "06", title: "Binary Search", icon: <Search className="w-6 h-6" />, subtitle: "HELP CENTER", description: "Master the binary search algorithm", buttonText: "Contact", NavigateTO: '/theory/binarysearch' },
        { id: "07", title: "Sliding Window", icon: <Move className="w-6 h-6" />, subtitle: "JOIN US", description: "Explore sliding window technique for optimization", buttonText: "Engage", NavigateTO: '/theory/slidingwindow' },
        { id: "08", title: "Linked List", icon: <Link className="w-6 h-6" />, subtitle: "WHAT'S NEW", description: "Understand linked list structure and operations", buttonText: "Discover", NavigateTO: '/theory/linkedlist' },
        { id: "09", title: "Trees", icon: <GitBranch className="w-6 h-6" />, subtitle: "STAY SAFE", description: "Learn tree data structures and traversals", buttonText: "Secure", NavigateTO: '/theory/trees' },
        { id: "10", title: "Graphs", icon: <Network className="w-6 h-6" />, subtitle: "CONNECT", description: "Explore graph algorithms and representations", buttonText: "Connect", NavigateTO: '/theory/graphs' },
        { id: "11", title: "Tries", icon: <TreePine className="w-6 h-6" />, subtitle: "WORLDWIDE", description: "Discover trie data structure for efficient retrieval", buttonText: "Explore", NavigateTO: '/theory/tries' },
        { id: "12", title: "Heap Priority Queue", icon: <BarChart className="w-6 h-6" />, subtitle: "EDUCATE", description: "Master heap and priority queue operations", buttonText: "Learn", NavigateTO: '/theory/heappriorityqueue' },
        { id: "13", title: "Backtracking", icon: <Undo2 className="w-6 h-6" />, subtitle: "JOIN TEAM", description: "Learn backtracking algorithms for problem-solving", buttonText: "Apply", NavigateTO: '/theory/backtracking' },
        { id: "14", title: "Intervals", icon: <SplitSquareHorizontal className="w-6 h-6" />, subtitle: "ECO-FRIENDLY", description: "Explore interval-based algorithms and problems", buttonText: "Discover", NavigateTO: '/theory/intervals' },
        { id: "15", title: "Greedy", icon: <Grab className="w-6 h-6" />, subtitle: "COLLABORATE", description: "Understand greedy algorithms and their applications", buttonText: "Partner", NavigateTO: '/theory/greedy' },
        { id: "16", title: "Dynamic Programming", icon: <Puzzle className="w-6 h-6" />, subtitle: "COLLABORATE", description: "Master dynamic programming techniques", buttonText: "Partner", NavigateTO: '/theory/dynamicprogramming' },
        { id: "17", title: "Bit Manipulation", icon: <Binary className="w-6 h-6" />, subtitle: "COLLABORATE", description: "Learn bitwise operations and their uses", buttonText: "Partner", NavigateTO: '/theory/bitmanipulation' },
        { id: "18", title: "Math & Geometry", icon: <Calculator className="w-6 h-6" />, subtitle: "COLLABORATE", description: "Explore mathematical and geometric algorithms", buttonText: "Partner", NavigateTO: '/theory/mathgeometry' },
    ]

    const handlePanelClick = (id) => {
        if (selectedPanel === id) {
            setSelectedPanel(null)
            animatePanel(id, false)
        } else {
            if (selectedPanel) {
                animatePanel(selectedPanel, false)
            }
            setSelectedPanel(id)
            animatePanel(id, true)
        }
    }

    const animatePanel = (id, isSelected) => {
        gsap.to(`#panel-${id}`, {
            backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
            backdropFilter: `blur(${isSelected ? 10 : 0}px)`,
            boxShadow: isSelected ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
            border: isSelected ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
            duration: 0.3,
            ease: "power2.inOut"
        })

        gsap.to(`#line-${id}`, {
            width: isSelected ? '15%' : '7.6%',
            duration: 0.3,
            ease: "power2.inOut"
        })

        gsap.to(`#content-${id}`, {
            opacity: isSelected ? 1 : 0,
            y: isSelected ? 0 : 20,
            duration: 0.3,
            ease: "power2.inOut"
        })

        // Animate other panels
        data.forEach((item) => {
            if (item.id !== id) {
                gsap.to(`#panel-${item.id}`, {
                    opacity: isSelected ? 0.5 : 1,
                    duration: 0.3,
                    ease: "power2.inOut"
                })
            }
        })
    }

    const handleWheel = useCallback((e) => {
        if (isMobile) return;
        e.preventDefault();
        const container = containerRef.current;
        if (container) {
            container.scrollLeft += e.deltaY;
        }
    }, [isMobile]);

    const handleMouseDown = useCallback((e) => {
        if (isMobile) return;
        isDragging.current = true;
        startY.current = e.pageY - containerRef.current.offsetTop;
        scrollLeft.current = containerRef.current.scrollLeft;
    }, [isMobile]);

    const handleMouseMove = useCallback((e) => {
        if (isMobile || !isDragging.current) return;
        e.preventDefault();
        const y = e.pageY - containerRef.current.offsetTop;
        const walk = (y - startY.current) * 3; // Adjust scrolling speed
        containerRef.current.scrollLeft = scrollLeft.current - walk;
    }, [isMobile]);

    const handleMouseUp = useCallback(() => {
        isDragging.current = false;
    }, []);

    useEffect(() => {
        const updateLayout = () => {
            const containerWidth = containerRef.current?.offsetWidth || 0
            const isMobileView = window.innerWidth < 768 // Adjust this breakpoint as needed
            setIsMobile(isMobileView)
            const newVisibleColumns = isMobileView ? 1 : Math.max(1, Math.min(5, Math.floor(containerWidth / 240)))
            setVisibleColumns(newVisibleColumns)

            gsap.to(containerRef.current, {
                x: '0%',
                duration: 0.3,
                ease: "power2.out"
            })
        }

        updateLayout()
        window.addEventListener('resize', updateLayout)
        return () => window.removeEventListener('resize', updateLayout)
    }, [setVisibleColumns])

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false });
            container.addEventListener('mousedown', handleMouseDown);
            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseup', handleMouseUp);
            container.addEventListener('mouseleave', handleMouseUp);

            return () => {
                container.removeEventListener('wheel', handleWheel);
                container.removeEventListener('mousedown', handleMouseDown);
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseup', handleMouseUp);
                container.removeEventListener('mouseleave', handleMouseUp);
            };
        }
    }, [handleWheel, handleMouseDown, handleMouseMove, handleMouseUp]);

    return (
        <div className="w-full h-screen overflow-hidden relative bg-lBackground text-lWhite">
            <div className={`absolute inset-0 ${isMobile ? 'overflow-y-auto' : 'overflow-hidden '}`}>
                {/* Panels */}
                <div
                    ref={containerRef}
                    className={`h-full transition-transform duration-500 ease-out ${isMobile ? 'flex flex-col' : 'flex overflow-x-auto cursor-grab active:cursor-grabbing no-scrollbar'}`}
                    style={isMobile ? {} : { width: `${(data.length / visibleColumns) * 30}%` }}
                >
                    {data.map((item) => (
                        <div
                            key={item.id}
                            id={`panel-${item.id}`}
                            className={`flex-shrink-0 border-r border-DGray-400 px-3 md:px-6 py-6 md:py-10 relative transition-all duration-300 cursor-pointer overflow-hidden bg-lBackground backdrop-blur-sm ${isMobile ? 'w-full' : ''}`}
                            style={isMobile ? { minHeight: '300px' } : { width: `${100 / visibleColumns}%`, height: '100%' }}
                            onClick={() => handlePanelClick(item.id)}
                        >
                            {/* Number */}
                            <div className="relative z-10">
                                <span className="text-white/60 font-mono text-xs md:text-sm">{item.id}</span>
                                <div id={`line-${item.id}`} className="line w-[7.6%] h-0.5 bg-lGreen-500 mt-2 md:mt-4 rounded-full transition-all duration-300" />
                            </div>

                            {/* Icon and Title */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full z-10">
                                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center mx-auto mb-3 md:mb-6 text-white bg-white/10">
                                    {item.icon}
                                </div>
                                <h2 className="text-lg md:text-xl text-white font-light mb-1 md:mb-2">{item.title}</h2>
                                <p className="text-lGreen-500  text-xs tracking-wider uppercase">
                                    {/* {item.subtitle} */}
                                    Learn More
                                </p>

                                {/* Click Content */}
                                <div
                                    id={`content-${item.id}`}
                                    className="panel-content absolute left-0 right-0 mt-3 md:mt-4 transition-all duration-300 opacity-0 px-2 md:px-4"
                                >
                                    <p className="text-white/70 text-xs mb-3 md:mb-4">
                                        {item.description}
                                    </p>

                                    <div
                                     onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`${item.NavigateTO}`)
                                    }} 
                                    className="mx-auto w-full mt-4 flex justify-center">
                                        <Button
                                            id={item.id}
                                            title='Start Learning'
                                            leftIcon={<TiLocationArrow />}
                                            containerClass="bg-lWhite flex justify-center items-center gap-1 z-[40]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

