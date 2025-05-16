import {
  format,
  getDay,
  getDaysInMonth,
  setDate,
  startOfMonth,
  isSameDay,
} from "date-fns";
import { cn } from "../../../../../lib/utils";
import { useMemo, useState } from "react";

// Dummy types for example

function ProjectCalendar() {
  // Replace these with actual values or props as needed
  const [currentDate] = useState(new Date());
  const [events] = useState<any[]>([]);
  const [weekOffDays] = useState<any>('["Sunday","Saturday"]'); // assuming incoming JSON string

  const week_off_days: string[] = useMemo(() => {
    const parseNestedJSON = (data: any) => {
      while (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch {
          break;
        }
      }
      return data;
    };

    try {
      const parsed = parseNestedJSON(weekOffDays);
      return Array.isArray(parsed) ? parsed.flat(Infinity) : [parsed];
    } catch {
      return [weekOffDays];
    }
  }, [weekOffDays]);

  const getDaysInMonthArray = () => {
    const firstDayOfMonth = startOfMonth(currentDate);
    const startingDayIndex = getDay(firstDayOfMonth);
    const daysInMonth = getDaysInMonth(currentDate);
    const days = [];

    for (let i = 0; i < startingDayIndex; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(setDate(firstDayOfMonth, i));
    }

    return days;
  };

  const getEventsForDate = (date: Date | null) => {
    if (!date) return [];
    return events.filter(
      (event) =>
        event.deadline?.getDate() === date?.getDate() &&
        event.deadline?.getMonth() === date?.getMonth() &&
        event.deadline?.getFullYear() === date?.getFullYear()
    );
  };

  const days = getDaysInMonthArray();
  const totalCells = days.length;
  const lastRowStart = totalCells - (totalCells % 7 || 7);

  return (
    <section className="max-w-[40%] sm:max-w-full">
      <div className="grid grid-cols-7">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
          <div
            key={day}
            className={cn(
              " p-2 text-center text-xs sm:text-sm font-medium border-b border-r border-[#A8A8A8] ",
              i === 6 && "border-r-0"
            )}
          >
            {day}
          </div>
        ))}
        {days.map((date, i) => {
          const dayEvents = getEventsForDate(date);
          const dayName = date ? format(date, "EEEE") : "";
          const isHoliday = week_off_days.includes(dayName);
          const isToday = date && isSameDay(date, new Date());
          const isLastRow = i >= lastRowStart;

          return (
            <div
              key={i}
              className={cn(
                "relative bg-white p-2 min-h-[60px] md:min-h-[90px] border-b border-r border-[#A8A8A8] flex items-center justify-center",
                (i + 1) % 7 === 0 && "border-r-0",
                isLastRow && "border-b-0"
              )}
            >
              {date && (
                <>
                  <span
                    className={cn(
                      "text-sm sm:text-lg font-medium text-[#A8A8A8]",
                      isHoliday && "text-red-500",
                      dayEvents.length > 0 &&
                        "text-[#FF2D2D] bg-[#FFD4D4] rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center",
                      isToday &&
                        "bg-[#F4F4F4] text-black rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
                    )}
                  >
                    {format(date, "d")}
                  </span>
                  <div className="absolute top-0 right-[-0.40rem] sm:right-3 mt-1 space-y-1">
                    {dayEvents.length > 0 && (
                      <div className="text-sm px-2 py-1 rounded text-primary font-medium">
                        {dayEvents.length}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectCalendar;
