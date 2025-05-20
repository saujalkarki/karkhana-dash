import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../components/ui/chart";

const chartData = [
  { month: "Jan", users: 12 },
  { month: "Feb", users: 18 },
  { month: "Mar", users: 15 },
  { month: "Apr", users: 22 },
  { month: "May", users: 18 },
  { month: "Jun", users: 20 },
  { month: "Jul", users: 15 },
  { month: "Aug", users: 12 },
  { month: "Sep", users: 17 },
  { month: "Oct", users: 22 },
  { month: "Nov", users: 25 },
  { month: "Dec", users: 14 },
];

const categoryData = [
  { name: "Slides/ Images", value: 10, color: "bg-red-500" },
  { name: "Youtube video", value: 8, color: "bg-green-500" },
  { name: "Long Text", value: 18, color: "bg-teal-500" },
];

function DashChart() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:grid-cols-5 ">
      <Card className="col-span-full sm:col-span-2 lg:col-span-3">
        <CardHeader>
          <CardTitle className="text-base sm:text-lg lg:text-xl">
            Total User Onboard
          </CardTitle>
        </CardHeader>
        <CardContent className="overflow-hidden">
          <div className="h-full">
            <ChartContainer
              config={{
                users: {
                  label: "Users",
                  color: "hsl(142.1, 76.2%, 36.3%)",
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ left: 5, right: 5 }}>
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tickMargin={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tickMargin={10}
                    ticks={[0, 10, 20, 30]}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="hsl(142.1, 76.2%, 36.3%)"
                    strokeWidth={2}
                    dot={{ r: 4, strokeWidth: 2, fill: "white" }}
                    activeDot={{
                      r: 6,
                      strokeWidth: 0,
                      fill: "hsl(142.1, 76.2%, 36.3%)",
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      {/* Content Category */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-base sm:text-lg lg:text-xl">
            Content Category
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {categoryData.map((category) => (
            <div key={category.name} className="space-y-2">
              <div className={`h-4 rounded-md ${category.color}`} />
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{category.name}</span>
                <span className="font-semibold">{category.value}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default DashChart;
