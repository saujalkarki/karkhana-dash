import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

const userOnboardData = [
  {
    id: "9824386694",
    avatar: null,
    initials: "N/A",
    action: "has signed in",
    date: "2025/10/15",
    grade: "Grade 1",
    time: "23 Hours Ago",
    color: "bg-blue-500",
  },
  {
    id: "Hemanta Jung Karki",
    avatar: null,
    initials: "HK",
    action: "has just Joined",
    date: "2025/10/15",
    grade: "Grade 1",
    time: "2 days ago",
    color: "bg-purple-500",
  },
  {
    id: "Ram Bahadur Thapa",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "RT",
    action: "just Joined",
    date: "2025/10/15",
    grade: "Grade 10",
    time: "5 days 8 hrs ago",
    color: "bg-amber-500",
  },
  {
    id: "9819330828",
    avatar: null,
    initials: "N/A",
    action: "",
    date: "2025/10/15",
    grade: "Grade 9",
    time: "23 Hours Ago",
    color: "bg-blue-500",
  },
];

function UserOnBoardInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Onboard Info</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {userOnboardData.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0"
          >
            <div className="flex items-center space-x-3">
              <Avatar className={user.avatar ? "" : user.color}>
                <AvatarImage src={user.avatar || ""} alt={user.id} />
                <AvatarFallback>{user.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">
                  {user.id} {user.action}
                </p>
                <p className="text-xs text-gray-500">{user.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">{user.grade}</p>
              <p className="text-xs text-gray-500">{user.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default UserOnBoardInfo;
