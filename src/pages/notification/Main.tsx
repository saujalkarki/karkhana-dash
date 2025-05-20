// import { useState } from "react";
import { Plus } from "lucide-react";
import { EllipsisVertical } from "lucide-react";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Link } from "react-router-dom";

// Sample data for the table
const notifications = [
  {
    id: 1,
    title:
      "Its Raining outside? Why dont you go with your kid outside to show Tadpol",
    content: "The Lifecycle of the Tadpol in rainy season",
    date: "2025/04/12, 10:00 AM",
    grade: "1",
    status: "green",
  },
  {
    id: 2,
    title:
      "Its Raining outside? Why dont you go with your kid outside to show Tadpol",
    content: "The Lifecycle of the Tadpol in rainy season",
    date: "2025/04/12, 10:00 AM",
    grade: "10",
    status: "red",
  },
  {
    id: 3,
    title:
      "Its Raining outside? Why dont you go with your kid outside to show Tadpol",
    content: "The Lifecycle of the Tadpol in rainy season",
    date: "2025/04/12, 10:00 AM",
    grade: "9",
    status: "green",
  },
  {
    id: 4,
    title:
      "Its Raining outside? Why dont you go with your kid outside to show Tadpol",
    content: "The Lifecycle of the Tadpol in rainy season",
    date: "2025/04/12, 10:00 AM",
    grade: "8",
    status: "red",
  },
  {
    id: 5,
    title:
      "Its Raining outside? Why dont you go with your kid outside to show Tadpol",
    content: "The Lifecycle of the Tadpol in rainy season",
    date: "2025/04/12, 10:00 AM",
    grade: "6,7,&10",
    status: "green",
  },
  {
    id: 6,
    title:
      "Its Raining outside? Why dont you go with your kid outside to show Tadpol",
    content: "The Lifecycle of the Tadpol in rainy season",
    date: "2025/04/12, 10:00 AM",
    grade: "all",
    status: "red",
  },
  {
    id: 7,
    title:
      "Its Raining outside? Why dont you go with your kid outside to show Tadpol",
    content: "The Lifecycle of the Tadpol in rainy season",
    date: "2025/04/12, 10:00 AM",
    grade: "5",
    status: "green",
  },
  {
    id: 8,
    title:
      "Its Raining outside? Why dont you go with your kid outside to show Tadpol",
    content: "The Lifecycle of the Tadpol in rainy season",
    date: "2025/04/12, 10:00 AM",
    grade: "5",
    status: "green",
  },
  {
    id: 9,
    title:
      "Its Raining outside? Why dont you go with your kid outside to show Tadpol",
    content: "The Lifecycle of the Tadpol in rainy season",
    date: "2025/04/12, 10:00 AM",
    grade: "1",
    status: "green",
  },
  {
    id: 10,
    title:
      "Its Raining outside? Why dont you go with your kid outside to show Tadpol",
    content: "The Lifecycle of the Tadpol in rainy season",
    date: "2025/04/12, 10:00 AM",
    grade: "1",
    status: "red",
  },
];

export function Notification() {
  // const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className=" p-2 border border-gray-400 rounded-sm ">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <h1 className="text-xl font-semibold">Notification</h1>

        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative">
            <Input
              type="text"
              placeholder="Start Searching User Here..."
              className="pl-8"
            />

            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>

          <div className="w-full sm:w-auto ">
            <Select defaultValue="2025/02/21 to 2025/03/30">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="2025/02/21 to 2025/03/30" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025/02/21 to 2025/03/30">
                  2025/02/21 to 2025/03/30
                </SelectItem>
                <SelectItem value="2025/03/01 to 2025/03/31">
                  2025/03/01 to 2025/03/31
                </SelectItem>
                <SelectItem value="2025/04/01 to 2025/04/30">
                  2025/04/01 to 2025/04/30
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Link to={"add"}>
            <Button className="bg-red-500 hover:bg-red-600 text-white w-full sm:w-auto cursor-pointer">
              <Plus className="h-4 w-4 mr-2" /> Add Notification
            </Button>
          </Link>
        </div>
      </div>

      {/* Table Section to be created later differently as as common table for the whole app will be created*/}
      {/* Table Section */}
      <div className="overflow-x-auto rounded-md">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-16 font-semibold">S.n</TableHead>
              <TableHead className="font-semibold">
                Notification Title
              </TableHead>
              <TableHead className="font-semibold">
                Notification Content
              </TableHead>
              <TableHead className="font-semibold">Date</TableHead>
              <TableHead className="font-semibold">Grade</TableHead>
              <TableHead className="w-16 font-semibold text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notifications.map((notification, index) => (
              <TableRow
                key={notification.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <TableCell className="font-medium">{notification.id}</TableCell>
                <TableCell>
                  <span className=" text-green-500">{notification.title}</span>
                </TableCell>
                <TableCell>{notification.content}</TableCell>
                <TableCell>
                  <span
                    className={
                      notification.status === "green"
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {notification.date}
                  </span>
                </TableCell>
                <TableCell>{notification.grade}</TableCell>
                <TableCell className="text-center">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <EllipsisVertical className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* Pagination Section */}
        {/* <div className="flex justify-end mt-4">
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              <span className="sr-only">Previous page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </Button>

            {[1, 2, 3, 4, 5, 6].map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="icon"
                className="h-8 w-8"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              disabled={currentPage === 5}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 5))}
            >
              <span className="sr-only">Next page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Notification;
