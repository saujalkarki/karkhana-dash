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
    <Card className="shadow-sm container p-2">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between p-2 pb-0">
        <CardTitle className="text-xl font-semibold">User Management</CardTitle>
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by User name or number"
            className="pl-8 text-sm"
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

        <div className="flex items-center justify-end mt-4">
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
  );
}

export default User;
