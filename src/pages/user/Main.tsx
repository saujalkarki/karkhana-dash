import { useState } from "react";
import { ChevronLeft, ChevronRight, MoreVertical, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Button } from "../../components/ui/button";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@radix-ui/react-select";

// Mock user data
const users = Array(30).fill({
  name: "Hemanta Jung Karki",
  phone: "9824386694",
  email: "Hemantajungkarki@gmail.com",
  address: "N/A",
  grade: "1",
});

function User() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container p-2">
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-bold">User Management</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by User name or number"
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          {/* Table: later will be moved to different table code component that can be used at other places too. */}
          <div className="rounded-sm">
            <Table>
              <TableHeader className=" ">
                <TableRow>
                  <TableHead className="w-[80px]">S.n</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow
                    key={index}
                    className={index % 2 === 1 ? "bg-gray-50" : ""}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full overflow-hidden">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
                            alt={user.name}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <span>{user.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-sm">{user.phone}</span>
                        <span className="text-sm text-muted-foreground">
                          {user.email}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{user.address}</TableCell>
                    <TableCell>{user.grade}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          <DropdownMenuItem>Edit user</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            Delete user
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <Select>
                <SelectTrigger className="w-16">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-1">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default User;
