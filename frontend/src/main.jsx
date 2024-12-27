
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Theory from './router/Theory/Theory.jsx'
import Profile from './router/Profile/Profile.jsx'
import Questions from './router/Questions/Questions.jsx'
import Revision from './router/Revision/Revision.jsx'
import Roadmap from './router/Roadmap/Roadmap.jsx'
import Note from './router/Note/Note.jsx'


import TopicTheory from './router/Theory/TopicTheory.jsx'
import String from './components/Theory/String.jsx'
import Array from './components/Theory/Array.jsx'
import Hashing from './components/Theory/Hashing.jsx'
import TwoPointers from './components/Theory/TwoPointers.jsx'
import Stack from './components/Theory/Stack.jsx'
import BinarySearch from './components/Theory/BinarySearch.jsx'
import SlidingWindow from './components/Theory/SlidingWindow.jsx'
import LinkedList from './components/Theory/LinkedList.jsx'
import Trees from './components/Theory/Trees.jsx'
import Graphs from './components/Theory/Graphs.jsx'
import Tries from './components/Theory/Tries.jsx'
import HeapPriorityQueue from './components/Theory/HeapPriorityQueue.jsx'
import Backtracking from './components/Theory/Backtracking.jsx'
import Intervals from './components/Theory/Intervals.jsx'
import Greedy from './components/Theory/Greedy.jsx'
import DynamicProgramming from './components/Theory/DynamicProgramming.jsx'
import BitManipulation from './components/Theory/BitManipulation.jsx'
import MathGeometry from './components/Theory/MathGeometry.jsx'


import Login from './router/LoginRegister/Login.jsx'
import Register from './router/LoginRegister/Register.jsx'
import { ProblemContextProvider } from './context/useProblemContext.jsx'
import { NoteContextProvider } from './context/useNoteContent.jsx'



const topics = {
  string: <String />,
  array: <Array />,
  hashing: <Hashing />,
  twopointers: <TwoPointers />,
  stack: <Stack />,
  binarysearch: <BinarySearch />,
  slidingwindow: <SlidingWindow />,
  linkedlist: <LinkedList />,
  trees: <Trees />,
  graphs: <Graphs />,
  tries: <Tries />,
  heappriorityqueue: <HeapPriorityQueue />,
  backtracking: <Backtracking />,
  intervals: <Intervals />,
  greedy: <Greedy />,
  dynamicprogramming: <DynamicProgramming />,
  bitmanipulation: <BitManipulation />,
  mathgeometry: <MathGeometry />,
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/theory',
    element: < Theory />,
  },
  {
    path: '/theory/:id',
    element: < TopicTheory />
  },
  {
    path: '/profile',
    element: < Profile />
  },
  {
    path: '/questions',
    element: < Questions />
  },
  {
    path: '/revision',
    element: < Revision />
  },
  {
    path: '/notes',
    element: < Note />
  },
  {
    path: '/roadmap',
    element: < Roadmap />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'register',
    element: < Register />
  }

], {
  future: {
    v7_startTransition: true,
  },
})

createRoot(document.getElementById('root')).render(
 

      <ProblemContextProvider >

        <NoteContextProvider >

          <RouterProvider router={router} />

        </NoteContextProvider>

      </ProblemContextProvider>

)
