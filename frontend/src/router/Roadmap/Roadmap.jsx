
// import React, { useCallback, useEffect, useState,useContext } from 'react';
// import {
//   ReactFlow,
//   useNodesState,
//   useEdgesState,
//   addEdge,
//   MiniMap,
//   Controls,
//   Background,
// } from '@xyflow/react';

// import '@xyflow/react/dist/base.css';

// import '../../../tailwind.config';

// import { Handle, Position } from '@xyflow/react';
// import gsap from 'gsap';
// import Navbar from '../../components/Navbar/Navbar';
// import { useNavigate } from 'react-router-dom';
// import { ProblemContext } from '../../context/useProblemContext';
// import updateToken from '../../utils/updateToken';
// import useGetTopicProgress from '../../hook/useGetTopicProgress';
// import useGetAllProgressList from '../../hook/useGetAllProgressList';


// function CustomNode({ data }) {
//   const { setCurrentTopic } = useContext(ProblemContext);

//   const [percentage, setPercentage] = useState(data.progress || 0); 
//   const navigate = useNavigate();

//   const handleNodeClick = (e,data) => {
//     setCurrentTopic(data.label)
//     navigate(`${data.navigateTo}`);
//   };

//   return (
//     <div
//       onClick={(e) => {
//         e.preventDefault();
//         handleNodeClick(e,data);
        
//       }}
//       className={`px-1 py-2 rounded-[8px] text-white border-[2px] border-gray-400 ${percentage == 100 ? 'bg-lGreen-600' : "bg-lGreen-300"}  shadow-md`}
//       style={{
//         textAlign: "center",
//         fontFamily: "Arial, sans-serif",
//         width: "150px",
//       }}
//     >
//       <div className="text-sm font-medium">{data.label}</div>

//       <div className="w-full h-[11px] bg-gray-300 rounded-full relative overflow-hidden mt-[2px]">

//         <div
//           id={`progress-bar-${data.id}`}
//           className="h-full bg-lGreen-400 rounded-full"
//           style={{ width: `${percentage}%` }}
//         ></div>

//         {/* <div className="absolute top-0 left-0 h-full flex items-center justify-center font-bold text-xs w-full text-white">
//           {Math.round(percentage)}%
//         </div> */}
//       </div>


//       <Handle
//         type="target"
//         position={Position.Top}
//         className="!bg-teal-500 rounded-full border border-white"
//       />
//       <Handle
//         type="source"
//         position={Position.Bottom}
//         className="!bg-teal-500 rounded-full border border-white"
//       />
//     </div>
//   );
// }
// const nodeTypes = {
//   custom: CustomNode,
// };



// const Flow = () => {
//   const {loading,topicProgress} = useGetAllProgressList();
//   const calculatedPercentage = Math.min((topicProgress?.solved_questions / topicProgress?.total_questions) * 100, 100);



//   updateToken()

//   console.log(topicProgress);
  
//   const calculatePercentage = (solved, total) => Math.min((solved / total) * 100, 100);

  
// // const initialNodes = [
// //   { id: 'Node-1', type: "custom", data: { label: 'Arrays & Hasing', progress: calculatedPercentage, navigateTo: '/questions' }, position: { x: 0, y: 0 }, style: { backgroundColor: '#315EFF', color: '#FFFFFF', borderRadius: '8px' } },
// //   { id: 'Node-2', type: "custom", data: { label: 'Two Pointers', progress: calculatedPercentage, navigateTo: '/questions' }, position: { x: -200, y: 120 }, style: { backgroundColor: '#315EFF', color: '#FFFFFF', borderRadius: '8px' } },
// //   { id: 'Node-3', type: 'custom', data: { label: 'Stack', progress: calculatedPercentage, navigateTo: '/questions' }, position: { x: 200, y: 120 }, style: { backgroundColor: '#315EFF', color: '#FFFFFF', borderRadius: '8px' } },

