import { Outlet } from "react-router-dom";
import Sidebar from "../common/sidebar/Sidebar";
import Header from "../common/header/Header";

function DashboardLayout() {
  return (
    <main className="bg-background grid lg:grid-cols-[260px_1fr] min-h-screen md:h-screen overflow-hidden">
      <Sidebar />
      <div className={`flex flex-col overflow-hidden`}>
        <Header />
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardLayout;
