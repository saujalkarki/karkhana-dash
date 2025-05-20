import { MenuIcon } from "lucide-react";
import { useState } from "react";
import logo from "../../../assets/k-rocket2.png";

import { navItems } from "../../../constants/staticData/data";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import NavItems from "../navigation/NavItems";
import { Separator } from "../../ui/separator";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left" className="!px-0 bg-red-500">
        <div className="flex items-center justify-center gap-3 mx-2 mt-8 mb-3">
          <img src={logo} alt="" className=" object-center font-bold h-7" />
          <h4 className="text-white text-lg sm:text-xl font-medium">
            Science Karkhana
          </h4>
        </div>
        <Separator />
        <div className="space-y-4 py-2 ">
          <div className="px-3 py-2 ">
            <div className="space-y-1">
              <NavItems items={navItems} setOpen={setOpen} />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
