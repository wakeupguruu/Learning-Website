import Array from "../../components/Theory/Array";
import Hashing from "../../components/Theory/Hashing";
import TwoPointers from "../../components/Theory/TwoPointers";
import String from "../../components/Theory/String";
import Stack from "../../components/Theory/Stack";
import BinarySearch from "../../components/Theory/BinarySearch";
import SlidingWindow from "../../components/Theory/SlidingWindow";
import LinkedList from "../../components/Theory/LinkedList";
import Trees from "../../components/Theory/Trees";
import Graphs from "../../components/Theory/Graphs";
import Tries from "../../components/Theory/Tries";
import HeapPriorityQueue from "../../components/Theory/HeapPriorityQueue";
import Backtracking from "../../components/Theory/Backtracking";
import Intervals from "../../components/Theory/Intervals";
import Greedy from "../../components/Theory/Greedy";
import DynamicProgramming from "../../components/Theory/DynamicProgramming";
import BitManipulation from "../../components/Theory/BitManipulation";
import MathGeometry from "../../components/Theory/MathGeometry";

import { useParams } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";

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

const TopicTheory = () => {
  const { id } = useParams();

  const TopicComponent = topics[id];

  if (!TopicComponent) {
    return <h1>Topic Not Found</h1>; // Fallback for invalid topic IDs
  }

  return (
    <div className="topic-theory  bg-lBackground">
      <Navbar />

      {TopicComponent}
    </div>
  );
};

export default TopicTheory