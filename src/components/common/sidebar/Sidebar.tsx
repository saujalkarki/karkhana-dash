import logo from "../../../assets/k-rocket2.png";
import { ScrollArea } from "../../ui/scroll-area";
import { navItems } from "../../../constants/staticData/data";
import NavItems from "../navigation/NavItems";
import { cn } from "../../../lib/utils";
import { Separator } from "../../ui/separator";

export default function Sidebar() {
  return (
    <nav
      className={cn(
        `relative hidden h-screen pt-4 lg:block w-72  border-r bg-red-500`
      )}
    >
      <div className="flex items-center justify-center  pb-1 px-4">
        <img
          src={logo}
          alt=""
          className="px-3 object-center font-bold py-4 h-16"
        />
        <h4 className="text-white text-lg font-medium">Science Karkhana</h4>
      </div>
      <Separator className="bg-white" />
      <div className="space-y-4 py-4">
        <ScrollArea className="space-y-1 h-[80vh] ">
          <div className="px-3 py-2 ">
            <NavItems items={navItems} />
          </div>
        </ScrollArea>
      </div>
    </nav>
  );
}
