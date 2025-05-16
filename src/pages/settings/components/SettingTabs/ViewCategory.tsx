import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { Button } from "../../../../components/ui/button";

const categories = Array(5).fill({ name: "Animal Planet" });

function ViewCategory({ onAdd }: any) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-center">View Category</h3>
        <Button className="bg-red-600 hover:bg-red-700" onClick={onAdd}>
          Add Category
        </Button>
      </div>

      <div className="overflow-x-auto rounded-sm border">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="px-4 py-3 text-left font-medium text-gray-600">
                S.n
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">
                Category Name
              </th>
              <th className="px-4 py-3 text-right font-medium text-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-3 text-gray-700">{index + 1}</td>
                <td className="px-4 py-3 text-gray-700">{category.name}</td>
                <td className="px-4 py-3 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewCategory;
