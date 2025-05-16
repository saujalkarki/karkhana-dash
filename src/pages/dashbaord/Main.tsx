import DashCard from "./components/DashCard";
import DashChart from "./components/DashChart";
import UserOnBoardInfo from "./components/UserOnBoardInfo";
import UserRatingInfo from "./components/UserRatingInfo";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto space-y-6">
        {/* Header Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <DashCard title="Total User" value="50000" percentage="+12%" />
          <DashCard title="Total Content" value="45" percentage="+10%" />
          <DashCard
            title="Total Notification Sent"
            value="100"
            percentage="+12%"
          />
          <DashCard title="Total Rating" value="128" percentage="+12%" />
        </div>

        <DashChart />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <UserOnBoardInfo />
          <UserRatingInfo />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
