import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import StarIcon from "./StarIcon";

const userRatingData = [
  {
    id: 1,
    avatar: "/placeholder.svg?height=40&width=40",
    question: "How does evaporation works learn more about it?",
    name: "Hemanta Jung Karki",
    rating: 5,
    time: "23 Hours Ago",
  },
  {
    id: 2,
    avatar: "/placeholder.svg?height=40&width=40",
    question: "How does evaporation works learn more about it?",
    name: "Hemanta Jung Karki",
    rating: 5,
    time: "23 Hours Ago",
  },
  {
    id: 3,
    avatar: "/placeholder.svg?height=40&width=40",
    question: "How does evaporation works learn more about it?",
    name: "Hemanta Jung Karki",
    rating: 5,
    time: "23 Hours Ago",
  },
  {
    id: 4,
    avatar: "/placeholder.svg?height=40&width=40",
    question: "How does evaporation works learn more about it?",
    name: "Hemanta Jung Karki",
    rating: 5,
    time: "23 Hours Ago",
  },
];

function UserRatingInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Rating Info</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {userRatingData.map((rating) => (
          <div
            key={rating.id}
            className="border rounded-md border-gray-200 p-2"
          >
            <div className="space-x-3 flex">
              <div className="flex items-center">
                <Avatar className=" border rounded-full h-10 w-10 flex flex-col items-center">
                  <AvatarImage src={rating.avatar} alt={rating.name} />
                  <AvatarFallback className="pt-1">
                    {rating.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="space-y-2 w-full items-stretch">
                <p className="text-sm font-medium">{rating.question}</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-gray-500">{rating.name}</p>
                  <div className="flex gap-1">
                    <div className="flex text-amber-400">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <StarIcon key={i} filled={i < rating.rating} />
                        ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      ({rating.rating}/5)
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{rating.time}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default UserRatingInfo;