// //   { id: 'Node-4', type: "custom", data: { label: 'Binary Search', progress: '50', navigateTo: '/questions' }, position: { x: -400, y: 240 }, style: { backgroundColor: '#315EFF', color: '#FFFFFF', borderRadius: '8px' } },
// //   { id: 'Node-5', type: "custom", data: { label: 'Sliding Window', progress: calculatedPercentage, navigateTo: '/questions' }, position: { x: -150, y: 240 }, style: { backgroundColor: '#315EFF', color: '#FFFFFF', borderRadius: '8px' } },
// //   { id: 'Node-6', type: "custom", data: { label: 'Linked List', progress: calculatedPercentage, navigateTo: '/questions' }, position: { x: 100, y: 240 }, style: { backgroundColor: '#315EFF', color: '#FFFFFF', borderRadius: '8px' } },

// //   { id: 'Node-7', type: "custom", data: { label: 'Trees', progress: calculatedPercentage, navigateTo: '/questions' }, position: { x: -200, y: 360 }, style: { backgroundColor: '#315EFF', color: '#FFFFFF', borderRadius: '8px' } },

// //   { id: 'Node-8', type: 'custom', data: { label: 'Tries', progress: calculatedPercentage, navigateTo: '/questions' }, position: { x: -300, y: 480 }, style: { backgroundColor: '#315EFF', color: '#FFFFFF', borderRadius: '8px' } },
// //   { id: 'Node-9', type: "custom", data: { label: 'Heap / Priority Queue', progress: '70', navigateTo: '/questions' }, position: { x: -180, y: 580 }, style: { backgroundColor: '#315EFF', color: '#FFFFFF', borderRadius: '8px' } },
// //   { id: 'Node-10', type: "custom", data: { label: 'Backtracking', progress: calculatedPercentage, navigateTo: '/questions' }, position: { x: 300, y: 480 }, style: { backgroundColor: '#315EFF', color: '#FFFFFF', borderRadius: '8px' } },

// //   { id: 'Node-11', type: 'custom', data: { label: 'Intervals', progress: calculatedPercentage, navigateTo: '/questions' }, position: { x: -400, y: 700 }, style: { backgroundColor: '#315EFF', color: '#FFFFFF', borderRadius: '8px' } },
// //   { id: 'Node-12', type: 'custom', data: { label: 'Greedy', progress: calculatedPercentage, navigateTo: '/questions' }, position: { x: -200, y: 700 }, style: { backgroundColor: '#315EFF', color: '#FFFFFF', borderRadius: '8px' } },
// //   { id: 'Node-13', type: 'custom', data: { label: 'Advanced Graphs', progress: calculatedPercentage, navigateTo: '/questions' }, position: { x: 0, y: 700 }, style: { backgroundColor: '#315EFF', color: '#FFFFFF', borderRadius: '8px' } },


// //   { id: 'Node-14', type: "custom", data: { label: 'Graphs', progress: calculatedPercentage, navigateTo: '/questions' }, position: { x: 200, y: 580 }, style: { backgroundColor: '#315EFF', color: '#FFFFFF', borderRadius: '8px' } },
// //   { id: 'Node-15', type: "custom", data: { label: '1-D Dynamic Programming', progress: calculatedPercentage, navigateTo: '/questions' }, position: { x: 400, y: 580 }, style: { backgroundColor: '#315EFF', color: '#FFFFFF', borderRadius: '8px' } },

// //   { id: 'Node-16', type: 'custom', data: { label: '2-D Dynamic Programming', progress: calculatedPercentage, navigateTo: '/questions' }, position: { x: 300, y: 700 }, style: { backgroundColor: '#315EFF', color: '#FFFFFF', borderRadius: '8px' } },
// //   { id: 'Node-17', type: "custom", data: { label: 'Bit Manipulation', progress: '10', navigateTo: '/questions' }, position: { x: 500, y: 700 }, style: { backgroundColor: '#315EFF', color: '#FFFFFF', borderRadius: '8px' } },

// //   { id: 'Node-18', type: 'custom', data: { label: 'Math & Geometry', progress: calculatedPercentage, navigateTo: '/questions' }, position: { x: 180, y: 820 }, style: { backgroundColor: '#315EFF', color: '#FFFFFF', borderRadius: '8px' } },
// // ];

// const initialNodes = topicProgress?.map((topic, index) => ({
//   id: `Node-${index + 1}`, // Generate a unique id for each node
//   type: "custom",
//   data: {
//     label: topic.topic, // Assuming topic.name exists
//     progress: calculatePercentage(topic.solved_questions, topic.total_questions),
//     navigateTo: `/questions`, // Assuming topic.id exists
//   },
//   position: { x: index * 200, y: index * 120 }, // Adjust positioning as needed
// }));


