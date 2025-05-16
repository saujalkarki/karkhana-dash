import { Button } from "../../../../../components/ui/button";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { addMonths, format, subMonths } from "date-fns";
import ProjectCalendar from "./project-calendar";
import { useState } from "react";

const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevious = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNext = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  return (
    <section className="space-y-4">
      <div className="flex items-start sm:items-center gap-4 jus tify-between flex-wrap">
        <div className="flex items-center justify-between gap-4">
          {/* <SearchBox
            placeholder="Search By Project Name"
            queryKey="project_calendar"
          /> */}
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            className="bg-[#F4F4F4] border-none hover:bg-zinc-400 h-8 w-8"
          >
            <FaCaretLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-semibold">
            {format(currentDate, "MMMM yyyy")}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="bg-[#F4F4F4] border-none hover:bg-zinc-400 h-8 w-8"
          >
            <FaCaretRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <ProjectCalendar />
    </section>
  );
};

export default CalendarView;
