import { Outlet } from "react-router-dom";
import Sidebar from "../common/sidebar/Sidebar";
import { ScrollArea } from "../ui/scroll-area";
import Header from "../common/header/Header";

function DashboardLayout() {
  return (
    <div className="bg-background">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <ScrollArea className="w-full p-2 h-full">
            <Outlet />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