// const initialEdges = [
//   { id: 'e1-2', source: 'Node-1', target: 'Node-2', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
//   { id: 'e1-3', source: 'Node-1', target: 'Node-3', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
//   { id: 'e2-4', source: 'Node-2', target: 'Node-4', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
//   { id: 'e2-5', source: 'Node-2', target: 'Node-5', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
//   { id: 'e2-6', source: 'Node-2', target: 'Node-6', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
//   { id: 'e4-7', source: 'Node-4', target: 'Node-7', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
//   { id: 'e5-7', source: 'Node-5', target: 'Node-7', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
//   { id: 'e6-7', source: 'Node-6', target: 'Node-7', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },

//   { id: 'e7-8', source: 'Node-7', target: 'Node-8', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
//   { id: 'e7-9', source: 'Node-7', target: 'Node-9', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
//   { id: 'e7-10', source: 'Node-7', target: 'Node-10', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },

//   { id: 'e9-11', source: 'Node-9', target: 'Node-11', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
//   { id: 'e9-12', source: 'Node-9', target: 'Node-12', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
//   { id: 'e9-13', source: 'Node-9', target: 'Node-13', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },

//   { id: 'e10-14', source: 'Node-10', target: 'Node-14', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
//   { id: 'e10-15', source: 'Node-10', target: 'Node-15', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
//   { id: 'e14-13', source: 'Node-14', target: 'Node-13', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },

//   { id: 'e14-16', source: 'Node-14', target: 'Node-16', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
//   { id: 'e14-18', source: 'Node-14', target: 'Node-18', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },

//   { id: 'e15-16', source: 'Node-15', target: 'Node-16', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
//   { id: 'e15-17', source: 'Node-15', target: 'Node-17', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },

//   { id: 'e17-18', source: 'Node-17', target: 'Node-18', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
// ]

 
//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

//   const fitViewOptions = { padding: 0.18 };


 
//   return (
//     <div className='w-full h-screen bg-lBackground overflow-hidden'>
//      <div className="w-full bg-lBackground">
//      < Navbar />
//      </div>
//       <div className="h-[90%] overflow-hidden">
//         <ReactFlow
//           nodes={nodes}
//           edges={edges}
//           onNodesChange={onNodesChange}
//           onEdgesChange={onEdgesChange}
//           nodeTypes={nodeTypes}
//           fitView
//           fitViewOptions={fitViewOptions}
//           style={{ backgroundColor: '#000000' }}
//           className="bg-teal-50"
//         >
//           {/* <MiniMap /> */}
//           <Controls/>
//           <Background gap={16} size={0.5} color="#e4e4e7" />
//         </ReactFlow>
//       </div>
//     </div>
//   );
// };

// export default Flow;



import React, { useEffect, useState, useContext } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
  Background,
} from '@xyflow/react';
import '@xyflow/react/dist/base.css';
import '../../../tailwind.config';
import { Handle, Position } from '@xyflow/react';
import gsap from 'gsap';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { ProblemContext } from '../../context/useProblemContext';
import updateToken from '../../utils/updateToken';
import useGetAllProgressList from '../../hook/useGetAllProgressList';

function CustomNode({ data }) {
  const { setCurrentTopic } = useContext(ProblemContext);
  const [percentage, setPercentage] = useState(data.progress || 0);
  const navigate = useNavigate();

  const handleNodeClick = (e, data) => {
    setCurrentTopic(data.label);
    navigate(`${data.navigateTo}`);
  };

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        handleNodeClick(e, data);
      }}
      className={`px-1 py-2 rounded-[8px] text-white border-[2px] border-gray-400 ${percentage === 100 ? 'bg-lGreen-600' : "bg-lGreen-300"} shadow-md`}
      style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        width: "150px",
      }}
    >
      <div className="text-sm font-medium">{data.label}</div>

      <div className="w-full h-[11px] bg-gray-300 rounded-full relative overflow-hidden mt-[2px]">
        <div
          id={`progress-bar-${data.id}`}
          className="h-full bg-lGreen-400 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        className="!bg-teal-500 rounded-full border border-white"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-teal-500 rounded-full border border-white"
      />
    </div>
  );
}

