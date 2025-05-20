import { useState } from "react";
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

interface ModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}
type ModalType = "send" | "schedule" | false; // include all your possible modal types

function AddNotification() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [grade, setGrade] = useState("");
  const [datetime, setDatetime] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<ModalType | null>(null);

  const isFormEmpty = !title || !content || !grade;
  const isScheduleReady = !isFormEmpty && datetime;

  const openModal = (type: ModalType) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType(null);
  };

  const handleConfirm = () => {
    // if (modalType === "send") {
    //   alert("Notification sent immediately!");
    // } else if (modalType === "schedule") {
    //   alert(`Notification scheduled for ${datetime}!`);
    // }
    closeModal();
  };
  const formatDatetime = (isoString: string) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    return date.toLocaleString(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <>
      {showModal && (
        <Modal
          message={
            modalType === "send"
              ? "Would you like to send the notification immediately?"
              : `Would you like to schedule the notification for ${formatDatetime(
                  datetime
                )}?`
          }
          onConfirm={handleConfirm}
          onCancel={closeModal}
        />
      )}

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Add Notification</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Title Input */}
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Content Select */}
          <div className="space-y-2">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Notification Content
            </label>
            <Select onValueChange={setContent}>
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

          {/* Grade and DateTime */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="grade"
                className="block text-sm font-medium text-gray-700"
              >
                Select Grade
              </label>
              <Select onValueChange={setGrade}>
                <SelectTrigger id="grade">
                  <SelectValue placeholder="Select the Grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="grade1">Grade 1</SelectItem>
                  <SelectItem value="grade2">Grade 2</SelectItem>
                  <SelectItem value="grade3">Grade 3</SelectItem>
                  <SelectItem value="grade4">Grade 4</SelectItem>
                  <SelectItem value="grade5">Grade 5</SelectItem>
                  <SelectItem value="grade6">Grade 6</SelectItem>
                  <SelectItem value="grade7">Grade 7</SelectItem>
                  <SelectItem value="grade8">Grade 8</SelectItem>
                  <SelectItem value="grade9">Grade 9</SelectItem>
                  <SelectItem value="grade10">Grade 10</SelectItem>
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
              <Input
                type="datetime-local"
                id="datetime"
                className="w-full"
                value={datetime}
                onChange={(e) => setDatetime(e.target.value)}
              />
            </div>
          </div>

          {/* Conditional Buttons */}
          <div className="space-y-3 pt-2">
            {isFormEmpty && (
              <Button className="w-full bg-gray-500 hover:bg-gray-400  hover:text-black text-white cursor-not-allowed">
                Send Notification
              </Button>
            )}

            {!isFormEmpty && !datetime && (
              <Button
                className="w-full bg-red-500 hover:bg-red-600 text-white"
                onClick={() => openModal("send")}
              >
                Send Notification
              </Button>
            )}

            {isScheduleReady && (
              <Button
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                onClick={() => openModal("schedule")}
              >
                Schedule Notification
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default AddNotification;

// Modal component
function Modal({ message, onConfirm, onCancel }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm z-50 ">
      <div className="bg-white p-4 rounded-sm shadow-lg max-w-sm w-full border-gray-600 border m-4">
        <p className="text-sm md:text-base mb-4">{message}</p>
        <div className="flex justify-end gap-2">
          <Button
            className="border bg-white border-gray-400 text-black hover:bg-red-500 hover:text-white cursor-pointer"
            variant="outline"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            className="cursor-pointer bg-white border-gray-400 border text-black hover:bg-red-500 hover:text-white"
            onClick={onConfirm}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}
