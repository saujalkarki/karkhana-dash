import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

function AddNotification() {
  return (
    <Card className="shadow-md m-2">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold">Add Notification</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Notification Title
          </label>
          <Input
            id="title"
            placeholder="Enter the Title for Notification"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Notification Content
          </label>
          <Select>
            <SelectTrigger id="content" className="w-full">
              <SelectValue placeholder="Select the content for Notification" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="announcement">Announcement</SelectItem>
              <SelectItem value="reminder">Reminder</SelectItem>
              <SelectItem value="alert">Alert</SelectItem>
              <SelectItem value="update">Update</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              htmlFor="grade"
              className="block text-sm font-medium text-gray-700"
            >
              Select Grade
            </label>
            <Select>
              <SelectTrigger id="grade">
                <SelectValue placeholder="Select the Grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="grade1">Grade 1</SelectItem>
                <SelectItem value="grade2">Grade 2</SelectItem>
                <SelectItem value="grade3">Grade 3</SelectItem>
                <SelectItem value="grade4">Grade 4</SelectItem>
                <SelectItem value="grade5">Grade 5</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="datetime"
              className="block text-sm font-medium text-gray-700"
            >
              Select Date and Time
            </label>
            <Select>
              <SelectTrigger id="datetime">
                <SelectValue placeholder="Select Date and time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="now">Now</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="custom">Custom Date</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
            Send Notification
          </Button>
          <Button className="w-full bg-gray-500 hover:bg-gray-600 text-white">
            Send Notification
          </Button>
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
            Schedule Notification
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default AddNotification;
