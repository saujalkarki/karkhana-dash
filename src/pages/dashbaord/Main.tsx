import { useRef, useState } from "react";
import DashCard from "./components/DashCard";
import DashChart from "./components/DashChart";
import UserOnBoardInfo from "./components/UserOnBoardInfo";
import UserRatingInfo from "./components/UserRatingInfo";
import { motion } from "framer-motion";

const cards = [
  { title: "Total User", value: "50000", percentage: "+12%" },
  { title: "Total Content", value: "45", percentage: "+10%" },
  { title: "Total Notification Sent", value: "100", percentage: "+12%" },
  { title: "Total Rating", value: "128", percentage: "+12%" },
  { title: "Total User", value: "50000", percentage: "+12%" },
  { title: "Total Content", value: "45", percentage: "+10%" },
  { title: "Total Notification Sent", value: "100", percentage: "+12%" },
  { title: "Total Rating", value: "128", percentage: "+12%" },
];

const Dashboard = () => {
  const containerRef = useRef(null);
  const [, setIsDragging] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="space-y-3">
        <div
          className=" lg:flex overflow-hidden max-w-[85vw] scrollbar-hide cursor-grab active:cursor-grabbing"
          ref={containerRef}
        >
          <motion.div
            className="flex gap-4"
            drag="x"
            dragConstraints={{ left: -1800, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
          >
            {cards.map((card, index) => (
              <div key={index} className="flex-shrink-0 w-64">
                <DashCard {...card} />
              </div>
            ))}
          </motion.div>
        </div>

        <DashChart />

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          <UserOnBoardInfo />
          <UserRatingInfo />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