const nodeTypes = {
  custom: CustomNode,
};

const Flow = () => {
  const { loading, topicProgress } = useGetAllProgressList();  // Fetch data
  const [nodes, setNodes] = useState([]);  // State for nodes
  const [edges, setEdges] = useState([]);  // State for edges
  const positions = [
    { x: 0, y: 0 },
    { x: -200, y: 120 },
    { x: 200, y: 120 },
    { x: -400, y: 240 },
    { x: -150, y: 240 },
    { x: 100, y: 240 },
    { x: -200, y: 360 },
    { x: -300, y: 480 },
    { x: -180, y: 580 },
    { x: 300, y: 480 },
    { x: -400, y: 700 },
    { x: -200, y: 700 },
    { x: 0, y: 700 },
    { x: 200, y: 580 },
    { x: 400, y: 580 },
    { x: 300, y: 700 },
    { x: 500, y: 700 },
    { x: 180, y: 820 }
  ];


  useEffect(() => {
    // Check if topicProgress is available
    if (topicProgress) {
      const initialNodes = topicProgress?.map((topic, index) => ({
        id: `Node-${index + 1}`,
        type: "custom",
        data: {
          label: topic.topic,
          progress: Math.min((topic.solved_questions / topic.total_questions) * 100, 100),
          navigateTo: `/questions`, // assuming topic.id exists
        },
        // position: { x: index * 200, y: index * 120 }, // Adjust positioning as needed
        position: positions[index] || { x: index * 200, y: index * 120 }, // Default to a calculated position if needed
       
      }));
      setNodes(initialNodes);
      
      // Set edges similarly if needed
     

      const initialEdges = [
  { id: 'e1-2', source: 'Node-1', target: 'Node-2', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
  { id: 'e1-3', source: 'Node-1', target: 'Node-3', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
  { id: 'e2-4', source: 'Node-2', target: 'Node-4', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
  { id: 'e2-5', source: 'Node-2', target: 'Node-5', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
  { id: 'e2-6', source: 'Node-2', target: 'Node-6', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
  { id: 'e4-7', source: 'Node-4', target: 'Node-7', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
  { id: 'e5-7', source: 'Node-5', target: 'Node-7', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
  { id: 'e6-7', source: 'Node-6', target: 'Node-7', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },

  { id: 'e7-8', source: 'Node-7', target: 'Node-8', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
  { id: 'e7-9', source: 'Node-7', target: 'Node-9', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
  { id: 'e7-10', source: 'Node-7', target: 'Node-10', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },

  { id: 'e9-11', source: 'Node-9', target: 'Node-11', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
  { id: 'e9-12', source: 'Node-9', target: 'Node-12', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
  { id: 'e9-13', source: 'Node-9', target: 'Node-13', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },

  { id: 'e10-14', source: 'Node-10', target: 'Node-14', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
  { id: 'e10-15', source: 'Node-10', target: 'Node-15', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
  { id: 'e14-13', source: 'Node-14', target: 'Node-13', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },

  { id: 'e14-16', source: 'Node-14', target: 'Node-16', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
  { id: 'e14-18', source: 'Node-14', target: 'Node-18', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },

  { id: 'e15-16', source: 'Node-15', target: 'Node-16', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
  { id: 'e15-17', source: 'Node-15', target: 'Node-17', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },

  { id: 'e17-18', source: 'Node-17', target: 'Node-18', animated: false, markerEnd: { type: 'arrowclosed' }, style: { stroke: '#FBF0DA', strokeWidth: 1.6 } },
]



      setEdges(initialEdges);
    }
  }, [topicProgress]);  // Update when topicProgress changes

  updateToken();  // Token update function (if necessary)

  if (loading || !topicProgress) {
    return <div>Loading...</div>;  // Show loading state until data is fetched
  }

  return (
    <div className="w-full h-screen bg-lBackground overflow-hidden">
      <div className="w-full bg-lBackground">
        <Navbar />
      </div>
      <div className="h-[90%] overflow-hidden">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.18 }}
          style={{ backgroundColor: '#000000' }}
          className="bg-teal-50"
        >
          <Controls />
          <Background gap={16} size={0.5} color="#e4e4e7" />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Flow;
