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
            className="space-y-3 border rounded-md border-gray-200 p-2"
          >
            <div className="flex items-start space-x-3">
              <Avatar>
                <AvatarImage
                  src={rating.avatar || "/placeholder.svg"}
                  alt={rating.name}
                />
                <AvatarFallback>{rating.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{rating.question}</p>
                <p className="text-xs text-gray-500">{rating.name}</p>
                <div className="mt-1 flex">
                  <div className="flex text-amber-400">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <StarIcon key={i} filled={i < rating.rating} />
                      ))}
                  </div>
                  <span className="ml-2 text-xs text-gray-500">
                    ({rating.rating}/5)
                  </span>
                  <span className="ml-auto text-xs text-gray-500">
                    {rating.time}
                  </span>
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
