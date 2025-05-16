import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import ContentView from "./components/ContentView";
import CalendarView from "./components/CalendarView";
import EventsPanel from "./components/EventPanel";

function AllContent() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="w-full bg-white border border-gray-300">
      <div className="border-b ">
        <div className="flex items-center px-4 py-2">
          <div className="flex space-x-4 cursor-pointer">
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "all"
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All Content
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "scheduled"
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("scheduled")}
            >
              Scheduled Calendar
            </button>
          </div>
          <div className="ml-auto flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                className="pl-8 h-8 w-64 text-sm"
                placeholder="Search for content items..."
              />
            </div>
            <Select defaultValue="default">
              <SelectTrigger className="h-8 w-32 text-sm">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="recent">Recent</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center border rounded h-8 px-2 text-sm">
              <span>09/05/23 to 09/05/23</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
      <div>
        {activeTab === "all" ? (
          <ContentView />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-2">
            <div className="border border-[#A8A8A8] p-4 lg:col-span-5 flex flex-col">
              <CalendarView />
            </div>
            <div className="col-span-3">
              <EventsPanel />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllContent;
