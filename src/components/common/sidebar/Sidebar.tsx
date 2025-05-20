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
        `relative hidden h-screen pt-4 w-[260px] lg:flex flex-col flex-shrink-0 border-r bg-red-500`
      )}
    >
      <div className="flex items-center gap-1 p-2 pb-4">
        <img src={logo} alt="" className="px-3 object-center h-8" />
        <h4 className="text-white text-lg font-medium">Science Karkhana</h4>
      </div>
      <Separator />
      <div className="flex flex-col flex-1 overflow-hidden py-4">
        <ScrollArea className="flex-1 px-3">
          <NavItems items={navItems} />
        </ScrollArea>
      </div>
    </nav>
  );
}
