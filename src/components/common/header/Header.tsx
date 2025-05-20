import { Link } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { FaArrowLeft } from "react-icons/fa6";
import MobileSidebar from "../sidebar/MobileSidebar";

export default function Header() {
  return (
    <>
      <nav className=" flex py-4 px-4 border-b border-gray-200">
        <div className=" w-full flex items-center justify-center gap-4 py-1">
          <div className={cn("block lg:!hidden")}>
            <MobileSidebar />
          </div>
          <div className="w-full  flex justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="border-2 rounded-full p-1">
                <FaArrowLeft />
              </div>
              <div>
                <Link to={"/dashboard/home"} className="font-semibold">
                  Dashboard
                </Link>
              </div>
            </div>

            <img
              src={"https://cdn-icons-png.flaticon.com/512/9187/9187604.png"}
              alt="user profile"
              className="rounded-full h-10 w-10"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
