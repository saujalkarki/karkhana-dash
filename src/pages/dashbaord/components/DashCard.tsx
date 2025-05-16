import { Card, CardContent } from "../../../components/ui/card";
import { ArrowUpRight } from "lucide-react";

function DashCard({
  title,
  value,
  percentage,
}: {
  title: string;
  value: string;
  percentage: string;
}) {
  return (
    <Card>
      <CardContent>
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-bold">{value}</h3>
            <div className="flex items-center text-sm font-medium text-green-500">
              <span>{percentage}</span>
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default DashCard;
